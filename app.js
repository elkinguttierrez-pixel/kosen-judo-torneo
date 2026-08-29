/**
 * KOSEN JUDO HEIKEGANI - SCOREBOARD & TOURNAMENT ENGINE
 * Core Match Controller, Rules Engine, Web Audio API Synthesizer & Local Storage State
 */

// ESTADO GLOBAL DEL COMBATE Y REGLAMENTO OFICIAL
const state = {
  matchTimeRemaining: 120,
  matchDuration: 120,
  matchInterval: null,
  isMatchRunning: false,
  isGoldenScore: false,
  soundEnabled: true,

  // Osaekomi (Inmovilización en suelo)
  osaekomiSide: null,
  osaekomiSeconds: 0,
  osaekomiInterval: null,

  // Puntuaciones
  white: { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: null },
  blue:  { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: null }
};

// Cargar tabla general de dojos de LocalStorage
let dojoLeaderboard = JSON.parse(localStorage.getItem('newaza_dojoLeaderboard') || '{}');
let matchHistory = JSON.parse(localStorage.getItem('newaza_history') || '[]');

// SINTETIZADOR DE AUDIO PROFESIONAL (Web Audio API)
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type = 'buzzer') {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'buzzer') {
      // Bocina reglamentaria de fin de tiempo (Gong)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } else if (type === 'ippon') {
      // Fanfarria armónica de Ippon / Sumisión
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const st = ctx.currentTime + (idx * 0.12);
        gain.gain.setValueAtTime(0.3, st);
        gain.gain.exponentialRampToValueAtTime(0.001, st + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(st);
        osc.stop(st + 0.35);
      });
    } else if (type === 'wazaari') {
      // Tono de Waza-ari
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'bell') {
      // Campana de Hajime (Inicio)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    }
  } catch (err) {
    console.warn('Web Audio no disponible:', err);
  }
}

// CRONÓMETRO DE COMBATE
function setCategoryTime() {
  const select = document.getElementById('category-select');
  if (!select) return;
  const duration = parseInt(select.value, 10) || 120;
  state.matchDuration = duration;
  if (!state.isMatchRunning) {
    state.matchTimeRemaining = duration;
    updateMatchDisplay();
  }
}

function updateMatchDisplay() {
  const display = document.getElementById('match-timer-display');
  if (!display) return;
  const min = String(Math.floor(state.matchTimeRemaining / 60)).padStart(2, '0');
  const sec = String(state.matchTimeRemaining % 60).padStart(2, '0');
  display.innerText = `${min}:${sec}`;
}

function toggleMatchTimer() {
  getAudioContext();
  const btn = document.getElementById('btn-match-toggle');
  if (state.isMatchRunning) {
    clearInterval(state.matchInterval);
    state.isMatchRunning = false;
    if (btn) {
      btn.innerText = 'REANUDAR (Espacio)';
      btn.className = 'btn-large btn-green';
    }
  } else {
    state.isMatchRunning = true;
    if (btn) {
      btn.innerText = 'PAUSAR (Espacio)';
      btn.className = 'btn-large btn-red';
    }
    playSound('bell');

    state.matchInterval = setInterval(() => {
      if (state.matchTimeRemaining > 0) {
        state.matchTimeRemaining--;
        updateMatchDisplay();
      } else {
        clearInterval(state.matchInterval);
        state.isMatchRunning = false;
        if (btn) {
          btn.innerText = 'INICIAR (Espacio)';
          btn.className = 'btn-large btn-green';
        }
        playSound('buzzer');
        openFinishModal('time');
      }
    }, 1000);
  }
}

// OSAEKOMI (INMOVILIZACIÓN REGLAMENTARIA NE-WAZA)
function startOsaekomi(side) {
  getAudioContext();
  if (state.osaekomiSide !== null) return;
  state.osaekomiSide = side;
  state.osaekomiSeconds = 0;
  updateOsaekomiDisplay(side);

  const box = document.getElementById(`${side}-osaekomi-box`);
  if (box) box.classList.add('active');

  state.osaekomiInterval = setInterval(() => {
    state.osaekomiSeconds++;
    updateOsaekomiDisplay(side);

    if (state.osaekomiSeconds === 20) {
      stopOsaekomi(side, true); // Ippon alcanzado a los 20 segundos
    }
  }, 1000);
}

