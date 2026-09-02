/**
 * KOSEN JUDO HEIKEGANI - OFFICIAL TOURNAMENT & SCOREBOARD ENGINE
 */

const DEMO_50_JUDOKAS = [
      // RAMA FEMENINA
      { id: "judoka_f01", name: "Valentina Díaz", gender: "Femenino", dojo: "Judo Club Samurai", age: 7, weight: 24.0, belt: "Blanco", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_f02", name: "Isabella Castro", gender: "Femenino", dojo: "Dojo Ronin", age: 9, weight: 29.5, belt: "Amarillo", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_f03", name: "Emma Ríos", gender: "Femenino", dojo: "Judo Club Kosen", age: 10, weight: 33.0, belt: "Naranja", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_f04", name: "Luciana Paz", gender: "Femenino", dojo: "Judo Club Kosen", age: 12, weight: 40.2, belt: "Naranja", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_f05", name: "Sofía Rodríguez", gender: "Femenino", dojo: "Judo Club Samurai", age: 12, weight: 42.0, belt: "Verde", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_f06", name: "Camila Gómez", gender: "Femenino", dojo: "Dojo Bushido", age: 13, weight: 45.5, belt: "Verde", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_f07", name: "Sara Valencia", gender: "Femenino", dojo: "Dojo Ronin", age: 13, weight: 48.0, belt: "Verde", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_f08", name: "Mariana López", gender: "Femenino", dojo: "Club Yamato", age: 14, weight: 48.0, belt: "Verde", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_f09", name: "Gabriela Rojas", gender: "Femenino", dojo: "Academia Seiryoku", age: 15, weight: 52.0, belt: "Azul", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_f10", name: "Valeria Suárez", gender: "Femenino", dojo: "Alianza Judo Club", age: 16, weight: 57.0, belt: "Marrón", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_f11", name: "Manuela Gutiérrez", gender: "Femenino", dojo: "Judo Club Samurai", age: 17, weight: 57.0, belt: "Azul", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_f12", name: "Paula Andrea Vega", gender: "Femenino", dojo: "Judo Club Kosen", age: 18, weight: 52.0, belt: "Marrón", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_f13", name: "Laura Camila Soto", gender: "Femenino", dojo: "Dojo Ronin", age: 19, weight: 63.0, belt: "Negro", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_f14", name: "Vanessa Gil", gender: "Femenino", dojo: "Club Kodokan", age: 24, weight: 52.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_f15", name: "Andrea Carolina Marín", gender: "Femenino", dojo: "Judo Club Samurai", age: 22, weight: 57.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_f16", name: "Natalia Cardona", gender: "Femenino", dojo: "Dojo Ronin", age: 25, weight: 63.0, belt: "Marrón", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_f17", name: "Tatiana Mosquera", gender: "Femenino", dojo: "Alianza Judo Club", age: 27, weight: 70.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_f18", name: "Patricia Delgado", gender: "Femenino", dojo: "Judo Club Samurai", age: 35, weight: 63.0, belt: "Marrón", category: "Máster A (31-49 años)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_f19", name: "Claudia Patricia León", gender: "Femenino", dojo: "Club Yamato", age: 41, weight: 57.0, belt: "Azul", category: "Máster A (31-49 años)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_f20", name: "Elena Rincón", gender: "Femenino", dojo: "Dojo Bushido", age: 51, weight: 65.0, belt: "Negro", category: "Máster B (+50 años)", durationSec: 120, timeFormatted: "2:00 min" },

      // RAMA MASCULINA
      { id: "judoka_m01", name: "Martín Ospina", gender: "Masculino", dojo: "Club Yamato", age: 8, weight: 27.0, belt: "Blanco", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_m02", name: "Lucas Mendoza", gender: "Masculino", dojo: "Dojo Bushido", age: 8, weight: 28.5, belt: "Amarillo", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_m03", name: "Mateo Ramírez", gender: "Masculino", dojo: "Club Kodokan", age: 9, weight: 31.0, belt: "Blanco", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_m04", name: "Samuel Torres", gender: "Masculino", dojo: "Academia Seiryoku", age: 10, weight: 34.2, belt: "Amarillo", category: "Sub-10 (Pre-Infantil)", durationSec: 60, timeFormatted: "1:00 min" },
      { id: "judoka_m05", name: "Diego Cárdenas", gender: "Masculino", dojo: "Club Yamato", age: 11, weight: 36.5, belt: "Amarillo", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_m06", name: "Julián Morales", gender: "Masculino", dojo: "Club Kodokan", age: 11, weight: 38.0, belt: "Amarillo", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_m07", name: "Nicolás Herrera", gender: "Masculino", dojo: "Academia Seiryoku", age: 12, weight: 44.0, belt: "Naranja", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_m08", name: "Tomás Silva", gender: "Masculino", dojo: "Alianza Judo Club", age: 13, weight: 52.0, belt: "Verde", category: "Sub-13 (Infantil A)", durationSec: 90, timeFormatted: "1:30 min" },
      { id: "judoka_m09", name: "Sebastián Ortiz", gender: "Masculino", dojo: "Dojo Bushido", age: 14, weight: 50.5, belt: "Naranja", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_m10", name: "Santiago Mejía", gender: "Masculino", dojo: "Judo Club Samurai", age: 14, weight: 55.0, belt: "Verde", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_m11", name: "Alejandro Morales", gender: "Masculino", dojo: "Dojo Bushido", age: 15, weight: 60.0, belt: "Azul", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_m12", name: "Felipe Restrepo", gender: "Masculino", dojo: "Judo Club Kosen", age: 15, weight: 66.2, belt: "Azul", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_m13", name: "Mateo Fernández", gender: "Masculino", dojo: "Club Kodokan", age: 16, weight: 66.0, belt: "Marrón", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_m14", name: "Andrés Felipe Ruiz", gender: "Masculino", dojo: "Dojo Ronin", age: 16, weight: 73.0, belt: "Azul", category: "Sub-16 (Cadete / Infantil B)", durationSec: 120, timeFormatted: "2:00 min" },
      { id: "judoka_m15", name: "David Guerrero", gender: "Masculino", dojo: "Club Yamato", age: 17, weight: 60.0, belt: "Azul", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m16", name: "Esteban Martínez", gender: "Masculino", dojo: "Dojo Bushido", age: 18, weight: 66.0, belt: "Marrón", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m17", name: "Cristian Benítez", gender: "Masculino", dojo: "Academia Seiryoku", age: 18, weight: 81.0, belt: "Marrón", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m18", name: "Juan Pablo Duarte", gender: "Masculino", dojo: "Club Kodokan", age: 19, weight: 73.5, belt: "Negro", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m19", name: "Rodrigo Caicedo", gender: "Masculino", dojo: "Alianza Judo Club", age: 19, weight: 90.0, belt: "Negro", category: "Sub-20 (Junior)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m20", name: "Kevin Buitrago", gender: "Masculino", dojo: "Dojo Bushido", age: 21, weight: 73.0, belt: "Marrón", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_m21", name: "Camilo Arango", gender: "Masculino", dojo: "Judo Club Kosen", age: 23, weight: 66.0, belt: "Azul", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_m22", name: "Daniel Vargas", gender: "Masculino", dojo: "Club Kodokan", age: 24, weight: 81.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_m23", name: "Carlos Eduardo Silva", gender: "Masculino", dojo: "Dojo Bushido", age: 26, weight: 73.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_m24", name: "Jorge Andrés Pineda", gender: "Masculino", dojo: "Academia Seiryoku", age: 28, weight: 90.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_m25", name: "Manuel Fernando Cruz", gender: "Masculino", dojo: "Club Yamato", age: 29, weight: 100.0, belt: "Negro", category: "Senior (Adultos)", durationSec: 180, timeFormatted: "3:00 min" },
      { id: "judoka_m26", name: "Roberto García", gender: "Masculino", dojo: "Dojo Bushido", age: 38, weight: 81.5, belt: "Negro", category: "Máster A (31-49 años)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m27", name: "Héctor Fabio Osorio", gender: "Masculino", dojo: "Dojo Ronin", age: 39, weight: 73.0, belt: "Negro", category: "Máster A (31-49 años)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m28", name: "Fernando Quintero", gender: "Masculino", dojo: "Club Kodokan", age: 42, weight: 90.0, belt: "Negro", category: "Máster A (31-49 años)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m29", name: "Mauricio Jaramillo", gender: "Masculino", dojo: "Academia Seiryoku", age: 45, weight: 100.0, belt: "Negro", category: "Máster A (31-49 años)", durationSec: 150, timeFormatted: "2:30 min" },
      { id: "judoka_m30", name: "Sensei Gustavo Muñoz", gender: "Masculino", dojo: "Dojo Bushido", age: 56, weight: 81.0, belt: "Negro", category: "Máster B (+50 años)", durationSec: 120, timeFormatted: "2:00 min" }
    ];

    const BELT_RANK_ORDER = {
      'blanco': 1, 'amarillo': 2, 'naranja': 3, 'verde': 4,
      'azul': 5, 'marrón': 6, 'marron': 6, 'negro': 7
    };

    function compareJudokas(a, b) {
      const genderA = (a.gender || 'Masculino').toLowerCase();
      const genderB = (b.gender || 'Masculino').toLowerCase();
      if (genderA !== genderB) return genderA === 'femenino' ? -1 : 1;
      if (a.age !== b.age) return a.age - b.age;
      if (a.weight !== b.weight) return a.weight - b.weight;
      const rankA = BELT_RANK_ORDER[(a.belt || '').toLowerCase()] || 0;
      const rankB = BELT_RANK_ORDER[(b.belt || '').toLowerCase()] || 0;
      return rankA - rankB;
    }

    const state = {
      matchTimeRemaining: 120,
      matchDuration: 120,
      isMatchRunning: false,
      matchInterval: null,
      isGoldenScore: false,
      currentMatchIndex: 0,

      osaekomiSide: null,
      osaekomiSeconds: 0,
      osaekomiInterval: null,
      
      white: { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: null },
      blue:  { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: null },
      
      activeGenderFilter: 'all',
      activeCategoryFilter: 'all',
      soundEnabled: true,
      currentScheduledMatchNumber: null,
      currentScheduledFightId: null,
      currentCategoryKey: null,
      currentRound: null
    };

    let registeredJudokas = JSON.parse(localStorage.getItem('newaza_judokas') || '[]');
    if (!Array.isArray(registeredJudokas)) registeredJudokas = [];
    registeredJudokas.forEach(j => { if (!j.gender) j.gender = 'Masculino'; });
    registeredJudokas.sort(compareJudokas);

    let dojoLeaderboard = JSON.parse(localStorage.getItem('newaza_dojoLeaderboard') || '{}');
    let matchHistory = JSON.parse(localStorage.getItem('newaza_history') || '[]');

    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function playOsaekomiTaikoBeat(sec = 0) {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();
        const now = ctx.currentTime;

        // Bus maestro con compresor dinámico para evitar cualquier saturación o distorsión digital
        const masterBus = ctx.createGain();
        masterBus.gain.setValueAtTime(0.60, now);

        const compressor = ctx.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-10, now);
        compressor.knee.setValueAtTime(12, now);
        compressor.ratio.setValueAtTime(10, now);
        compressor.attack.setValueAtTime(0.002, now);
        compressor.release.setValueAtTime(0.12, now);

        masterBus.connect(compressor);
        compressor.connect(ctx.destination);

        const playHit = (offset, baseFreq, vol, decay, isDeep = false) => {
          const hitTime = now + offset;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = isDeep ? 'sine' : 'triangle';
          
          // Caída de tono percusivo rápida característica del parche de cuero Taiko
          osc.frequency.setValueAtTime(baseFreq * 1.5, hitTime);
          osc.frequency.exponentialRampToValueAtTime(baseFreq, hitTime + 0.025);
          osc.frequency.exponentialRampToValueAtTime(Math.max(38, baseFreq * 0.65), hitTime + decay);

          gain.gain.setValueAtTime(0.0001, hitTime);
          gain.gain.linearRampToValueAtTime(vol, hitTime + 0.006);
          gain.gain.exponentialRampToValueAtTime(0.0001, hitTime + decay);

          osc.connect(gain);
          gain.connect(masterBus);
          osc.start(hitTime);
          osc.stop(hitTime + decay);

          // Resonancia acústica profunda del cuerpo de madera maciza (O-Daiko)
          if (isDeep || vol > 0.35) {
            const subOsc = ctx.createOscillator();
            const subGain = ctx.createGain();
            subOsc.type = 'sine';
            subOsc.frequency.setValueAtTime(baseFreq * 0.75, hitTime);
            subOsc.frequency.exponentialRampToValueAtTime(42, hitTime + decay * 0.9);

            subGain.gain.setValueAtTime(0.0001, hitTime);
            subGain.gain.linearRampToValueAtTime(vol * 0.75, hitTime + 0.01);
            subGain.gain.exponentialRampToValueAtTime(0.0001, hitTime + decay * 0.95);

            subOsc.connect(subGain);
            subGain.connect(masterBus);
            subOsc.start(hitTime);
            subOsc.stop(hitTime + decay * 0.95);
          }

          // Chasquido inicial del golpe con mazo de madera (Bachi)
          try {
            const snapLen = Math.floor(ctx.sampleRate * 0.025);
            const noiseBuffer = ctx.createBuffer(1, snapLen, ctx.sampleRate);
            const data = noiseBuffer.getChannelData(0);
            for (let i = 0; i < snapLen; i++) {
              data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (snapLen * 0.22));
            }
            const noise = ctx.createBufferSource();
            noise.buffer = noiseBuffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(isDeep ? 800 : 1250, hitTime);
            filter.Q.setValueAtTime(2.2, hitTime);

            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(vol * 0.40, hitTime);
            noiseGain.gain.exponentialRampToValueAtTime(0.0001, hitTime + 0.025);

            noise.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(masterBus);

            noise.start(hitTime);
            noise.stop(hitTime + 0.025);
          } catch (e) {}
        };

        if (sec === 0) {
          // Golpe de apertura potente: ¡DON... doko-doko... DON!
          playHit(0.00, 120, 0.85, 0.30, true);
          playHit(0.18, 145, 0.60, 0.16, false);
          playHit(0.30, 155, 0.65, 0.16, false);
          playHit(0.44, 130, 0.80, 0.28, true);
          playHit(0.68, 92, 0.95, 0.75, true);
        } else if (sec < 10) {
          // Cadencia rítmica continua de inmovilización (1s - 9s): Paso firme y seguro
          playHit(0.00, 115, 0.75, 0.28, true);
          playHit(0.30, 140, 0.50, 0.16, false);
          playHit(0.60, 150, 0.55, 0.16, false);
        } else if (sec < 15) {
          // Aumento de tensión (10s - 14s - Waza-ari alcanzado): Aceleración progresiva
          playHit(0.00, 108, 0.82, 0.30, true);
          playHit(0.22, 148, 0.60, 0.15, false);
          playHit(0.46, 112, 0.78, 0.25, true);
          playHit(0.68, 155, 0.65, 0.15, false);
        } else {
          // Máxima tensión hacia Ippon (15s - 19s): Redoble enérgico final
          playHit(0.00, 98, 0.88, 0.32, true);
          playHit(0.18, 150, 0.65, 0.14, false);
          playHit(0.36, 105, 0.82, 0.28, true);
          playHit(0.54, 160, 0.70, 0.14, false);
          playHit(0.72, 170, 0.75, 0.14, false);
        }
      } catch (err) {
        console.warn('Error en tambores Taiko:', err);
      }
    }

    function playSound(type) {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;

        if (type === 'buzzer') {
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
        } else if (type === 'call_white') {
          // Tono armónico ceremonial para esquina blanca
          [440, 554.37, 659.25].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            const st = ctx.currentTime + (idx * 0.1);
            gain.gain.setValueAtTime(0.3, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + 0.6);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + 0.6);
          });
        } else if (type === 'call_blue') {
          // Tono armónico enérgico para esquina azul
          [349.23, 440, 523.25, 698.46].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            const st = ctx.currentTime + (idx * 0.09);
            gain.gain.setValueAtTime(0.3, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + 0.6);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + 0.6);
          });
        } else if (type === 'drums' || type === 'taiko' || type === 'osaekomi') {
          playOsaekomiTaikoBeat(0);
        } else if (type === 'score') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, ctx.currentTime);
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.15);
        } else if (type === 'drumroll') {
          // Redoble de tambores con suspense
          for (let i = 0; i < 28; i++) {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(90 + (i % 3) * 25 + Math.random() * 15, ctx.currentTime);
            const st = ctx.currentTime + (i * 0.07);
            const vol = 0.08 + (i / 28) * 0.22;
            gain.gain.setValueAtTime(vol, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + 0.08);
          }
        } else if (type === 'bronze_reveal') {
          // Acorde cálido de bronce (La3 - Do#4 - Mi4)
          [220, 277.18, 329.63, 440].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            const st = ctx.currentTime + (idx * 0.06);
            gain.gain.setValueAtTime(0.28, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + 1.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + 1.2);
          });
        } else if (type === 'silver_reveal') {
          // Fanfarria brillante de plata (Re4 - Fa#4 - La4 - Re5)
          [293.66, 369.99, 440, 587.33].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            const st = ctx.currentTime + (idx * 0.07);
            gain.gain.setValueAtTime(0.3, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + 1.4);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + 1.4);
          });
        } else if (type === 'gold_triumph') {
          // Gran Fanfarria Orquestal y Gong de Oro (Do4 - Mi4 - Sol4 - Do5 - Mi5 - Sol5 + Gong)
          const chords = [
            { f: 523.25, t: 0.0, d: 0.35, v: 0.35 },
            { f: 659.25, t: 0.18, d: 0.35, v: 0.35 },
            { f: 783.99, t: 0.36, d: 0.45, v: 0.4 },
            { f: 1046.50, t: 0.65, d: 2.2, v: 0.5 },
            { f: 523.25, t: 0.65, d: 2.2, v: 0.45 },
            { f: 659.25, t: 0.65, d: 2.2, v: 0.45 },
            { f: 1318.51, t: 0.9, d: 2.0, v: 0.4 }
          ];
          chords.forEach(n => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.value = n.f;
            const st = ctx.currentTime + n.t;
            gain.gain.setValueAtTime(n.v, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + n.d);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + n.d);
          });
          // Gong grave de victoria
          const gong = ctx.createOscillator();
          const gongGain = ctx.createGain();
          gong.type = 'sine';
          gong.frequency.setValueAtTime(110, ctx.currentTime + 0.65);
          gong.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 3.0);
          gongGain.gain.setValueAtTime(0.4, ctx.currentTime + 0.65);
          gongGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);
          gong.connect(gongGain);
          gongGain.connect(ctx.destination);
          gong.start(ctx.currentTime + 0.65);
          gong.stop(ctx.currentTime + 3.0);
        } else if (type === 'fanfare') {
          const notes = [
            { f: 523.25, t: 0.0, d: 0.25 },
            { f: 659.25, t: 0.2, d: 0.25 },
            { f: 783.99, t: 0.4, d: 0.35 },
            { f: 1046.50, t: 0.75, d: 1.1 },
            { f: 523.25, t: 0.75, d: 1.1 },
            { f: 659.25, t: 0.75, d: 1.1 }
          ];
          notes.forEach(n => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = n.f;
            const st = ctx.currentTime + n.t;
            gain.gain.setValueAtTime(0.3, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + n.d);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + n.d);
          });
        }
      } catch (err) {
        console.warn('Error WebAudio:', err);
      }
    }

    function toggleSound() {
      state.soundEnabled = !state.soundEnabled;
      const btn = document.getElementById('btn-sound-toggle');
      btn.innerText = state.soundEnabled ? '🔊 Audio' : '🔇 Mudo';
      btn.style.color = state.soundEnabled ? '#fff' : '#f87171';
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));

      const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick')?.includes(`'${tabId}'`));
      if (targetBtn) targetBtn.classList.add('active');

      const targetView = document.getElementById(`view-${tabId}`);
      if (targetView) targetView.classList.add('active');

      if (tabId === 'dojos') loadMesaDojosList();
      if (tabId === 'order') renderTournamentOrderView();
      if (tabId === 'pools') renderCategoryPoolsView();
      if (tabId === 'registration') renderJudokasTable();
      if (tabId === 'ranking') {
        renderRankingTable();
        renderCategoryStandingsView();
      }
      if (tabId === 'history') renderHistoryTable();
    }

    // ==========================================
    // 4.5 GESTIÓN OFICIAL DE DOJOS Y CLAVES DE ACCESO (MESA TÉCNICA)
    // ==========================================
    let mesaRegisteredDojos = [];

    async function loadMesaDojosList() {
      try {
        const res = await fetch('/api/dojos');
        if (res.ok) {
          mesaRegisteredDojos = await res.json();
        }
      } catch(e) {}

      if (!mesaRegisteredDojos || mesaRegisteredDojos.length === 0) {
        const local = localStorage.getItem('newaza_registered_dojos');
        if (local) {
          try { mesaRegisteredDojos = JSON.parse(local) || []; } catch(e) {}
        }
      }

      if (mesaRegisteredDojos.length === 0 && registeredJudokas.length > 0) {
        const uniqueDojos = [...new Set(registeredJudokas.map(j => j.dojo).filter(Boolean))];
        uniqueDojos.forEach(dName => {
          mesaRegisteredDojos.push({
            id: 'dojo_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
            name: dName,
            sensei: 'Sensei ' + dName,
            phone: '',
            city: 'Torneo Oficial',
            clave: generateDojoKeyForMesa(dName),
            createdAt: new Date().toISOString(),
            judokasCount: registeredJudokas.filter(j => j.dojo === dName).length
          });
        });
      }

      localStorage.setItem('newaza_registered_dojos', JSON.stringify(mesaRegisteredDojos));
      renderMesaDojosTable();
      updateDojosBadges();
    }

    function updateDojosBadges() {
      const badgeNav = document.getElementById('badge-dojos-count');
      const badgeSummary = document.getElementById('badge-dojos-summary');
      const countText = document.getElementById('mesa-dojos-count-text');
      const count = mesaRegisteredDojos.length;

      if (badgeNav) badgeNav.innerText = count;
      if (badgeSummary) badgeSummary.innerText = `${count} ${count === 1 ? 'Dojo' : 'Dojos'}`;
      if (countText) countText.innerText = `(${count} ${count === 1 ? 'Dojo' : 'Dojos'})`;
    }

    function generateDojoKeyForMesa(name) {
      const clean = (name || 'DOJO').replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 4) || 'DOJO';
      const num = Math.floor(1000 + Math.random() * 9000);
      return `${clean}-${num}`;
    }

    function generateMesaRandomKey() {
      const name = document.getElementById('mesa-dojo-name').value.trim() || 'DOJO';
      document.getElementById('mesa-dojo-key').value = generateDojoKeyForMesa(name);
    }

    function autoSuggestMesaKey() {
      const keyInput = document.getElementById('mesa-dojo-key');
      const editId = document.getElementById('mesa-dojo-edit-id').value;
      if (!keyInput.value && !editId) {
        generateMesaRandomKey();
      }
    }

    function copyCreateDojosLink() {
      const host = window.location.origin;
      const url = `${host}/crear_dojos.html`;
      navigator.clipboard.writeText(url).then(() => {
        showToast('📋 Enlace para crear Dojos copiado al portapapeles.');
      }).catch(() => {
        prompt('Enlace para crear Dojos:', url);
      });
    }

    function copyDojoDirectUrl(id, key, name) {
      const host = window.location.origin;
      const url = `${host}/postulacion.html?dojoId=${encodeURIComponent(id)}&key=${encodeURIComponent(key)}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast(`📋 Enlace exclusivo para "${name}" copiado.`);
      }).catch(() => {
        prompt(`Enlace de acceso para ${name}:`, url);
      });
    }

    function shareMesaDojoWhatsApp(dojo) {
      const host = window.location.origin;
      const directUrl = `${host}/postulacion.html?dojoId=${encodeURIComponent(dojo.id)}&key=${encodeURIComponent(dojo.clave)}`;
      
      let msg = `🥋 *CREDENCIALES OFICIALES - TORNEO KOSEN JUDO HEIKEGANI*\n\n`;
      msg += `Estimado *Sensei ${dojo.sensei || ''}*:\n`;
      msg += `Su club ha sido registrado oficialmente para el campeonato.\n\n`;
      msg += `🏢 *Dojo / Club:* ${dojo.name}\n`;
      msg += `📍 *Ciudad:* ${dojo.city || 'No especificada'}\n`;
      msg += `🔐 *Clave de Acceso:* *${dojo.clave}*\n\n`;
      msg += `🔗 *ENLACE DIRECTO DE INSCRIPCIÓN:*\n${directUrl}\n\n`;
      msg += `_(Al ingresar con este enlace tu Dojo quedará autenticado automáticamente para inscribir atletas)_\n\n`;
      msg += `¡Muchos éxitos en la competencia! ⚡`;

      window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(dojo.phone || '')}&text=${encodeURIComponent(msg)}`, '_blank');
    }

    async function handleMesaSaveDojo(e) {
      e.preventDefault();
      const editId = document.getElementById('mesa-dojo-edit-id').value;
      const name = document.getElementById('mesa-dojo-name').value.trim();
      const sensei = document.getElementById('mesa-dojo-sensei').value.trim();
      const phone = document.getElementById('mesa-dojo-phone').value.trim();
      const city = document.getElementById('mesa-dojo-city').value.trim();
      const clave = document.getElementById('mesa-dojo-key').value.trim();

      if (!name || !sensei || !clave) {
        alert('Por favor completa el nombre del dojo, sensei y clave.');
        return;
      }

      const payload = { id: editId || undefined, name, sensei, phone, city, clave };

      try {
        await fetch('/api/dojos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch(e) {}

      if (editId) {
        const idx = mesaRegisteredDojos.findIndex(d => d.id === editId);
        if (idx !== -1) {
          mesaRegisteredDojos[idx] = { ...mesaRegisteredDojos[idx], name, sensei, phone, city, clave };
        }
      } else {
        mesaRegisteredDojos.push({
          id: 'dojo_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
          name,
          sensei,
          phone,
          city,
          clave,
          createdAt: new Date().toISOString(),
          judokasCount: 0
        });
      }

      localStorage.setItem('newaza_registered_dojos', JSON.stringify(mesaRegisteredDojos));
      syncTournamentStateToServer();
      cancelMesaEditDojo();
      await loadMesaDojosList();
      updateDojoDatalist();
      showToast(`✅ Dojo "${name}" guardado exitosamente (Clave: ${clave})`);
    }

    function editMesaDojo(id) {
      const dojo = mesaRegisteredDojos.find(d => d.id === id);
      if (!dojo) return;
      document.getElementById('mesa-dojo-edit-id').value = dojo.id;
      document.getElementById('mesa-dojo-name').value = dojo.name;
      document.getElementById('mesa-dojo-sensei').value = dojo.sensei || '';
      document.getElementById('mesa-dojo-phone').value = dojo.phone || '';
      document.getElementById('mesa-dojo-city').value = dojo.city || '';
      document.getElementById('mesa-dojo-key').value = dojo.clave || '';

      document.getElementById('mesa-dojo-form-title').innerText = `✏️ Editar Dojo: ${dojo.name}`;
      document.getElementById('mesa-btn-dojo-submit').innerText = '💾 Guardar Cambios';
      document.getElementById('mesa-btn-cancel-edit-dojo').style.display = 'block';
    }

    function cancelMesaEditDojo() {
      document.getElementById('mesa-create-dojo-form').reset();
      document.getElementById('mesa-dojo-edit-id').value = '';
      document.getElementById('mesa-dojo-form-title').innerText = '➕ Crear / Registrar Dojo';
      document.getElementById('mesa-btn-dojo-submit').innerText = '💾 Registrar Dojo y Asignar Clave';
      document.getElementById('mesa-btn-cancel-edit-dojo').style.display = 'none';
    }

    async function deleteMesaDojo(id, name) {
      if (!confirm(`¿Estás seguro de que deseas eliminar el Dojo "${name}"?`)) return;
      try {
        await fetch(`/api/dojos/${id}`, { method: 'DELETE' });
      } catch(e) {}
      mesaRegisteredDojos = mesaRegisteredDojos.filter(d => d.id !== id);
      localStorage.setItem('newaza_registered_dojos', JSON.stringify(mesaRegisteredDojos));
      syncTournamentStateToServer();
      renderMesaDojosTable();
      updateDojosBadges();
      showToast(`🗑️ Dojo "${name}" eliminado.`, '#ef4444');
    }

    function renderMesaDojosTable() {
      const tbody = document.getElementById('mesa-dojos-table-body');
      if (!tbody) return;

      const query = (document.getElementById('mesa-dojos-search')?.value || '').trim().toLowerCase();
      const filtered = mesaRegisteredDojos.filter(d => {
        if (!query) return true;
        return (d.name || '').toLowerCase().includes(query) ||
               (d.sensei || '').toLowerCase().includes(query) ||
               (d.city || '').toLowerCase().includes(query) ||
               (d.clave || '').toLowerCase().includes(query);
      });

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:var(--slate-400);">No se encontraron Dojos registrados.</td></tr>`;
        return;
      }

      let html = '';
      filtered.forEach(dojo => {
        const athletes = registeredJudokas.filter(j => (j.dojo || '').toLowerCase().trim() === dojo.name.toLowerCase().trim()).length;
        const directUrl = `postulacion.html?dojoId=${encodeURIComponent(dojo.id)}&key=${encodeURIComponent(dojo.clave)}`;

        html += `
          <tr>
            <td>
              <b style="color:#fff; font-size:14px;">🏢 ${escapeHtml(dojo.name)}</b>
            </td>
            <td>
              <div>${escapeHtml(dojo.sensei || 'No especificado')}</div>
              ${dojo.phone ? `<small style="color:var(--slate-400);">📞 ${escapeHtml(dojo.phone)}</small>` : ''}
            </td>
            <td>${escapeHtml(dojo.city || 'No registrada')}</td>
            <td style="text-align:center;">
              <code style="background:rgba(245,158,11,0.15); color:var(--gold-light); padding:4px 8px; border-radius:6px; font-weight:bold; font-size:13px; border:1px solid rgba(245,158,11,0.4);">${escapeHtml(dojo.clave)}</code>
            </td>
            <td style="text-align:center;">
              <span style="background:#1e3a8a; color:#93c5fd; font-size:12px; font-weight:bold; padding:2px 8px; border-radius:10px;">
                🥋 ${athletes} ${athletes === 1 ? 'atleta' : 'atletas'}
              </span>
            </td>
            <td style="text-align:center;">
              <div style="display:flex; gap:4px; justify-content:center; flex-wrap:wrap;">
                <button class="btn-action" style="padding:4px 8px; font-size:11px; background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:bold; border:none;" onclick='openMesaDojoQrModal(${JSON.stringify(dojo)})' title="Ver código QR exclusivo para este Dojo">
                  📱 QR
                </button>
                <button class="btn-action" style="padding:4px 8px; font-size:11px;" onclick="copyDojoDirectUrl('${dojo.id}', '${dojo.clave}', '${escapeHtml(dojo.name)}')" title="Copiar enlace exclusivo para Sensei">
                  📋 Link
                </button>
                <button class="btn-action" style="padding:4px 8px; font-size:11px; background:#25D366; color:#fff; border:none;" onclick='shareMesaDojoWhatsApp(${JSON.stringify(dojo)})' title="Compartir credenciales por WhatsApp">
                  📲 WhatsApp
                </button>
                <a href="${directUrl}" target="_blank" class="btn-action" style="padding:4px 8px; font-size:11px; background:#2563eb; color:#fff; text-decoration:none;" title="Abrir portal de atletas para este Dojo">
                  🥋 Inscribir
                </a>
                <button class="btn-action" style="padding:4px 8px; font-size:11px;" onclick="editMesaDojo('${dojo.id}')" title="Editar Dojo">
                  ✏️
                </button>
                <button class="btn-action" style="padding:4px 8px; font-size:11px; color:#f87171;" onclick="deleteMesaDojo('${dojo.id}', '${escapeHtml(dojo.name)}')" title="Eliminar Dojo">
                  🗑️
                </button>
              </div>
            </td>
          </tr>
        `;
      });

      tbody.innerHTML = html;
    }

    let currentMesaModalDojo = null;

    function openMesaDojoQrModal(dojo) {
      currentMesaModalDojo = dojo;
      const host = (window.location.protocol.startsWith('http') && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
        ? window.location.origin
        : `http://${detectedServerIp}:${detectedServerPort || 8080}`;
      const directUrl = `${host}/postulacion.html?dojoId=${encodeURIComponent(dojo.id)}&key=${encodeURIComponent(dojo.clave)}`;

      document.getElementById('mesa-modal-qr-dojo-name').innerText = dojo.name;
      document.getElementById('mesa-modal-qr-sensei-name').innerText = `Sensei: ${dojo.sensei || 'Delegado'} • ${dojo.city || 'Club'}`;
      document.getElementById('mesa-modal-qr-key').innerText = dojo.clave;
      document.getElementById('mesa-modal-qr-url-text').innerText = directUrl;

      const container = document.getElementById('mesa-modal-qr-canvas-container');
      container.innerHTML = '';
      new QRCode(container, {
        text: directUrl,
        width: 200,
        height: 200,
        colorDark: "#090d16",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });

      document.getElementById('mesa-btn-modal-whatsapp').onclick = () => shareMesaDojoWhatsApp(dojo);
      document.getElementById('modal-mesa-dojo-qr').style.display = 'flex';
    }

    function copyMesaModalDojoUrl() {
      if (!currentMesaModalDojo) return;
      if (currentMesaModalDojo.id === 'crear_dojos') {
        const host = (window.location.protocol.startsWith('http') && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
          ? window.location.origin
          : `http://${detectedServerIp}:${detectedServerPort || 8080}`;
        const url = `${host}/crear_dojos.html`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            showToast('📋 ¡Enlace copiado al portapapeles!');
          });
        } else {
          prompt('Copia el enlace:', url);
        }
        return;
      }
      copyDojoDirectUrl(currentMesaModalDojo.id, currentMesaModalDojo.clave, currentMesaModalDojo.name);
    }

    function closeMesaDojoQrModal() {
      document.getElementById('modal-mesa-dojo-qr').style.display = 'none';
    }

    function openCrearDojosQrModal() {
      const host = (window.location.protocol.startsWith('http') && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')
        ? window.location.origin
        : `http://${detectedServerIp}:${detectedServerPort || 8080}`;
      const directUrl = `${host}/crear_dojos.html`;

      document.getElementById('mesa-modal-qr-dojo-name').innerText = "🏢 Registro Oficial de Dojos";
      document.getElementById('mesa-modal-qr-sensei-name').innerText = "Portal para Senseis y Delegados • Registro de Clubes y Claves";
      document.getElementById('mesa-modal-qr-key').innerText = "CONVOCATORIA";
      document.getElementById('mesa-modal-qr-url-text').innerText = directUrl;

      const container = document.getElementById('mesa-modal-qr-canvas-container');
      container.innerHTML = '';
      if (typeof QRCode !== 'undefined') {
        try {
          new QRCode(container, {
            text: directUrl,
            width: 200,
            height: 200,
            colorDark: "#090d16",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
        } catch (e) {
          console.warn('Error generando QR de Dojos:', e);
        }
      }

      currentMesaModalDojo = { id: 'crear_dojos', clave: 'REGISTRO', name: 'Crear Dojos' };

      document.getElementById('mesa-btn-modal-whatsapp').onclick = () => {
        let msg = `🥋 *CONVOCATORIA OFICIAL - TORNEO KOSEN JUDO HEIKEGANI*\n\n`;
        msg += `Estimados Senseis y Delegados:\n`;
        msg += `Ya se encuentra habilitado el *Portal Oficial para Crear y Registrar Dojos* para el Torneo Ne-Waza Heikegani.\n\n`;
        msg += `🏢 *Enlace Oficial para Registrar tu Dojo:* \n${directUrl}\n\n`;
        msg += `_Mesa Técnica Oficial Kosen Judo Heikegani_ ⚡`;
        const encoded = encodeURIComponent(msg);
        window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
      };

      document.getElementById('modal-mesa-dojo-qr').style.display = 'flex';
    }

    // ==========================================
    // 5. GENERADOR DE LLAVES: GRUPOS DE 3 & SERIES DE 2 (REGLA 2 DE 3)
    // ==========================================
    function partitionJudokasIntoPools(judokas) {
      const n = judokas.length;
      const pools = [];
      if (n === 0) return pools;
      if (n === 1) {
        pools.push({ name: 'Llave Única', judokas: [judokas[0]], type: 'single' });
        return pools;
      }
      if (n === 2) {
        pools.push({ name: 'Llave Única (Serie Final)', judokas: judokas.slice(0, 2), type: 'best_of_3' });
        return pools;
      }
      if (n === 3) {
        pools.push({ name: 'Llave Única (Triangular)', judokas: judokas.slice(0, 3), type: 'triangular' });
        return pools;
      }
      if (n === 4) {
        // REGLA OFICIAL: Si son 4 competidores se dividen en 2 llaves de 2 competidores con la regla de 2 de 3 victorias
        pools.push({ name: 'Llave A (Semifinal 1)', judokas: judokas.slice(0, 2), type: 'best_of_3' });
        pools.push({ name: 'Llave B (Semifinal 2)', judokas: judokas.slice(2, 4), type: 'best_of_3' });
        return pools;
      }

      // Para N >= 5:
      let numPoolsOf3 = Math.floor(n / 3);
      let numPoolsOf2 = 0;

      if (n % 3 === 1) {
        numPoolsOf3 = (n - 4) / 3;
        numPoolsOf2 = 2;
      } else if (n % 3 === 2) {
        numPoolsOf3 = (n - 2) / 3;
        numPoolsOf2 = 1;
      }

      let currIdx = 0;
      let letterIdx = 0;

      for (let i = 0; i < numPoolsOf3; i++) {
        const letter = String.fromCharCode(65 + letterIdx++);
        pools.push({
          name: `Llave ${letter} (Triangular)`,
          judokas: judokas.slice(currIdx, currIdx + 3),
          type: 'triangular'
        });
        currIdx += 3;
      }

      for (let i = 0; i < numPoolsOf2; i++) {
        const letter = String.fromCharCode(65 + letterIdx++);
        pools.push({
          name: `Llave ${letter} (Serie de 2)`,
          judokas: judokas.slice(currIdx, currIdx + 2),
          type: 'best_of_3'
        });
        currIdx += 2;
      }

      return pools;
    }

    function renderCategoryPoolsView() {
      const container = document.getElementById('pools-category-list-container');
      if (!container) return;
      container.innerHTML = '';

      registeredJudokas.sort(compareJudokas);

      const categoryGroups = {};
      registeredJudokas.forEach(j => {
        const key = `${j.gender} — ${j.category}`;
        if (!categoryGroups[key]) {
          categoryGroups[key] = {
            gender: j.gender,
            category: j.category,
            timeFormatted: j.timeFormatted,
            durationSec: j.durationSec,
            judokas: []
          };
        }
        categoryGroups[key].judokas.push(j);
      });

      const groupKeys = Object.keys(categoryGroups);

      if (groupKeys.length === 0) {
        container.innerHTML = `<div class="card-panel" style="text-align:center; color:var(--slate-400); padding:32px;">No hay atletas inscritos para generar llaves de combate.</div>`;
        return;
      }

      groupKeys.forEach(key => {
        const group = categoryGroups[key];
        const totalCompetitors = group.judokas.length;
        const pools = partitionJudokasIntoPools(group.judokas);

        const card = document.createElement('div');
        card.className = 'category-pools-card';

        const genderIcon = group.gender === 'Femenino' ? '♀️' : '♂️';
        const genderClass = group.gender === 'Femenino' ? 'female' : 'male';

        let poolsHtml = '';

        pools.forEach((pool, pIdx) => {
          let judokasRowsHtml = '';
          pool.judokas.forEach((pj, jIdx) => {
            const isWhite = (jIdx % 2 === 0);
            const sideClass = isWhite ? 'white-side' : 'blue-side';
            const posLabel = isWhite ? '⚪ 1º Blanco' : '🔵 2º Azul';
            judokasRowsHtml += `
              <div class="pool-judoka-row ${sideClass}">
                <div>
                  <span style="font-size:10px; font-weight:bold; margin-right:4px;">${posLabel}:</span>
                  <b style="color:#fff;">${escapeHtml(pj.name)}</b>
                  <span style="color:var(--slate-400); font-size:11px; margin-left:4px;">(${escapeHtml(pj.dojo)})</span>
                </div>
                <div style="font-size:11px; font-weight:bold;">
                  <span style="color:var(--gold); margin-right:6px;">${pj.weight} kg</span>
                  <span class="belt-tag ${getBeltTagClass(pj.belt)}">${pj.belt}</span>
                </div>
              </div>
            `;
          });

          let matchesHtml = '';

          if (pool.type === 'best_of_3' && pool.judokas.length === 2) {
            const j1 = pool.judokas[0];
            const j2 = pool.judokas[1];
            matchesHtml = `
              <div style="font-size:11px; color:var(--gold); font-weight:bold; margin-bottom:6px;">⚡ Serie al Mejor de 3 Combates (Gana 2 de 3):</div>
              <div class="pool-match-item">
                <div><b>Combate 1:</b> ⚪ ${escapeHtml(j1.name)} vs 🔵 ${escapeHtml(j2.name)}</div>
                <button class="btn-pool-load-match" onclick="loadMatchByJudokasAndRound('${j1.id}', '${j2.id}', 1, '${escapeHtml(key)}')">⚔️ Cargar Combate 1</button>
              </div>
              <div class="pool-match-item">
                <div><b>Combate 2 (Inversión):</b> ⚪ ${escapeHtml(j2.name)} vs 🔵 ${escapeHtml(j1.name)}</div>
                <button class="btn-pool-load-match" onclick="loadMatchByJudokasAndRound('${j2.id}', '${j1.id}', 2, '${escapeHtml(key)}')">⚔️ Cargar Combate 2</button>
              </div>
              <div class="pool-match-item" style="border: 1px dashed rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.06);">
                <div><b>Combate 3 (Desempate):</b> ⚪ ${escapeHtml(j1.name)} vs 🔵 ${escapeHtml(j2.name)}</div>
                <button class="btn-pool-load-match" style="background:#d97706;" onclick="loadMatchByJudokasAndRound('${j1.id}', '${j2.id}', 3, '${escapeHtml(key)}')">⚔️ Cargar Combate 3</button>
              </div>
            `;
          } else if (pool.type === 'triangular' && pool.judokas.length === 3) {
            const pj0 = pool.judokas[0];
            const pj1 = pool.judokas[1];
            const pj2 = pool.judokas[2];
            matchesHtml = `
              <div style="font-size:11px; color:var(--sky); font-weight:bold; margin-bottom:6px;">🥋 Triangular Round-Robin (Todos contra Todos):</div>
              <div class="pool-match-item">
                <div><b>Ronda 1:</b> ⚪ ${escapeHtml(pj0.name)} vs 🔵 ${escapeHtml(pj1.name)}</div>
                <button class="btn-pool-load-match" onclick="loadMatchByJudokasAndRound('${pj0.id}', '${pj1.id}', 1, '${escapeHtml(key)}')">⚔️ Cargar en Mesa</button>
              </div>
              <div class="pool-match-item">
                <div><b>Ronda 2:</b> ⚪ ${escapeHtml(pj1.name)} vs 🔵 ${escapeHtml(pj2.name)}</div>
                <button class="btn-pool-load-match" onclick="loadMatchByJudokasAndRound('${pj1.id}', '${pj2.id}', 2, '${escapeHtml(key)}')">⚔️ Cargar en Mesa</button>
              </div>
              <div class="pool-match-item">
                <div><b>Ronda 3:</b> ⚪ ${escapeHtml(pj0.name)} vs 🔵 ${escapeHtml(pj2.name)}</div>
                <button class="btn-pool-load-match" onclick="loadMatchByJudokasAndRound('${pj0.id}', '${pj2.id}', 3, '${escapeHtml(key)}')">⚔️ Cargar en Mesa</button>
              </div>
            `;
          } else {
            matchesHtml = `<div style="font-size:11px; color:var(--slate-400); padding:4px;">Atleta en espera de rival.</div>`;
          }

          poolsHtml += `
            <div class="pool-box">
              <div class="pool-box-title">
                <span>🥋 ${escapeHtml(pool.name)}</span>
                <span style="font-size:11px; color:var(--gold); font-weight:bold;">${pool.judokas.length} Competidores</span>
              </div>
              
              <div class="pool-judokas-list">
                ${judokasRowsHtml}
              </div>

              <div class="pool-matches-section">
                ${matchesHtml}
              </div>
            </div>
          `;
        });

        // Si son 4 o 5 competidores (2 llaves), agregar la tarjeta de Gran Final entre ganadores
        let grandFinalHtml = '';
        if (totalCompetitors === 4 || totalCompetitors === 5) {
          const is4 = totalCompetitors === 4;
          const winnerA = getPoolWinner(pools[0]);
          const winnerB = getPoolWinner(pools[1]);
          const wAName = winnerA ? winnerA.name : 'Por definir';
          const wBName = winnerB ? winnerB.name : 'Por definir';
          const poolDesc = is4 
            ? `⚪ Ganador Llave A (${escapeHtml(wAName)}) vs 🔵 Ganador Llave B (${escapeHtml(wBName)})`
            : `⚪ Ganador Triangular A (${escapeHtml(wAName)}) vs 🔵 Ganador Serie B (${escapeHtml(wBName)})`;
          grandFinalHtml = `
            <div style="margin-top: 14px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%); border: 1px solid var(--gold); border-radius: 10px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <b style="color:var(--gold); font-size:13px;">🏆 GRAN FINAL DE CATEGORÍA:</b>
                <span style="font-size:12px; color:#fff; margin-left:6px;">${poolDesc}</span>
              </div>
              <div style="display:flex; gap:8px; align-items:center;">
                <span style="font-size:11px; background:#1e293b; padding:4px 10px; border-radius:12px; color:var(--sky); border:1px solid var(--slate-600);">🥇 Por el Campeonato Oficial</span>
                ${winnerA && winnerB ? `<button class="btn-pool-load-match" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:900;" onclick="loadMatchByJudokasAndRound('${winnerA.id}', '${winnerB.id}', 4, '${escapeHtml(key)}')">⚔️ Cargar Gran Final</button>` : ''}
              </div>
            </div>
          `;
        }

        let statsText = '';
        if (totalCompetitors === 2) {
          statsText = `📊 <b>2</b> Atletas Registrados ➔ <b>Serie al Mejor de 3 Combates (Gana 2)</b>`;
        } else if (totalCompetitors === 4) {
          statsText = `📊 <b>4</b> Atletas Registrados ➔ <b>2 Llaves de 2 (Regla 2 de 3 Victorias) + Gran Final</b>`;
        } else if (totalCompetitors === 5) {
          statsText = `📊 <b>5</b> Atletas Registrados ➔ <b>1 Grupo de 3 (Triangular) + 1 Grupo de 2 (Serie 2 de 3) + Gran Final</b>`;
        } else {
          statsText = `📊 <b>${totalCompetitors}</b> Atletas Registrados ➔ <b>${pools.length}</b> Llaves Organizadas`;
        }

        card.innerHTML = `
          <div class="category-pools-header">
            <div class="category-pools-title">
              <span class="gender-pill ${genderClass}">${genderIcon} ${group.gender}</span>
              <span>${escapeHtml(group.category)}</span>
              <span style="font-size:12px; color:var(--slate-400); font-weight:normal;">(${group.timeFormatted})</span>
            </div>
            <div class="pools-stats-pill">
              ${statsText}
            </div>
          </div>

          <div class="pools-grid">
            ${poolsHtml}
          </div>

          ${grandFinalHtml}
        `;

        container.appendChild(card);
      });
    }

    function getOfficialCategory(age) {
      const a = parseInt(age, 10);
      if (isNaN(a) || a <= 0) return { category: 'No definido', durationSec: 120, label: '0:00' };

      if (a <= 10) return { category: 'Sub-10 (Pre-Infantil)', durationSec: 60, timeFormatted: '1:00 min' };
      if (a >= 11 && a <= 13) return { category: 'Sub-13 (Infantil A)', durationSec: 90, timeFormatted: '1:30 min' };
      if (a >= 14 && a <= 16) return { category: 'Sub-16 (Cadete / Infantil B)', durationSec: 120, timeFormatted: '2:00 min' };
      if (a >= 17 && a <= 19) return { category: 'Sub-20 (Junior)', durationSec: 150, timeFormatted: '2:30 min' };
      if (a >= 20 && a <= 30) return { category: 'Senior (Adultos)', durationSec: 180, timeFormatted: '3:00 min' };
      if (a >= 31 && a <= 49) return { category: 'Máster A (31-49 años)', durationSec: 150, timeFormatted: '2:30 min' };
      return { category: 'Máster B (+50 años)', durationSec: 120, timeFormatted: '2:00 min' };
    }

    function calculateCategoryFromAge() {
      const age = document.getElementById('reg-age').value;
      const cat = getOfficialCategory(age);
      const nameEl = document.getElementById('reg-preview-cat');
      const timeEl = document.getElementById('reg-preview-time');

      if (age) {
        nameEl.innerText = cat.category;
        timeEl.innerText = `Tiempo de Combate: ${cat.timeFormatted} (${cat.durationSec} seg)`;
      } else {
        nameEl.innerText = 'Ingresa la edad para calcular';
        timeEl.innerText = 'Tiempo de Combate: --:--';
      }
    }

    function handleJudokaSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const gender = document.getElementById('reg-gender').value;
      const dojo = document.getElementById('reg-dojo').value.trim();
      const age = parseInt(document.getElementById('reg-age').value, 10);
      const weight = parseFloat(document.getElementById('reg-weight').value);
      const belt = document.getElementById('reg-belt').value;

      if (!name || !dojo || isNaN(age) || isNaN(weight)) {
        alert('Por favor completa todos los campos correctamente.');
        return;
      }

      const catInfo = getOfficialCategory(age);

      const newJudoka = {
        id: 'judoka_' + Date.now(),
        name,
        gender,
        dojo,
        age,
        weight,
        belt,
        category: catInfo.category,
        durationSec: catInfo.durationSec,
        timeFormatted: catInfo.timeFormatted,
        registeredAt: new Date().toISOString()
      };

      registeredJudokas.push(newJudoka);
      registeredJudokas.sort(compareJudokas);
      saveJudokas();

      document.getElementById('judoka-form').reset();
      calculateCategoryFromAge();
      renderJudokasTable();
      updateDojoDatalist();
      updateScoreboardDropdowns();
      updateTournamentMatchSelector();
      renderCategoryPoolsView();
      renderTournamentOrderView();

      alert(`✅ ¡Judoka "${name}" (${gender}) registrado y clasificado en ${catInfo.category}!`);
    }

    function saveJudokas() {
      localStorage.setItem('newaza_judokas', JSON.stringify(registeredJudokas));
      updateJudokasBadges();
      updateTournamentMatchSelector();
      syncTournamentStateToServer();
    }

    function updateJudokasBadges() {
      const total = registeredJudokas.length;
      const males = registeredJudokas.filter(j => j.gender === 'Masculino').length;
      const females = registeredJudokas.filter(j => j.gender === 'Femenino').length;

      const badge = document.getElementById('badge-judokas-count');
      if (badge) badge.innerText = total;

      const summary = document.getElementById('judokas-summary-text');
      if (summary) summary.innerText = `${total} judokas (${males} ♂️ / ${females} ♀️)`;

      const cMale = document.getElementById('count-male');
      if (cMale) cMale.innerText = males;
      const cFemale = document.getElementById('count-female');
      if (cFemale) cFemale.innerText = females;
    }

    function setGenderFilter(genderVal, btnElement) {
      state.activeGenderFilter = genderVal;
      btnElement.parentElement.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('active'));
      btnElement.classList.add('active');
      renderJudokasTable();
      updateTournamentMatchSelector();
      updateScoreboardDropdowns();
    }

    function setCategoryFilter(catVal, btnElement) {
      state.activeCategoryFilter = catVal;
      btnElement.parentElement.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('active'));
      btnElement.classList.add('active');
      renderJudokasTable();
      updateTournamentMatchSelector();
      updateScoreboardDropdowns();
    }

    function getFilteredJudokas() {
      const query = (document.getElementById('table-search-input')?.value || '').toLowerCase().trim();

      return registeredJudokas.filter(j => {
        const matchesQuery = j.name.toLowerCase().includes(query) ||
                             j.dojo.toLowerCase().includes(query) ||
                             j.category.toLowerCase().includes(query) ||
                             (j.gender && j.gender.toLowerCase().includes(query)) ||
                             j.belt.toLowerCase().includes(query);

        if (!matchesQuery) return false;
        if (state.activeGenderFilter !== 'all' && j.gender !== state.activeGenderFilter) return false;
        if (state.activeCategoryFilter !== 'all' && !j.category.toLowerCase().includes(state.activeCategoryFilter.toLowerCase())) return false;
        return true;
      });
    }

    function renderJudokasTable() {
      const tbody = document.getElementById('judokas-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';

      registeredJudokas.sort(compareJudokas);
      const filtered = getFilteredJudokas();

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:24px; color:var(--slate-400);">No hay atletas registrados que coincidan con los filtros seleccionados.</td></tr>`;
        return;
      }

      filtered.forEach((j, index) => {
        const beltClass = getBeltTagClass(j.belt);
        const isFemale = j.gender === 'Femenino';
        const genderBadge = isFemale
          ? '<span class="gender-pill female">♀️ Fem</span>'
          : '<span class="gender-pill male">♂️ Masc</span>';

        const isWhiteCorner = (index % 2 === 0);
        const positionNumber = index + 1;
        const colorBadge = isWhiteCorner
          ? `<span class="pair-badge pair-white">⚪ ${positionNumber}º Blanco</span>`
          : `<span class="pair-badge pair-blue">🔵 ${positionNumber}º Azul</span>`;

        const cornerLoadButton = isWhiteCorner
          ? `<button class="btn-corner-only btn-load-white" onclick="loadJudokaToScoreboard('${j.id}', 'white')" title="Cargar en Tablero Blanco">⚪ Blanco</button>`
          : `<button class="btn-corner-only btn-load-blue" onclick="loadJudokaToScoreboard('${j.id}', 'blue')" title="Cargar en Tablero Azul">🔵 Azul</button>`;

        let pairMatchButton = '';
        if (isWhiteCorner && index + 1 < filtered.length) {
          const nextJudoka = filtered[index + 1];
          pairMatchButton = `<button class="btn-load-pair" onclick="loadOfficialMatchPair('${j.id}', '${nextJudoka.id}')" title="Cargar combate: ${j.name} (Blanco) vs ${nextJudoka.name} (Azul)">⚔️ Cargar Par (${positionNumber} vs ${positionNumber + 1})</button>`;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="text-align:center;">${colorBadge}</td>
          <td>
            <div style="display:flex; align-items:center; gap:8px;">
              ${genderBadge}
              <b>${escapeHtml(j.name)}</b>
            </div>
          </td>
          <td><span style="color:var(--sky); font-weight:700;">${escapeHtml(j.dojo)}</span></td>
          <td><b>${j.age}</b> años</td>
          <td><b>${j.weight} kg</b></td>
          <td><span class="belt-tag ${beltClass}">${escapeHtml(j.belt)}</span></td>
          <td><span style="color:var(--gold); font-weight:bold;">${escapeHtml(j.category)}</span></td>
          <td>${j.timeFormatted}</td>
          <td style="text-align:center;">
            <div class="cell-action-btns" style="justify-content:center;">
              ${pairMatchButton}
              ${cornerLoadButton}
              <button class="btn-mini btn-delete-row" onclick="deleteJudoka('${j.id}')" title="Eliminar">🗑️</button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });

      updateJudokasBadges();
    }

    function getBeltTagClass(belt) {
      const b = (belt || '').toLowerCase();
      if (b.includes('blanco')) return 'tag-white';
      if (b.includes('amarillo')) return 'tag-yellow';
      if (b.includes('naranja')) return 'tag-orange';
      if (b.includes('verde')) return 'tag-green';
      if (b.includes('azul')) return 'tag-blue';
      if (b.includes('marrón') || b.includes('marron')) return 'tag-brown';
      if (b.includes('negro')) return 'tag-black';
      return 'tag-white';
    }

    function deleteJudoka(id) {
      if (confirm('¿Eliminar a este atleta de las inscripciones?')) {
        registeredJudokas = registeredJudokas.filter(j => j.id !== id);
        saveJudokas();
        renderJudokasTable();
        updateScoreboardDropdowns();
        renderCategoryPoolsView();
        renderTournamentOrderView();
      }
    }

    function clearAllJudokas() {
      if (confirm('¿Deseas vaciar la lista de judokas inscritos y reiniciar la base de datos a 0?')) {
        registeredJudokas = [];
        matchHistory = [];
        categoryPlacements = {};
        dojoLeaderboard = {};
        localStorage.removeItem('newaza_judokas');
        localStorage.removeItem('newaza_history');
        localStorage.removeItem('newaza_category_placements');
        localStorage.removeItem('newaza_dojoLeaderboard');
        saveJudokas();
        renderJudokasTable();
        updateScoreboardDropdowns();
        renderCategoryPoolsView();
        renderTournamentOrderView();
        renderRankingTable();
        renderCategoryStandingsView();
        renderHistoryTable();
        resetMatch(true);

        if (window.location.protocol.startsWith('http')) {
          fetch('/api/tournament/reset', { method: 'POST' }).catch(() => {});
        }
        showToast('🧹 Base de datos vaciada por completo. Todo listo en 0.');
      }
    }

    function updateDojoDatalist() {
      const datalist = document.getElementById('dojo-datalist');
      if (!datalist) return;
      const dojos = Array.from(new Set(registeredJudokas.map(j => j.dojo)));
      datalist.innerHTML = dojos.map(d => `<option value="${escapeHtml(d)}">`).join('');
    }

    function openModal(modalId) {
      const el = document.getElementById(modalId);
      if (el) el.style.display = 'flex';
    }

    function exportFullTournamentBackupJSON() {
      const backupData = {
        app: 'kosen-judo-heikegani',
        version: lastServerStateVersion || 1,
        exportedAt: new Date().toISOString(),
        judokas: registeredJudokas,
        dojos: mesaRegisteredDojos,
        matchHistory: matchHistory,
        dojoLeaderboard: dojoLeaderboard,
        categoryPlacements: categoryPlacements,
        liveMatch: getLiveMatchObject()
      };

      const now = new Date();
      const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `respaldo_torneo_kosen_judo_${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('💾 ¡Copia de seguridad completa descargada exitosamente!', '#10b981');
    }

    function handleBackupFileSelected(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const data = JSON.parse(e.target.result);
          if (!data) throw new Error('Archivo de respaldo vacío o inválido');

          if (data.judokas && Array.isArray(data.judokas)) {
            registeredJudokas = data.judokas;
            localStorage.setItem('newaza_judokas', JSON.stringify(registeredJudokas));
          } else if (Array.isArray(data)) {
            registeredJudokas = data;
            localStorage.setItem('newaza_judokas', JSON.stringify(registeredJudokas));
          }

          if (data.dojos && Array.isArray(data.dojos)) {
            mesaRegisteredDojos = data.dojos;
            localStorage.setItem('newaza_registered_dojos', JSON.stringify(mesaRegisteredDojos));
          }

          if (data.matchHistory && Array.isArray(data.matchHistory)) {
            matchHistory = data.matchHistory;
            localStorage.setItem('newaza_history', JSON.stringify(matchHistory));
          }

          if (data.dojoLeaderboard && typeof data.dojoLeaderboard === 'object') {
            dojoLeaderboard = data.dojoLeaderboard;
            localStorage.setItem('newaza_dojoLeaderboard', JSON.stringify(dojoLeaderboard));
          }

          if (data.categoryPlacements && typeof data.categoryPlacements === 'object') {
            categoryPlacements = data.categoryPlacements;
            localStorage.setItem('newaza_category_placements', JSON.stringify(categoryPlacements));
          }

          renderJudokasTable();
          updateJudokasBadges();
          renderMesaDojosTable();
          updateDojosBadges();
          updateDojoDatalist();
          updateScoreboardDropdowns();
          updateTournamentMatchSelector();
          renderCategoryPoolsView();
          renderTournamentOrderView();
          renderRankingTable();
          renderCategoryStandingsView();
          renderHistoryTable();

          if (data.liveMatch) {
            applyLiveMatchFromServer(data.liveMatch);
          }

          syncTournamentStateToServer();
          closeModal('modal-backup-manager');
          showToast('🎉 ¡Torneo restaurado con éxito desde la copia de seguridad!', '#10b981');
          alert(`✅ ¡Restauración Completada!\n\nSe han restaurado:\n• ${registeredJudokas.length} Judokas inscritos\n• ${mesaRegisteredDojos.length} Dojos / Clubes\n• ${matchHistory.length} Combates disputados.`);
        } catch (err) {
          alert('❌ Error al procesar el archivo de respaldo: ' + err.message);
        }
      };
      reader.readAsText(file);
    }

    function exportJudokasJSON() {
      registeredJudokas.sort(compareJudokas);
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(registeredJudokas, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "judokas_newaza_inscritos.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    }

    function loadDemo50Judokas() {
      registeredJudokas = [...DEMO_50_JUDOKAS];
      registeredJudokas.sort(compareJudokas);
      saveJudokas();
      renderJudokasTable();
      updateDojoDatalist();
      updateScoreboardDropdowns();
      updateTournamentMatchSelector();
      renderCategoryPoolsView();
      renderTournamentOrderView();
      alert('✨ ¡Base de datos de 50 judokas clasificada y llaves generadas con éxito!');
    }

    function updateScoreboardDropdowns() {
      registeredJudokas.sort(compareJudokas);

      const whiteJudokas = registeredJudokas.filter((_, idx) => idx % 2 === 0);
      const blueJudokas = registeredJudokas.filter((_, idx) => idx % 2 === 1);

      const whiteSelect = document.getElementById('white-select-judoka');
      if (whiteSelect) {
        const currentVal = whiteSelect.value;
        whiteSelect.innerHTML = `<option value="">-- Seleccionar Judoka Blanco (1º) --</option>`;

        const optgroupFem = document.createElement('optgroup');
        optgroupFem.label = '♀️ Rama Femenina (Blanco)';
        const optgroupMasc = document.createElement('optgroup');
        optgroupMasc.label = '♂️ Rama Masculina (Blanco)';

        whiteJudokas.forEach((j) => {
          const opt = document.createElement('option');
          opt.value = j.id;
          const gIcon = j.gender === 'Femenino' ? '♀️' : '♂️';
          opt.textContent = `⚪ ${gIcon} ${j.name} (${j.dojo}) - ${j.category} [${j.weight}kg]`;

          if (j.gender === 'Femenino') optgroupFem.appendChild(opt);
          else optgroupMasc.appendChild(opt);
        });

        if (optgroupFem.children.length > 0) whiteSelect.appendChild(optgroupFem);
        if (optgroupMasc.children.length > 0) whiteSelect.appendChild(optgroupMasc);
        if (currentVal) whiteSelect.value = currentVal;
      }

      const blueSelect = document.getElementById('blue-select-judoka');
      if (blueSelect) {
        const currentVal = blueSelect.value;
        blueSelect.innerHTML = `<option value="">-- Seleccionar Judoka Azul (2º) --</option>`;

        const optgroupFem = document.createElement('optgroup');
        optgroupFem.label = '♀️ Rama Femenina (Azul)';
        const optgroupMasc = document.createElement('optgroup');
        optgroupMasc.label = '♂️ Rama Masculina (Azul)';

        blueJudokas.forEach((j) => {
          const opt = document.createElement('option');
          opt.value = j.id;
          const gIcon = j.gender === 'Femenino' ? '♀️' : '♂️';
          opt.textContent = `🔵 ${gIcon} ${j.name} (${j.dojo}) - ${j.category} [${j.weight}kg]`;

          if (j.gender === 'Femenino') optgroupFem.appendChild(opt);
          else optgroupMasc.appendChild(opt);
        });

        if (optgroupFem.children.length > 0) blueSelect.appendChild(optgroupFem);
        if (optgroupMasc.children.length > 0) blueSelect.appendChild(optgroupMasc);
        if (currentVal) blueSelect.value = currentVal;
      }
    }

    // ==========================================
    // 7. PROGRAMACIÓN DEL ORDEN OFICIAL DE COMBATES DEL EVENTO (RONDA A RONDA)
    // ==========================================
    function getPoolWinner(pool, history = matchHistory) {
      if (!pool || !pool.judokas || pool.judokas.length === 0) return null;
      if (pool.judokas.length === 1) return pool.judokas[0];

      if (pool.type === 'best_of_3' && pool.judokas.length === 2) {
        const j1 = pool.judokas[0];
        const j2 = pool.judokas[1];
        let j1Wins = 0;
        let j2Wins = 0;
        let j1Ippons = 0;
        let j2Ippons = 0;

        history.forEach(m => {
          if ((m.whiteJudokaId === j1.id && m.blueJudokaId === j2.id) || (m.whiteJudokaId === j2.id && m.blueJudokaId === j1.id)) {
            const isJ1Win = (m.result === 'white' && m.whiteJudokaId === j1.id) || (m.result === 'blue' && m.blueJudokaId === j1.id);
            const isJ2Win = (m.result === 'white' && m.whiteJudokaId === j2.id) || (m.result === 'blue' && m.blueJudokaId === j2.id);
            if (isJ1Win) j1Wins++;
            if (isJ2Win) j2Wins++;

            if (m.whiteScore && m.whiteJudokaId === j1.id) {
              const iMatch = m.whiteScore.match(/(\d+)\s*I/i);
              if (iMatch) j1Ippons += parseInt(iMatch[1], 10);
            }
            if (m.blueScore && m.blueJudokaId === j1.id) {
              const iMatch = m.blueScore.match(/(\d+)\s*I/i);
              if (iMatch) j1Ippons += parseInt(iMatch[1], 10);
            }
            if (m.whiteScore && m.whiteJudokaId === j2.id) {
              const iMatch = m.whiteScore.match(/(\d+)\s*I/i);
              if (iMatch) j2Ippons += parseInt(iMatch[1], 10);
            }
            if (m.blueScore && m.blueJudokaId === j2.id) {
              const iMatch = m.blueScore.match(/(\d+)\s*I/i);
              if (iMatch) j2Ippons += parseInt(iMatch[1], 10);
            }
          }
        });

        if (j2Wins > j1Wins) return j2;
        if (j1Wins > j2Wins) return j1;
        if (j2Ippons > j1Ippons) return j2;
        return j1;
      }

      if (pool.type === 'triangular' && pool.judokas.length === 3) {
        const poolIds = pool.judokas.map(j => j.id);
        const stats = {};
        pool.judokas.forEach(j => { stats[j.id] = { judoka: j, wins: 0, ippons: 0 }; });

        history.forEach(m => {
          if (poolIds.includes(m.whiteJudokaId) && poolIds.includes(m.blueJudokaId)) {
            if (m.result === 'white' && stats[m.whiteJudokaId]) stats[m.whiteJudokaId].wins++;
            if (m.result === 'blue' && stats[m.blueJudokaId]) stats[m.blueJudokaId].wins++;

            if (m.whiteScore && stats[m.whiteJudokaId]) {
              const iMatch = m.whiteScore.match(/(\d+)\s*I/i);
              if (iMatch) stats[m.whiteJudokaId].ippons += parseInt(iMatch[1], 10);
            }
            if (m.blueScore && stats[m.blueJudokaId]) {
              const iMatch = m.blueScore.match(/(\d+)\s*I/i);
              if (iMatch) stats[m.blueJudokaId].ippons += parseInt(iMatch[1], 10);
            }
          }
        });

        const sorted = Object.values(stats).sort((a, b) => {
          if (b.wins !== a.wins) return b.wins - a.wins;
          return b.ippons - a.ippons;
        });

        return sorted[0].judoka;
      }

      return pool.judokas[0];
    }

    function generateTournamentFightOrder() {
      registeredJudokas.sort(compareJudokas);

      const categoryGroups = {};
      registeredJudokas.forEach(j => {
        const key = `${j.gender} — ${j.category}`;
        if (!categoryGroups[key]) {
          categoryGroups[key] = {
            gender: j.gender,
            category: j.category,
            timeFormatted: j.timeFormatted,
            durationSec: j.durationSec,
            judokas: []
          };
        }
        categoryGroups[key].judokas.push(j);
      });

      const categoryPoolsList = [];
      Object.keys(categoryGroups).forEach(key => {
        const group = categoryGroups[key];
        const pools = partitionJudokasIntoPools(group.judokas);
        categoryPoolsList.push({
          group,
          pools
        });
      });

      const round1Fights = [];
      const round2Fights = [];
      const round3Fights = [];
      const finalsFights = [];

      categoryPoolsList.forEach(cp => {
        const group = cp.group;
        const gIcon = group.gender === 'Femenino' ? '♀️' : '♂️';

        cp.pools.forEach((pool) => {
          const poolName = pool.name;

          if (pool.type === 'best_of_3' && pool.judokas.length === 2) {
            const j1 = pool.judokas[0];
            const j2 = pool.judokas[1];
            // Ronda 1: J1 vs J2
            round1Fights.push({
              round: 1,
              roundTitle: 'Ronda 1',
              categoryKey: `${group.gender} — ${group.category}`,
              categoryLabel: `${gIcon} ${group.category}`,
              poolName: poolName,
              poolType: 'best_of_3',
              fightLabel: 'Combate 1',
              white: j1,
              blue: j2,
              durationSec: group.durationSec,
              timeFormatted: group.timeFormatted
            });
            // Ronda 2: J2 vs J1 (Inversión)
            round2Fights.push({
              round: 2,
              roundTitle: 'Ronda 2',
              categoryKey: `${group.gender} — ${group.category}`,
              categoryLabel: `${gIcon} ${group.category}`,
              poolName: poolName,
              poolType: 'best_of_3',
              fightLabel: 'Combate 2 (Inversión)',
              white: j2,
              blue: j1,
              durationSec: group.durationSec,
              timeFormatted: group.timeFormatted
            });
            // Ronda 3: J1 vs J2 (Desempate)
            round3Fights.push({
              round: 3,
              roundTitle: 'Ronda 3 (Desempate)',
              categoryKey: `${group.gender} — ${group.category}`,
              categoryLabel: `${gIcon} ${group.category}`,
              poolName: poolName,
              poolType: 'best_of_3',
              fightLabel: 'Combate 3 (Desempate)',
              white: j1,
              blue: j2,
              durationSec: group.durationSec,
              timeFormatted: group.timeFormatted
            });
          } else if (pool.type === 'triangular' && pool.judokas.length === 3) {
            const j0 = pool.judokas[0];
            const j1 = pool.judokas[1];
            const j2 = pool.judokas[2];
            // Ronda 1: J0 vs J1
            round1Fights.push({
              round: 1,
              roundTitle: 'Ronda 1',
              categoryKey: `${group.gender} — ${group.category}`,
              categoryLabel: `${gIcon} ${group.category}`,
              poolName: poolName,
              poolType: 'triangular',
              fightLabel: 'Ronda 1 (Triangular)',
              white: j0,
              blue: j1,
              durationSec: group.durationSec,
              timeFormatted: group.timeFormatted
            });
            // Ronda 2: J1 vs J2
            round2Fights.push({
              round: 2,
              roundTitle: 'Ronda 2',
              categoryKey: `${group.gender} — ${group.category}`,
              categoryLabel: `${gIcon} ${group.category}`,
              poolName: poolName,
              poolType: 'triangular',
              fightLabel: 'Ronda 2 (Triangular)',
              white: j1,
              blue: j2,
              durationSec: group.durationSec,
              timeFormatted: group.timeFormatted
            });
            // Ronda 3: J0 vs J2
            round3Fights.push({
              round: 3,
              roundTitle: 'Ronda 3',
              categoryKey: `${group.gender} — ${group.category}`,
              categoryLabel: `${gIcon} ${group.category}`,
              poolName: poolName,
              poolType: 'triangular',
              fightLabel: 'Ronda 3 (Triangular)',
              white: j0,
              blue: j2,
              durationSec: group.durationSec,
              timeFormatted: group.timeFormatted
            });
          }
        });

        // Gran Final para categorías de 4 o 5 judokas
        if (group.judokas.length === 4 || group.judokas.length === 5) {
          const is4 = group.judokas.length === 4;
          const finalWhite = getPoolWinner(cp.pools[0]) || group.judokas[0];
          const finalBlue = getPoolWinner(cp.pools[1]) || (is4 ? group.judokas[2] : group.judokas[3]);
          finalsFights.push({
            round: 4,
            roundTitle: 'Gran Final',
            categoryKey: `${group.gender} — ${group.category}`,
            categoryLabel: `${gIcon} ${group.category}`,
            poolName: 'Gran Final',
            poolType: 'final',
            fightLabel: is4 ? 'Final (Ganador Llave A vs Ganador Llave B)' : 'Final (Ganador Triangular A vs Ganador Serie B)',
            white: finalWhite,
            blue: finalBlue,
            durationSec: group.durationSec,
            timeFormatted: group.timeFormatted
          });
        }
      });

      const allTournamentFights = [];
      let matchCounter = 1;

      [round1Fights, round2Fights, round3Fights, finalsFights].forEach(roundGroup => {
        roundGroup.forEach(f => {
          f.matchNumber = matchCounter++;
          f.fightId = `f_${f.categoryKey.replace(/[^a-zA-Z0-9]/g, '_')}_r${f.round}_${f.white.id}_${f.blue.id}`;
          allTournamentFights.push(f);
        });
      });

      return {
        allTournamentFights,
        round1Fights,
        round2Fights,
        round3Fights,
        finalsFights
      };
    }

    function renderTournamentOrderView() {
      const container = document.getElementById('tournament-order-blocks-container');
      if (!container) return;
      container.innerHTML = '';

      const orderData = generateTournamentFightOrder();
      const allFights = orderData.allTournamentFights;

      if (allFights.length === 0) {
        container.innerHTML = `<div class="card-panel" style="text-align:center; color:var(--slate-400); padding:32px;">No hay atletas inscritos para generar el orden de combate.</div>`;
        return;
      }

      const progress = getTournamentProgressStats();

      // BANNER SUPERIOR DE CONTROL DE COMBATES REALIZADOS
      const progressContainer = document.createElement('div');
      progressContainer.className = 'tournament-progress-container';
      progressContainer.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
          <img src="heikegani.jpg" style="width:38px; height:38px; border-radius:8px; border:2px solid var(--gold); object-fit:contain;" alt="Heikegani Logo">
          <div>
            <div style="font-size:14px; font-weight:900; color:#fff; display:flex; align-items:center; gap:8px;">
              📊 CONTROL OFICIAL DE COMBATES REALIZADOS
              <span class="fight-status-badge ${progress.isFinished ? 'fight-status-done' : 'fight-status-active'}">
                ${progress.isFinished ? '🏆 TORNEO FINALIZADO' : '⚡ EN PROGRESO'}
              </span>
            </div>
            <div style="font-size:12px; color:var(--slate-300); margin-top:2px;">
              <b>${progress.completedCount}</b> de <b>${progress.totalScheduled}</b> combates disputados (<b>${progress.percent}%</b> completado) • <b>${progress.totalIppons}</b> Ippones totales
            </div>
          </div>
        </div>
        <div class="tournament-progress-bar-bg" style="min-width:180px;">
          <div class="tournament-progress-bar-fill" style="width:${progress.percent}%;"></div>
        </div>
        <div style="display:flex; gap:8px;">
          ${progress.isFinished ? `
            <button class="btn-action" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:900; box-shadow:0 0 15px rgba(245,158,11,0.5);" onclick="openTournamentFinishedOverlay()">
              🏆 Ver Fin del Torneo
            </button>
          ` : ''}
          <button class="btn-action" onclick="renderTournamentOrderView()">🔄 Actualizar</button>
        </div>
      `;
      container.appendChild(progressContainer);

      const blocks = [
        { title: '🟦 BLOQUE 1: RONDA 1 DEL EVENTO (1er Combate de cada Categoría)', fights: orderData.round1Fights, badge: 'Ronda 1', badgeColor: '#2563eb' },
        { title: '🟩 BLOQUE 2: RONDA 2 DEL EVENTO (2do Combate de cada Categoría)', fights: orderData.round2Fights, badge: 'Ronda 2', badgeColor: '#10b981' },
        { title: '🟨 BLOQUE 3: RONDA 3 DEL EVENTO (3er Combate / Desempates)', fights: orderData.round3Fights, badge: 'Ronda 3', badgeColor: '#f59e0b' },
        { title: '🏆 BLOQUE 4: FASE DE GRANDES FINALES DE CATEGORÍA', fights: orderData.finalsFights, badge: 'Finales', badgeColor: '#8b5cf6' }
      ];

      blocks.forEach(block => {
        if (block.fights.length === 0) return;

        const blockEl = document.createElement('div');
        blockEl.className = 'order-round-block';

        let fightsCardsHtml = '';
        block.fights.forEach(f => {
          const status = isFightCompleted(f);
          const isCompleted = status.completed;
          const isCurrent = (state.currentMatchIndex === (f.matchNumber - 1));

          let cardClass = 'order-fight-card';
          let statusBadgeHtml = '';
          let actionBtnHtml = '';

          if (status.unneeded) {
            cardClass += ' fight-completed';
            statusBadgeHtml = `<span class="fight-status-badge fight-status-done" style="background:rgba(245,158,11,0.2); color:var(--gold); border:1px solid var(--gold);">✨ Serie 2-0 Definida (${escapeHtml(status.winner)})</span>`;
            actionBtnHtml = `<span style="font-size:11px; color:var(--slate-400); font-weight:bold;">No requerido</span>`;
          } else if (isCompleted) {
            cardClass += ' fight-completed';
            statusBadgeHtml = `<span class="fight-status-badge fight-status-done">✅ Realizado • ${escapeHtml(status.match ? status.match.winner : 'Completado')}</span>`;
            actionBtnHtml = `<div style="display:flex; gap:6px;"><button class="btn-pool-load-match" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:900;" onclick="callMatchByNumber(${f.matchNumber})" title="Llamar a tatami">📢 Llamar</button><button class="btn-pool-load-match" style="background:#475569; color:#fff;" onclick="loadMatchByNumber(${f.matchNumber})">🔄 Repetir</button></div>`;
          } else if (isCurrent) {
            cardClass += ' fight-current';
            statusBadgeHtml = `<span class="fight-status-badge fight-status-active">⚡ En Mesa de Control</span>`;
            actionBtnHtml = `<div style="display:flex; gap:6px;"><button class="btn-pool-load-match" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:900; box-shadow:0 0 12px rgba(245,158,11,0.6);" onclick="callMatchByNumber(${f.matchNumber})" title="Llamar a tatami">📢 Llamar</button><button class="btn-pool-load-match" style="background:#2563eb; color:#fff;" onclick="loadMatchByNumber(${f.matchNumber})">⚔️ En Mesa</button></div>`;
          } else {
            statusBadgeHtml = `<span class="fight-status-badge fight-status-pending">⏳ Por Disputar</span>`;
            actionBtnHtml = `<div style="display:flex; gap:6px;"><button class="btn-pool-load-match" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:900;" onclick="callMatchByNumber(${f.matchNumber})" title="Llamar competidores al tatami">📢 Llamar</button><button class="btn-pool-load-match" onclick="loadMatchByNumber(${f.matchNumber})">⚔️ Cargar</button></div>`;
          }

          fightsCardsHtml += `
            <div class="${cardClass}">
              <div class="order-fight-header">
                <span class="order-fight-num">#${f.matchNumber}</span>
                <span style="font-weight:bold; color:#fff;">${escapeHtml(f.categoryLabel)}</span>
                <span style="color:var(--slate-400);">${escapeHtml(f.poolName)}</span>
                <div style="margin-left:auto;">${statusBadgeHtml}</div>
              </div>

              <div class="order-judoka-corner order-white-corner">
                <div>⚪ <b>${escapeHtml(f.white.name)}</b> <span style="font-size:11px; opacity:0.8;">(${escapeHtml(f.white.dojo)})</span></div>
                <div style="font-size:11px;">${f.white.weight}kg | ${f.white.belt}</div>
              </div>

              <div class="order-judoka-corner order-blue-corner">
                <div>🔵 <b>${escapeHtml(f.blue.name)}</b> <span style="font-size:11px; opacity:0.8;">(${escapeHtml(f.blue.dojo)})</span></div>
                <div style="font-size:11px;">${f.blue.weight}kg | ${f.blue.belt}</div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2px;">
                <span style="font-size:11px; color:var(--slate-400);">${f.fightLabel} • ⏱️ ${f.timeFormatted}</span>
                ${actionBtnHtml}
              </div>
            </div>
          `;
        });

        blockEl.innerHTML = `
          <div class="order-round-header">
            <div class="order-round-title">
              <span>${block.title}</span>
            </div>
            <span style="background:${block.badgeColor}; color:#fff; font-size:11px; font-weight:800; padding:3px 10px; border-radius:12px;">
              ${block.fights.length} Combates Programados
            </span>
          </div>

          <div class="order-fights-grid">
            ${fightsCardsHtml}
          </div>
        `;

        container.appendChild(blockEl);
      });
    }

    function isFightCompleted(f) {
      if (!f) return { completed: false, match: null, unneeded: false };

      // 1. Coincidencia directa por scheduledFightId
      let directMatch = null;
      if (f.fightId) {
        directMatch = matchHistory.find(m => m.scheduledFightId === f.fightId);
      }

      // 2. Coincidencia por categoría, ronda y judokas
      if (!directMatch && f.white && f.blue) {
        directMatch = matchHistory.find(m => 
          m.categoryKey === f.categoryKey &&
          m.round === f.round &&
          ((m.whiteJudokaId === f.white.id && m.blueJudokaId === f.blue.id) ||
           (m.whiteJudokaId === f.blue.id && m.blueJudokaId === f.white.id))
        );
      }

      if (directMatch) {
        return { completed: true, match: directMatch, unneeded: false };
      }

      // 3. Comprobar si es Ronda 3 (Desempate) de serie al mejor de 3 donde ya un judoka ganó 2-0
      if (f.round === 3 && f.poolType === 'best_of_3' && f.white && f.blue) {
        let wWins = 0;
        let bWins = 0;
        matchHistory.forEach(m => {
          if (m.categoryKey === f.categoryKey &&
             ((m.whiteJudokaId === f.white.id && m.blueJudokaId === f.blue.id) || 
              (m.whiteJudokaId === f.blue.id && m.blueJudokaId === f.white.id))) {
            
            const isWhiteWon = (m.result === 'white' && m.whiteJudokaId === f.white.id) || (m.result === 'blue' && m.blueJudokaId === f.white.id);
            const isBlueWon = (m.result === 'white' && m.whiteJudokaId === f.blue.id) || (m.result === 'blue' && m.blueJudokaId === f.blue.id);

            if (isWhiteWon) wWins++;
            else if (isBlueWon) bWins++;
          }
        });
        if (wWins >= 2 || bWins >= 2) {
          return { completed: true, match: null, unneeded: true, winner: wWins >= 2 ? f.white.name : f.blue.name };
        }
      }

      return { completed: false, match: null, unneeded: false };
    }

    function getOfficialMatchPairs() {
      const orderData = generateTournamentFightOrder();
      return orderData.allTournamentFights;
    }

    function updateTournamentMatchSelector() {
      const select = document.getElementById('select-tournament-match');
      const counter = document.getElementById('current-match-counter');
      const bannerNum = document.getElementById('live-active-match-number');
      const bannerCat = document.getElementById('live-active-match-category');
      const bannerStatus = document.getElementById('live-active-match-status');
      const bannerFighters = document.getElementById('live-active-match-fighters');
      if (!select) return;

      const fights = getOfficialMatchPairs();
      select.innerHTML = '';

      if (fights.length === 0) {
        select.innerHTML = `<option value="">-- No hay combates programados en orden de combate --</option>`;
        if (counter) counter.innerText = `0 Combates`;
        if (bannerNum) bannerNum.innerText = `⚔️ COMBATE LIBRE`;
        if (bannerCat) bannerCat.innerText = `Mesa Técnica Lista`;
        if (bannerStatus) {
          bannerStatus.innerText = `🟢 EN MESA`;
          bannerStatus.style.background = 'rgba(16, 185, 129, 0.2)';
          bannerStatus.style.color = '#34d399';
        }
        if (bannerFighters) {
          const wName = document.getElementById('white-name-input') ? document.getElementById('white-name-input').value : 'Judoka Blanco';
          const bName = document.getElementById('blue-name-input') ? document.getElementById('blue-name-input').value : 'Judoka Azul';
          bannerFighters.innerHTML = `⚪ ${escapeHtml(wName)} vs 🔵 ${escapeHtml(bName)}`;
        }
        return;
      }

      let completedCount = 0;
      let pendingCount = 0;

      const pendingGroup = document.createElement('optgroup');
      pendingGroup.label = '⏳ COMBATES PENDIENTES EN MESA (ORDEN DE COMBATE)';

      const completedGroup = document.createElement('optgroup');
      completedGroup.label = '✅ COMBATES YA FINALIZADOS';

      fights.forEach((f, idx) => {
        const status = isFightCompleted(f);
        const opt = document.createElement('option');
        opt.value = idx;

        if (status.completed || status.unneeded) {
          completedCount++;
          const tag = status.unneeded ? ' [✨ Serie 2-0 Definida]' : ' [✅ Realizado]';
          opt.textContent = `✅ #${f.matchNumber} [${f.roundTitle}] ${f.categoryLabel} (${f.poolName}): ⚪ ${f.white.name} vs 🔵 ${f.blue.name}${tag}`;
          completedGroup.appendChild(opt);
        } else {
          pendingCount++;
          opt.textContent = `⏳ #${f.matchNumber} [${f.roundTitle}] ${f.categoryLabel}: ⚪ ${f.white.name} vs 🔵 ${f.blue.name}`;
          pendingGroup.appendChild(opt);
        }
      });

      if (pendingGroup.children.length > 0) {
        select.appendChild(pendingGroup);
      }
      if (completedGroup.children.length > 0) {
        select.appendChild(completedGroup);
      }

      if (state.currentMatchIndex >= fights.length) state.currentMatchIndex = 0;
      if (state.currentMatchIndex >= 0) {
        select.value = state.currentMatchIndex;
      }

      const curFight = fights[state.currentMatchIndex];
      if (curFight) {
        const curStatus = isFightCompleted(curFight);
        const statusTag = curStatus.unneeded ? ' • [✨ Serie Definida]' : (curStatus.completed ? ' • [✅ Realizado]' : ' • [⏳ Pendiente]');
        if (counter) {
          counter.innerText = `Combate ${state.currentMatchIndex + 1} de ${fights.length} (${completedCount}/${fights.length} completados)${statusTag}`;
        }
        if (bannerNum) {
          bannerNum.innerText = `⚔️ COMBATE #${curFight.matchNumber} DE ${fights.length}`;
        }
        if (bannerCat) {
          bannerCat.innerText = `⚡ ${curFight.categoryLabel} • ${curFight.poolName} • ${curFight.roundTitle}`;
        }
        if (bannerStatus) {
          if (curStatus.completed) {
            bannerStatus.innerText = curStatus.unneeded ? '✨ SERIE DEFINIDA' : '✅ RESULTADO REGISTRADO';
            bannerStatus.style.background = 'rgba(59, 130, 246, 0.2)';
            bannerStatus.style.color = '#93c5fd';
            bannerStatus.style.borderColor = '#3b82f6';
          } else {
            bannerStatus.innerText = '🟢 EN MESA TÉCNICA';
            bannerStatus.style.background = 'rgba(16, 185, 129, 0.2)';
            bannerStatus.style.color = '#34d399';
            bannerStatus.style.borderColor = '#10b981';
          }
        }
        if (bannerFighters) {
          bannerFighters.innerHTML = `⚪ <b>${escapeHtml(curFight.white.name)}</b> <span style="font-size:12px; color:#cbd5e1;">(${escapeHtml(curFight.white.dojo)})</span> <span style="color:var(--gold); margin:0 6px;">VS</span> 🔵 <b>${escapeHtml(curFight.blue.name)}</b> <span style="font-size:12px; color:#93c5fd;">(${escapeHtml(curFight.blue.dojo)})</span>`;
        }
      } else {
        if (counter) {
          counter.innerText = `${fights.length} Combates (${completedCount}/${fights.length} completados)`;
        }
      }
    }

    function loadMatchByNumber(matchNum) {
      const fights = getOfficialMatchPairs();
      const idx = fights.findIndex(f => f.matchNumber === matchNum);
      if (idx !== -1) {
        loadMatchByIndex(idx, false);
      }
    }

    function loadMatchByJudokasAndRound(whiteId, blueId, round = 1, categoryKey = null) {
      const allFights = getOfficialMatchPairs();
      let matchIdx = allFights.findIndex(f => 
        f.round === round &&
        (!categoryKey || f.categoryKey === categoryKey) &&
        f.white.id === whiteId && f.blue.id === blueId
      );

      if (matchIdx === -1) {
        matchIdx = allFights.findIndex(f => 
          f.round === round &&
          (!categoryKey || f.categoryKey === categoryKey) &&
          ((f.white.id === whiteId && f.blue.id === blueId) || (f.white.id === blueId && f.blue.id === whiteId))
        );
      }

      if (matchIdx !== -1) {
        loadMatchByIndex(matchIdx, false);
      } else {
        loadOfficialMatchPair(whiteId, blueId);
      }
    }

    function onTournamentMatchSelect(indexStr) {
      if (indexStr === '') return;
      const idx = parseInt(indexStr, 10);
      loadMatchByIndex(idx, false);
    }

    function navigateTournamentMatch(direction) {
      const pairs = getOfficialMatchPairs();
      if (pairs.length === 0) return;

      let nextIndex = state.currentMatchIndex;
      let found = false;

      // Buscar en la dirección solicitada el siguiente combate pendiente en el orden de combate
      for (let step = 1; step <= pairs.length; step++) {
        let candidate = (state.currentMatchIndex + (direction * step) + pairs.length * 10) % pairs.length;
        const status = isFightCompleted(pairs[candidate]);
        if (!status.completed && !status.unneeded) {
          nextIndex = candidate;
          found = true;
          break;
        }
      }

      // Si todos están completados, avanzar secuencialmente
      if (!found) {
        nextIndex = (state.currentMatchIndex + direction + pairs.length) % pairs.length;
      }

      loadMatchByIndex(nextIndex, true);
    }

    function loadNextOfficialPair() {
      const pairs = getOfficialMatchPairs();
      if (pairs.length === 0) {
        alert('No hay combates programados en el orden de combate del torneo.');
        return;
      }

      // Buscar el siguiente combate estrictamente PENDIENTE en el Orden de Combates oficial
      let nextPendingIndex = -1;
      
      // 1. Buscar hacia adelante desde el combate actual
      for (let i = state.currentMatchIndex + 1; i < pairs.length; i++) {
        const status = isFightCompleted(pairs[i]);
        if (!status.completed && !status.unneeded) {
          nextPendingIndex = i;
          break;
        }
      }

      // 2. Si no hay hacia adelante, buscar el primer pendiente desde el inicio del Orden de Combates
      if (nextPendingIndex === -1) {
        for (let i = 0; i < pairs.length; i++) {
          const status = isFightCompleted(pairs[i]);
          if (!status.completed && !status.unneeded) {
            nextPendingIndex = i;
            break;
          }
        }
      }

      if (nextPendingIndex !== -1) {
        loadMatchByIndex(nextPendingIndex, true);
        const nextFight = pairs[nextPendingIndex];
        showToast(`⚔️ Combate #${nextFight.matchNumber} en mesa: ${nextFight.white.name} vs ${nextFight.blue.name}`, '#10b981');
      } else {
        // Todos los combates del orden de combate han sido completados
        showToast('🎉 ¡Todos los combates del orden de combate han sido completados!', '#10b981');
        openTournamentFinishedOverlay();
      }
    }

    function loadMatchByIndex(index, force = false) {
      const pairs = getOfficialMatchPairs();
      if (!pairs[index]) return;

      const match = pairs[index];
      const status = isFightCompleted(match);

      if (!force && status.completed) {
        const winMsg = status.match && status.match.winner ? status.match.winner : (status.unneeded ? `Serie ya definida a favor de ${status.winner}` : 'Completado');
        const confirmReload = confirm(`⚠️ El Combate #${match.matchNumber} (${match.white.name} vs ${match.blue.name}) ya fue realizado previamente.\n\nResultado registrado: ${winMsg}\n\n¿Deseas volver a cargarlo en mesa técnica para corregir o revisar el resultado?`);
        if (!confirmReload) {
          return;
        }
      }

      state.currentMatchIndex = index;
      state.currentScheduledMatchNumber = match.matchNumber;
      state.currentScheduledFightId = match.fightId;
      state.currentCategoryKey = match.categoryKey;
      state.currentRound = match.round;

      loadJudokaToScoreboard(match.white.id, 'white');
      loadJudokaToScoreboard(match.blue.id, 'blue');
      resetMatch(false);

      updateTournamentMatchSelector();
      switchTab('scoreboard');
      playSound('bell');
      broadcastLiveMatchToServer(true);
    }

    function loadOfficialMatchPair(whiteId, blueId, optionalFightId = null) {
      const whiteJudoka = registeredJudokas.find(j => j.id === whiteId);
      const blueJudoka = registeredJudokas.find(j => j.id === blueId);

      if (!whiteJudoka || !blueJudoka) return;

      // 1. Buscar en el calendario oficial de combates
      const allFights = getOfficialMatchPairs();
      let matchedIndex = -1;

      if (optionalFightId) {
        matchedIndex = allFights.findIndex(f => f.fightId === optionalFightId);
      }

      if (matchedIndex === -1) {
        // Buscar el primer combate pendiente entre estos dos judokas
        matchedIndex = allFights.findIndex(f => 
          ((f.white.id === whiteId && f.blue.id === blueId) || (f.white.id === blueId && f.blue.id === whiteId)) &&
          !isFightCompleted(f).completed
        );
      }

      if (matchedIndex === -1) {
        // Si no hay pendiente, buscar cualquier combate entre estos dos judokas
        matchedIndex = allFights.findIndex(f => 
          (f.white.id === whiteId && f.blue.id === blueId) || (f.white.id === blueId && f.blue.id === whiteId)
        );
      }

      if (matchedIndex !== -1) {
        const fight = allFights[matchedIndex];
        state.currentMatchIndex = matchedIndex;
        state.currentScheduledMatchNumber = fight.matchNumber;
        state.currentScheduledFightId = fight.fightId;
        state.currentCategoryKey = fight.categoryKey;
        state.currentRound = fight.round;
      } else {
        // Combate amistoso o fuera de programación
        state.currentMatchIndex = -1;
        state.currentScheduledMatchNumber = null;
        state.currentScheduledFightId = `custom_${Date.now()}_${whiteId}_${blueId}`;
        state.currentCategoryKey = `${whiteJudoka.gender} — ${whiteJudoka.category}`;
        state.currentRound = 1;
      }

      loadJudokaToScoreboard(whiteJudoka.id, 'white');
      loadJudokaToScoreboard(blueJudoka.id, 'blue');
      resetMatch(false);

      updateTournamentMatchSelector();
      switchTab('scoreboard');
      playSound('bell');
    }

    // ==========================================
    // SISTEMA OFICIAL DE LLAMADO AL TATAMI (CON LOCUTOR POR VOZ)
    // ==========================================
    let isVoiceAnnouncerEnabled = true;
    let preferredSpanishVoice = null;

    let matchCallState = {
      white: { id: null, name: 'Judoka Blanco', dojo: 'Dojo Shiro', belt: 'Blanco', weight: '60 kg', category: 'General', time: '2:00 min' },
      blue: { id: null, name: 'Judoka Azul', dojo: 'Dojo Ao', belt: 'Azul', weight: '60 kg', category: 'General', time: '2:00 min' },
      matchNumber: 1,
      categoryLabel: 'Categoría Oficial',
      roundTitle: 'Ronda 1',
      poolName: 'Llave Principal',
      timeFormatted: '2:00 min',
      currentPhase: 'white' // 'white' | 'blue' | 'versus'
    };

    function initSpeechSynthesisVoice() {
      if (!('speechSynthesis' in window)) return;

      const updateVoices = () => {
        populateVoiceSelector();
      };

      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }

    function populateVoiceSelector() {
      if (!('speechSynthesis' in window)) return;
      const select = document.getElementById('select-tournament-voice');

      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const savedVoiceURI = localStorage.getItem('kosen_preferred_voice_uri') || '';

      if (select) {
        select.innerHTML = '';

        // Separar voces en español y otros idiomas
        const esVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));
        const otherVoices = voices.filter(v => !v.lang || !v.lang.toLowerCase().startsWith('es'));

        const esGroup = document.createElement('optgroup');
        esGroup.label = '🇪🇸 Voces en Español (Recomendadas)';

        esVoices.forEach(v => {
          const opt = document.createElement('option');
          opt.value = v.voiceURI || v.name;
          let flag = '🌎';
          const lang = v.lang.toLowerCase();
          if (lang.includes('es-es') || lang.includes('spain')) flag = '🇪🇸';
          else if (lang.includes('es-mx') || lang.includes('mexico')) flag = '🇲🇽';
          else if (lang.includes('es-co') || lang.includes('colombia')) flag = '🇨🇴';
          else if (lang.includes('es-us') || lang.includes('united states')) flag = '🇺🇸';
          else if (lang.includes('es-ar') || lang.includes('argentina')) flag = '🇦🇷';

          const isNatural = v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Online');
          opt.textContent = `${flag} ${v.name} ${isNatural ? '✨ (Natural)' : ''}`;
          esGroup.appendChild(opt);
        });

        if (esGroup.children.length > 0) {
          select.appendChild(esGroup);
        }

        if (otherVoices.length > 0) {
          const otherGroup = document.createElement('optgroup');
          otherGroup.label = '🌐 Otras Voces del Sistema';
          otherVoices.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.voiceURI || v.name;
            opt.textContent = `${v.name} (${v.lang})`;
            otherGroup.appendChild(opt);
          });
          select.appendChild(otherGroup);
        }
      }

      // Seleccionar voz guardada o la mejor disponible por defecto
      const esVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));
      if (savedVoiceURI && voices.some(v => (v.voiceURI || v.name) === savedVoiceURI)) {
        preferredSpanishVoice = voices.find(v => (v.voiceURI || v.name) === savedVoiceURI);
      } else {
        // Priorizar voces naturales en español
        preferredSpanishVoice = esVoices.find(v => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Online')) && (v.lang.includes('MX') || v.lang.includes('CO') || v.lang.includes('ES'))) ||
                                esVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Online')) ||
                                esVoices.find(v => v.name.includes('Paulina') || v.name.includes('Sabina') || v.name.includes('Jorge') || v.name.includes('Helena')) ||
                                esVoices[0] ||
                                voices[0];
      }

      if (select && preferredSpanishVoice) {
        select.value = preferredSpanishVoice.voiceURI || preferredSpanishVoice.name;
      }
    }

    function onVoiceSelected(voiceIdentifier) {
      if (!('speechSynthesis' in window)) return;
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => (v.voiceURI || v.name) === voiceIdentifier);
      if (voice) {
        preferredSpanishVoice = voice;
        localStorage.setItem('kosen_preferred_voice_uri', voice.voiceURI || voice.name);
        showToast(`🎙️ Voz activada: ${voice.name}`, '#2563eb');
      }
    }

    function testSelectedVoice() {
      speakAnnouncement("Al centro, con uniforme blanco: Yudoka Mateo. Con uniforme azul: Yudoka Elkin.", 1.0, 1.0);
    }

    function toggleVoiceAnnouncer() {
      isVoiceAnnouncerEnabled = !isVoiceAnnouncerEnabled;
      const btn = document.getElementById('btn-toggle-voice-announcer');
      if (btn) {
        btn.innerText = isVoiceAnnouncerEnabled ? '🗣️ Voz: ACTIVA' : '🔇 Voz: SILENCIO';
        btn.style.background = isVoiceAnnouncerEnabled ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)';
        btn.style.color = isVoiceAnnouncerEnabled ? '#34d399' : '#f87171';
        btn.style.borderColor = isVoiceAnnouncerEnabled ? '#10b981' : '#ef4444';
      }
      showToast(isVoiceAnnouncerEnabled ? '🗣️ Locutor de voz del torneo ACTIVADO' : '🔇 Locutor de voz SILENCIADO', isVoiceAnnouncerEnabled ? '#10b981' : '#64748b');
      if (!isVoiceAnnouncerEnabled && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    function formatSpeechPhonetics(text) {
      if (!text) return '';
      return String(text)
        .replace(/\bjudokas\b/gi, 'yudokas')
        .replace(/\bjudoka\b/gi, 'yudoka')
        .replace(/\bjudos\b/gi, 'yudos')
        .replace(/\bjudo\b/gi, 'yudo')
        .replace(/\bjujitsu\b/gi, 'yuyitsu')
        .replace(/\bjujutsu\b/gi, 'yuyutsu');
    }

    let activeSpeechUtterance = null;

    function speakAnnouncement(text, rate = 1.0, pitch = 1.0) {
      if (!isVoiceAnnouncerEnabled || !('speechSynthesis' in window)) return;

      try {
        window.speechSynthesis.cancel(); // Cancelar cualquier locución anterior

        const phoneticText = formatSpeechPhonetics(text);
        activeSpeechUtterance = new SpeechSynthesisUtterance(phoneticText);
        activeSpeechUtterance.lang = 'es-ES';
        if (preferredSpanishVoice) activeSpeechUtterance.voice = preferredSpanishVoice;
        activeSpeechUtterance.rate = rate; // Velocidad de locución
        activeSpeechUtterance.pitch = pitch; // Tono
        activeSpeechUtterance.volume = 1.0;
        activeSpeechUtterance.onend = () => { activeSpeechUtterance = null; };
        activeSpeechUtterance.onerror = () => { activeSpeechUtterance = null; };

        window.speechSynthesis.speak(activeSpeechUtterance);
      } catch (err) {
        console.warn('Speech synthesis no disponible:', err);
      }
    }

    function repeatCurrentPhaseVoice() {
      if (matchCallState.currentPhase === 'white') {
        const text = `Al centro, con uniforme blanco: ${matchCallState.white.name}${matchCallState.white.dojo ? ', del club ' + matchCallState.white.dojo : ''}.`;
        speakAnnouncement(text, 1.0, 1.05);
      } else if (matchCallState.currentPhase === 'blue') {
        const text = `Con uniforme azul: ${matchCallState.blue.name}${matchCallState.blue.dojo ? ', del club ' + matchCallState.blue.dojo : ''}.`;
        speakAnnouncement(text, 1.0, 0.98);
      } else if (matchCallState.currentPhase === 'versus') {
        const text = `Al centro del tatami. Con uniforme blanco: ${matchCallState.white.name}. Con uniforme azul: ${matchCallState.blue.name}.`;
        speakAnnouncement(text, 1.02, 1.0);
      }
    }

    function openMatchCallOverlay(matchData) {
      if (!matchData) return;
      initSpeechSynthesisVoice();

      const whiteJudoka = (typeof matchData.white === 'object') ? matchData.white : (registeredJudokas.find(j => j.id === matchData.white) || { name: 'Judoka Blanco', dojo: 'Dojo Shiro' });
      const blueJudoka = (typeof matchData.blue === 'object') ? matchData.blue : (registeredJudokas.find(j => j.id === matchData.blue) || { name: 'Judoka Azul', dojo: 'Dojo Ao' });

      matchCallState = {
        white: {
          id: whiteJudoka.id || null,
          name: whiteJudoka.name || 'Judoka Blanco',
          dojo: whiteJudoka.dojo || 'Dojo Shiro',
          belt: whiteJudoka.belt || 'Blanco',
          weight: whiteJudoka.weight ? `${whiteJudoka.weight} kg` : 'N/A',
          category: whiteJudoka.category || matchData.categoryLabel || 'General',
          time: whiteJudoka.timeFormatted || matchData.timeFormatted || '2:00 min'
        },
        blue: {
          id: blueJudoka.id || null,
          name: blueJudoka.name || 'Judoka Azul',
          dojo: blueJudoka.dojo || 'Dojo Ao',
          belt: blueJudoka.belt || 'Azul',
          weight: blueJudoka.weight ? `${blueJudoka.weight} kg` : 'N/A',
          category: blueJudoka.category || matchData.categoryLabel || 'General',
          time: blueJudoka.timeFormatted || matchData.timeFormatted || '2:00 min'
        },
        matchNumber: matchData.matchNumber || state.currentScheduledMatchNumber || 1,
        categoryLabel: matchData.categoryLabel || matchCallState.white.category || 'General',
        roundTitle: matchData.roundTitle || `Ronda ${matchData.round || 1}`,
        poolName: matchData.poolName || 'Llave Oficial',
        timeFormatted: matchData.timeFormatted || matchCallState.white.time || '2:00 min',
        currentPhase: 'white'
      };

      setMatchCallPhase('white');
      const overlay = document.getElementById('fullscreen-match-call-overlay');
      if (overlay) overlay.style.display = 'flex';
    }

    function openMatchCallOverlayCurrent() {
      const whiteNameEl = document.getElementById('white-name-input');
      const whiteDojoEl = document.getElementById('white-dojo-text');
      const whiteBeltEl = document.getElementById('white-belt-badge');
      const whiteCatEl = document.getElementById('white-cat-badge');

      const blueNameEl = document.getElementById('blue-name-input');
      const blueDojoEl = document.getElementById('blue-dojo-text');
      const blueBeltEl = document.getElementById('blue-belt-badge');
      const blueCatEl = document.getElementById('blue-cat-badge');

      const selectCat = document.getElementById('match-category-selector');
      const catText = selectCat ? selectCat.options[selectCat.selectedIndex]?.text || 'Categoría Oficial' : 'Categoría Oficial';

      const fights = getOfficialMatchPairs();
      const curFight = fights[state.currentMatchIndex];

      const matchData = {
        white: {
          id: state.white.judokaId,
          name: whiteNameEl ? whiteNameEl.value : 'Judoka Blanco',
          dojo: whiteDojoEl ? whiteDojoEl.innerText : 'Dojo Shiro',
          belt: whiteBeltEl ? whiteBeltEl.innerText : 'Blanco',
          category: whiteCatEl ? whiteCatEl.innerText : 'General'
        },
        blue: {
          id: state.blue.judokaId,
          name: blueNameEl ? blueNameEl.value : 'Judoka Azul',
          dojo: blueDojoEl ? blueDojoEl.innerText : 'Dojo Ao',
          belt: blueBeltEl ? blueBeltEl.innerText : 'Azul',
          category: blueCatEl ? blueCatEl.innerText : 'General'
        },
        matchNumber: curFight ? curFight.matchNumber : (state.currentScheduledMatchNumber || 1),
        categoryLabel: curFight ? curFight.categoryLabel : catText,
        roundTitle: curFight ? curFight.roundTitle : `Ronda ${state.currentRound || 1}`,
        poolName: curFight ? curFight.poolName : 'Mesa Técnica',
        timeFormatted: curFight ? curFight.timeFormatted : '2:00 min'
      };

      openMatchCallOverlay(matchData);
    }

    function callMatchByNumber(matchNum) {
      const fights = getOfficialMatchPairs();
      const fight = fights.find(f => f.matchNumber === matchNum);
      if (fight) {
        loadMatchByNumber(matchNum);
        openMatchCallOverlay(fight);
      }
    }

    function callMatchByJudokasAndRound(whiteId, blueId, round = 1, categoryKey = null) {
      loadMatchByJudokasAndRound(whiteId, blueId, round, categoryKey);
      openMatchCallOverlayCurrent();
    }

    function setMatchCallPhase(phase) {
      matchCallState.currentPhase = phase;

      const heroBox = document.getElementById('call-hero-box');
      const singleView = document.getElementById('call-single-fighter-view');
      const versusView = document.getElementById('call-versus-view');

      const dotWhite = document.getElementById('dot-call-white');
      const dotBlue = document.getElementById('dot-call-blue');
      const dotVersus = document.getElementById('dot-call-versus');

      if (dotWhite) dotWhite.className = `call-step-dot ${phase === 'white' ? 'active' : ''}`;
      if (dotBlue) dotBlue.className = `call-step-dot ${phase === 'blue' ? 'active' : ''}`;
      if (dotVersus) dotVersus.className = `call-step-dot ${phase === 'versus' ? 'active' : ''}`;

      if (phase === 'white') {
        if (singleView) singleView.style.display = 'flex';
        if (versusView) versusView.style.display = 'none';
        if (heroBox) {
          heroBox.className = 'call-card-hero call-white-corner';
        }

        const matchHead = document.getElementById('call-match-header-text');
        if (matchHead) matchHead.innerText = `⚔️ COMBATE OFICIAL #${matchCallState.matchNumber} • ${matchCallState.roundTitle} • ${matchCallState.categoryLabel}`;

        const pill = document.getElementById('call-corner-pill');
        if (pill) {
          pill.className = 'call-corner-pill white';
          pill.innerHTML = '<span>⚪</span> <span>AL CENTRO CON UNIFORME BLANCO</span>';
        }

        const nameEl = document.getElementById('call-fighter-name');
        if (nameEl) nameEl.innerText = matchCallState.white.name;

        const dojoEl = document.getElementById('call-fighter-dojo-name');
        if (dojoEl) dojoEl.innerText = matchCallState.white.dojo;

        const beltEl = document.getElementById('call-fighter-belt');
        if (beltEl) beltEl.innerHTML = `🥋 ${matchCallState.white.belt}`;

        const weightEl = document.getElementById('call-fighter-weight');
        if (weightEl) weightEl.innerHTML = `⚖️ ${matchCallState.white.weight}`;

        const catEl = document.getElementById('call-fighter-category');
        if (catEl) catEl.innerHTML = `⚡ ${matchCallState.categoryLabel}`;

        const timeEl = document.getElementById('call-fighter-time');
        if (timeEl) timeEl.innerHTML = `⏱️ ${matchCallState.timeFormatted}`;

        const btnNext = document.getElementById('btn-call-next-action');
        if (btnNext) {
          btnNext.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
          btnNext.style.boxShadow = '0 0 20px rgba(37,99,235,0.5)';
          btnNext.innerHTML = '🔵 Siguiente: Con Uniforme Azul ▶ (Espacio)';
        }

        playSound('call_white');

        // Locución por voz del competidor blanco
        setTimeout(() => {
          if (matchCallState.currentPhase === 'white') {
            const voiceText = `Al centro, con uniforme blanco: ${matchCallState.white.name}${matchCallState.white.dojo ? ', del club ' + matchCallState.white.dojo : ''}.`;
            speakAnnouncement(voiceText, 1.0, 1.05);
          }
        }, 350);

      } else if (phase === 'blue') {
        if (singleView) singleView.style.display = 'flex';
        if (versusView) versusView.style.display = 'none';
        if (heroBox) {
          heroBox.className = 'call-card-hero call-blue-corner';
        }

        const matchHead = document.getElementById('call-match-header-text');
        if (matchHead) matchHead.innerText = `⚔️ COMBATE OFICIAL #${matchCallState.matchNumber} • ${matchCallState.roundTitle} • ${matchCallState.categoryLabel}`;

        const pill = document.getElementById('call-corner-pill');
        if (pill) {
          pill.className = 'call-corner-pill blue';
          pill.innerHTML = '<span>🔵</span> <span>CON UNIFORME AZUL</span>';
        }

        const nameEl = document.getElementById('call-fighter-name');
        if (nameEl) nameEl.innerText = matchCallState.blue.name;

        const dojoEl = document.getElementById('call-fighter-dojo-name');
        if (dojoEl) dojoEl.innerText = matchCallState.blue.dojo;

        const beltEl = document.getElementById('call-fighter-belt');
        if (beltEl) beltEl.innerHTML = `🥋 ${matchCallState.blue.belt}`;

        const weightEl = document.getElementById('call-fighter-weight');
        if (weightEl) weightEl.innerHTML = `⚖️ ${matchCallState.blue.weight}`;

        const catEl = document.getElementById('call-fighter-category');
        if (catEl) catEl.innerHTML = `⚡ ${matchCallState.categoryLabel}`;

        const timeEl = document.getElementById('call-fighter-time');
        if (timeEl) timeEl.innerHTML = `⏱️ ${matchCallState.timeFormatted}`;

        const btnNext = document.getElementById('btn-call-next-action');
        if (btnNext) {
          btnNext.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
          btnNext.style.boxShadow = '0 0 20px rgba(16,185,129,0.5)';
          btnNext.innerHTML = '⚔️ Siguiente: Cara a Cara (Versus) ▶ (Espacio)';
        }

        playSound('call_blue');

        // Locución por voz del competidor azul
        setTimeout(() => {
          if (matchCallState.currentPhase === 'blue') {
            const voiceText = `Con uniforme azul: ${matchCallState.blue.name}${matchCallState.blue.dojo ? ', del club ' + matchCallState.blue.dojo : ''}.`;
            speakAnnouncement(voiceText, 1.0, 0.98);
          }
        }, 350);

      } else if (phase === 'versus') {
        if (singleView) singleView.style.display = 'none';
        if (versusView) versusView.style.display = 'flex';
        if (heroBox) {
          heroBox.className = 'call-card-hero call-versus-corner';
        }

        const vsHead = document.getElementById('call-versus-match-header-text');
        if (vsHead) vsHead.innerText = `⚔️ COMBATE OFICIAL #${matchCallState.matchNumber} • ${matchCallState.roundTitle} • ${matchCallState.categoryLabel} (${matchCallState.poolName})`;

        const wName = document.getElementById('call-vs-white-name');
        if (wName) wName.innerText = matchCallState.white.name;

        const wDojo = document.getElementById('call-vs-white-dojo');
        if (wDojo) wDojo.innerText = `🏢 ${matchCallState.white.dojo}`;

        const wMeta = document.getElementById('call-vs-white-meta');
        if (wMeta) wMeta.innerText = `🥋 ${matchCallState.white.belt} • ${matchCallState.white.weight}`;

        const bName = document.getElementById('call-vs-blue-name');
        if (bName) bName.innerText = matchCallState.blue.name;

        const bDojo = document.getElementById('call-vs-blue-dojo');
        if (bDojo) bDojo.innerText = `🏢 ${matchCallState.blue.dojo}`;

        const bMeta = document.getElementById('call-vs-blue-meta');
        if (bMeta) bMeta.innerText = `🥋 ${matchCallState.blue.belt} • ${matchCallState.blue.weight}`;

        const timeBadge = document.getElementById('call-vs-time-badge');
        if (timeBadge) timeBadge.innerText = `⏱️ ${matchCallState.timeFormatted}`;

        playSound('bell');

        // Locución por voz del cara a cara
        setTimeout(() => {
          if (matchCallState.currentPhase === 'versus') {
            const voiceText = `Al centro del tatami. Con uniforme blanco: ${matchCallState.white.name}. Con uniforme azul: ${matchCallState.blue.name}.`;
            speakAnnouncement(voiceText, 1.02, 1.0);
          }
        }, 350);
      }
    }

    function advanceMatchCallPhase() {
      if (matchCallState.currentPhase === 'white') {
        setMatchCallPhase('blue');
      } else if (matchCallState.currentPhase === 'blue') {
        setMatchCallPhase('versus');
      } else {
        startMatchFromCallOverlay();
      }
    }

    function startMatchFromCallOverlay() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      closeMatchCallOverlay();
      switchTab('scoreboard');
      showToast(`🥋 ¡Combate #${matchCallState.matchNumber} en tatami! ${matchCallState.white.name} vs ${matchCallState.blue.name}`, '#10b981');
      playSound('bell');
    }

    function closeMatchCallOverlay() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      const overlay = document.getElementById('fullscreen-match-call-overlay');
      if (overlay) overlay.style.display = 'none';
    }

    function onJudokaSelected(side, judokaId) {
      if (!judokaId) return;
      loadJudokaToScoreboard(judokaId, side);

      const otherSide = side === 'white' ? 'blue' : 'white';
      const otherId = state[otherSide].judokaId;

      if (judokaId && otherId) {
        const whiteId = side === 'white' ? judokaId : otherId;
        const blueId = side === 'blue' ? judokaId : otherId;
        
        const allFights = getOfficialMatchPairs();
        let matchedIndex = allFights.findIndex(f => 
          ((f.white.id === whiteId && f.blue.id === blueId) || (f.white.id === blueId && f.blue.id === whiteId)) &&
          !isFightCompleted(f).completed
        );
        if (matchedIndex === -1) {
          matchedIndex = allFights.findIndex(f => 
            (f.white.id === whiteId && f.blue.id === blueId) || (f.white.id === blueId && f.blue.id === whiteId)
          );
        }

        if (matchedIndex !== -1) {
          const fight = allFights[matchedIndex];
          state.currentMatchIndex = matchedIndex;
          state.currentScheduledMatchNumber = fight.matchNumber;
          state.currentScheduledFightId = fight.fightId;
          state.currentCategoryKey = fight.categoryKey;
          state.currentRound = fight.round;
        } else {
          state.currentMatchIndex = -1;
          state.currentScheduledMatchNumber = null;
          state.currentScheduledFightId = `custom_${Date.now()}_${whiteId}_${blueId}`;
          state.currentCategoryKey = null;
          state.currentRound = 1;
        }
        updateTournamentMatchSelector();
      }
    }

    function loadJudokaToScoreboard(judokaId, side) {
      const judoka = registeredJudokas.find(j => j.id === judokaId);
      if (!judoka) return;

      state[side].judokaId = judoka.id;

      document.getElementById(`${side}-name-input`).value = judoka.name;
      document.getElementById(`${side}-dojo-text`).innerText = judoka.dojo;
      
      const genderBadge = document.getElementById(`${side}-gender-badge`);
      if (genderBadge) {
        genderBadge.innerText = judoka.gender === 'Femenino' ? '♀️ Fem' : '♂️ Masc';
        genderBadge.className = `gender-pill ${judoka.gender === 'Femenino' ? 'female' : 'male'}`;
      }

      const beltBadge = document.getElementById(`${side}-belt-badge`);
      beltBadge.innerText = judoka.belt;
      beltBadge.className = `belt-tag ${getBeltTagClass(judoka.belt)}`;

      document.getElementById(`${side}-cat-badge`).innerText = `Categoría: ${judoka.category} (${judoka.weight}kg)`;

      const select = document.getElementById(`${side}-select-judoka`);
      if (select) select.value = judoka.id;

      setCombatDuration(judoka.durationSec);
      const catSelect = document.getElementById('match-category-selector');
      if (catSelect) catSelect.value = judoka.durationSec;
    }

    function setCombatDuration(durationSec) {
      state.matchDuration = durationSec;
      if (!state.isMatchRunning) {
        state.matchTimeRemaining = durationSec;
        updateTimerDisplay();
      }
    }

    function onCategorySelectorChange() {
      const val = document.getElementById('match-category-selector').value;
      const duration = parseInt(val, 10);
      setCombatDuration(duration);
    }

    function updateTimerDisplay() {
      const min = String(Math.floor(state.matchTimeRemaining / 60)).padStart(2, '0');
      const sec = String(state.matchTimeRemaining % 60).padStart(2, '0');
      const display = document.getElementById('main-timer-display');
      if (display) display.innerText = `${min}:${sec}`;
    }

    let lastMatchTickTime = null;
    let lastOsaekomiTickTime = null;

    function toggleMatchTimer() {
      getAudioContext();
      const btn = document.getElementById('btn-match-play');

      if (state.isMatchRunning) {
        clearInterval(state.matchInterval);
        state.matchInterval = null;
        state.isMatchRunning = false;
        isLocalTimerDriving = false;
        lastMatchTickTime = null;
        btn.innerText = '▶ HAJIME (Espacio)';
        btn.className = 'btn-match-toggle start';
        broadcastLiveMatchToServer(true);
      } else {
        state.isMatchRunning = true;
        isLocalTimerDriving = true;
        lastMatchTickTime = Date.now();
        btn.innerText = '⏸ MATÉ (Espacio)';
        btn.className = 'btn-match-toggle pause';
        playSound('gong');
        broadcastLiveMatchToServer(true);

        state.matchInterval = setInterval(() => {
          const now = Date.now();
          const elapsed = lastMatchTickTime ? Math.floor((now - lastMatchTickTime) / 1000) : 1;
          
          if (elapsed >= 1) {
            lastMatchTickTime = now;
            if (!state.isGoldenScore) {
              if (state.matchTimeRemaining > 0) {
                state.matchTimeRemaining = Math.max(0, state.matchTimeRemaining - elapsed);
                updateTimerDisplay();
                broadcastLiveMatchToServer(false);

                if (state.matchTimeRemaining === 0) {
                  clearInterval(state.matchInterval);
                  state.matchInterval = null;
                  state.isMatchRunning = false;
                  isLocalTimerDriving = false;
                  lastMatchTickTime = null;
                  btn.innerText = '▶ HAJIME (Espacio)';
                  btn.className = 'btn-match-toggle start';
                  playSound('buzzer');
                  broadcastLiveMatchToServer(true);
                  openFinishModal('time');
                }
              }
            } else {
              state.matchTimeRemaining += elapsed;
              updateTimerDisplay();
              broadcastLiveMatchToServer(false);
            }
          }
        }, 500);
      }
    }

    function toggleGoldenScore() {
      state.isGoldenScore = !state.isGoldenScore;
      const badge = document.getElementById('golden-score-badge');
      const display = document.getElementById('main-timer-display');

      if (state.isGoldenScore) {
        badge.classList.add('active');
        display.classList.add('goldenscore');
        if (!state.isMatchRunning) {
          state.matchTimeRemaining = 0;
          updateTimerDisplay();
        }
      } else {
        badge.classList.remove('active');
        display.classList.remove('goldenscore');
        onCategorySelectorChange();
      }
      broadcastLiveMatchToServer(true);
    }

    function startOsaekomi(side) {
      getAudioContext();
      if (state.osaekomiSide !== null) return;

      state.osaekomiSide = side;
      state.osaekomiSeconds = 0;
      lastOsaekomiTickTime = Date.now();
      updateOsaekomiDisplay(side);

      const panel = document.getElementById(`${side}-osaekomi-panel`);
      if (panel) panel.classList.add('active');

      playOsaekomiTaikoBeat(0);
      broadcastLiveMatchToServer(true);

      state.osaekomiInterval = setInterval(() => {
        const now = Date.now();
        const elapsed = lastOsaekomiTickTime ? Math.floor((now - lastOsaekomiTickTime) / 1000) : 1;
        
        if (elapsed >= 1) {
          lastOsaekomiTickTime = now;
          state.osaekomiSeconds += elapsed;
          updateOsaekomiDisplay(side);
          broadcastLiveMatchToServer(false);

          if (state.osaekomiSeconds >= 20) {
            stopOsaekomi(side, true);
          } else {
            playOsaekomiTaikoBeat(state.osaekomiSeconds);
          }
        }
      }, 500);
    }

    function stopOsaekomi(side, isIppon = false) {
      if (state.osaekomiSide !== side) return;
      if (state.osaekomiInterval) {
        clearInterval(state.osaekomiInterval);
        state.osaekomiInterval = null;
      }
      lastOsaekomiTickTime = null;

      const sec = state.osaekomiSeconds;
      state.osaekomiSide = null;
      state.osaekomiSeconds = 0;
      updateOsaekomiDisplay(side);

      const panel = document.getElementById(`${side}-osaekomi-panel`);
      if (panel) panel.classList.remove('active');

      if (isIppon || sec >= 20) {
        addIpponScore(side, 'Osaekomi 20s (Ippon)');
      } else if (sec >= 10 && sec < 20) {
        changeScore(side, 'wazaari', 1);
      } else if (sec >= 5 && sec < 10) {
        changeScore(side, 'yuko', 1);
      } else if (sec > 0 && sec < 5) {
        changeScore(side, 'koka', 1);
      }
      broadcastLiveMatchToServer(true);
    }

    function updateOsaekomiDisplay(side) {
      const display = document.getElementById(`${side}-osaekomi-val`);
      if (display) {
        display.innerText = `${String(state.osaekomiSeconds).padStart(2, '0')}s`;
      }
    }

    function changeScore(side, type, delta) {
      state[side][type] = Math.max(0, state[side][type] + delta);

      if (type === 'ippon' && delta > 0) {
        if (state.isMatchRunning) toggleMatchTimer();
        if (state.osaekomiSide) stopOsaekomi(state.osaekomiSide);
      }

      if (state[side].wazaari >= 2) {
        state[side].wazaari -= 2;
        addIpponScore(side, '2 Waza-ari = 1 Ippon (Waza-ari Awasete Ippon)');
      }

      renderScores();
      if (delta > 0) playSound('score');

      if (type === 'ippon' && state[side].ippon >= 2) {
        openFinishModal('ippon', side);
        return;
      }

      if (state.isGoldenScore && delta > 0 && (state[side][type] > 0 || type === 'ippon')) {
        if (state.isMatchRunning) toggleMatchTimer();
        openFinishModal('goldenscore', side);
      }
    }

    function addIpponScore(side, reason = 'Ippon / Sumisión') {
      state[side].ippon++;
      renderScores();
      playSound('ippon');

      // REGLA: Al marcar Ippon se detiene automáticamente el tiempo de combate (Maté)
      if (state.isMatchRunning) {
        toggleMatchTimer();
      }
      if (state.osaekomiSide) {
        stopOsaekomi(state.osaekomiSide);
      }

      if (state[side].ippon >= 2) {
        openFinishModal('ippon', side);
      }
    }

    function toggleShido(side, num) {
      if (state[side].shido === num) {
        state[side].shido = num - 1;
      } else {
        state[side].shido = num;
      }

      if (state[side].shido >= 3) {
        state[side].hansoku = true;
        const otherSide = side === 'white' ? 'blue' : 'white';
        if (state.isMatchRunning) toggleMatchTimer();
        openFinishModal('hansoku', otherSide);
      } else {
        state[side].hansoku = false;
      }

      renderShidos();
    }

    function toggleHansoku(side) {
      state[side].hansoku = !state[side].hansoku;
      if (state[side].hansoku) {
        const otherSide = side === 'white' ? 'blue' : 'white';
        if (state.isMatchRunning) toggleMatchTimer();
        openFinishModal('hansoku', otherSide);
      }
      renderShidos();
    }

    function renderShidos() {
      ['white', 'blue'].forEach(side => {
        for (let i = 1; i <= 3; i++) {
          const badge = document.getElementById(`${side}-shido-${i}`);
          if (badge) badge.classList.toggle('active', state[side].shido >= i);
        }
        const hansokuBadge = document.getElementById(`${side}-shido-h`);
        if (hansokuBadge) {
          hansokuBadge.classList.toggle('hansoku', state[side].hansoku);
          hansokuBadge.style.opacity = state[side].hansoku ? '1' : '0.4';
        }
      });
    }

    function renderScores() {
      ['white', 'blue'].forEach(side => {
        document.getElementById(`${side}-ippon-val`).innerText = state[side].ippon;
        document.getElementById(`${side}-wazaari-val`).innerText = state[side].wazaari;
        document.getElementById(`${side}-yuko-val`).innerText = state[side].yuko;
        document.getElementById(`${side}-koka-val`).innerText = state[side].koka;
      });
      renderShidos();
      broadcastLiveMatchToServer(false);
    }

    function openFinishModal(reason, suggestedWinner = null) {
      const modal = document.getElementById('modal-finish');
      const title = document.getElementById('modal-finish-title');
      const sub = document.getElementById('modal-finish-subtitle');
      const winnerSelect = document.getElementById('modal-winner-select');
      const reasonSelect = document.getElementById('modal-win-reason');
      const summaryEl = document.getElementById('modal-tech-summary');

      // Detener el cronómetro y osaekomi si estaban activos
      if (state.isMatchRunning) toggleMatchTimer();
      if (state.osaekomiSide) stopOsaekomi(state.osaekomiSide);

      const whiteNameEl = document.getElementById('white-name-input');
      const whiteDojoEl = document.getElementById('white-dojo-text');
      const blueNameEl = document.getElementById('blue-name-input');
      const blueDojoEl = document.getElementById('blue-dojo-text');

      const whiteName = String(whiteNameEl ? (whiteNameEl.value || whiteNameEl.innerText || '') : '').trim() || 'Judoka Blanco';
      const whiteDojo = String(whiteDojoEl ? (whiteDojoEl.innerText || whiteDojoEl.value || '') : '').trim() || 'Dojo Shiro';
      const blueName = String(blueNameEl ? (blueNameEl.value || blueNameEl.innerText || '') : '').trim() || 'Judoka Azul';
      const blueDojo = String(blueDojoEl ? (blueDojoEl.innerText || blueDojoEl.value || '') : '').trim() || 'Dojo Ao';

      winnerSelect.options[0].text = `⚪ Blanco (Shiro): ${whiteName} (${whiteDojo})`;
      winnerSelect.options[1].text = `🔵 Azul (Ao): ${blueName} (${blueDojo})`;
      winnerSelect.options[2].text = `🤝 Empate Reglamentario (Hikiwake)`;

      let techText = `⚪ <b>Blanco:</b> ${state.white.ippon} Ippon | ${state.white.wazaari} W | ${state.white.yuko} Y | ${state.white.koka} K | ${state.white.shido} Shido<br>` +
                     `🔵 <b>Azul:</b> ${state.blue.ippon} Ippon | ${state.blue.wazaari} W | ${state.blue.yuko} Y | ${state.blue.koka} K | ${state.blue.shido} Shido`;
      summaryEl.innerHTML = techText;

      if (reason === 'ippon') {
        title.innerText = '🏆 ¡VICTORIA POR 2 IPPONES!';
        sub.innerText = 'El competidor completó los 2 Ippones reglamentarios.';
        winnerSelect.value = suggestedWinner || evaluateTechnicalWinner();
        reasonSelect.value = '2 Ippones (Reglamentario)';
      } else if (reason === 'hansoku') {
        title.innerText = '🚫 ¡DESCALIFICACIÓN (HANSOKU-MAKE)!';
        sub.innerText = 'Un competidor acumuló sanciones o infracción grave.';
        winnerSelect.value = suggestedWinner || evaluateTechnicalWinner();
        reasonSelect.value = 'Descalificación (Hansoku-Make)';
      } else if (reason === 'goldenscore') {
        title.innerText = '⚡ ¡PUNTO DE ORO EN GOLDEN SCORE!';
        sub.innerText = 'Puntuación técnica decisiva en tiempo extra.';
        winnerSelect.value = suggestedWinner || evaluateTechnicalWinner();
        reasonSelect.value = 'Superioridad Técnica (Tiempo)';
      } else if (reason === 'time') {
        title.innerText = '⏱️ ¡TIEMPO REGLAMENTARIO AGOTADO!';
        sub.innerText = 'Evaluación técnica recomendada (Waza-ari > Yuko > Koka).';
        winnerSelect.value = evaluateTechnicalWinner();
        reasonSelect.value = 'Superioridad Técnica (Tiempo)';
      } else {
        title.innerText = '🏁 DECISIÓN DE MESA TÉCNICA';
        sub.innerText = 'Selecciona el resultado final dictaminado por los jueces.';
        winnerSelect.value = evaluateTechnicalWinner();
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
      if (state.white.shido < state.blue.shido) return 'white';
      if (state.blue.shido < state.white.shido) return 'blue';
      return 'draw';
    }

    function confirmAndSaveMatch() {
      const winnerSelect = document.getElementById('modal-winner-select');
      const reasonSelect = document.getElementById('modal-win-reason');
      const result = winnerSelect ? winnerSelect.value : 'white';
      const reason = reasonSelect ? reasonSelect.value : 'Decisión Arbitral';

      if (state.isMatchRunning) toggleMatchTimer();
      if (state.osaekomiSide) stopOsaekomi(state.osaekomiSide);

      const whiteNameEl = document.getElementById('white-name-input');
      const whiteDojoEl = document.getElementById('white-dojo-text');
      const blueNameEl = document.getElementById('blue-name-input');
      const blueDojoEl = document.getElementById('blue-dojo-text');

      const whiteName = String(whiteNameEl ? (whiteNameEl.value || whiteNameEl.innerText || '') : '').trim() || 'Judoka Blanco';
      const whiteDojo = String(whiteDojoEl ? (whiteDojoEl.innerText || whiteDojoEl.value || '') : '').trim() || 'Dojo Shiro';
      const blueName = String(blueNameEl ? (blueNameEl.value || blueNameEl.innerText || '') : '').trim() || 'Judoka Azul';
      const blueDojo = String(blueDojoEl ? (blueDojoEl.innerText || blueDojoEl.value || '') : '').trim() || 'Dojo Ao';

      // 1. Vincular con IDs de judokas registrados si no están asignados
      let whiteJ = registeredJudokas.find(j => 
        (state.white.judokaId && j.id === state.white.judokaId) || 
        j.name.toLowerCase().trim() === whiteName.toLowerCase().trim()
      );
      let blueJ = registeredJudokas.find(j => 
        (state.blue.judokaId && j.id === state.blue.judokaId) || 
        j.name.toLowerCase().trim() === blueName.toLowerCase().trim()
      );

      const whiteJudokaId = whiteJ ? whiteJ.id : (state.white.judokaId || null);
      const blueJudokaId = blueJ ? blueJ.id : (state.blue.judokaId || null);
      const whiteDojoFinal = whiteJ ? whiteJ.dojo : whiteDojo;
      const blueDojoFinal = blueJ ? blueJ.dojo : blueDojo;

      // 2. Determinar texto oficial de victoria
      let winnerText = '';
      if (result === 'white') {
        winnerText = `Blanco: ${whiteName} (${whiteDojoFinal})`;
      } else if (result === 'blue') {
        winnerText = `Azul: ${blueName} (${blueDojoFinal})`;
      } else {
        winnerText = `Empate (Hikiwake)`;
      }

      // 3. Obtener combate programado exacto
      const allPairs = getOfficialMatchPairs();
      let currentFight = null;

      if (state.currentScheduledFightId) {
        currentFight = allPairs.find(f => f.fightId === state.currentScheduledFightId);
      }

      if (!currentFight && whiteJudokaId && blueJudokaId) {
        currentFight = allPairs.find(f => 
          ((f.white.id === whiteJudokaId && f.blue.id === blueJudokaId) || (f.white.id === blueJudokaId && f.blue.id === whiteJudokaId)) &&
          !isFightCompleted(f).completed
        );
      }

      if (!currentFight && state.currentMatchIndex >= 0 && state.currentMatchIndex < allPairs.length) {
        const candidate = allPairs[state.currentMatchIndex];
        if ((candidate.white.id === whiteJudokaId && candidate.blue.id === blueJudokaId) || 
            (candidate.white.id === blueJudokaId && candidate.blue.id === whiteJudokaId)) {
          currentFight = candidate;
        }
      }

      const scheduledMatchNum = currentFight ? currentFight.matchNumber : (state.currentScheduledMatchNumber || null);
      const scheduledFightId = currentFight ? currentFight.fightId : (state.currentScheduledFightId || (whiteJudokaId && blueJudokaId ? `match_${whiteJudokaId}_${blueJudokaId}_${Date.now()}` : null));
      const categoryKey = currentFight ? currentFight.categoryKey : (state.currentCategoryKey || (whiteJ ? `${whiteJ.gender} — ${whiteJ.category}` : null));
      const round = currentFight ? currentFight.round : (state.currentRound || 1);

      const matchRecord = {
        id: 'match_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        scheduledMatchNumber: scheduledMatchNum,
        scheduledFightId: scheduledFightId,
        categoryKey: categoryKey,
        round: round,
        whiteJudokaId: whiteJudokaId,
        blueJudokaId: blueJudokaId,
        whiteName: whiteName,
        whiteDojo: whiteDojoFinal,
        blueName: blueName,
        blueDojo: blueDojoFinal,
        result: result,
        winner: winnerText,
        reason: reason,
        whiteScore: `${state.white.ippon}I / ${state.white.wazaari}W / ${state.white.yuko}Y / ${state.white.koka}K`,
        blueScore: `${state.blue.ippon}I / ${state.blue.wazaari}W / ${state.blue.yuko}Y / ${state.blue.koka}K`
      };

      // 4. Guardar en matchHistory: Solo sobreescribir si coincide exactamente el scheduledFightId
      let existingIdx = -1;
      if (matchRecord.scheduledFightId) {
        existingIdx = matchHistory.findIndex(m => m.scheduledFightId === matchRecord.scheduledFightId);
      } else if (matchRecord.whiteJudokaId && matchRecord.blueJudokaId) {
        existingIdx = matchHistory.findIndex(m => 
          m.round === matchRecord.round &&
          ((m.whiteJudokaId === matchRecord.whiteJudokaId && m.blueJudokaId === matchRecord.blueJudokaId) ||
           (m.whiteJudokaId === matchRecord.blueJudokaId && m.blueJudokaId === matchRecord.whiteJudokaId))
        );
      }

      if (existingIdx !== -1) {
        matchHistory[existingIdx] = matchRecord;
        showToast(`⚠️ Combate #${matchRecord.scheduledMatchNumber || ''} actualizado con el nuevo resultado.`, '#3b82f6');
      } else {
        matchHistory.unshift(matchRecord);
        showToast(`✅ Resultado registrado: ${winnerText}`, '#10b981');
      }

      localStorage.setItem('newaza_history', JSON.stringify(matchHistory));

      const winnerData = {
        result,
        reason,
        whiteName,
        whiteDojo: whiteDojoFinal,
        blueName,
        blueDojo: blueDojoFinal,
        whiteScore: `${state.white.ippon} Ippon | ${state.white.wazaari} Waza-ari`,
        blueScore: `${state.blue.ippon} Ippon | ${state.blue.wazaari} Waza-ari`
      };

      closeModal('modal-finish');
      showFullscreenWinner(winnerData);
      renderRankingTable();
      renderCategoryStandingsView();
      renderHistoryTable();
      renderTournamentOrderView();
      renderCategoryPoolsView();
      updateTournamentMatchSelector();
      syncTournamentStateToServer();
    }

    let lastWinnerVoiceText = '';

    function repeatCurrentWinnerVoice() {
      if (lastWinnerVoiceText) {
        speakAnnouncement(lastWinnerVoiceText, 1.0, 1.02);
      }
    }

    function showFullscreenWinner(winnerData) {
      const overlay = document.getElementById('fullscreen-winner-overlay');
      const heroBox = document.getElementById('winner-hero-box');
      const cornerBadge = document.getElementById('winner-corner-badge');
      const nameText = document.getElementById('winner-name-text');
      const dojoText = document.getElementById('winner-dojo-text');
      const reasonText = document.getElementById('winner-reason-text');
      const scoreText = document.getElementById('winner-score-text');

      if (!overlay) return;

      heroBox.className = 'winner-card-hero';

      let winnerVoiceText = '';

      if (winnerData.result === 'white') {
        heroBox.classList.add('winner-white');
        cornerBadge.className = 'winner-corner-pill white-corner';
        cornerBadge.innerText = '⚪ 1ER JUDOKA • ESQUINA BLANCA (SHIRO)';
        nameText.innerText = winnerData.whiteName.toUpperCase();
        dojoText.innerHTML = `🥋 ${escapeHtml(winnerData.whiteDojo)}`;
        winnerVoiceText = `¡Ganador del combate, con uniforme blanco: ${winnerData.whiteName}${winnerData.whiteDojo ? ', del club ' + winnerData.whiteDojo : ''}${winnerData.reason ? '. Por ' + winnerData.reason : ''}!`;
      } else if (winnerData.result === 'blue') {
        heroBox.classList.add('winner-blue');
        cornerBadge.className = 'winner-corner-pill blue-corner';
        cornerBadge.innerText = '🔵 2DO JUDOKA • ESQUINA AZUL (AO)';
        nameText.innerText = winnerData.blueName.toUpperCase();
        dojoText.innerHTML = `🥋 ${escapeHtml(winnerData.blueDojo)}`;
        winnerVoiceText = `¡Ganador del combate, con uniforme azul: ${winnerData.blueName}${winnerData.blueDojo ? ', del club ' + winnerData.blueDojo : ''}${winnerData.reason ? '. Por ' + winnerData.reason : ''}!`;
      } else {
        heroBox.classList.add('winner-draw');
        cornerBadge.className = 'winner-corner-pill draw-corner';
        cornerBadge.innerText = '🤝 EMPATE REGLAMENTARIO (HIKIWAKE)';
        nameText.innerText = 'EMPATE TÉCNICO';
        dojoText.innerHTML = `🥋 ${escapeHtml(winnerData.whiteDojo)} vs ${escapeHtml(winnerData.blueDojo)}`;
        winnerVoiceText = `¡Resultado final del combate: Empate técnico reglamentario!`;
      }

      lastWinnerVoiceText = winnerVoiceText;
      reasonText.innerText = winnerData.reason;
      scoreText.innerText = `⚪ Blanco (${winnerData.whiteScore})  vs  🔵 Azul (${winnerData.blueScore})`;

      // Comprobar si con este combate ha finalizado el torneo completo
      const progress = getTournamentProgressStats();
      const nextBtn = document.getElementById('btn-next-official-winner');
      const finishBtn = document.getElementById('btn-finish-tournament-winner');

      if (progress.isFinished) {
        if (nextBtn) nextBtn.style.display = 'none';
        if (finishBtn) finishBtn.style.display = 'inline-block';
      } else {
        if (nextBtn) nextBtn.style.display = 'inline-block';
        if (finishBtn) finishBtn.style.display = 'none';
      }

      overlay.style.display = 'flex';
      playSound('ippon');

      // Proclamar ganador por voz tras la fanfarria de Ippon
      setTimeout(() => {
        if (overlay.style.display === 'flex' && lastWinnerVoiceText) {
          speakAnnouncement(lastWinnerVoiceText, 1.0, 1.02);
        }
      }, 550);
    }

    function closeFullscreenWinner() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      const overlay = document.getElementById('fullscreen-winner-overlay');
      if (overlay) overlay.style.display = 'none';
      const progress = getTournamentProgressStats();
      if (progress.isFinished) {
        openTournamentFinishedOverlay();
      } else {
        loadNextOfficialPair();
      }
    }

    function loadNextOfficialFromWinnerScreen() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      const overlay = document.getElementById('fullscreen-winner-overlay');
      if (overlay) overlay.style.display = 'none';
      loadNextOfficialPair();
    }

    function viewLeaderboardFromWinnerScreen() {
      const overlay = document.getElementById('fullscreen-winner-overlay');
      if (overlay) overlay.style.display = 'none';
      const progress = getTournamentProgressStats();
      if (!progress.isFinished) {
        loadNextOfficialPair();
      }
      switchTab('ranking');
    }

    // ==========================================
    // 8. CONTROL DE PROGRESO Y GRAN CLAUSURA (FIN DEL TORNEO)
    // ==========================================
    function getTournamentProgressStats() {
      const allFights = getOfficialMatchPairs();
      const totalScheduled = allFights.length;
      let completedCount = 0;

      allFights.forEach(f => {
        const status = isFightCompleted(f);
        if (status.completed) completedCount++;
      });

      if (completedCount < matchHistory.length && matchHistory.length <= totalScheduled) {
        completedCount = Math.max(completedCount, matchHistory.length);
      }

      const percent = totalScheduled > 0 ? Math.min(100, Math.round((completedCount / totalScheduled) * 100)) : 0;
      const isFinished = totalScheduled > 0 && completedCount >= totalScheduled;

      let totalIppons = 0;
      matchHistory.forEach(m => {
        if (m.whiteScore) {
          const iMatch = m.whiteScore.match(/(\d+)\s*I/i);
          if (iMatch) totalIppons += parseInt(iMatch[1], 10);
        }
        if (m.blueScore) {
          const iMatch = m.blueScore.match(/(\d+)\s*I/i);
          if (iMatch) totalIppons += parseInt(iMatch[1], 10);
        }
      });

      const scoringData = calculateFullTournamentScoring();
      const sortedDojos = scoringData.sortedDojos;
      const championDojo = sortedDojos[0] || null;
      const runnerUpDojo = sortedDojos[1] || null;
      const thirdDojo = sortedDojos[2] || null;

      return {
        totalScheduled,
        completedCount,
        percent,
        isFinished,
        totalIppons,
        championDojo,
        runnerUpDojo,
        thirdDojo,
        sortedDojos
      };
    }

    let ceremonyTimers = [];
    let confettiAnimationActive = false;

    function triggerCeremonyConfetti(mode = 'gold') {
      const canvas = document.getElementById('ceremony-confetti-canvas');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth || 1000;
      canvas.height = window.innerHeight || 800;

      const particles = [];
      const particleCount = mode === 'gold' ? 140 : 80;

      let colorPalette = [];
      if (mode === 'bronze') {
        colorPalette = ['#ea580c', '#c2410c', '#fb923c', '#fed7aa', '#ffffff', '#b45309'];
      } else if (mode === 'silver') {
        colorPalette = ['#cbd5e1', '#94a3b8', '#ffffff', '#64748b', '#e2e8f0', '#38bdf8'];
      } else {
        // Gold / Champion
        colorPalette = ['#f59e0b', '#fbbf24', '#fef08a', '#ffffff', '#ef4444', '#38bdf8', '#a855f7', '#10b981'];
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * (canvas.width * 0.7),
          y: mode === 'gold' ? (canvas.height * 0.4 + (Math.random() - 0.5) * 120) : (canvas.height * 0.5),
          vx: (Math.random() - 0.5) * (mode === 'gold' ? 14 : 9),
          vy: mode === 'gold' ? -(Math.random() * 12 + 4) : -(Math.random() * 8 + 3),
          size: Math.random() * 8 + 5,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          opacity: 1,
          decay: Math.random() * 0.006 + 0.004
        });
      }

      confettiAnimationActive = true;
      let startTime = Date.now();

      function render() {
        if (!confettiAnimationActive) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let activeCount = 0;
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.22; // gravedad
          p.rotation += p.rotationSpeed;
          p.opacity -= p.decay;

          if (p.opacity > 0 && p.y < canvas.height + 50) {
            activeCount++;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
          }
        });

        if (activeCount > 0 && (Date.now() - startTime) < 5000) {
          if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(render);
          }
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          confettiAnimationActive = false;
        }
      }

      render();
    }

    function openTournamentFinishedOverlay() {
      const overlay = document.getElementById('fullscreen-tournament-finished-overlay');
      const podiumContainer = document.getElementById('tournament-podium-cards-container');
      const statsBar = document.getElementById('tournament-final-stats-bar');
      if (!overlay) return;

      const stats = getTournamentProgressStats();
      const champ = stats.championDojo;
      const runner = stats.runnerUpDojo;
      const third = stats.thirdDojo;

      if (podiumContainer) {
        let podiumHtml = '';

        // 2do Lugar - SUBCAMPEÓN (Izquierda)
        if (runner) {
          podiumHtml += `
            <div id="podium-card-silver" class="grand-finale-podium-box champ-silver">
              <div style="font-size:36px; margin-bottom:4px;">🥈</div>
              <div style="font-size:11px; font-weight:900; color:#cbd5e1; letter-spacing:1.5px; text-transform:uppercase;">DOJO SUBCAMPEÓN</div>
              <div style="font-size:20px; font-weight:900; color:#fff; margin:6px 0;">${escapeHtml(runner.dojo)}</div>
              <div style="font-size:24px; font-weight:900; color:#cbd5e1;">${runner.points} PUNTOS</div>
              <div style="font-size:12px; color:var(--slate-300); margin-top:6px; background:rgba(0,0,0,0.3); padding:4px 8px; border-radius:6px;">
                🥇 ${runner.gold} Oro | 🥈 ${runner.silver} Plata | 🥉 ${runner.bronze} Bronce
              </div>
            </div>
          `;
        }

        // 1er Lugar - CAMPEÓN (Centro - Elevado y Protagónico)
        if (champ) {
          podiumHtml += `
            <div id="podium-card-gold" class="grand-finale-podium-box champ-gold">
              <div style="font-size:48px; margin-bottom:2px; animation: trophyBounce 2s infinite ease-in-out;">🏆 🥇</div>
              <div style="font-size:12px; font-weight:900; color:var(--gold); letter-spacing:2px; text-transform:uppercase;">👑 DOJO CAMPEÓN GENERAL</div>
              <div style="font-size:26px; font-weight:900; color:#fff; margin:8px 0; text-shadow:0 0 20px rgba(245,158,11,0.8);">${escapeHtml(champ.dojo)}</div>
              <div style="font-size:32px; font-weight:900; color:var(--gold); text-shadow:0 0 15px rgba(245,158,11,0.6);">${champ.points} PUNTOS</div>
              <div style="font-size:13px; color:#fff; font-weight:bold; margin-top:8px; background:rgba(0,0,0,0.4); padding:6px 10px; border-radius:8px; border:1px solid rgba(245,158,11,0.4);">
                🥇 ${champ.gold} Oro | 🥈 ${champ.silver} Plata | 🥉 ${champ.bronze} Bronce
              </div>
            </div>
          `;
        }

        // 3er Lugar - TERCER PUESTO (Derecha)
        if (third) {
          podiumHtml += `
            <div id="podium-card-bronze" class="grand-finale-podium-box champ-bronze">
              <div style="font-size:36px; margin-bottom:4px;">🥉</div>
              <div style="font-size:11px; font-weight:900; color:#fb923c; letter-spacing:1.5px; text-transform:uppercase;">TERCER LUGAR GENERAL</div>
              <div style="font-size:20px; font-weight:900; color:#fff; margin:6px 0;">${escapeHtml(third.dojo)}</div>
              <div style="font-size:24px; font-weight:900; color:#fb923c;">${third.points} PUNTOS</div>
              <div style="font-size:12px; color:var(--slate-300); margin-top:6px; background:rgba(0,0,0,0.3); padding:4px 8px; border-radius:6px;">
                🥇 ${third.gold} Oro | 🥈 ${third.silver} Plata | 🥉 ${third.bronze} Bronce
              </div>
            </div>
          `;
        }

        podiumContainer.innerHTML = podiumHtml;
      }

      if (statsBar) {
        statsBar.innerHTML = `
          <div>
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">⚔️ COMBATES TOTALES</span>
            <b style="font-size:16px; color:#fff;">${matchHistory.length} Realizados</b>
          </div>
          <div style="border-left:1px solid rgba(255,255,255,0.15); padding-left:14px;">
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">💥 IPPONES MARCADOS</span>
            <b style="font-size:16px; color:var(--sky);">${stats.totalIppons} Ippones</b>
          </div>
          <div style="border-left:1px solid rgba(255,255,255,0.15); padding-left:14px;">
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">🥋 JUDOKAS INSCRITOS</span>
            <b style="font-size:16px; color:#fff;">${registeredJudokas.length} Competidores</b>
          </div>
          <div style="border-left:1px solid rgba(255,255,255,0.15); padding-left:14px;">
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">🏢 CLUBES PARTICIPANTES</span>
            <b style="font-size:16px; color:var(--gold);">${stats.sortedDojos.length} Dojos</b>
          </div>
        `;
      }

      overlay.style.display = 'flex';
      startClosingCeremonyAnimation();
    }

    function startClosingCeremonyAnimation() {
      // Limpiar temporizadores anteriores
      ceremonyTimers.forEach(t => clearTimeout(t));
      ceremonyTimers = [];

      const stats = getTournamentProgressStats();
      const champ = stats.championDojo;
      const runner = stats.runnerUpDojo;
      const third = stats.thirdDojo;

      const cardBronze = document.getElementById('podium-card-bronze');
      const cardSilver = document.getElementById('podium-card-silver');
      const cardGold = document.getElementById('podium-card-gold');
      const bannerText = document.getElementById('ceremony-live-banner-text');
      const emotionCard = document.getElementById('ceremony-emotion-card');
      const emotionTitle = document.getElementById('ceremony-emotion-title');
      const emotionBody = document.getElementById('ceremony-emotion-body');
      const statsBar = document.getElementById('tournament-final-stats-bar');
      const raysBg = document.getElementById('ceremony-rays-bg');

      // Estado Inicial: Ocultar tarjetas para inicio secuencial
      [cardBronze, cardSilver, cardGold].forEach(c => {
        if (c) {
          c.classList.remove('revealed');
          c.style.opacity = '0';
        }
      });
      if (emotionCard) emotionCard.classList.remove('revealed');
      if (statsBar) statsBar.style.opacity = '0';
      if (raysBg) raysBg.style.display = 'none';

      if (bannerText) bannerText.innerText = '🥁 INICIANDO CEREMONIA OFICIAL DE PREMIACIÓN...';
      playSound('drumroll');

      // 1. REVELACIÓN DEL 3ER PUESTO (BRONCE) a los 2.4s
      ceremonyTimers.push(setTimeout(() => {
        if (cardBronze) {
          cardBronze.style.opacity = '';
          cardBronze.classList.add('revealed');
        }
        if (bannerText) bannerText.innerText = `🥉 3ER LUGAR GENERAL (MEDALLA DE BRONCE): ${third ? third.dojo.toUpperCase() : 'POR DEFINIR'}`;
        playSound('bronze_reveal');
        triggerCeremonyConfetti('bronze');
      }, 2400));

      // 2. REVELACIÓN DEL 2DO PUESTO (PLATA / SUBCAMPEÓN) a los 6.5s
      ceremonyTimers.push(setTimeout(() => {
        if (cardSilver) {
          cardSilver.style.opacity = '';
          cardSilver.classList.add('revealed');
        }
        if (bannerText) bannerText.innerText = `🥈 SUBCAMPEÓN GENERAL (MEDALLA DE PLATA): ${runner ? runner.dojo.toUpperCase() : 'POR DEFINIR'}`;
        playSound('silver_reveal');
        triggerCeremonyConfetti('silver');
      }, 6500));

      // 3. SUSPENSE PREVIO AL CAMPEÓN a los 10.2s
      ceremonyTimers.push(setTimeout(() => {
        if (bannerText) bannerText.innerText = '👑 🥁 PROCLAMANDO AL GRAN CAMPEÓN GENERAL DEL TORNEO...';
        playSound('drumroll');
      }, 10200));

      // 4. CLÍMAX EMOTIVO: GRAN CAMPEÓN GENERAL (ORO) a los 11.2s
      ceremonyTimers.push(setTimeout(() => {
        if (cardGold) {
          cardGold.style.opacity = '';
          cardGold.classList.add('revealed');
        }
        if (raysBg) raysBg.style.display = 'block';
        if (bannerText) bannerText.innerText = `👑 🥇 ¡DOJO CAMPEÓN GENERAL: ${champ ? champ.dojo.toUpperCase() : 'CAMPEÓN'}!`;

        playSound('gold_triumph');
        triggerCeremonyConfetti('gold');

        // Mensaje emotivo de reconocimiento al esfuerzo, respeto y maestría
        if (emotionCard && emotionTitle && emotionBody && champ) {
          emotionTitle.innerHTML = `🥋 ¡HONOR, MAESTRÍA Y GLORIA ETERNA: ${escapeHtml(champ.dojo)}! 🏆`;
          emotionBody.innerHTML = `
            ¡Felicitaciones a los atletas, senseis y familias de <b>${escapeHtml(champ.dojo)}</b> por coronarse Campeones Generales con <b>${champ.points} Puntos Oficiales</b> (${champ.gold} 🥇 Oros, ${champ.silver} 🥈 Platas, ${champ.bronze} 🥉 Bronces)!<br>
            <span style="color:var(--gold); font-weight:bold;">"El verdadero valor de la victoria no reside en superar al adversario, sino en el respeto mutuo, la constancia de cada entrenamiento y el honor compartido sobre el tatami."</span>
          `;
          emotionCard.classList.add('revealed');
        }

        if (statsBar) statsBar.style.opacity = '1';

        // Segunda ráfaga de confeti dorado festivo
        setTimeout(() => triggerCeremonyConfetti('gold'), 1800);
      }, 11200));
    }

    function skipClosingCeremonyAnimation() {
      ceremonyTimers.forEach(t => clearTimeout(t));
      ceremonyTimers = [];

      const stats = getTournamentProgressStats();
      const champ = stats.championDojo;

      const cardBronze = document.getElementById('podium-card-bronze');
      const cardSilver = document.getElementById('podium-card-silver');
      const cardGold = document.getElementById('podium-card-gold');
      const bannerText = document.getElementById('ceremony-live-banner-text');
      const emotionCard = document.getElementById('ceremony-emotion-card');
      const emotionTitle = document.getElementById('ceremony-emotion-title');
      const emotionBody = document.getElementById('ceremony-emotion-body');
      const statsBar = document.getElementById('tournament-final-stats-bar');
      const raysBg = document.getElementById('ceremony-rays-bg');

      [cardBronze, cardSilver, cardGold].forEach(c => {
        if (c) {
          c.style.opacity = '';
          c.classList.add('revealed');
        }
      });

      if (raysBg) raysBg.style.display = 'block';
      if (bannerText) bannerText.innerText = `👑 🥇 ¡DOJO CAMPEÓN GENERAL: ${champ ? champ.dojo.toUpperCase() : 'CAMPEÓN'}!`;

      if (emotionCard && emotionTitle && emotionBody && champ) {
        emotionTitle.innerHTML = `🥋 ¡HONOR, MAESTRÍA Y GLORIA ETERNA: ${escapeHtml(champ.dojo)}! 🏆`;
        emotionBody.innerHTML = `
          ¡Felicitaciones a <b>${escapeHtml(champ.dojo)}</b> por coronarse Campeones Generales con <b>${champ.points} Puntos</b> (${champ.gold} 🥇 Oros, ${champ.silver} 🥈 Platas, ${champ.bronze} 🥉 Bronces)!<br>
          <span style="color:var(--gold); font-weight:bold;">"El verdadero valor de la victoria reside en la constancia, el respeto mutuo y la hermandad forjada sobre el tatami."</span>
        `;
        emotionCard.classList.add('revealed');
      }

      if (statsBar) statsBar.style.opacity = '1';
      triggerCeremonyConfetti('gold');
    }

    function closeTournamentFinishedOverlay() {
      ceremonyTimers.forEach(t => clearTimeout(t));
      ceremonyTimers = [];
      const overlay = document.getElementById('fullscreen-tournament-finished-overlay');
      if (overlay) overlay.style.display = 'none';
      const canvas = document.getElementById('ceremony-confetti-canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      confettiAnimationActive = false;
    }

    function closeTournamentFinishedOverlayAndGo(tabId) {
      closeTournamentFinishedOverlay();
      closeFullscreenWinner();
      switchTab(tabId);
    }

    // ==========================================
    // 8.1 PANTALLA INAUGURAL DE INICIO DEL TORNEO (KICKOFF)
    // ==========================================
    function openTournamentKickoffOverlay() {
      const overlay = document.getElementById('fullscreen-tournament-kickoff-overlay');
      const statsBar = document.getElementById('kickoff-stats-bar');
      const firstMatchCard = document.getElementById('kickoff-first-match-card');
      if (!overlay) return;

      const fights = getOfficialMatchPairs();
      const dojosList = Array.from(new Set([
        ...mesaRegisteredDojos.map(d => d.name),
        ...registeredJudokas.map(j => j.dojo)
      ].filter(Boolean)));
      const totalDojos = Math.max(mesaRegisteredDojos.length, dojosList.length);

      if (statsBar) {
        statsBar.innerHTML = `
          <div>
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">🥋 JUDOKAS INSCRITOS</span>
            <b style="font-size:16px; color:#fff;">${registeredJudokas.length} Competidores</b>
          </div>
          <div style="border-left:1px solid rgba(255,255,255,0.15); padding-left:14px;">
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">🏢 CLUBES / DOJOS</span>
            <b style="font-size:16px; color:var(--gold);">${totalDojos} Dojos</b>
          </div>
          <div style="border-left:1px solid rgba(255,255,255,0.15); padding-left:14px;">
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">⚔️ PROGRAMA OFICIAL</span>
            <b style="font-size:16px; color:var(--sky);">${fights.length} Combates</b>
          </div>
          <div style="border-left:1px solid rgba(255,255,255,0.15); padding-left:14px;">
            <span style="font-size:11px; color:var(--slate-400); display:block; font-weight:bold;">⚡ SISTEMA NE-WAZA</span>
            <b style="font-size:16px; color:#10b981;">Regla 2 de 3 Ippones</b>
          </div>
        `;
      }

      if (firstMatchCard) {
        if (fights.length > 0) {
          const f0 = fights[0];
          firstMatchCard.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(245,158,11,0.3); padding-bottom:8px; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <span style="font-size:13px; font-weight:900; color:var(--gold); display:flex; align-items:center; gap:6px;">
                🥋 COMBATE INAUGURAL #1 • ${escapeHtml(f0.categoryLabel)}
              </span>
              <span style="font-size:11px; background:#1e293b; color:var(--sky); padding:2px 8px; border-radius:8px; border:1px solid var(--panel-border);">
                ⏱️ Tiempo Oficial: ${f0.timeFormatted} • ${escapeHtml(f0.poolName)}
              </span>
            </div>

            <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:12px; align-items:center;">
              <!-- ESQUINA BLANCA -->
              <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.2); border-radius:10px; padding:12px; text-align:center;">
                <div style="font-size:11px; font-weight:bold; color:#cbd5e1; margin-bottom:2px;">⚪ ESQUINA BLANCA (SHIRO)</div>
                <div style="font-size:16px; font-weight:900; color:#fff;">${escapeHtml(f0.white.name)}</div>
                <div style="font-size:12px; color:var(--gold); font-weight:bold; margin-top:2px;">🥋 ${escapeHtml(f0.white.dojo)}</div>
                <div style="font-size:11px; color:var(--slate-400); margin-top:4px;">${f0.white.belt} • ${f0.white.weight} kg</div>
              </div>

              <!-- VS BADGE -->
              <div style="font-size:18px; font-weight:900; color:var(--gold); text-shadow:0 0 10px rgba(245,158,11,0.6); padding:0 6px;">
                VS
              </div>

              <!-- ESQUINA AZUL -->
              <div style="background:rgba(37,99,235,0.15); border:1px solid #3b82f6; border-radius:10px; padding:12px; text-align:center;">
                <div style="font-size:11px; font-weight:bold; color:#93c5fd; margin-bottom:2px;">🔵 ESQUINA AZUL (AO)</div>
                <div style="font-size:16px; font-weight:900; color:#fff;">${escapeHtml(f0.blue.name)}</div>
                <div style="font-size:12px; color:var(--gold); font-weight:bold; margin-top:2px;">🥋 ${escapeHtml(f0.blue.dojo)}</div>
                <div style="font-size:11px; color:var(--slate-400); margin-top:4px;">${f0.blue.belt} • ${f0.blue.weight} kg</div>
              </div>
            </div>

            <div style="display:flex; justify-content:center; gap:10px; margin-top:14px; flex-wrap:wrap;">
              <button class="btn-action" style="background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#fff; font-weight:900; border:none; padding:8px 18px; font-size:13px; box-shadow:0 0 12px rgba(16,185,129,0.4);" onclick="startTournamentAndLoadFirstMatch()" title="Cargar Combate #1 en la Mesa Técnica y Marcador">
                ▶ Iniciar Torneo en Mesa
              </button>
              <button class="btn-action" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:900; border:none; padding:8px 18px; font-size:13px; box-shadow:0 0 12px rgba(245,158,11,0.4);" onclick="closeTournamentKickoffOverlayAndGo('order')" title="Ver cronograma completo de combates ronda a ronda">
                📋 Ver Orden de Combates
              </button>
            </div>
          `;
        } else {
          firstMatchCard.innerHTML = `
            <div style="text-align:center; padding:16px 8px;">
              <div style="font-size:15px; font-weight:800; color:var(--gold); margin-bottom:6px;">✨ ¡Bienvenido al Torneo Oficial Kosen Judo Heikegani!</div>
              <div style="font-size:13px; color:var(--slate-300); margin-bottom:14px; line-height:1.5;">El sistema se encuentra listo en limpio (0). Puedes crear Dojos, ingresar al portal o inscribir judokas para comenzar.</div>
              <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
                <a href="crear_dojos.html" target="_blank" class="btn-action" style="background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color:#fff; font-weight:800; text-decoration:none;">🏢 Crear Dojos & Claves</a>
                <button class="btn-action" style="background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#000; font-weight:800;" onclick="closeTournamentKickoffOverlayAndGo('qr')">📥 Postulaciones de Dojos</button>
                <button class="btn-action" style="background:#1e293b; color:#fff; border:1px solid var(--panel-border); font-weight:800;" onclick="closeTournamentKickoffOverlayAndGo('order')">📋 Orden de Combate</button>
              </div>
            </div>
          `;
        }
      }

      overlay.style.display = 'flex';
    }

    function startTournamentAndLoadFirstMatch() {
      closeTournamentKickoffOverlay();
      const fights = getOfficialMatchPairs();
      if (fights.length === 0) {
        alert('No hay combates programados. Agrega competidores en la sección de inscripciones.');
        return;
      }
      loadMatchByIndex(0);
      switchTab('scoreboard');
      playSound('ippon');
      showToast('🥋 ¡Torneo Iniciado! Combate #1 cargado en mesa técnica.', '#10b981');
    }

    function closeTournamentKickoffOverlay() {
      const overlay = document.getElementById('fullscreen-tournament-kickoff-overlay');
      if (overlay) overlay.style.display = 'none';
    }

    function closeTournamentKickoffOverlayAndGo(tabId) {
      closeTournamentKickoffOverlay();
      switchTab(tabId);
    }

    // ==========================================
    // 9. MOTOR DE PUNTUACIÓN OFICIAL POR CATEGORÍA Y TABLERO GENERAL DE DOJOS
    // ==========================================
    // BAREMO OFICIAL KOSEN JUDO:
    // 🥇 1º Lugar (Oro / Ganador de Categoría): 10 Puntos
    // 🥈 2º Lugar (Plata / Subcampeón):        5 Puntos
    // 🥉 3º Lugar (Bronce / Tercer puesto):     3 Puntos
    // 🎖️ 4º Lugar (Cuarto puesto):             2 Puntos
    // 🎗️ Resto de competidores (5º en adelante): 1 Punto
    let categoryPlacements = JSON.parse(localStorage.getItem('newaza_category_placements') || '{}');
    let currentRankingSubtab = 'dojos';
    let activeCategoryStandingsGender = 'all';

    function saveCategoryPlacements() {
      localStorage.setItem('newaza_category_placements', JSON.stringify(categoryPlacements));
      syncTournamentStateToServer();
    }

    function switchRankingSubtab(subtab) {
      currentRankingSubtab = subtab;
      const btnDojos = document.getElementById('btn-subtab-dojos');
      const btnCats = document.getElementById('btn-subtab-categories');
      const viewDojos = document.getElementById('subview-ranking-dojos');
      const viewCats = document.getElementById('subview-ranking-categories');

      if (subtab === 'dojos') {
        if (btnDojos) { btnDojos.className = 'ranking-subtab-btn active gold'; }
        if (btnCats) { btnCats.className = 'ranking-subtab-btn'; }
        if (viewDojos) viewDojos.style.display = 'block';
        if (viewCats) viewCats.style.display = 'none';
        renderRankingTable();
      } else {
        if (btnDojos) { btnDojos.className = 'ranking-subtab-btn'; }
        if (btnCats) { btnCats.className = 'ranking-subtab-btn active'; }
        if (viewDojos) viewDojos.style.display = 'none';
        if (viewCats) viewCats.style.display = 'block';
        renderCategoryStandingsView();
      }
    }

    function setCategoryStandingsGenderFilter(gender, btnElement) {
      activeCategoryStandingsGender = gender;
      if (btnElement && btnElement.parentElement) {
        btnElement.parentElement.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('active'));
        btnElement.classList.add('active');
      }
      renderCategoryStandingsView();
    }

    function calculateFullTournamentScoring() {
      registeredJudokas.sort(compareJudokas);

      // 1. Agrupar judokas por categoría
      const categoryGroups = {};
      registeredJudokas.forEach(j => {
        const key = `${j.gender} — ${j.category}`;
        if (!categoryGroups[key]) {
          categoryGroups[key] = {
            key: key,
            gender: j.gender,
            category: j.category,
            timeFormatted: j.timeFormatted || '2:00 min',
            durationSec: j.durationSec || 120,
            judokas: []
          };
        }
        categoryGroups[key].judokas.push(j);
      });

      // 2. Compilar estadísticas individuales de cada judoka a partir de matchHistory
      const judokaStats = {};
      registeredJudokas.forEach(j => {
        judokaStats[j.id] = {
          id: j.id,
          name: j.name,
          dojo: j.dojo,
          gender: j.gender,
          category: j.category,
          belt: j.belt,
          weight: j.weight,
          matches: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          ippons: 0,
          wazaaris: 0,
          placement: null,
          dojoPoints: 1
        };
      });

      matchHistory.forEach(m => {
        const whiteJudoka = registeredJudokas.find(j => 
          (m.whiteJudokaId && j.id === m.whiteJudokaId) || 
          (j.name.toLowerCase().trim() === (m.whiteName || '').toLowerCase().trim() && j.dojo.toLowerCase().trim() === (m.whiteDojo || '').toLowerCase().trim())
        );
        const blueJudoka = registeredJudokas.find(j => 
          (m.blueJudokaId && j.id === m.blueJudokaId) || 
          (j.name.toLowerCase().trim() === (m.blueName || '').toLowerCase().trim() && j.dojo.toLowerCase().trim() === (m.blueDojo || '').toLowerCase().trim())
        );

        const isWhiteWin = (m.result === 'white') || 
                           (m.winner && (m.winner.toLowerCase().startsWith('blanco') || (whiteJudoka && m.winner.toLowerCase().includes(whiteJudoka.name.toLowerCase()))));
        const isBlueWin = (m.result === 'blue') || 
                          (m.winner && (m.winner.toLowerCase().startsWith('azul') || (blueJudoka && m.winner.toLowerCase().includes(blueJudoka.name.toLowerCase()))));
        const isDraw = (m.result === 'draw') || 
                       (m.winner && (m.winner.toLowerCase().includes('empate') || m.winner.toLowerCase().includes('hikiwake')));

        if (whiteJudoka && judokaStats[whiteJudoka.id]) {
          const ws = judokaStats[whiteJudoka.id];
          ws.matches++;
          if (isWhiteWin) {
            ws.wins++;
          } else if (isDraw) {
            ws.draws++;
          } else {
            ws.losses++;
          }
          if (m.whiteScore) {
            const iMatch = m.whiteScore.match(/(\d+)\s*I/i);
            const wMatch = m.whiteScore.match(/(\d+)\s*W/i);
            if (iMatch) ws.ippons += parseInt(iMatch[1], 10);
            if (wMatch) ws.wazaaris += parseInt(wMatch[1], 10);
          }
        }

        if (blueJudoka && judokaStats[blueJudoka.id]) {
          const bs = judokaStats[blueJudoka.id];
          bs.matches++;
          if (isBlueWin) {
            bs.wins++;
          } else if (isDraw) {
            bs.draws++;
          } else {
            bs.losses++;
          }
          if (m.blueScore) {
            const iMatch = m.blueScore.match(/(\d+)\s*I/i);
            const wMatch = m.blueScore.match(/(\d+)\s*W/i);
            if (iMatch) bs.ippons += parseInt(iMatch[1], 10);
            if (wMatch) bs.wazaaris += parseInt(wMatch[1], 10);
          }
        }
      });

      // 3. Determinar clasificación en cada categoría
      const categoryStandings = {};

      Object.keys(categoryGroups).forEach(key => {
        const group = categoryGroups[key];
        const judokasInCat = [...group.judokas];
        const customOrder = categoryPlacements[key] || [];

        // Ordenar judokas: Si hay asignación manual, respetarla; de lo contrario, ordenar por rendimiento deportivo
        judokasInCat.sort((a, b) => {
          const idxA = customOrder.indexOf(a.id);
          const idxB = customOrder.indexOf(b.id);
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;

          const stA = judokaStats[a.id] || { wins: 0, ippons: 0, wazaaris: 0, draws: 0 };
          const stB = judokaStats[b.id] || { wins: 0, ippons: 0, wazaaris: 0, draws: 0 };

          if (stB.wins !== stA.wins) return stB.wins - stA.wins;
          if (stB.ippons !== stA.ippons) return stB.ippons - stA.ippons;
          if (stB.wazaaris !== stA.wazaaris) return stB.wazaaris - stA.wazaaris;
          if (stB.draws !== stA.draws) return stB.draws - stA.draws;
          return a.name.localeCompare(b.name);
        });

        const catMatchesCount = judokasInCat.reduce((acc, j) => {
          const st = judokaStats[j.id];
          return acc + (st ? st.matches : 0);
        }, 0);
        const hasManualPlacements = customOrder.length > 0;
        const isDisputed = catMatchesCount > 0 || hasManualPlacements;

        // Asignación oficial de puntos por posición:
        // 1º = 10 pts, 2º = 5 pts, 3º = 3 pts, 4º = 2 pts, Resto = 1 pt (cuando se disputa la categoría)
        const rankedJudokas = judokasInCat.map((j, idx) => {
          const pos = idx + 1;
          let pts = 0;
          if (isDisputed) {
            if (pos === 1) pts = 10;
            else if (pos === 2) pts = 5;
            else if (pos === 3) pts = 3;
            else if (pos === 4) pts = 2;
            else pts = 1;
          }

          const st = judokaStats[j.id];
          if (st) {
            st.placement = isDisputed ? pos : null;
            st.dojoPoints = pts;
          }

          return {
            ...j,
            position: pos,
            isDisputed,
            dojoPoints: pts,
            stats: st || { matches: 0, wins: 0, draws: 0, losses: 0, ippons: 0 }
          };
        });

        categoryStandings[key] = {
          ...group,
          isDisputed,
          catMatchesCount,
          rankedJudokas
        };
      });

      // 4. Calcular tabla consolidada general por Dojo
      const dojoTable = {};

      registeredJudokas.forEach(j => {
        if (!dojoTable[j.dojo]) {
          dojoTable[j.dojo] = {
            dojo: j.dojo,
            points: 0,
            gold: 0,    // 1º Lugar (10 pts)
            silver: 0,  // 2º Lugar (5 pts)
            bronze: 0,  // 3º Lugar (3 pts)
            fourth: 0,  // 4º Lugar (2 pts)
            rest: 0,    // Resto (1 pt)
            judokasCount: 0,
            matchWins: 0,
            matchDraws: 0,
            matchLosses: 0,
            matchIppons: 0,
            podiumDetails: []
          };
        }
      });

      Object.keys(categoryStandings).forEach(catKey => {
        const cat = categoryStandings[catKey];
        if (!cat.isDisputed) return;

        cat.rankedJudokas.forEach(j => {
          const d = dojoTable[j.dojo];
          if (!d) return;

          d.judokasCount++;
          d.points += j.dojoPoints;

          if (j.position === 1) {
            d.gold++;
            d.podiumDetails.push(`🥇 1º ${cat.category} (${j.name})`);
          } else if (j.position === 2) {
            d.silver++;
            d.podiumDetails.push(`🥈 2º ${cat.category} (${j.name})`);
          } else if (j.position === 3) {
            d.bronze++;
            d.podiumDetails.push(`🥉 3º ${cat.category} (${j.name})`);
          } else if (j.position === 4) {
            d.fourth++;
            d.podiumDetails.push(`🎖️ 4º ${cat.category} (${j.name})`);
          } else {
            d.rest++;
          }

          if (j.stats) {
            d.matchWins += j.stats.wins;
            d.matchDraws += j.stats.draws;
            d.matchLosses += j.stats.losses;
            d.matchIppons += j.stats.ippons;
          }
        });
      });

      // Ordenar Dojos por: Puntos Totales > 1ros > 2dos > 3ros > 4tos > Judokas
      const sortedDojos = Object.values(dojoTable).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gold !== a.gold) return b.gold - a.gold;
        if (b.silver !== a.silver) return b.silver - a.silver;
        if (b.bronze !== a.bronze) return b.bronze - a.bronze;
        if (b.fourth !== a.fourth) return b.fourth - a.fourth;
        return b.judokasCount - a.judokasCount;
      });

      return {
        categoryStandings,
        sortedDojos,
        judokaStats
      };
    }

    function renderRankingTable() {
      const tbody = document.getElementById('leaderboard-table-body');
      const badge = document.getElementById('dojo-leaderboard-count-badge');
      if (!tbody) return;
      tbody.innerHTML = '';

      const scoringData = calculateFullTournamentScoring();
      const dojos = scoringData.sortedDojos;

      if (badge) {
        badge.innerText = `(${dojos.length} Dojos / Clubes participantes)`;
      }

      if (dojos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:28px; color:var(--slate-400);">No hay atletas registrados aún para calcular la tabla general de posiciones.</td></tr>`;
        return;
      }

      dojos.forEach((d, idx) => {
        const medal = idx === 0 ? '<span class="rank-medal">🥇</span>' :
                      idx === 1 ? '<span class="rank-medal">🥈</span>' :
                      idx === 2 ? '<span class="rank-medal">🥉</span>' :
                      `<b style="color:var(--slate-400); margin-right:8px;">#${idx + 1}</b>`;

        let podiumsHtml = '';
        if (d.podiumDetails.length > 0) {
          podiumsHtml = d.podiumDetails.map(p => `<span style="display:inline-block; background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:6px; font-size:11px; margin:2px;">${escapeHtml(p)}</span>`).join(' ');
        } else {
          podiumsHtml = '<span style="color:var(--slate-400); font-size:11px;">En espera de combates</span>';
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${medal} <b>${escapeHtml(d.dojo)}</b></td>
          <td style="text-align:center; font-size:18px; font-weight:900; color:var(--gold); background:rgba(245,158,11,0.08);">${d.points} pts</td>
          <td style="text-align:center; font-weight:bold; color:#fbbf24;">${d.gold > 0 ? `🥇 ${d.gold}` : '-'}</td>
          <td style="text-align:center; font-weight:bold; color:#cbd5e1;">${d.silver > 0 ? `🥈 ${d.silver}` : '-'}</td>
          <td style="text-align:center; font-weight:bold; color:#fb923c;">${d.bronze > 0 ? `🥉 ${d.bronze}` : '-'}</td>
          <td style="text-align:center; font-weight:bold; color:#38bdf8;">${d.fourth > 0 ? `🎖️ ${d.fourth}` : '-'}</td>
          <td style="text-align:center; color:#94a3b8;">${d.rest > 0 ? `🎗️ ${d.rest}` : '-'}</td>
          <td style="text-align:center; font-weight:bold;">${d.judokasCount || (registeredJudokas.filter(rj => rj.dojo === d.dojo).length)}</td>
          <td style="text-align:center; font-size:12px; color:var(--slate-300);">${d.matchWins}V - ${d.matchDraws}E - ${d.matchLosses}D (${d.matchIppons}I)</td>
          <td style="font-size:11px; max-width:280px;">${podiumsHtml}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function renderCategoryStandingsView() {
      const container = document.getElementById('category-standings-list-container');
      if (!container) return;
      container.innerHTML = '';

      const scoringData = calculateFullTournamentScoring();
      const standings = scoringData.categoryStandings;
      let catKeys = Object.keys(standings);

      if (activeCategoryStandingsGender !== 'all') {
        catKeys = catKeys.filter(k => standings[k].gender === activeCategoryStandingsGender);
      }

      if (catKeys.length === 0) {
        container.innerHTML = `<div class="card-panel" style="text-align:center; color:var(--slate-400); padding:32px;">No hay atletas registrados que coincidan con la rama seleccionada.</div>`;
        return;
      }

      catKeys.forEach(catKey => {
        const cat = standings[catKey];
        const gIcon = cat.gender === 'Femenino' ? '♀️' : '♂️';
        const card = document.createElement('div');
        card.className = 'category-standings-card';

        let rowsHtml = '';
        cat.rankedJudokas.forEach((j, idx) => {
          let badgeHtml = '';
          let ptsColor = 'var(--gold)';
          let ptsText = cat.isDisputed ? `+${j.dojoPoints} pts` : `<span style="color:var(--slate-500); font-size:12px;">0 pts (Pendiente)</span>`;

          if (!cat.isDisputed) {
            badgeHtml = `<span class="podium-badge podium-rest">Judoka Inscrito (#${idx + 1})</span>`;
            ptsColor = 'var(--slate-400)';
          } else if (j.position === 1) {
            badgeHtml = '<span class="podium-badge podium-gold">🥇 1º Lugar (Campeón)</span>';
            ptsColor = 'var(--gold)';
          } else if (j.position === 2) {
            badgeHtml = '<span class="podium-badge podium-silver">🥈 2º Lugar (Subcampeón)</span>';
            ptsColor = '#cbd5e1';
          } else if (j.position === 3) {
            badgeHtml = '<span class="podium-badge podium-bronze">🥉 3º Lugar (Bronce)</span>';
            ptsColor = '#fb923c';
          } else if (j.position === 4) {
            badgeHtml = '<span class="podium-badge podium-fourth">🎖️ 4º Lugar</span>';
            ptsColor = '#38bdf8';
          } else {
            badgeHtml = `<span class="podium-badge podium-rest">🎗️ ${j.position}º Lugar</span>`;
            ptsColor = '#94a3b8';
          }

          const st = j.stats || { matches: 0, wins: 0, draws: 0, losses: 0, ippons: 0 };

          // Opciones de selector de posición manual
          let posOptionsHtml = '';
          for (let p = 1; p <= cat.rankedJudokas.length; p++) {
            posOptionsHtml += `<option value="${p}" ${p === j.position ? 'selected' : ''}>${p}º Lugar</option>`;
          }

          rowsHtml += `
            <tr>
              <td>${badgeHtml}</td>
              <td><b>${escapeHtml(j.name)}</b> <span style="font-size:11px; color:var(--slate-400);">(${j.belt} • ${j.weight}kg)</span></td>
              <td><b>${escapeHtml(j.dojo)}</b></td>
              <td style="text-align:center; font-weight:900; font-size:14px; color:${ptsColor}; background:rgba(255,255,255,0.03);">${ptsText}</td>
              <td style="text-align:center;">${st.matches}</td>
              <td style="text-align:center; color:#10b981; font-weight:bold;">${st.wins}</td>
              <td style="text-align:center; color:var(--sky); font-weight:bold;">${st.ippons}</td>
              <td style="text-align:center;">
                <select class="position-select-override" onchange="onJudokaPlacementChange('${escapeHtml(catKey)}', '${j.id}', this.value)" title="Asignar o ajustar podio manualmente">
                  ${posOptionsHtml}
                </select>
              </td>
            </tr>
          `;
        });

        card.innerHTML = `
          <div class="category-standings-header">
            <div class="category-standings-title">
              <span>${gIcon} ${escapeHtml(cat.category)}</span>
              <span style="font-size:12px; font-weight:700; color:var(--sky); background:#0b1120; padding:3px 10px; border-radius:8px; border:1px solid var(--panel-border);">
                ⏱️ Tiempo Oficial: ${cat.timeFormatted}
              </span>
              <span style="font-size:11px; font-weight:bold; padding:2px 8px; border-radius:6px; ${cat.isDisputed ? 'background:rgba(16,185,129,0.2); color:#10b981;' : 'background:rgba(148,163,184,0.15); color:#94a3b8;'}">
                ${cat.isDisputed ? '✅ Podio Definido / En Disputa' : '⏳ Por Disputar'}
              </span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:12px; color:var(--slate-400); font-weight:bold;">${cat.rankedJudokas.length} Judokas</span>
              <button class="btn-action" style="padding:3px 8px; font-size:11px;" onclick="resetCategoryPlacement('${escapeHtml(catKey)}')">⚡ Auto-ordenar</button>
            </div>
          </div>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Podio / Clasificación</th>
                  <th>Judoka</th>
                  <th>Dojo / Club</th>
                  <th>Puntos al Dojo</th>
                  <th>Combates</th>
                  <th>Victorias</th>
                  <th>Ippones</th>
                  <th>Ajustar Lugar</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        `;

        container.appendChild(card);
      });
    }

    function onJudokaPlacementChange(catKey, judokaId, newPosStr) {
      const newPos = parseInt(newPosStr, 10);
      if (isNaN(newPos)) return;

      const scoringData = calculateFullTournamentScoring();
      const cat = scoringData.categoryStandings[catKey];
      if (!cat) return;

      let currentList = cat.rankedJudokas.map(j => j.id);
      const oldIdx = currentList.indexOf(judokaId);
      if (oldIdx === -1) return;

      currentList.splice(oldIdx, 1);
      currentList.splice(newPos - 1, 0, judokaId);

      categoryPlacements[catKey] = currentList;
      saveCategoryPlacements();

      renderCategoryStandingsView();
      renderRankingTable();
      showToast(`🏅 Posición actualizada en ${cat.category}. Puntos de Dojo recalculados.`, '#10b981');
    }

    function resetCategoryPlacement(catKey) {
      if (categoryPlacements[catKey]) {
        delete categoryPlacements[catKey];
        saveCategoryPlacements();
        renderCategoryStandingsView();
        renderRankingTable();
        showToast('⚡ Podio recalculado automáticamente según victorias e ippones.', '#3b82f6');
      }
    }

    function autoCalculateAllCategoryPlacements() {
      categoryPlacements = {};
      saveCategoryPlacements();
      renderCategoryStandingsView();
      renderRankingTable();
      showToast('⚡ Todos los podios y clasificaciones recalculados por victorias y combates.', '#10b981');
    }

    function clearLeaderboardData() {
      if (confirm('¿Deseas reiniciar todos los marcadores, historiales y podios para iniciar la prueba con todo en 0?')) {
        resetAllTournamentScoresAndBoards();
      }
    }

    function resetAllTournamentScoresAndBoards() {
      matchHistory = [];
      categoryPlacements = {};
      dojoLeaderboard = {};
      localStorage.removeItem('newaza_history');
      localStorage.removeItem('newaza_category_placements');
      localStorage.removeItem('newaza_dojoLeaderboard');
      resetMatch(true);
      renderRankingTable();
      renderCategoryStandingsView();
      renderHistoryTable();
      updateTournamentMatchSelector();
      renderTournamentOrderView();
      renderCategoryPoolsView();
      showToast('🧹 Todos los tableros, historiales y puntos se han reiniciado a 0.', '#10b981');
      openTournamentKickoffOverlay();
    }

    function renderHistoryTable() {
      const tbody = document.getElementById('history-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';

      if (matchHistory.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:var(--slate-400);">El historial de combates está vacío.</td></tr>`;
        return;
      }

      matchHistory.forEach((m, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>#${matchHistory.length - idx}</td>
          <td style="color:var(--slate-400);">${m.date}</td>
          <td><b>${escapeHtml(m.whiteName)}</b> <span style="font-size:11px; color:var(--slate-400);">(${escapeHtml(m.whiteDojo)})</span></td>
          <td><b>${escapeHtml(m.blueName)}</b> <span style="font-size:11px; color:var(--slate-400);">(${escapeHtml(m.blueDojo)})</span></td>
          <td><b style="color:var(--gold);">${escapeHtml(m.winner)}</b></td>
          <td><span style="font-size:12px; background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:6px;">${escapeHtml(m.reason)}</span></td>
          <td style="font-size:11px; color:var(--slate-300);">${m.whiteScore} vs ${m.blueScore}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function clearHistoryData() {
      if (confirm('¿Deseas vaciar el registro histórico de combates?')) {
        matchHistory = [];
        localStorage.removeItem('newaza_history');
        renderHistoryTable();
      }
    }

    function resetMatchPrompt() {
      if (confirm('¿Reiniciar puntuaciones y cronómetro para un nuevo combate?')) {
        resetMatch(true);
      }
    }

    function resetMatch(fullReset = false) {
      if (state.isMatchRunning) toggleMatchTimer();
      if (state.osaekomiSide) stopOsaekomi(state.osaekomiSide);

      state.white = { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: fullReset ? null : state.white.judokaId };
      state.blue  = { ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false, judokaId: fullReset ? null : state.blue.judokaId };
      state.isGoldenScore = false;

      document.getElementById('golden-score-badge').classList.remove('active');
      document.getElementById('main-timer-display').classList.remove('goldenscore');

      renderScores();
      onCategorySelectorChange();

      const btn = document.getElementById('btn-match-play');
      if (btn) {
        btn.innerText = '▶ HAJIME (Espacio)';
        btn.className = 'btn-match-toggle start';
      }

      if (fullReset) {
        document.getElementById('white-name-input').value = 'Judoka Blanco';
        document.getElementById('white-dojo-text').innerText = 'Dojo Shiro';
        document.getElementById('blue-name-input').value = 'Judoka Azul';
        document.getElementById('blue-dojo-text').innerText = 'Dojo Ao';
        document.getElementById('white-select-judoka').value = '';
        document.getElementById('blue-select-judoka').value = '';
      }
    }

    function closeModal(modalId) {
      const el = document.getElementById(modalId);
      if (el) el.style.display = 'none';
    }

    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn('Fullscreen no disponible:', err);
        });
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function showToast(message, bgColor = '#10b981') {
      try {
        let toastContainer = document.getElementById('toast-notification-container');
        if (!toastContainer && document.body) {
          toastContainer = document.createElement('div');
          toastContainer.id = 'toast-notification-container';
          toastContainer.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:999999; display:flex; flex-direction:column; gap:10px; pointer-events:none;';
          document.body.appendChild(toastContainer);
        }

        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.style.cssText = `background:${bgColor}; color:#fff; padding:12px 20px; border-radius:10px; font-size:14px; font-weight:800; box-shadow:0 10px 25px rgba(0,0,0,0.5); opacity:0; transform:translateY(20px); transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1); pointer-events:auto; border:1px solid rgba(255,255,255,0.2); max-width:420px; word-break:break-word;`;
        toast.innerHTML = message;

        toastContainer.appendChild(toast);

        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
          });
        } else {
          toast.style.opacity = '1';
        }

        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateY(20px)';
          setTimeout(() => {
            if (toast.parentElement) toast.parentElement.removeChild(toast);
          }, 300);
        }, 3500);
      } catch (e) {
        console.log('Toast:', message);
      }
    }

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const callOverlay = document.getElementById('fullscreen-match-call-overlay');
      const isCallOverlayOpen = callOverlay && callOverlay.style.display === 'flex';

      const winnerOverlay = document.getElementById('fullscreen-winner-overlay');
      const isWinnerOverlayOpen = winnerOverlay && winnerOverlay.style.display === 'flex';

      const key = e.key.toLowerCase();

      // Atajos cuando la pantalla de ganador está activa
      if (isWinnerOverlayOpen) {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          closeFullscreenWinner();
          return;
        } else if (e.code === 'Escape') {
          e.preventDefault();
          closeFullscreenWinner();
          return;
        } else if (key === 'v') {
          repeatCurrentWinnerVoice();
          return;
        }
      }

      // Atajos cuando la pantalla de llamado está activa
      if (isCallOverlayOpen) {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          advanceMatchCallPhase();
          return;
        } else if (e.code === 'Escape') {
          e.preventDefault();
          closeMatchCallOverlay();
          return;
        } else if (key === 'v') {
          repeatCurrentPhaseVoice();
          return;
        } else if (key === '1') {
          setMatchCallPhase('white');
          return;
        } else if (key === '2') {
          setMatchCallPhase('blue');
          return;
        } else if (key === '3') {
          setMatchCallPhase('versus');
          return;
        }
      }

      if (e.code === 'Space') {
        e.preventDefault();
        toggleMatchTimer();
      } else if (key === 'c') {
        openMatchCallOverlayCurrent();
      } else if (key === 'a') {
        startOsaekomi('white');
      } else if (key === 's') {
        stopOsaekomi('white');
      } else if (key === 'k') {
        startOsaekomi('blue');
      } else if (key === 'l') {
        stopOsaekomi('blue');
      } else if (key === 'r') {
        resetMatchPrompt();
      } else if (key === 'w') {
        changeScore('white', 'wazaari', 1);
      } else if (key === 'y') {
        changeScore('white', 'yuko', 1);
      }
    });

    // ==========================================
    // 10. GENERADOR DE CÓDIGO QR & POSTULACIÓN DE DOJOS
    // ==========================================
    let currentQrInstance = null;
    let pendingImportJudokas = [];
    let detectedServerIp = '192.168.40.229';
    let detectedServerPort = 8080;

    function getDefaultPostulacionUrl(page = null) {
      if (!page) {
        const typeSelect = document.getElementById('qr-type-selector');
        const val = typeSelect ? typeSelect.value : 'scoreboard';
        if (val === 'scoreboard') page = 'index.html';
        else if (val === 'crear_dojos') page = 'crear_dojos.html';
        else page = 'postulacion.html';
      }

      if (window.location.protocol.startsWith('http')) {
        const host = window.location.hostname;
        const port = window.location.port ? `:${window.location.port}` : '';
        if (host === 'localhost' || host === '127.0.0.1') {
          return `http://${detectedServerIp}${port || ':8080'}/${page}`;
        }
        return `${window.location.origin}/${page}`;
      }
      return `http://${detectedServerIp}:8080/${page}`;
    }

    function onQrTypeChange() {
      const typeSelect = document.getElementById('qr-type-selector');
      const input = document.getElementById('qr-target-url');
      const val = typeSelect ? typeSelect.value : 'scoreboard';
      let page = 'index.html';
      let toastMsg = '📱 Código QR configurado para: Tablero & Torneo en Vivo';

      if (val === 'crear_dojos') {
        page = 'crear_dojos.html';
        toastMsg = '🏢 Código QR configurado para: Registro de Dojos';
      } else if (val === 'postulacion') {
        page = 'postulacion.html';
        toastMsg = '🥋 Código QR configurado para: Postulación de Atletas';
      }
      
      if (input) {
        input.value = getDefaultPostulacionUrl(page);
      }
      renderQrCode();
      showToast(toastMsg);
    }

    function checkServerApiInfo() {
      fetch('/api/info')
        .then(r => r.json())
        .then(info => {
          if (info && info.ip) {
            detectedServerIp = info.ip;
            detectedServerPort = info.port || 8080;
            const input = document.getElementById('qr-target-url');
            if (input && (!input.value || input.value.includes('file:') || input.value.includes('localhost'))) {
              input.value = getDefaultPostulacionUrl();
              renderQrCode();
            }
          }
        })
        .catch(() => {
          // Servidor no activo o modo estático file://
        });
    }

    function renderQrCode() {
      const container = document.getElementById('qr-canvas-container');
      const printContainer = document.getElementById('print-qr-target');
      if (!container) return;

      const typeSelect = document.getElementById('qr-type-selector');
      const qrType = typeSelect ? typeSelect.value : 'scoreboard';

      let page = 'index.html';
      if (qrType === 'crear_dojos') page = 'crear_dojos.html';
      else if (qrType === 'postulacion') page = 'postulacion.html';

      const urlInput = document.getElementById('qr-target-url');
      let targetUrl = urlInput ? urlInput.value.trim() : '';
      if (!targetUrl) {
        targetUrl = getDefaultPostulacionUrl(page);
        if (urlInput) urlInput.value = targetUrl;
      }

      const sizeSelect = document.getElementById('qr-size-select');
      const size = sizeSelect ? parseInt(sizeSelect.value, 10) : 256;

      const errorSelect = document.getElementById('qr-error-level');
      const errorLevelStr = errorSelect ? errorSelect.value : 'H';
      const errorLevel = QRCode.CorrectLevel[errorLevelStr] || QRCode.CorrectLevel.H;

      // Actualizar textos de preview dinámicos
      const badgeHeader = document.getElementById('qr-card-badge-header');
      const posterTitle = document.getElementById('qr-poster-title');
      const posterSubtitle = document.getElementById('qr-poster-subtitle');
      const openLink = document.getElementById('qr-poster-open-link');

      if (qrType === 'scoreboard') {
        if (badgeHeader) badgeHeader.innerText = 'TABLERO & TORNEO EN VIVO (MÓVIL)';
        if (posterTitle) posterTitle.innerText = '📱 ESCANEA PARA VER EL TORNEO EN VIVO';
        if (posterSubtitle) posterSubtitle.innerText = 'Marcador en tiempo real, cronómetro, llaves y ranking';
        if (openLink) {
          openLink.innerText = '🚀 Abrir Tablero y Torneo en Vivo';
          openLink.href = targetUrl;
        }
      } else if (qrType === 'crear_dojos') {
        if (badgeHeader) badgeHeader.innerText = 'REGISTRO OFICIAL DE CLUBES & DOJOS';
        if (posterTitle) posterTitle.innerText = '🏢 ESCANEA PARA REGISTRAR TU DOJO';
        if (posterSubtitle) posterSubtitle.innerText = 'Registro de club, sensei, WhatsApp y obtención de clave';
        if (openLink) {
          openLink.innerText = '🚀 Abrir Portal de Dojos en Vivo';
          openLink.href = targetUrl;
        }
      } else {
        if (badgeHeader) badgeHeader.innerText = 'POSTULACIÓN OFICIAL DE JUDOKAS';
        if (posterTitle) posterTitle.innerText = '📲 ESCANEA CON TU CELULAR PARA POSTULAR';
        if (posterSubtitle) posterSubtitle.innerText = 'Inscripción de atletas, ramas, edades y pesos';
        if (openLink) {
          openLink.innerText = '🚀 Abrir Portal de Postulación en Vivo';
          openLink.href = targetUrl;
        }
      }

      const activeUrlDisplay = document.getElementById('qr-active-url-text');
      if (activeUrlDisplay) activeUrlDisplay.innerText = targetUrl;

      const printUrlDisplay = document.getElementById('print-qr-url-text');
      if (printUrlDisplay) printUrlDisplay.innerText = targetUrl;

      // Limpiar y renderizar QR principal
      container.innerHTML = '';
      try {
        currentQrInstance = new QRCode(container, {
          text: targetUrl,
          width: size,
          height: size,
          colorDark: "#090d16",
          colorLight: "#ffffff",
          correctLevel: errorLevel
        });
      } catch (err) {
        console.warn('Error generando QR principal:', err);
      }

      // Renderizar también en el afiche de impresión
      if (printContainer) {
        printContainer.innerHTML = '';
        try {
          new QRCode(printContainer, {
            text: targetUrl,
            width: 240,
            height: 240,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
        } catch (e) {}
      }
    }

    function updateQrFromInput() {
      renderQrCode();
    }

    function resetQrUrlToDefault() {
      const input = document.getElementById('qr-target-url');
      if (input) {
        input.value = getDefaultPostulacionUrl();
        renderQrCode();
      }
    }

    function setQrUrlCustomIP() {
      const typeSelect = document.getElementById('qr-type-selector');
      const page = (typeSelect && typeSelect.value === 'crear_dojos') ? 'crear_dojos.html' : 'postulacion.html';
      const custom = prompt(`Ingresa la IP o Dominio del servidor (Ej: http://${detectedServerIp}:8080/${page}):`, `http://${detectedServerIp}:8080/${page}`);
      if (custom && custom.trim()) {
        const input = document.getElementById('qr-target-url');
        if (input) {
          input.value = custom.trim();
          renderQrCode();
        }
      }
    }

    function copyQrLink() {
      const urlInput = document.getElementById('qr-target-url');
      const url = urlInput ? urlInput.value.trim() : getDefaultPostulacionUrl();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast('📋 ¡Enlace copiado al portapapeles!');
          alert('📋 ¡Enlace copiado al portapapeles!\n\n' + url);
        }).catch(() => {
          prompt('Copia el enlace manualmente:', url);
        });
      } else {
        prompt('Copia el enlace:', url);
      }
    }

    function shareQrWhatsApp() {
      const typeSelect = document.getElementById('qr-type-selector');
      const qrType = typeSelect ? typeSelect.value : 'scoreboard';
      const urlInput = document.getElementById('qr-target-url');
      const url = urlInput ? urlInput.value.trim() : getDefaultPostulacionUrl();

      let msg = '';
      if (qrType === 'scoreboard') {
        msg = `🥋 *TRANSMISIÓN EN VIVO - TORNEO KOSEN JUDO HEIKEGANI*\n\n`;
        msg += `Sigue los combates, marcadores, cronómetro y resultados del torneo en tiempo real desde tu celular:\n\n`;
        msg += `📱 *Enlace del Tablero en Vivo:* \n${url}\n\n`;
        msg += `_Mesa Técnica Oficial Kosen Judo Heikegani_ ⚡`;
      } else if (qrType === 'crear_dojos') {
        msg = `🥋 *CONVOCATORIA OFICIAL - TORNEO KOSEN JUDO HEIKEGANI*\n\n`;
        msg += `Estimados Senseis y Delegados:\n`;
        msg += `Ya está habilitado el *Portal Oficial para Registro y Creación de Dojos* del Torneo Heikegani.\n\n`;
        msg += `🏢 *Enlace Oficial de Registro de Dojos:* \n${url}\n\n`;
        msg += `📌 *Pasos:* \n`;
        msg += `1. Registra tu club y Sensei responsable.\n`;
        msg += `2. Obtén o asigna tu Clave Oficial de Acceso.\n`;
        msg += `3. Utiliza tu enlace exclusivo para postular a tus judokas.\n\n`;
        msg += `_Mesa Técnica Oficial Kosen Judo Heikegani_ ⚡`;
      } else {
        msg = `🥋 *CONVOCATORIA OFICIAL - TORNEO KOSEN JUDO HEIKEGANI*\n\n`;
        msg += `Estimados Senseis, Delegados y Atletas:\n`;
        msg += `Ya se encuentra habilitado el *Portal Oficial de Postulación e Inscripción de Judokas* para el Torneo Ne-Waza Heikegani.\n\n`;
        msg += `📲 *Enlace de Inscripción Directa:* \n${url}\n\n`;
        msg += `📌 *Instrucciones:* \n`;
        msg += `1. Ingresa el nombre de tu Dojo y tu Clave de acceso.\n`;
        msg += `2. Agrega a tus competidores con rama, edad, peso y cinturón.\n`;
        msg += `3. Al finalizar, envía tu nómina directamente por WhatsApp o sincronízala con la Mesa Técnica.\n\n`;
        msg += `⚔️ _Reglamento Ne-Waza: 2 de 3 Ippones para ganar • Llaves por grupos de 3 y series de 2_ ⚡`;
      }

      const encoded = encodeURIComponent(msg);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }

    function printQrPoster() {
      renderQrCode();
      const printable = document.getElementById('printable-qr-poster');
      if (printable) {
        printable.style.display = 'block';
        window.print();
        setTimeout(() => {
          printable.style.display = 'none';
        }, 1000);
      }
    }

    function downloadQrPng() {
      const qrCanvas = document.querySelector('#qr-canvas-container canvas');
      if (!qrCanvas) {
        alert('Por favor genera el QR primero.');
        return;
      }

      // Crear un Canvas HD de Alta Definición con Marco Oficial de Torneo
      const exportCanvas = document.createElement('canvas');
      exportCanvas.width = 900;
      exportCanvas.height = 1100;
      const ctx = exportCanvas.getContext('2d');

      // Fondo oscuro elegante
      const bgGrad = ctx.createLinearGradient(0, 0, 0, exportCanvas.height);
      bgGrad.addColorStop(0, '#0f172a');
      bgGrad.addColorStop(1, '#080c14');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

      // Marco dorado exterior
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 8;
      ctx.strokeRect(20, 20, exportCanvas.width - 40, exportCanvas.height - 40);

      // Marco interior fino
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 2;
      ctx.strokeRect(32, 32, exportCanvas.width - 64, exportCanvas.height - 64);

      // Encabezado
      ctx.textAlign = 'center';
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 36px "Segoe UI", sans-serif';
      ctx.fillText('TORNEO KOSEN JUDO HEIKEGANI', exportCanvas.width / 2, 90);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px "Segoe UI", sans-serif';
      ctx.fillText('PORTAL OFICIAL DE POSTULACIÓN DE DOJOS', exportCanvas.width / 2, 135);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '16px "Segoe UI", sans-serif';
      ctx.fillText('Escanea este código con tu celular para inscribir a tus judokas', exportCanvas.width / 2, 175);

      // Tarjeta blanca para el QR
      const qrCardW = 540;
      const qrCardH = 540;
      const qrCardX = (exportCanvas.width - qrCardW) / 2;
      const qrCardY = 210;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(qrCardX, qrCardY, qrCardW, qrCardH, 24);
      ctx.fill();

      // Dibujar el QR en el centro de la tarjeta blanca
      const qrDrawSize = 460;
      const qrDrawX = qrCardX + (qrCardW - qrDrawSize) / 2;
      const qrDrawY = qrCardY + (qrCardH - qrDrawSize) / 2;
      ctx.drawImage(qrCanvas, qrDrawX, qrDrawY, qrDrawSize, qrDrawSize);

      // Enlace
      const urlInput = document.getElementById('qr-target-url');
      const urlText = urlInput ? urlInput.value.trim() : getDefaultPostulacionUrl();
      
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.beginPath();
      ctx.roundRect(60, 780, exportCanvas.width - 120, 60, 12);
      ctx.fill();

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(urlText.length > 55 ? urlText.substring(0, 52) + '...' : urlText, exportCanvas.width / 2, 818);

      // Tarjetas informativas inferiores
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.roundRect(60, 860, exportCanvas.width - 120, 120, 16);
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 17px "Segoe UI", sans-serif';
      ctx.fillText('⚡ REGLAMENTO OFICIAL DE COMBATE NE-WAZA', exportCanvas.width / 2, 900);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '15px "Segoe UI", sans-serif';
      ctx.fillText('• Victoria con 2 Ippones (2 de 3) • Series de 2 y Grupos de 3 Judokas', exportCanvas.width / 2, 935);
      ctx.fillText('• 4 pts Victoria | 2 pts Empate | 1 pto Participación por Atleta', exportCanvas.width / 2, 960);

      // Pie
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 14px "Segoe UI", sans-serif';
      ctx.fillText('KOSEN JUDO HEIKEGANI • MESA TÉCNICA OFICIAL & GESTIÓN DE ATLETAS', exportCanvas.width / 2, 1045);

      // Disparar descarga
      const link = document.createElement('a');
      link.download = 'QR_Postulacion_KosenJudo_Heikegani.png';
      link.href = exportCanvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }

    // ==========================================
    // 11. IMPORTACIÓN DE POSTULACIONES DE DOJOS
    // ==========================================
    function openImportModal() {
      pendingImportJudokas = [];
      const fileInput = document.getElementById('input-file-import');
      if (fileInput) fileInput.value = '';
      const nameBox = document.getElementById('import-file-name');
      if (nameBox) nameBox.innerText = 'Ningún archivo seleccionado';
      const preview = document.getElementById('import-preview-box');
      if (preview) { preview.style.display = 'none'; preview.innerHTML = ''; }
      const btn = document.getElementById('btn-confirm-import-json');
      if (btn) btn.style.display = 'none';

      document.getElementById('modal-import-roster').style.display = 'flex';
    }

    function openImportClipboardModal() {
      document.getElementById('import-text-content').value = '';
      document.getElementById('modal-import-clipboard').style.display = 'flex';
    }

    function handleFileSelected(e) {
      const file = e.target.files[0];
      if (!file) return;

      document.getElementById('import-file-name').innerText = `📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const parsed = JSON.parse(evt.target.result);
          processImportData(parsed);
        } catch(err) {
          alert('Error al leer el archivo JSON: ' + err.message);
        }
      };
      reader.readAsText(file);
    }

    function processImportData(data) {
      let list = [];
      let dojoName = data.dojo || 'Dojo Externo';

      if (Array.isArray(data)) {
        list = data;
      } else if (data.judokas && Array.isArray(data.judokas)) {
        list = data.judokas;
      } else {
        alert('El archivo no contiene un formato de nómina válido.');
        return;
      }

      pendingImportJudokas = [];
      list.forEach(item => {
        if (item.name) {
          const age = parseInt(item.age, 10) || 16;
          const catInfo = getCategoryByAge(age);
          pendingImportJudokas.push({
            id: item.id || ('imported_' + Date.now() + '_' + Math.floor(Math.random() * 1000)),
            name: item.name.trim(),
            gender: item.gender || 'Masculino',
            dojo: item.dojo || dojoName,
            age: age,
            weight: parseFloat(item.weight) || 65.0,
            belt: item.belt || 'Blanco',
            category: item.category || catInfo.category,
            durationSec: item.durationSec || catInfo.durationSec,
            timeFormatted: item.timeFormatted || catInfo.timeFormatted
          });
        }
      });

      const preview = document.getElementById('import-preview-box');
      const btn = document.getElementById('btn-confirm-import-json');

      if (pendingImportJudokas.length === 0) {
        preview.innerHTML = '<div style="color:#f87171;">No se encontraron atletas válidos en el archivo.</div>';
        preview.style.display = 'block';
        btn.style.display = 'none';
      } else {
        let html = `<div style="font-weight:bold; color:var(--gold); margin-bottom:6px;">Se encontraron ${pendingImportJudokas.length} Judokas:</div>`;
        pendingImportJudokas.forEach((j, i) => {
          html += `<div>${i+1}. <b>${escapeHtml(j.name)}</b> (${j.gender}, ${j.age}a, ${j.weight}kg, ${j.belt}) - <i>${escapeHtml(j.dojo)}</i></div>`;
        });
        preview.innerHTML = html;
        preview.style.display = 'block';
        btn.style.display = 'inline-flex';
        btn.innerText = `✅ Inscribir ${pendingImportJudokas.length} Judokas al Torneo`;
      }
    }

    function confirmImportJson() {
      if (pendingImportJudokas.length === 0) return;

      let added = 0;
      pendingImportJudokas.forEach(pj => {
        const exists = registeredJudokas.some(j => j.name.toLowerCase() === pj.name.toLowerCase() && j.dojo.toLowerCase() === pj.dojo.toLowerCase());
        if (!exists) {
          registeredJudokas.push(pj);
          added++;
        }
      });

      registeredJudokas.sort(compareJudokas);
      saveJudokas();

      renderJudokasTable();
      updateScoreboardDropdowns();
      renderCategoryPoolsView();
      renderTournamentOrderView();
      updateDojoDatalist();

      closeModal('modal-import-roster');
      alert(`🎉 ¡Éxito! Se han importado e inscrito ${added} judokas a la Mesa Técnica Oficial.`);
      switchTab('registration');
    }

    function parseAndImportTextRoster() {
      const text = document.getElementById('import-text-content').value.trim();
      if (!text) {
        alert('Por favor pega el texto de la nómina.');
        return;
      }

      // Intentar ver si es JSON
      if (text.startsWith('{') || text.startsWith('[')) {
        try {
          const parsed = JSON.parse(text);
          processImportData(parsed);
          closeModal('modal-import-clipboard');
          document.getElementById('modal-import-roster').style.display = 'flex';
          return;
        } catch(e) {}
      }

      // Procesar línea por línea texto libre
      const lines = text.split('\n');
      let currentDojo = 'Dojo Postulado';
      let parsedJudokas = [];

      lines.forEach(line => {
        const clean = line.trim();
        if (!clean) return;

        if (clean.toLowerCase().startsWith('dojo:') || clean.toLowerCase().startsWith('club:')) {
          currentDojo = clean.replace(/^(dojo|club):/i, '').trim();
          return;
        }

        // Buscar formato: Nombre, Rama, Edad, Peso, Cinturon
        const parts = clean.replace(/^[0-9]+[\.\-\)]\s*/, '').split(/[,;\t|]+/);
        if (parts.length >= 1 && parts[0].trim()) {
          const name = parts[0].trim();
          let gender = 'Masculino';
          let age = 16;
          let weight = 66.0;
          let belt = 'Blanco';

          for (let i = 1; i < parts.length; i++) {
            const p = parts[i].trim();
            if (/fem|mujer|f/i.test(p)) gender = 'Femenino';
            if (/masc|varon|m/i.test(p)) gender = 'Masculino';
            const num = parseFloat(p.replace(/[^0-9\.]/g, ''));
            if (!isNaN(num)) {
              if (num >= 4 && num <= 90 && !p.toLowerCase().includes('kg')) age = Math.round(num);
              if (p.toLowerCase().includes('kg') || num > 90 || (num > 20 && num < 200 && p.includes('.'))) weight = num;
            }
            if (/blanco|amarillo|naranja|verde|azul|marr|negro/i.test(p)) {
              if (/blanco/i.test(p)) belt = 'Blanco';
              else if (/amarillo/i.test(p)) belt = 'Amarillo';
              else if (/naranja/i.test(p)) belt = 'Naranja';
              else if (/verde/i.test(p)) belt = 'Verde';
              else if (/azul/i.test(p)) belt = 'Azul';
              else if (/marr/i.test(p)) belt = 'Marrón';
              else if (/negro/i.test(p)) belt = 'Negro';
            }
          }

          const catInfo = getCategoryByAge(age);
          parsedJudokas.push({
            id: 'txt_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
            name,
            gender,
            dojo: currentDojo,
            age,
            weight,
            belt,
            category: catInfo.category,
            durationSec: catInfo.durationSec,
            timeFormatted: catInfo.timeFormatted
          });
        }
      });

      if (parsedJudokas.length === 0) {
        alert('No se pudo interpretar atletas en el texto proporcionado.');
        return;
      }

      let added = 0;
      parsedJudokas.forEach(pj => {
        const exists = registeredJudokas.some(j => j.name.toLowerCase() === pj.name.toLowerCase() && j.dojo.toLowerCase() === pj.dojo.toLowerCase());
        if (!exists) {
          registeredJudokas.push(pj);
          added++;
        }
      });

      registeredJudokas.sort(compareJudokas);
      saveJudokas();

      renderJudokasTable();
      updateScoreboardDropdowns();
      renderCategoryPoolsView();
      renderTournamentOrderView();
      updateDojoDatalist();

      closeModal('modal-import-clipboard');
      alert(`🎉 ¡Se han procesado e inscrito ${added} judokas al torneo desde el texto!`);
      switchTab('registration');
    }

    function getCategoryByAge(age) {
      const a = parseInt(age, 10);
      if (isNaN(a)) return { category: 'General', durationSec: 120, timeFormatted: '2:00 min' };
      if (a <= 10) return { category: 'Sub-10 (Pre-Infantil)', durationSec: 60, timeFormatted: '1:00 min' };
      if (a >= 11 && a <= 13) return { category: 'Sub-13 (Infantil A)', durationSec: 90, timeFormatted: '1:30 min' };
      if (a >= 14 && a <= 16) return { category: 'Sub-16 (Cadete / Infantil B)', durationSec: 120, timeFormatted: '2:00 min' };
      if (a >= 17 && a <= 19) return { category: 'Sub-20 (Junior)', durationSec: 150, timeFormatted: '2:30 min' };
      if (a >= 20 && a <= 30) return { category: 'Senior (Adultos)', durationSec: 180, timeFormatted: '3:00 min' };
      if (a >= 31 && a <= 49) return { category: 'Máster A (31-49 años)', durationSec: 150, timeFormatted: '2:30 min' };
      return { category: 'Máster B (+50 años)', durationSec: 120, timeFormatted: '2:00 min' };
    }

    // ==========================================
    // 12. MONITOR EN VIVO Y AUTO-INSCRIPCIÓN DE POSTULACIONES RECIBIDAS (API)
    // ==========================================
    let serverLivePostulacionesCache = [];
    let autoInscribeMobile = localStorage.getItem('newaza_auto_inscribe_mobile') !== 'false'; // Predeterminado: TRUE

    function toggleAutoInscribeMobile() {
      autoInscribeMobile = !autoInscribeMobile;
      localStorage.setItem('newaza_auto_inscribe_mobile', autoInscribeMobile ? 'true' : 'false');
      updateAutoInscribeButton();
      if (autoInscribeMobile) {
        processAutoInscribe();
        showToast('⚡ Auto-inscripción activada: los judokas que postulen entrarán directo al torneo.', '#10b981');
      } else {
        updateLivePostulacionesUI();
        showToast('⏸️ Modo manual: deberás confirmar las postulaciones recibidas.', '#475569');
      }
    }

    function updateAutoInscribeButton() {
      const btn = document.getElementById('btn-toggle-autoinscribe');
      if (btn) {
        if (autoInscribeMobile) {
          btn.innerHTML = '⚡ Auto-inscribir: ACTIVADO';
          btn.style.background = '#10b981';
          btn.style.borderColor = '#059669';
        } else {
          btn.innerHTML = '⏸️ Auto-inscribir: MANUAL';
          btn.style.background = '#475569';
          btn.style.borderColor = '#64748b';
        }
      }
    }

    function loadLiveServerPostulaciones() {
      fetch('/api/postulaciones')
        .then(r => r.json())
        .then(list => {
          serverLivePostulacionesCache = list || [];
          
          const statusBadge = document.getElementById('live-server-status-badge');
          if (statusBadge) {
            statusBadge.innerHTML = '🟢 Servidor Wi-Fi Activo';
            statusBadge.style.background = '#10b981';
          }

          if (autoInscribeMobile) {
            processAutoInscribe();
          } else {
            updateLivePostulacionesUI();
          }
        })
        .catch(() => {
          // Servidor no disponible o modo estático file://
          const statusBadge = document.getElementById('live-server-status-badge');
          if (statusBadge) {
            statusBadge.innerHTML = '⚪ Modo Local / Sin Servidor';
            statusBadge.style.background = '#64748b';
          }
        });
    }

    function processAutoInscribe() {
      if (!serverLivePostulacionesCache || serverLivePostulacionesCache.length === 0) {
        updateLivePostulacionesUI();
        return;
      }

      let totalAdded = 0;
      let dojosAdded = [];

      serverLivePostulacionesCache.forEach(item => {
        const list = item.judokas || [];
        const dojoName = item.dojo || 'Dojo Externo';
        let dojoCount = 0;

        list.forEach(j => {
          if (!j.name) return;
          const exists = registeredJudokas.some(rj => 
            rj.name.toLowerCase().trim() === j.name.toLowerCase().trim() && 
            rj.dojo.toLowerCase().trim() === (j.dojo || dojoName).toLowerCase().trim()
          );

          if (!exists) {
            const age = parseInt(j.age, 10) || 16;
            const catInfo = getCategoryByAge(age);
            registeredJudokas.push({
              id: j.id || ('mobile_' + Date.now() + '_' + Math.floor(Math.random() * 1000)),
              name: j.name.trim(),
              gender: j.gender || 'Masculino',
              dojo: j.dojo || dojoName,
              age: age,
              weight: parseFloat(j.weight) || 65.0,
              belt: j.belt || 'Blanco',
              category: j.category || catInfo.category,
              durationSec: j.durationSec || catInfo.durationSec,
              timeFormatted: j.timeFormatted || catInfo.timeFormatted
            });
            totalAdded++;
            dojoCount++;
          }
        });

        if (dojoCount > 0 && !dojosAdded.includes(dojoName)) {
          dojosAdded.push(dojoName);
        }
      });

      if (totalAdded > 0) {
        registeredJudokas.sort(compareJudokas);
        saveJudokas();
        renderJudokasTable();
        updateJudokasBadges();
        updateDojoDatalist();
        updateScoreboardDropdowns();
        updateTournamentMatchSelector();
        renderCategoryPoolsView();
        renderTournamentOrderView();

        try { playBuzzer('bell'); } catch(e) {}
        showToast(`🥋 ¡Auto-inscripción exitosa! Se agregaron ${totalAdded} atleta(s) del Dojo ${dojosAdded.join(', ')} al torneo.`, '#10b981');
      }

      updateLivePostulacionesUI();
    }

    function updateLivePostulacionesUI() {
      renderLivePostulacionesList();
      updateRegistrationBannerLiveUI();
      updateQrTabBadge();
    }

    function updateQrTabBadge() {
      const badge = document.getElementById('badge-qr-postulaciones');
      if (!badge) return;

      let pendingCount = 0;
      let totalCount = 0;

      serverLivePostulacionesCache.forEach(item => {
        const list = item.judokas || [];
        const dojoName = item.dojo || 'Dojo';
        list.forEach(j => {
          if (!j.name) return;
          totalCount++;
          const exists = registeredJudokas.some(rj => 
            rj.name.toLowerCase().trim() === j.name.toLowerCase().trim() && 
            rj.dojo.toLowerCase().trim() === (j.dojo || dojoName).toLowerCase().trim()
          );
          if (!exists) pendingCount++;
        });
      });

      if (totalCount > 0) {
        badge.style.display = 'inline-block';
        if (pendingCount > 0) {
          badge.innerText = `${pendingCount} pend.`;
          badge.style.background = '#ef4444';
          badge.style.color = '#fff';
        } else {
          badge.innerText = `${totalCount} rec.`;
          badge.style.background = '#10b981';
          badge.style.color = '#fff';
        }
      } else {
        badge.style.display = 'none';
      }
    }

    function updateRegistrationBannerLiveUI() {
      const incomingBox = document.getElementById('registration-mobile-incoming-box');
      const incomingList = document.getElementById('registration-mobile-incoming-list');
      const summaryText = document.getElementById('live-registration-summary-text');
      const btnSyncPending = document.getElementById('btn-sync-all-pending');

      if (!incomingBox || !incomingList) return;

      if (!serverLivePostulacionesCache || serverLivePostulacionesCache.length === 0) {
        incomingBox.style.display = 'none';
        if (btnSyncPending) btnSyncPending.style.display = 'none';
        if (summaryText) {
          summaryText.innerHTML = `Los Senseis pueden escanear el QR con su celular y sus judokas se agregarán automáticamente a la lista oficial.`;
        }
        return;
      }

      incomingBox.style.display = 'block';

      let totalJudokas = 0;
      let pendingJudokas = 0;
      let html = '';

      serverLivePostulacionesCache.forEach((item, idx) => {
        const list = item.judokas || [];
        const dojoName = item.dojo || 'Dojo Externo';
        let dojoPending = 0;

        list.forEach(j => {
          if (!j.name) return;
          totalJudokas++;
          const exists = registeredJudokas.some(rj => 
            rj.name.toLowerCase().trim() === j.name.toLowerCase().trim() && 
            rj.dojo.toLowerCase().trim() === (j.dojo || dojoName).toLowerCase().trim()
          );
          if (!exists) {
            pendingJudokas++;
            dojoPending++;
          }
        });

        const isFullyInscribed = dojoPending === 0;

        html += `
          <div style="display:flex; justify-content:space-between; align-items:center; background:#131d2e; border:1px solid ${isFullyInscribed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.4)'}; padding:6px 10px; border-radius:6px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${isFullyInscribed ? '✅' : '⏳'}</span>
              <b style="color:var(--gold);">${escapeHtml(dojoName)}</b>
              <span style="color:#94a3b8; font-size:11px;">(${list.length} atletas • Sensei: ${escapeHtml(item.sensei || 'N/A')})</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="font-size:11px; padding:2px 8px; border-radius:6px; font-weight:bold; ${isFullyInscribed ? 'background:rgba(16, 185, 129, 0.2); color:#10b981;' : 'background:rgba(239, 68, 68, 0.2); color:#f87171;'}">
                ${isFullyInscribed ? 'Inscrito en el Torneo' : `${dojoPending} pendiente(s)`}
              </span>
              ${!isFullyInscribed ? `<button class="btn-action" style="padding:2px 8px; font-size:11px; background:#10b981; border-color:#059669; font-weight:bold;" onclick="importLiveDojoJudokas(${idx})">➕ Inscribir</button>` : ''}
            </div>
          </div>
        `;
      });

      incomingList.innerHTML = html;

      if (btnSyncPending) {
        if (pendingJudokas > 0) {
          btnSyncPending.style.display = 'inline-flex';
          btnSyncPending.innerText = `📥 Inscribir (${pendingJudokas}) Pendientes`;
        } else {
          btnSyncPending.style.display = 'none';
        }
      }

      if (summaryText) {
        summaryText.innerHTML = `📡 <b>${serverLivePostulacionesCache.length} Dojo(s)</b> conectados por móvil | <b>${totalJudokas} judokas</b> postulados | <b>${pendingJudokas}</b> pendientes de ingresar.`;
      }
    }

    function renderLivePostulacionesList() {
      const container = document.getElementById('live-postulaciones-list');
      if (!container) return;

      if (!serverLivePostulacionesCache || serverLivePostulacionesCache.length === 0) {
        container.innerHTML = '<div style="color:var(--slate-400); text-align:center;">No hay postulaciones registradas en el servidor aún.</div>';
        return;
      }

      let html = '';
      serverLivePostulacionesCache.forEach((item, idx) => {
        const list = item.judokas || [];
        const dojoName = item.dojo || 'Dojo';
        let pending = 0;

        list.forEach(j => {
          if (!j.name) return;
          const exists = registeredJudokas.some(rj => 
            rj.name.toLowerCase().trim() === j.name.toLowerCase().trim() && 
            rj.dojo.toLowerCase().trim() === (j.dojo || dojoName).toLowerCase().trim()
          );
          if (!exists) pending++;
        });

        const isInscribed = pending === 0;

        html += `
          <div style="display:flex; justify-content:space-between; align-items:center; background:#131d2e; border:1px solid ${isInscribed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.4)'}; padding:8px 12px; border-radius:8px; margin-bottom:6px;">
            <div>
              <b style="color:var(--gold);">${escapeHtml(dojoName)}</b>
              <span style="color:#94a3b8; font-size:11px; margin-left:6px;">(${list.length} Judokas • Sensei: ${escapeHtml(item.sensei || 'N/A')})</span>
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              <span style="font-size:11px; padding:2px 8px; border-radius:6px; font-weight:bold; ${isInscribed ? 'background:rgba(16, 185, 129, 0.2); color:#10b981;' : 'background:rgba(239, 68, 68, 0.2); color:#f87171;'}">
                ${isInscribed ? '✅ Inscrito' : `⏳ ${pending} pendiente(s)`}
              </span>
              ${!isInscribed ? `<button class="btn-action" style="padding:4px 8px; font-size:11px; background:#10b981; border-color:#059669; font-weight:bold;" onclick="importLiveDojoJudokas(${idx})">➕ Inscribir (${pending})</button>` : ''}
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    function importLiveDojoJudokas(idx) {
      const item = serverLivePostulacionesCache[idx];
      if (!item || !item.judokas) return;

      processImportData(item);
      confirmImportJson();
      updateLivePostulacionesUI();
    }

    function syncAllPendingPostulaciones() {
      if (!serverLivePostulacionesCache || serverLivePostulacionesCache.length === 0) {
        alert('No hay postulaciones registradas en el servidor.');
        return;
      }
      let added = 0;
      serverLivePostulacionesCache.forEach(item => {
        const list = item.judokas || [];
        const dojoName = item.dojo || 'Dojo Externo';
        list.forEach(j => {
          if (!j.name) return;
          const exists = registeredJudokas.some(rj => 
            rj.name.toLowerCase().trim() === j.name.toLowerCase().trim() && 
            rj.dojo.toLowerCase().trim() === (j.dojo || dojoName).toLowerCase().trim()
          );
          if (!exists) {
            const age = parseInt(j.age, 10) || 16;
            const catInfo = getCategoryByAge(age);
            registeredJudokas.push({
              id: j.id || ('mobile_' + Date.now() + '_' + Math.floor(Math.random() * 1000)),
              name: j.name.trim(),
              gender: j.gender || 'Masculino',
              dojo: j.dojo || dojoName,
              age: age,
              weight: parseFloat(j.weight) || 65.0,
              belt: j.belt || 'Blanco',
              category: j.category || catInfo.category,
              durationSec: j.durationSec || catInfo.durationSec,
              timeFormatted: j.timeFormatted || catInfo.timeFormatted
            });
            added++;
          }
        });
      });

      if (added > 0) {
        registeredJudokas.sort(compareJudokas);
        saveJudokas();
        renderJudokasTable();
        updateJudokasBadges();
        updateDojoDatalist();
        updateScoreboardDropdowns();
        updateTournamentMatchSelector();
        renderCategoryPoolsView();
        renderTournamentOrderView();
        updateLivePostulacionesUI();

        try { playBuzzer('bell'); } catch(e) {}
        alert(`🎉 ¡Éxito! Se han importado e inscrito ${added} judokas a la Mesa Técnica Oficial.`);
      } else {
        alert('Todos los judokas de las postulaciones recibidas ya se encuentran inscritos en el torneo.');
      }
    }

    function clearLivePostulacionesServer() {
      if (confirm('¿Deseas vaciar la bandeja de postulaciones recibidas por celular?')) {
        fetch('/api/limpiar-postulaciones', { method: 'POST' })
          .then(r => r.json())
          .then(() => {
            serverLivePostulacionesCache = [];
            updateLivePostulacionesUI();
            showToast('🗑️ Bandeja de postulaciones móviles limpiada.', '#ef4444');
          })
          .catch(() => {
            serverLivePostulacionesCache = [];
            updateLivePostulacionesUI();
          });
      }
    }

    // ==========================================
    // 13. MOTOR DE SINCRONIZACIÓN EN VIVO (MESA & CELULARES)
    // ==========================================
    let liveSyncEventSource = null;
    let lastServerStateVersion = 0;
    let liveMatchBroadcastTimeout = null;
    let isLocalTimerDriving = false;

    function getLiveMatchObject() {
      const whiteNameEl = document.getElementById('white-name-input');
      const whiteDojoEl = document.getElementById('white-dojo-text');
      const blueNameEl = document.getElementById('blue-name-input');
      const blueDojoEl = document.getElementById('blue-dojo-text');

      return {
        matchIndex: state.currentMatchIndex,
        matchNumber: state.currentScheduledMatchNumber || (state.currentMatchIndex + 1),
        fightId: state.currentScheduledFightId,
        categoryKey: state.currentCategoryKey,
        round: state.currentRound,
        white: {
          id: state.white.judokaId,
          name: whiteNameEl ? (whiteNameEl.value || whiteNameEl.innerText || 'Judoka Blanco') : 'Judoka Blanco',
          dojo: whiteDojoEl ? (whiteDojoEl.innerText || whiteDojoEl.value || 'Dojo Shiro') : 'Dojo Shiro',
          gender: state.white.gender,
          belt: state.white.belt,
          weight: state.white.weight,
          category: state.white.category,
          ippon: state.white.ippon,
          wazaari: state.white.wazaari,
          yuko: state.white.yuko,
          koka: state.white.koka,
          shido: state.white.shido,
          hansoku: state.white.hansoku
        },
        blue: {
          id: state.blue.judokaId,
          name: blueNameEl ? (blueNameEl.value || blueNameEl.innerText || 'Judoka Azul') : 'Judoka Azul',
          dojo: blueDojoEl ? (blueDojoEl.innerText || blueDojoEl.value || 'Dojo Ao') : 'Dojo Ao',
          gender: state.blue.gender,
          belt: state.blue.belt,
          weight: state.blue.weight,
          category: state.blue.category,
          ippon: state.blue.ippon,
          wazaari: state.blue.wazaari,
          yuko: state.blue.yuko,
          koka: state.blue.koka,
          shido: state.blue.shido,
          hansoku: state.blue.hansoku
        },
        timer: {
          remainingSeconds: state.matchTimeRemaining,
          totalSeconds: state.matchDuration,
          isRunning: state.isMatchRunning,
          isGoldenScore: state.isGoldenScore
        },
        osaekomi: {
          side: state.osaekomiSide,
          seconds: state.osaekomiSeconds,
          isRunning: !!state.osaekomiSide
        }
      };
    }

    function broadcastLiveMatchToServer(immediate = false) {
      if (!window.location.protocol.startsWith('http')) return;
      if (liveMatchBroadcastTimeout) clearTimeout(liveMatchBroadcastTimeout);

      const doSend = () => {
        const liveData = getLiveMatchObject();
        fetch('/api/tournament/live-match', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(liveData)
        }).catch(() => {});
      };

      if (immediate) {
        doSend();
      } else {
        liveMatchBroadcastTimeout = setTimeout(doSend, 120);
      }
    }

    function syncTournamentStateToServer() {
      if (!window.location.protocol.startsWith('http')) return;

      const payload = {
        judokas: registeredJudokas,
        dojos: mesaRegisteredDojos,
        matchHistory: matchHistory,
        dojoLeaderboard: dojoLeaderboard,
        categoryPlacements: categoryPlacements,
        liveMatch: getLiveMatchObject()
      };

      fetch('/api/tournament/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(r => r.json()).then(res => {
        if (res && res.version) lastServerStateVersion = res.version;
      }).catch(() => {});
    }

    function applyLiveMatchFromServer(liveData) {
      if (!liveData) return;

      // Si este dispositivo tiene el cronómetro corriendo activamente, no pisar su propio reloj
      if (state.isMatchRunning && isLocalTimerDriving) {
        return;
      }

      state.currentMatchIndex = (liveData.matchIndex !== undefined) ? liveData.matchIndex : state.currentMatchIndex;
      state.currentScheduledMatchNumber = liveData.matchNumber || state.currentScheduledMatchNumber;
      state.currentScheduledFightId = liveData.fightId || state.currentScheduledFightId;
      state.currentCategoryKey = liveData.categoryKey || state.currentCategoryKey;
      state.currentRound = liveData.round || state.currentRound;

      if (liveData.white) {
        state.white.ippon = liveData.white.ippon || 0;
        state.white.wazaari = liveData.white.wazaari || 0;
        state.white.yuko = liveData.white.yuko || 0;
        state.white.koka = liveData.white.koka || 0;
        state.white.shido = liveData.white.shido || 0;
        state.white.hansoku = !!liveData.white.hansoku;
        state.white.judokaId = liveData.white.id;

        const wNameEl = document.getElementById('white-name-input');
        const wDojoEl = document.getElementById('white-dojo-text');
        const wBeltEl = document.getElementById('white-belt-badge');
        const wCatEl = document.getElementById('white-cat-badge');
        const wGenEl = document.getElementById('white-gender-badge');

        if (wNameEl && document.activeElement !== wNameEl) wNameEl.value = liveData.white.name || 'Judoka Blanco';
        if (wDojoEl) wDojoEl.innerText = liveData.white.dojo || 'Dojo Shiro';
        if (wBeltEl) wBeltEl.innerText = liveData.white.belt || 'Cinturón';
        if (wCatEl) wCatEl.innerText = liveData.white.category || 'General';
        if (wGenEl) {
          wGenEl.className = `gender-pill ${liveData.white.gender === 'Femenino' ? 'female' : 'male'}`;
          wGenEl.innerText = liveData.white.gender === 'Femenino' ? '♀️ Fem' : '♂️ Masc';
        }
      }

      if (liveData.blue) {
        state.blue.ippon = liveData.blue.ippon || 0;
        state.blue.wazaari = liveData.blue.wazaari || 0;
        state.blue.yuko = liveData.blue.yuko || 0;
        state.blue.koka = liveData.blue.koka || 0;
        state.blue.shido = liveData.blue.shido || 0;
        state.blue.hansoku = !!liveData.blue.hansoku;
        state.blue.judokaId = liveData.blue.id;

        const bNameEl = document.getElementById('blue-name-input');
        const bDojoEl = document.getElementById('blue-dojo-text');
        const bBeltEl = document.getElementById('blue-belt-badge');
        const bCatEl = document.getElementById('blue-cat-badge');
        const bGenEl = document.getElementById('blue-gender-badge');

        if (bNameEl && document.activeElement !== bNameEl) bNameEl.value = liveData.blue.name || 'Judoka Azul';
        if (bDojoEl) bDojoEl.innerText = liveData.blue.dojo || 'Dojo Ao';
        if (bBeltEl) bBeltEl.innerText = liveData.blue.belt || 'Cinturón';
        if (bCatEl) bCatEl.innerText = liveData.blue.category || 'General';
        if (bGenEl) {
          bGenEl.className = `gender-pill ${liveData.blue.gender === 'Femenino' ? 'female' : 'male'}`;
          bGenEl.innerText = liveData.blue.gender === 'Femenino' ? '♀️ Fem' : '♂️ Masc';
        }
      }

      if (liveData.timer) {
        state.matchTimeRemaining = (liveData.timer.remainingSeconds !== undefined) ? liveData.timer.remainingSeconds : state.matchTimeRemaining;
        state.matchDuration = liveData.timer.totalSeconds || state.matchDuration;
        state.isGoldenScore = !!liveData.timer.isGoldenScore;
        updateTimerDisplay();

        const btnPlay = document.getElementById('btn-match-play');
        if (btnPlay) {
          if (liveData.timer.isRunning) {
            btnPlay.innerText = '⏸ MATÉ (Espacio)';
            btnPlay.className = 'btn-match-toggle pause';
          } else {
            btnPlay.innerText = '▶ HAJIME (Espacio)';
            btnPlay.className = 'btn-match-toggle start';
          }
        }
      }

      if (liveData.osaekomi) {
        state.osaekomiSide = liveData.osaekomi.side;
        state.osaekomiSeconds = liveData.osaekomi.seconds || 0;
        updateOsaekomiDisplay(state.osaekomiSide || 'white');
        updateOsaekomiDisplay(state.osaekomiSide || 'blue');
      }

      renderScores();
      updateTournamentMatchSelector();
    }

    function applyFullTournamentStateFromServer(serverState) {
      if (!serverState) return;

      // BLINDAJE DE PERSISTENCIA CONTRA REINICIOS EN NUBE:
      // Si el servidor envía un estado vacío (porque el host en la nube se reinició o despertó),
      // pero el cliente ya tiene atletas, historial o dojos guardados localmente:
      // ¡NUNCA borrar el cliente! Restaurar de inmediato el servidor enviando los datos locales.
      const hasLocalData = (registeredJudokas && registeredJudokas.length > 0) || 
                           (mesaRegisteredDojos && mesaRegisteredDojos.length > 0) || 
                           (matchHistory && matchHistory.length > 0);

      const serverIsEmpty = (!serverState.judokas || serverState.judokas.length === 0) &&
                            (!serverState.matchHistory || serverState.matchHistory.length === 0) &&
                            (!serverState.dojos || serverState.dojos.length === 0);

      if (serverIsEmpty && hasLocalData) {
        console.log('🔄 Servidor en estado inicial o reiniciado. Restaurando datos desde LocalStorage hacia la nube...');
        syncTournamentStateToServer();
        return;
      }

      if (serverState.judokas && Array.isArray(serverState.judokas)) {
        if (serverState.judokas.length > 0 || registeredJudokas.length === 0) {
          registeredJudokas = serverState.judokas;
          localStorage.setItem('newaza_judokas', JSON.stringify(registeredJudokas));
        }
      }

      if (serverState.dojos && Array.isArray(serverState.dojos)) {
        if (serverState.dojos.length > 0 || mesaRegisteredDojos.length === 0) {
          // Fusionar dojos inteligentemente sin duplicar ni borrar
          const currentMap = new Map();
          mesaRegisteredDojos.forEach(d => { if (d && d.name) currentMap.set(d.name.toLowerCase().trim(), d); });
          serverState.dojos.forEach(d => { 
            if (d && d.name) {
              const key = d.name.toLowerCase().trim();
              currentMap.set(key, { ...(currentMap.get(key) || {}), ...d });
            }
          });
          mesaRegisteredDojos = Array.from(currentMap.values());
          localStorage.setItem('newaza_registered_dojos', JSON.stringify(mesaRegisteredDojos));
        }
      }

      if (serverState.matchHistory && Array.isArray(serverState.matchHistory)) {
        if (serverState.matchHistory.length > 0 || matchHistory.length === 0) {
          matchHistory = serverState.matchHistory;
          localStorage.setItem('newaza_history', JSON.stringify(matchHistory));
        }
      }

      if (serverState.dojoLeaderboard && typeof serverState.dojoLeaderboard === 'object') {
        if (Object.keys(serverState.dojoLeaderboard).length > 0 || Object.keys(dojoLeaderboard).length === 0) {
          dojoLeaderboard = serverState.dojoLeaderboard;
          localStorage.setItem('newaza_dojoLeaderboard', JSON.stringify(dojoLeaderboard));
        }
      }

      if (serverState.categoryPlacements && typeof serverState.categoryPlacements === 'object') {
        if (Object.keys(serverState.categoryPlacements).length > 0 || Object.keys(categoryPlacements).length === 0) {
          categoryPlacements = serverState.categoryPlacements;
          localStorage.setItem('newaza_category_placements', JSON.stringify(categoryPlacements));
        }
      }

      if (serverState.version) lastServerStateVersion = serverState.version;

      renderJudokasTable();
      updateJudokasBadges();
      renderMesaDojosTable();
      updateDojosBadges();
      updateDojoDatalist();
      updateScoreboardDropdowns();
      updateTournamentMatchSelector();
      renderCategoryPoolsView();
      renderTournamentOrderView();
      renderRankingTable();
      renderCategoryStandingsView();

      if (serverState.liveMatch) {
        applyLiveMatchFromServer(serverState.liveMatch);
      }
    }

    function initLiveSyncEngine() {
      if (!window.location.protocol.startsWith('http')) return;

      // 1. Obtener estado inicial completo del servidor
      fetch('/api/tournament/state')
        .then(r => r.json())
        .then(serverState => {
          applyFullTournamentStateFromServer(serverState);
        })
        .catch(() => {});

      // 2. Conectar al canal Server-Sent Events (SSE) para sincronización instantánea
      if (window.EventSource) {
        try {
          if (liveSyncEventSource) liveSyncEventSource.close();
          liveSyncEventSource = new EventSource('/api/tournament/live-events');

          liveSyncEventSource.addEventListener('initial_state', (e) => {
            try {
              const data = JSON.parse(e.data);
              applyFullTournamentStateFromServer(data);
            } catch(err) {}
          });

          liveSyncEventSource.addEventListener('state_update', (e) => {
            try {
              const data = JSON.parse(e.data);
              applyFullTournamentStateFromServer(data);
            } catch(err) {}
          });

          liveSyncEventSource.addEventListener('live_match', (e) => {
            try {
              const data = JSON.parse(e.data);
              applyLiveMatchFromServer(data);
            } catch(err) {}
          });

          liveSyncEventSource.onerror = () => {
            // El navegador reconecta automáticamente
          };
        } catch(e) {
          console.warn('SSE no disponible:', e);
        }
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      initSpeechSynthesisVoice();
      loadMesaDojosList();
      updateAutoInscribeButton();
      onCategorySelectorChange();
      renderScores();
      renderJudokasTable();
      updateDojoDatalist();
      updateScoreboardDropdowns();
      updateTournamentMatchSelector();
      renderCategoryPoolsView();
      renderTournamentOrderView();
      updateJudokasBadges();
      renderRankingTable();
      renderCategoryStandingsView();
      renderQrCode();
      checkServerApiInfo();
      loadLiveServerPostulaciones();
      initLiveSyncEngine();
      openTournamentKickoffOverlay();

      // Sondeo inteligente optimizado (Smart Polling)
      let livePollTimer = null;
      function scheduleSmartPoll() {
        if (livePollTimer) clearTimeout(livePollTimer);
        // 3 segundos cuando la pestaña está activa, 15 segundos si está en segundo plano
        const pollInterval = document.hidden ? 15000 : 3000;
        livePollTimer = setTimeout(() => {
          if (window.location.protocol.startsWith('http') && navigator.onLine) {
            loadLiveServerPostulaciones();
            loadMesaDojosList();
            if (!liveSyncEventSource || liveSyncEventSource.readyState !== EventSource.OPEN) {
              fetch('/api/tournament/state').then(r => r.json()).then(s => applyFullTournamentStateFromServer(s)).catch(() => {});
            }
          }
          scheduleSmartPoll();
        }, pollInterval);
      }

      document.addEventListener('visibilitychange', () => {
        if (!document.hidden && window.location.protocol.startsWith('http') && navigator.onLine) {
          loadLiveServerPostulaciones();
          loadMesaDojosList();
          fetch('/api/tournament/state').then(r => r.json()).then(s => applyFullTournamentStateFromServer(s)).catch(() => {});
        }
        scheduleSmartPoll();
      });

      window.addEventListener('online', () => {
        if (window.location.protocol.startsWith('http')) {
          loadLiveServerPostulaciones();
          initLiveSyncEngine();
        }
      });

      scheduleSmartPoll();
    });
