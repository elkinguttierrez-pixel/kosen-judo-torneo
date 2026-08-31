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

function playOsaekomiTaikoBeat(sec = 0) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const playHit = (offset, baseFreq, vol, decay, isDeep = false) => {
      const hitTime = now + offset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = isDeep ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(baseFreq * 1.45, hitTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq, hitTime + 0.03);
      osc.frequency.exponentialRampToValueAtTime(Math.max(35, baseFreq * 0.6), hitTime + decay);

      gain.gain.setValueAtTime(0.0001, hitTime);
      gain.gain.linearRampToValueAtTime(vol, hitTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, hitTime + decay);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(hitTime);
      osc.stop(hitTime + decay);

      if (isDeep || vol > 0.4) {
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(baseFreq * 0.75, hitTime);
        subOsc.frequency.exponentialRampToValueAtTime(40, hitTime + decay * 0.85);

        subGain.gain.setValueAtTime(0.0001, hitTime);
        subGain.gain.linearRampToValueAtTime(vol * 0.85, hitTime + 0.01);
        subGain.gain.exponentialRampToValueAtTime(0.0001, hitTime + decay * 1.0);

        subOsc.connect(subGain);
        subGain.connect(ctx.destination);
        subOsc.start(hitTime);
        subOsc.stop(hitTime + decay * 1.0);
      }

      try {
        const snapLen = Math.floor(ctx.sampleRate * 0.03);
        const noiseBuffer = ctx.createBuffer(1, snapLen, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < snapLen; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (snapLen * 0.25));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(isDeep ? 750 : 1100, hitTime);
        filter.Q.setValueAtTime(2.5, hitTime);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(vol * 0.5, hitTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, hitTime + 0.03);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(hitTime);
        noise.stop(hitTime + 0.03);
      } catch (e) {}
    };

    if (sec === 0) {
      playHit(0.00, 125, 0.75, 0.32, true);
      playHit(0.18, 145, 0.55, 0.18, false);
      playHit(0.30, 155, 0.60, 0.18, false);
      playHit(0.44, 130, 0.75, 0.30, true);
      playHit(0.68, 95, 0.90, 0.85, true);
    } else if (sec < 10) {
      playHit(0.00, 120, 0.70, 0.30, true);
      playHit(0.32, 145, 0.50, 0.18, false);
      playHit(0.62, 155, 0.55, 0.18, false);
    } else if (sec < 15) {
      playHit(0.00, 110, 0.80, 0.32, true);
      playHit(0.24, 150, 0.55, 0.16, false);
      playHit(0.48, 115, 0.75, 0.26, true);
      playHit(0.72, 160, 0.60, 0.16, false);
    } else {
      playHit(0.00, 100, 0.85, 0.35, true);
      playHit(0.20, 155, 0.60, 0.15, false);
      playHit(0.40, 105, 0.80, 0.30, true);
      playHit(0.60, 165, 0.65, 0.15, false);
      playHit(0.78, 175, 0.70, 0.15, false);
    }
  } catch (err) {
    console.warn('Error en tambores Taiko:', err);
  }
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
    } else if (type === 'gong' || type === 'bell') {
      // Auténtico Gong Tradicional de Tatami / Torneo (Hajime)
      const now = ctx.currentTime;

      // 1. Armónicos e inarmónicos metálicos con batimiento acústico y resonancia profunda
      const gongPartials = [
        { freq: 82.4,  gain: 0.35, decay: 2.8, type: 'sine' },      // Sub-armónico profundo
        { freq: 164.8, gain: 0.50, decay: 2.8, type: 'sine' },      // Fundamental de gong (Mi2)
        { freq: 167.2, gain: 0.45, decay: 2.7, type: 'triangle' },  // Batimiento acústico / shimmer metálico
        { freq: 247.0, gain: 0.35, decay: 2.4, type: 'sine' },      // Parcial 2 (Si2)
        { freq: 392.0, gain: 0.28, decay: 2.0, type: 'triangle' },  // Parcial 3 (Sol3)
        { freq: 523.2, gain: 0.22, decay: 1.6, type: 'sine' },      // Parcial 4 (Do4)
        { freq: 784.0, gain: 0.15, decay: 1.2, type: 'sine' },      // Parcial 5 brillante
        { freq: 1175.0, gain: 0.09, decay: 0.8, type: 'sine' }      // Brillo de campana superior
      ];

      gongPartials.forEach(p => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = p.type;
        osc.frequency.setValueAtTime(p.freq, now);

        // Suave inflexión de micro-tono típica del impacto en el centro del gong metálico
        osc.frequency.exponentialRampToValueAtTime(p.freq * 0.985, now + p.decay);

        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.linearRampToValueAtTime(p.gain, now + 0.018); // Ataque percusivo enérgico
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + p.decay);
      });

      // 2. Golpe de mazo / Impacto transitorio percusivo inicial (Ruido metálico amortiguado)
      try {
        const bufferSize = Math.floor(ctx.sampleRate * 0.09);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(700, now);
        filter.Q.setValueAtTime(3.5, now);

        const strikeGain = ctx.createGain();
        strikeGain.gain.setValueAtTime(0.35, now);
        strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        whiteNoise.connect(filter);
        filter.connect(strikeGain);
        strikeGain.connect(ctx.destination);

        whiteNoise.start(now);
        whiteNoise.stop(now + 0.09);
      } catch (e) {
        // Fallback silencioso en caso de restricciones de buffer
      }
    } else if (type === 'drums' || type === 'taiko' || type === 'osaekomi') {
      // Auténtico sonido marcial de Tambores Taiko japoneses para Osaekomi (Ne-Waza)
      const now = ctx.currentTime;

      const playTaikoHit = (offset, baseFreq, vol, decay, isDeep = false) => {
        const hitTime = now + offset;

        // 1. Cuerpo principal del tambor (membrana oscilante con caída de tono)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = isDeep ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(baseFreq * 1.5, hitTime);
        osc.frequency.exponentialRampToValueAtTime(baseFreq, hitTime + 0.035);
        osc.frequency.exponentialRampToValueAtTime(Math.max(35, baseFreq * 0.6), hitTime + decay);

        gain.gain.setValueAtTime(0.0001, hitTime);
        gain.gain.linearRampToValueAtTime(vol, hitTime + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, hitTime + decay);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(hitTime);
        osc.stop(hitTime + decay);

        // 2. Sub-grave profundo (resonancia de barril de madera O-Daiko)
        if (isDeep || vol > 0.4) {
          const subOsc = ctx.createOscillator();
          const subGain = ctx.createGain();
          subOsc.type = 'sine';
          subOsc.frequency.setValueAtTime(baseFreq * 0.75, hitTime);
          subOsc.frequency.exponentialRampToValueAtTime(42, hitTime + decay * 0.9);

          subGain.gain.setValueAtTime(0.0001, hitTime);
          subGain.gain.linearRampToValueAtTime(vol * 0.85, hitTime + 0.012);
          subGain.gain.exponentialRampToValueAtTime(0.0001, hitTime + decay * 1.1);

          subOsc.connect(subGain);
          subGain.connect(ctx.destination);
          subOsc.start(hitTime);
          subOsc.stop(hitTime + decay * 1.1);
        }

        // 3. Impacto percusivo de baqueta (Bachi sobre piel de tambor)
        try {
          const snapLen = Math.floor(ctx.sampleRate * 0.035);
          const noiseBuffer = ctx.createBuffer(1, snapLen, ctx.sampleRate);
          const data = noiseBuffer.getChannelData(0);
          for (let i = 0; i < snapLen; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (snapLen * 0.25));
          }
          const noise = ctx.createBufferSource();
          noise.buffer = noiseBuffer;

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(isDeep ? 750 : 1100, hitTime);
          filter.Q.setValueAtTime(2.5, hitTime);

          const noiseGain = ctx.createGain();
          noiseGain.gain.setValueAtTime(vol * 0.55, hitTime);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, hitTime + 0.035);

          noise.connect(filter);
          filter.connect(noiseGain);
          noiseGain.connect(ctx.destination);

          noise.start(hitTime);
          noise.stop(hitTime + 0.035);
        } catch (e) {}
      };

      // Patrón rítmico marcial de tambores de guerra Taiko: DON... doko-doko... ¡DON!
      const rhythm = [
        { t: 0.00, f: 125, v: 0.70, d: 0.30, deep: false }, // Golpe 1: DON
        { t: 0.16, f: 145, v: 0.55, d: 0.18, deep: false }, // Golpe 2: do
        { t: 0.28, f: 155, v: 0.60, d: 0.18, deep: false }, // Golpe 3: ko
        { t: 0.40, f: 130, v: 0.75, d: 0.28, deep: true },  // Golpe 4: DON
        { t: 0.55, f: 150, v: 0.60, d: 0.18, deep: false }, // Golpe 5: do
        { t: 0.67, f: 160, v: 0.65, d: 0.18, deep: false }, // Golpe 6: ko
        { t: 0.82, f: 90,  v: 0.95, d: 1.40, deep: true }   // Golpe 7 Final estruendoso: ¡DON!
      ];

      rhythm.forEach(hit => {
        playTaikoHit(hit.t, hit.f, hit.v, hit.d, hit.deep);
      });
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
    playSound('gong');

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

  playOsaekomiTaikoBeat(0);

  state.osaekomiInterval = setInterval(() => {
    state.osaekomiSeconds++;
    updateOsaekomiDisplay(side);

    if (state.osaekomiSeconds === 20) {
      stopOsaekomi(side, true); // Ippon alcanzado a los 20 segundos
    } else {
      playOsaekomiTaikoBeat(state.osaekomiSeconds);
    }
  }, 1000);
}

function stopOsaekomi(side, isIppon = false) {
  if (state.osaekomiSide !== side) return;
  if (state.osaekomiInterval) {
    clearInterval(state.osaekomiInterval);
    state.osaekomiInterval = null;
  }

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
