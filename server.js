const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const PORT = parseInt(process.env.PORT, 10) || 8080;
const PUBLIC_DIR = path.resolve(__dirname);
const DB_FILE = path.join(PUBLIC_DIR, 'postulaciones_recibidas.json');
const DOJOS_FILE = path.join(PUBLIC_DIR, 'dojos.json');
const JUDOKAS_DEMO_FILE = path.join(PUBLIC_DIR, 'judokas_50_demo.json');
const TOURNAMENT_STATE_FILE = path.join(PUBLIC_DIR, 'tournament_state.json');
const MAX_BODY_SIZE = 5 * 1024 * 1024; // 5 MB máximo de payload

// Conjunto de conexiones Server-Sent Events (SSE) para dispositivos en vivo (PC, celulares, tablets)
const sseClients = new Set();

function broadcastTournamentEvent(eventType, payload) {
  const message = `event: ${eventType}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(message);
    } catch (e) {
      sseClients.delete(client);
    }
  }
}

// Heartbeat periódico para mantener activas las conexiones SSE en móviles y proxies
const sseHeartbeatInterval = setInterval(() => {
  for (const client of sseClients) {
    try {
      client.write(':keepalive\n\n');
    } catch (e) {
      sseClients.delete(client);
    }
  }
}, 25000);

if (sseHeartbeatInterval.unref) {
  sseHeartbeatInterval.unref();
}

// Obtener o inicializar estado global del torneo
function getTournamentState() {
  if (fs.existsSync(TOURNAMENT_STATE_FILE)) {
    try {
      const raw = fs.readFileSync(TOURNAMENT_STATE_FILE, 'utf8');
      const data = JSON.parse(raw);
      if (data && data.judokas) return data;
    } catch (e) {
      console.warn('Advertencia al leer tournament_state.json:', e.message);
    }
  }

  // Si no existe, crear a partir de los datos base (inicial limpio)
  const dojos = readJsonFile(DOJOS_FILE, []);

  const initialState = {
    version: 1,
    updatedAt: new Date().toISOString(),
    judokas: [],
    dojos: dojos,
    matchHistory: [],
    dojoLeaderboard: {},
    categoryPlacements: {},
    liveMatch: {
      matchIndex: 0,
      matchNumber: 1,
      fightId: null,
      categoryKey: null,
      round: 1,
      white: { name: 'Judoka Blanco', dojo: 'Dojo Shiro', belt: 'Blanco', weight: '60', gender: 'Masculino', id: null, ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false },
      blue: { name: 'Judoka Azul', dojo: 'Dojo Ao', belt: 'Azul', weight: '60', gender: 'Masculino', id: null, ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false },
      timer: { remainingSeconds: 120, totalSeconds: 120, isRunning: false, isGoldenScore: false },
      osaekomi: { side: null, seconds: 0, isRunning: false }
    }
  };

  writeJsonFile(TOURNAMENT_STATE_FILE, initialState);
  return initialState;
}

function saveTournamentState(updates) {
  const current = getTournamentState();
  const next = {
    ...current,
    ...updates,
    version: (current.version || 1) + 1,
    updatedAt: new Date().toISOString()
  };
  writeJsonFile(TOURNAMENT_STATE_FILE, next);
  if (updates.dojos && Array.isArray(updates.dojos) && updates.dojos.length > 0) {
    writeJsonFile(DOJOS_FILE, updates.dojos);
  }
  return next;
}

// Obtener IP local real de Wi-Fi / Ethernet descartando adaptadores virtuales
function getLocalIp() {
  try {
    const nets = os.networkInterfaces();
    const candidateIps = [];

    for (const name of Object.keys(nets)) {
      const lowerName = name.toLowerCase();
      // Filtrar adaptadores virtuales típicos
      const isVirtual = lowerName.includes('virtual') || 
                        lowerName.includes('vethernet') || 
                        lowerName.includes('wsl') || 
                        lowerName.includes('hyper-v') || 
                        lowerName.includes('tap') || 
                        lowerName.includes('vmware') || 
                        lowerName.includes('loopback');

      for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          if (!isVirtual) {
            // Prioridad alta a redes Wi-Fi / Ethernet reales
            return net.address;
          }
          candidateIps.push(net.address);
        }
      }
    }

    if (candidateIps.length > 0) {
      return candidateIps[0];
    }
  } catch (e) {
    console.warn('Advertencia al consultar interfaces de red:', e.message);
  }
  return 'localhost';
}

// Lectura segura de archivos JSON
function readJsonFile(filePath, defaultValue = []) {
  if (fs.existsSync(filePath)) {
    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(raw) || defaultValue;
    } catch (e) {
      console.warn(`Aviso: Error leyendo JSON en ${filePath}, utilizando valor por defecto.`, e.message);
      return defaultValue;
    }
  }
  return defaultValue;
}

// Escritura atómica de archivos JSON para evitar corrupción de datos
function writeJsonFile(filePath, data) {
  const tempPath = `${filePath}.${Date.now()}_${Math.floor(Math.random() * 10000)}.tmp`;
  try {
    const jsonStr = JSON.stringify(data, null, 2);
    fs.writeFileSync(tempPath, jsonStr, 'utf8');
    fs.renameSync(tempPath, filePath);
    return true;
  } catch (e) {
    console.error('Error en escritura atómica de archivo:', filePath, e);
    try {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch (_) {}
    return false;
  }
}

// Generador de clave legible para Dojos si no se especifica
function generateDojoKey(dojoName) {
  const cleanName = (dojoName || 'DOJO').replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 4);
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${cleanName || 'DOJO'}-${randomNum}`;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'URL malformada' }));
    return;
  }

  const pathname = decodeURIComponent(parsedUrl.pathname);
  const localIp = getLocalIp();

  // Helper seguro para leer body JSON con límite de tamaño
  function parseRequestBody(callback) {
    let body = '';
    let size = 0;
    let exceeded = false;

    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY_SIZE) {
        exceeded = true;
        res.writeHead(413, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Payload demasiado grande (máx 5MB)' }));
        req.destroy();
        return;
      }
      body += chunk.toString();
    });

    req.on('end', () => {
      if (exceeded) return;
      try {
        const parsed = body ? JSON.parse(body) : {};
        callback(null, parsed);
      } catch (err) {
        callback(err, null);
      }
    });

    req.on('error', (err) => {
      if (!exceeded) callback(err, null);
    });
  }

  // API: Obtener IP local y configuración
  if (pathname === '/api/info') {
    res.writeHead(200, { 
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(JSON.stringify({
      ip: localIp,
      port: PORT,
      postulacionUrl: `http://${localIp}:${PORT}/postulacion.html`,
      crearDojosUrl: `http://${localIp}:${PORT}/crear_dojos.html`,
      mesaUrl: `http://${localIp}:${PORT}/index.html`
    }));
    return;
  }

  // ==========================================
  //  MOTOR DE SINCRONIZACIÓN EN VIVO (MESA & CELULARES)
  // ==========================================

  // 1. Canal Server-Sent Events (SSE) en tiempo real
  if (pathname === '/api/tournament/live-events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(`event: connected\ndata: ${JSON.stringify({ message: 'Conexión en vivo establecida', time: Date.now() })}\n\n`);
    
    sseClients.add(res);

    // Enviar estado actual de inmediato al conectarse
    const currentState = getTournamentState();
    res.write(`event: initial_state\ndata: ${JSON.stringify(currentState)}\n\n`);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // 2. Obtener estado global completo del torneo
  if (pathname === '/api/tournament/state' && req.method === 'GET') {
    const stateData = getTournamentState();
    res.writeHead(200, { 
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(JSON.stringify(stateData));
    return;
  }

  // 3. Guardar / Sincronizar estado global completo del torneo (Judokas, Historial, Dojos, etc.)
  if (pathname === '/api/tournament/state' && req.method === 'POST') {
    parseRequestBody((err, updates) => {
      if (err || !updates) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Datos de estado inválidos' }));
        return;
      }

      const savedState = saveTournamentState(updates);
      broadcastTournamentEvent('state_update', savedState);

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: true, version: savedState.version, updatedAt: savedState.updatedAt }));
    });
    return;
  }

  // 4. Actualización ultrarrápida del Combate en Mesa en Vivo (Cronómetro, Puntuación, Osaekomi)
  if (pathname === '/api/tournament/live-match' && req.method === 'POST') {
    parseRequestBody((err, liveMatchData) => {
      if (err || !liveMatchData) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Datos de combate en vivo inválidos' }));
        return;
      }

      const currentState = getTournamentState();
      currentState.liveMatch = {
        ...currentState.liveMatch,
        ...liveMatchData,
        updatedAt: new Date().toISOString()
      };
      saveTournamentState({ liveMatch: currentState.liveMatch });
      broadcastTournamentEvent('live_match', currentState.liveMatch);

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  // 5. Reiniciar / Vaciar Base de Datos de Prueba para Iniciar Torneo Limpio
  if (pathname === '/api/tournament/reset' && req.method === 'POST') {
    writeJsonFile(DOJOS_FILE, []);
    writeJsonFile(DB_FILE, []);
    
    const freshState = {
      version: Date.now(),
      updatedAt: new Date().toISOString(),
      judokas: [],
      dojos: [],
      matchHistory: [],
      dojoLeaderboard: {},
      categoryPlacements: {},
      liveMatch: {
        matchIndex: 0,
        matchNumber: 1,
        fightId: null,
        categoryKey: null,
        round: 1,
        white: { name: 'Judoka Blanco', dojo: 'Dojo Shiro', belt: 'Blanco', weight: '60', gender: 'Masculino', id: null, ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false },
        blue: { name: 'Judoka Azul', dojo: 'Dojo Ao', belt: 'Azul', weight: '60', gender: 'Masculino', id: null, ippon: 0, wazaari: 0, yuko: 0, koka: 0, shido: 0, hansoku: false },
        timer: { remainingSeconds: 120, totalSeconds: 120, isRunning: false, isGoldenScore: false },
        osaekomi: { side: null, seconds: 0, isRunning: false }
      }
    };
    writeJsonFile(TOURNAMENT_STATE_FILE, freshState);
    broadcastTournamentEvent('state_update', freshState);

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ success: true, message: 'Base de datos reiniciada con éxito' }));
    return;
  }

  // API: Listar Dojos creados con recuento de atletas
  if (pathname === '/api/dojos' && req.method === 'GET') {
    const dojos = readJsonFile(DOJOS_FILE, []);
    const postulaciones = readJsonFile(DB_FILE, []);

    // Calcular conteo de atletas por dojo
    const enrichedDojos = dojos.map(dojo => {
      const dojoPosts = postulaciones.filter(p => 
        (p.dojoId && p.dojoId === dojo.id) || 
        (p.dojo && p.dojo.trim().toLowerCase() === dojo.name.trim().toLowerCase())
      );
      let judokasCount = 0;
      dojoPosts.forEach(p => {
        judokasCount += (p.judokas || []).length;
      });
      return {
        ...dojo,
        judokasCount: Math.max(judokasCount, dojo.judokasCount || 0)
      };
    });

    res.writeHead(200, { 
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(JSON.stringify(enrichedDojos));
    return;
  }

  // API: Crear o Editar Dojo
  if (pathname === '/api/dojos' && req.method === 'POST') {
    parseRequestBody((err, payload) => {
      if (err || !payload || !payload.name) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'El nombre del Dojo es obligatorio' }));
        return;
      }

      const dojos = readJsonFile(DOJOS_FILE, []);
      let dojo = null;

      if (payload.id) {
        // Editar existente
        const index = dojos.findIndex(d => d.id === payload.id);
        if (index !== -1) {
          dojo = {
            ...dojos[index],
            name: payload.name.trim(),
            sensei: payload.sensei ? payload.sensei.trim() : dojos[index].sensei,
            phone: payload.phone ? payload.phone.trim() : dojos[index].phone,
            city: payload.city ? payload.city.trim() : dojos[index].city,
            clave: payload.clave ? payload.clave.trim() : dojos[index].clave || generateDojoKey(payload.name),
            updatedAt: new Date().toISOString()
          };
          dojos[index] = dojo;
        }
      }

      if (!dojo) {
        // Verificar si ya existe con el mismo nombre
        const existingByName = dojos.find(d => d.name.trim().toLowerCase() === payload.name.trim().toLowerCase());
        if (existingByName) {
          existingByName.sensei = payload.sensei ? payload.sensei.trim() : existingByName.sensei;
          existingByName.phone = payload.phone ? payload.phone.trim() : existingByName.phone;
          existingByName.city = payload.city ? payload.city.trim() : existingByName.city;
          if (payload.clave) existingByName.clave = payload.clave.trim();
          existingByName.updatedAt = new Date().toISOString();
          dojo = existingByName;
        } else {
          // Crear nuevo
          dojo = {
            id: 'dojo_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
            name: payload.name.trim(),
            sensei: (payload.sensei || '').trim(),
            phone: (payload.phone || '').trim(),
            city: (payload.city || '').trim(),
            clave: (payload.clave || '').trim() || generateDojoKey(payload.name),
            createdAt: new Date().toISOString(),
            judokasCount: 0
          };
          dojos.push(dojo);
        }
      }

      writeJsonFile(DOJOS_FILE, dojos);
      const savedState = saveTournamentState({ dojos });
      broadcastTournamentEvent('state_update', savedState);

      console.log(`\n🏢 [DOJO REGISTRADO/ACTUALIZADO] Dojo: ${dojo.name} | Sensei: ${dojo.sensei || 'N/A'} | Clave: ${dojo.clave}`);

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ 
        success: true, 
        message: 'Dojo registrado con éxito',
        dojo,
        directUrl: `http://${localIp}:${PORT}/postulacion.html?dojoId=${encodeURIComponent(dojo.id)}&key=${encodeURIComponent(dojo.clave)}`
      }));
    });
    return;
  }

  // API: Eliminar Dojo (Soporta DELETE /api/dojos/:id y POST /api/dojos/delete)
  const isDeleteDojoRoute = (pathname.startsWith('/api/dojos/') && pathname !== '/api/dojos/delete' && pathname !== '/api/dojos/auth' && req.method === 'DELETE') ||
                            (pathname === '/api/dojos/delete' && req.method === 'POST');

  if (isDeleteDojoRoute) {
    const dojoIdFromUrl = (pathname.startsWith('/api/dojos/') && req.method === 'DELETE') ? pathname.replace('/api/dojos/', '') : null;

    parseRequestBody((err, payload) => {
      const targetId = dojoIdFromUrl || (payload && payload.id);
      if (!targetId) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Identificador de Dojo requerido' }));
        return;
      }

      let dojos = readJsonFile(DOJOS_FILE, []);
      const prevLen = dojos.length;
      dojos = dojos.filter(d => d.id !== targetId);

      if (dojos.length < prevLen) {
        writeJsonFile(DOJOS_FILE, dojos);
        const savedState = saveTournamentState({ dojos });
        broadcastTournamentEvent('state_update', savedState);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, message: 'Dojo eliminado con éxito' }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Dojo no encontrado' }));
      }
    });
    return;
  }

  // API: Autenticar Dojo mediante Clave (para portal de inscripción)
  if (pathname === '/api/dojos/auth' && req.method === 'POST') {
    parseRequestBody((err, payload) => {
      if (err || !payload || (!payload.dojoId && !payload.name) || !payload.clave) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Identificador de Dojo y Clave de acceso requeridos' }));
        return;
      }

      const dojos = readJsonFile(DOJOS_FILE, []);
      const postulaciones = readJsonFile(DB_FILE, []);

      const searchKey = (payload.clave || '').trim().toLowerCase();
      const searchName = (payload.name || '').trim().toLowerCase();
      const searchId = (payload.dojoId || '').trim();

      const matchedDojo = dojos.find(d => {
        const idMatches = searchId && d.id === searchId;
        const nameMatches = searchName && d.name.trim().toLowerCase() === searchName;
        const keyMatches = (d.clave || '').trim().toLowerCase() === searchKey;
        return (idMatches || nameMatches) && keyMatches;
      });

      if (!matchedDojo) {
        res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: 'Clave de acceso incorrecta o Dojo no encontrado' }));
        return;
      }

      // Obtener todos los judokas previamente postulados por este dojo
      const dojoPosts = postulaciones.filter(p => 
        (p.dojoId && p.dojoId === matchedDojo.id) || 
        (p.dojo && p.dojo.trim().toLowerCase() === matchedDojo.name.trim().toLowerCase())
      );
      
      let allJudokas = [];
      dojoPosts.forEach(p => {
        if (Array.isArray(p.judokas)) {
          allJudokas = allJudokas.concat(p.judokas);
        }
      });

      // Deduplicar judokas por id o combinación de nombre y peso
      const uniqueJudokas = [];
      const seen = new Set();
      allJudokas.forEach(j => {
        const key = (j.id || '') + '_' + (j.name || '').toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          uniqueJudokas.push(j);
        }
      });

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ 
        success: true, 
        message: `Autenticación exitosa para ${matchedDojo.name}`,
        dojo: matchedDojo,
        judokas: uniqueJudokas
      }));
    });
    return;
  }

  // API: Guardar postulación desde el portal de un Dojo
  if (pathname === '/api/postular' && req.method === 'POST') {
    parseRequestBody((err, payload) => {
      if (err || !payload) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: err ? err.message : 'Datos inválidos' }));
        return;
      }

      try {
        let existing = readJsonFile(DB_FILE, []);
        let dojos = readJsonFile(DOJOS_FILE, []);

        payload.id = 'postula_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        payload.fecha = new Date().toISOString();

        // Si el dojo no estaba registrado en dojos.json, lo registramos automáticamente
        if (payload.dojo) {
          const existingDojo = dojos.find(d => 
            (payload.dojoId && d.id === payload.dojoId) || 
            (d.name.trim().toLowerCase() === payload.dojo.trim().toLowerCase())
          );
          if (existingDojo) {
            payload.dojoId = existingDojo.id;
            payload.clave = existingDojo.clave;
            existingDojo.judokasCount = (payload.judokas || []).length;
            if (payload.sensei) existingDojo.sensei = payload.sensei;
            if (payload.phone) existingDojo.phone = payload.phone;
            if (payload.city) existingDojo.city = payload.city;
          } else {
            const newDojo = {
              id: payload.dojoId || ('dojo_' + Date.now() + '_' + Math.floor(Math.random() * 1000)),
              name: payload.dojo.trim(),
              sensei: (payload.sensei || '').trim(),
              phone: (payload.phone || '').trim(),
              city: (payload.city || '').trim(),
              clave: payload.clave || generateDojoKey(payload.dojo),
              createdAt: new Date().toISOString(),
              judokasCount: (payload.judokas || []).length
            };
            dojos.push(newDojo);
            payload.dojoId = newDojo.id;
            payload.clave = newDojo.clave;
          }
          writeJsonFile(DOJOS_FILE, dojos);
        }

        existing.push(payload);
        writeJsonFile(DB_FILE, existing);

        console.log(`\n📥 [POSTULACIÓN RECIBIDA] Dojo: ${payload.dojo} | Sensei: ${payload.sensei || 'N/A'} | Atletas: ${(payload.judokas || []).length}`);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ 
          success: true, 
          message: 'Postulación registrada en la mesa técnica',
          dojoId: payload.dojoId,
          clave: payload.clave
        }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, error: e.message }));
      }
    });
    return;
  }

  // API: Obtener postulaciones para la Mesa Técnica
  if (pathname === '/api/postulaciones' && req.method === 'GET') {
    const list = readJsonFile(DB_FILE, []);
    res.writeHead(200, { 
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(JSON.stringify(list));
    return;
  }

  // API: Limpiar historial de postulaciones recibidas
  if ((pathname === '/api/limpiar-postulaciones' || pathname === '/api/postulaciones/clear') && (req.method === 'POST' || req.method === 'DELETE')) {
    try {
      writeJsonFile(DB_FILE, []);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: true, message: 'Bandeja de postulaciones limpiada' }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // ==========================================
  //  SERVIDOR DE ARCHIVOS ESTÁTICOS
  // ==========================================
  let safePath = pathname === '/' ? '/index.html' : pathname;
  // Sanitizar y resolver ruta absoluta para prevenir Path Traversal
  let normalizedPath = path.normalize(safePath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.resolve(PUBLIC_DIR, '.' + normalizedPath);

  // Asegurar que el archivo solicitado resida estrictamente dentro de PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Acceso Denegado');
    return;
  }

  // Si no existe el archivo
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    const hasKnownExt = path.extname(filePath).length > 1;
    if (hasKnownExt) {
      // Si el archivo solicitado tiene extensión (.js, .css, .png, etc.) y no existe, responder 404
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Recurso No Encontrado');
      return;
    }
    // Si es una ruta HTML o sin extensión, servir index.html
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Configurar caché según tipo de recurso
  const headers = { 'Content-Type': contentType };
  if (['.jpg', '.jpeg', '.png', '.svg', '.ico', '.webp'].includes(ext)) {
    headers['Cache-Control'] = 'public, max-age=86400'; // 24 horas para imágenes
  } else if (['.js', '.css'].includes(ext)) {
    headers['Cache-Control'] = 'public, max-age=3600'; // 1 hora para scripts/estilos
  } else {
    headers['Cache-Control'] = 'no-cache, must-revalidate';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 No Encontrado');
      return;
    }
    res.writeHead(200, headers);
    res.end(data);
  });
});