function stopOsaekomi(side, isIppon = false) {
  if (state.osaekomiSide !== side) return;
  clearInterval(state.osaekomiInterval);

  const sec = state.osaekomiSeconds;
  state.osaekomiSide = null;
  state.osaekomiSeconds = 0;
  updateOsaekomiDisplay(side);

  const box = document.getElementById(`${side}-osaekomi-box`);
  if (box) box.classList.remove('active');

  // Evaluación reglamentaria oficial:
  // 20s = Ippon | 10-19s = Waza-ari | 5-9s = Yuko | 1-4s = Koka
  if (isIppon || sec >= 20) {
    addIppon(side);
  } else if (sec >= 10 && sec < 20) {
    changeScore(side, 'wazaari', 1);
  } else if (sec >= 5 && sec < 10) {
    changeScore(side, 'yuko', 1);
  } else if (sec > 0 && sec < 5) {
    changeScore(side, 'koka', 1);
  }
}

function updateOsaekomiDisplay(side) {
  const display = document.getElementById(`${side}-osaekomi-time`);
  if (display) {
    display.innerText = `${String(state.osaekomiSeconds).padStart(2, '0')}s`;
  }
}

// CONTROL DE PUNTUACIONES
function changeScore(side, type, delta) {
  state[side][type] = Math.max(0, state[side][type] + delta);

  // Regla: 2 Waza-ari equivalen a 1 Ippon
  if (state[side].wazaari >= 2) {
    state[side].wazaari -= 2;
    addIppon(side);
  } else if (delta > 0 && type === 'wazaari') {
    playSound('wazaari');
  }
  renderScores();
}

function addSubmission(side) {
  addIppon(side);
}

function addIppon(side) {
  state[side].ippon++;
  renderScores();
  playSound('ippon');

  // Regla Oficial Kosen Judo Ne-Waza: 2 de 3 Ippones finaliza combate
  if (state[side].ippon >= 2) {
    if (state.isMatchRunning) toggleMatchTimer();
    if (state.osaekomiSide) stopOsaekomi(state.osaekomiSide);
    openFinishModal('ippon', side);
  }
}

function renderScores() {
  ['white', 'blue'].forEach(side => {
    const iEl = document.getElementById(`${side}-ippon`);
    const wEl = document.getElementById(`${side}-wazaari`);
    const yEl = document.getElementById(`${side}-yuko`);
    const kEl = document.getElementById(`${side}-koka`);
    if (iEl) iEl.innerText = state[side].ippon;
    if (wEl) wEl.innerText = state[side].wazaari;
    if (yEl) yEl.innerText = state[side].yuko;
    if (kEl) kEl.innerText = state[side].koka;
  });
}

// MODALES Y GUARDADO
function openFinishModal(reason, winnerSide = null) {
  const modal = document.getElementById('finish-modal');
  if (!modal) return;
  const title = document.getElementById('modal-winner-title');
  const text = document.getElementById('modal-reason-text');
  const select = document.getElementById('winner-select');

  const whiteInput = document.getElementById('white-name');
  const blueInput = document.getElementById('blue-name');
  const whiteName = whiteInput ? whiteInput.value.trim() : 'Judoka Blanco';
  const blueName = blueInput ? blueInput.value.trim() : 'Judoka Azul';

  if (select && select.options.length >= 2) {
    select.options[0].text = `Blanco: ${whiteName}`;
    select.options[1].text = `Azul: ${blueName}`;
  }

  if (reason === 'ippon') {
    if (title) title.innerText = '¡VICTORIA POR 2 IPPONES!';
    if (text) text.innerText = 'El competidor alcanzó los 2 Ippones reglamentarios.';
    if (select) select.value = winnerSide;
  } else if (reason === 'time') {
    if (title) title.innerText = '¡TIEMPO FINALIZADO!';
    if (text) text.innerText = 'Evaluación técnica (Waza-ari > Yuko > Koka).';
    if (select) select.value = evaluateTechnicalWinner();
  } else {
    if (title) title.innerText = 'DECISIÓN DE MESA / ÁRBITRO';
    if (text) text.innerText = 'Seleccione el resultado determinado por el arbitraje.';
    if (select) select.value = evaluateTechnicalWinner();
  }
  modal.style.display = 'flex';
}

