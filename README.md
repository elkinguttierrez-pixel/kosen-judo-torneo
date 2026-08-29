# 🥋 KOSEN JUDO HEIKEGANI — Sistema de Mesa Técnica & Postulación QR

> Sistema integral para la gestión de torneos de **Kosen Judo (Ne-Waza)**: Marcador electrónico profesional con cronómetro oficial y evaluación de Osaekomi, generador de llaves de combate (grupos de 3 y series al mejor de 3), tabla general de posiciones por Dojos, y portal móvil de postulación de judokas mediante Código QR.

---

## 🚀 Opciones de Despliegue

La aplicación está lista para ejecutarse localmente o ser desplegada en la nube en menos de 2 minutos.

---

### Opción 1: Despliegue Gratuito en Vercel (Recomendado)

1. Sube esta carpeta a un repositorio en **GitHub**.
2. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New Project"** y selecciona el repositorio.
4. Vercel detectará la configuración automáticamente (`vercel.json`).
5. Haz clic en **"Deploy"**.
6. ¡Listo! Obtendrás una URL pública (ejemplo: `https://kosen-judo-torneo.vercel.app`) donde el código QR funcionará desde cualquier parte del mundo.

---

### Opción 2: Despliegue en Render / Railway / Heroku

1. Sube el código a tu repositorio en GitHub.
2. En [render.com](https://render.com) o [railway.app](https://railway.app), crea un nuevo **Web Service**.
3. Conecta el repositorio de GitHub.
4. Comando de inicio: `npm start` (o `node server.js`).
5. La plataforma asignará un puerto y dominio público automáticamente.

---

### Opción 3: Despliegue en Netlify / GitHub Pages

- **Netlify:** Arrastra la carpeta del proyecto a [app.netlify.com/drop](https://app.netlify.com/drop) o conecta el repositorio de GitHub.
- **GitHub Pages:** Ve a `Settings` > `Pages` > Selecciona la rama `main` y la carpeta `root`.

---

### Opción 4: Ejecución Local en Red Wi-Fi (Coliseo / Gimnasio)

Ideal para torneos presenciales sin internet donde los celulares de los Dojos se conectan al Wi-Fi del coliseo:

#### En Windows:
1. Haz doble clic en **`iniciar.bat`**.
2. Se iniciará el servidor en segundo plano y se abrirá la Mesa Técnica en tu navegador.
3. En la pantalla del QR aparecerá la IP Wi-Fi (ejemplo: `http://192.168.1.50:8080/postulacion.html`).
4. Cualquier teléfono celular conectado al mismo Wi-Fi podrá escanear el QR y postular judokas.

#### En Linux / macOS / Terminal:
```bash
# 1. Instalar / verificar Node.js (versión 16+)
node -v

# 2. Iniciar el servidor
npm start
# O directamente:
node server.js
```

---

## 📁 Estructura del Proyecto

```text
ne wasa/
├── index.html                   # 💻 Mesa técnica oficial, marcador y generador QR
├── postulacion.html             # 📱 Portal móvil para que los Dojos postulen judokas
├── server.js                    # 📡 Servidor Node.js HTTP con API en tiempo real
├── qrcode.min.js                # 🔲 Generador de Códigos QR universal (v1 a v40)
├── app.js                       # ⏱️ Lógica del cronómetro, audio y puntuaciones
├── styles.css                   # 🎨 Estilos CSS del tablero y mesa técnica
├── heikegani.jpg                # 🛡️ Escudo y logo oficial del torneo
├── judokas_50_demo.json         # 📊 Base de datos demo de 50 judokas
├── iniciar.bat                  # ⚡ Script de arranque en 1 clic para Windows
├── abrir_portal_postulacion.bat # ⚡ Acceso directo al portal de postulación
├── package.json                 # 📦 Configuración del paquete y scripts npm
├── vercel.json                  # ☁️ Configuración para Vercel
├── netlify.toml                 # ☁️ Configuración para Netlify
├── Procfile                     # ☁️ Configuración para Render / Railway / Heroku
├── .gitignore                   # 🚫 Archivos ignorados por Git
└── README.md                    # 📖 Manual y guía de despliegue
```

---

## 🥋 Características del Sistema

- **⏱️ Tablero Electrónico & Cronómetro:** Tiempos por categoría reglamentaria (1:00 min hasta 3:00 min) con bocina y campana sintetizada (Web Audio API).
- **🥋 Evaluación de Osaekomi:** Cronómetro independiente con asignación automática de Koka (1-4s), Yuko (5-9s), Waza-ari (10-19s) e Ippon (20s).
- **🌿 Llaves de Combate Ne-Waza:** Generación de grupos de 3 (Triangulares Round-Robin) y grupos de 2 (Series al mejor de 3 combates con regla de 2 victorias).
- **📱 Generador de QR & Afiche Imprimible:** Exporta códigos QR en imagen PNG HD con marco de torneo y afiche A4 para imprimir.
- **🏆 Baremo Oficial de Dojos:** 4 puntos por victoria, 2 puntos por empate (hikiwake) y 1 punto por participación.
- **📥 Sincronización en Vivo:** Importación directa de archivos JSON o texto de WhatsApp a la base de datos de atletas.

---

## 📜 Licencia

MIT License — Desarrollado para el circuito de torneos **KOSEN JUDO HEIKEGANI**.