// Cierre elegante en señales de terminación
function shutdownServer() {
  console.log('\n🛑 Cerrando servidor y desconectando clientes SSE...');
  for (const client of sseClients) {
    try {
      client.end();
    } catch (_) {}
  }
  sseClients.clear();
  server.close(() => {
    process.exit(0);
  });
}

process.on('SIGINT', shutdownServer);
process.on('SIGTERM', shutdownServer);

server.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log('===============================================================');
  console.log('  🥋 SERVIDOR OFICIAL KOSEN JUDO HEIKEGANI INICIADO CON ÉXITO');
  console.log('===============================================================');
  console.log(`\n💻 MESA TÉCNICA:             http://localhost:${PORT}`);
  console.log(`🏢 CREAR & GESTIONAR DOJOS:   http://${localIp}:${PORT}/crear_dojos.html`);
  console.log(`📱 POSTULACIÓN DOJOS (QR):    http://${localIp}:${PORT}/postulacion.html`);
  console.log(`🌐 RED LOCAL WI-FI (MESA):   http://${localIp}:${PORT}/index.html`);
  console.log('\n📌 Cualquier celular conectado al Wi-Fi puede escanear el QR y postular.');
  console.log('===============================================================\n');

  // Solo abrir automáticamente el navegador si es entorno local de escritorio
  if (!process.env.PORT && !process.env.NODE_ENV && process.platform === 'win32') {
    try {
      exec(`start http://localhost:${PORT}/index.html`);
    } catch (e) {}
  }
});