function evaluateTechnicalWinner() {
  if (state.white.ippon > state.blue.ippon) return 'white';
  if (state.blue.ippon > state.white.ippon) return 'blue';
  if (state.white.wazaari > state.blue.wazaari) return 'white';
  if (state.blue.wazaari > state.white.wazaari) return 'blue';
  if (state.white.yuko > state.blue.yuko) return 'white';
  if (state.blue.yuko > state.white.yuko) return 'blue';
  if (state.white.koka > state.blue.koka) return 'white';
  if (state.blue.koka > state.white.koka) return 'blue';
  return 'draw';
}

function confirmAndSaveResult() {
  const select = document.getElementById('winner-select');
  const result = select ? select.value : 'white';
  const whiteDojoEl = document.getElementById('white-dojo');
  const blueDojoEl = document.getElementById('blue-dojo');
  const whiteDojo = whiteDojoEl ? (whiteDojoEl.value.trim() || 'Dojo Blanco') : 'Dojo Blanco';
  const blueDojo = blueDojoEl ? (blueDojoEl.value.trim() || 'Dojo Azul') : 'Dojo Azul';

  if (!dojoLeaderboard[whiteDojo]) dojoLeaderboard[whiteDojo] = { points: 0, matches: 0, wins: 0, draws: 0, losses: 0 };
  if (!dojoLeaderboard[blueDojo]) dojoLeaderboard[blueDojo] = { points: 0, matches: 0, wins: 0, draws: 0, losses: 0 };

  dojoLeaderboard[whiteDojo].matches++;
  dojoLeaderboard[blueDojo].matches++;

  // Baremo oficial: 4 pts victoria, 2 pts empate, 1 pto participación
  if (result === 'white') {
    dojoLeaderboard[whiteDojo].points += 4;
    dojoLeaderboard[whiteDojo].wins++;
    dojoLeaderboard[blueDojo].points += 1;
    dojoLeaderboard[blueDojo].losses++;
  } else if (result === 'blue') {
    dojoLeaderboard[blueDojo].points += 4;
    dojoLeaderboard[blueDojo].wins++;
    dojoLeaderboard[whiteDojo].points += 1;
    dojoLeaderboard[whiteDojo].losses++;
  } else {
    dojoLeaderboard[whiteDojo].points += 2;
    dojoLeaderboard[whiteDojo].draws++;
    dojoLeaderboard[blueDojo].points += 2;
    dojoLeaderboard[blueDojo].draws++;
  }

  localStorage.setItem('newaza_dojoLeaderboard', JSON.stringify(dojoLeaderboard));

  closeModal('finish-modal');
  resetMatch(false);
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

function resetMatch(fullReset = true) {
  if (state.isMatchRunning) toggleMatchTimer();
  if (state.osaekomiSide) stopOsaekomi(state.osaekomiSide);

  state.white = { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: null };
  state.blue  = { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: null };
  renderScores();

  const select = document.getElementById('category-select');
  state.matchTimeRemaining = select ? (parseInt(select.value, 10) || 120) : 120;
  updateMatchDisplay();

  const btn = document.getElementById('btn-match-toggle');
  if (btn) {
    btn.innerText = 'INICIAR (Espacio)';
    btn.className = 'btn-large btn-green';
  }

  if (fullReset) {
    const w = document.getElementById('white-name');
    const b = document.getElementById('blue-name');
    if (w) w.value = 'Judoka Blanco';
    if (b) b.value = 'Judoka Azul';
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn('Pantalla completa error:', err);
    });
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

// ATAJOS DE TECLADO MESA TÉCNICA
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
  const key = e.key.toLowerCase();
  
  if (e.code === 'Space') {
    e.preventDefault();
    toggleMatchTimer();
  } else if (key === 'a') {
    startOsaekomi('white');
  } else if (key === 's') {
    stopOsaekomi('white');
  } else if (key === 'k') {
    startOsaekomi('blue');
  } else if (key === 'l') {
    stopOsaekomi('blue');
  } else if (key === 'r') {
    resetMatch(false);
  } else if (key === 'f') {
    toggleFullScreen();
  }
});

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
  setCategoryTime();
  renderScores();
});
