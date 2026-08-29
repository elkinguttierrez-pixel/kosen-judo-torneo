@echo off
chcp 65001 >nul
title KOSEN JUDO HEIKEGANI - Servidor Oficial y Mesa Técnica
color 0B
cls
echo ===================================================================
echo   🥋 KOSEN JUDO HEIKEGANI - SERVIDOR OFICIAL Y MESA TÉCNICA
echo ===================================================================
echo.
echo [1/2] Verificando entorno de Node.js...

where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo ❌ ERROR: Node.js no está instalado o no se encuentra en el PATH.
    echo Por favor instala Node.js desde https://nodejs.org/ para usar el servidor Wi-Fi.
    echo.
    echo Abriendo la aplicación en modo local sin servidor...
    start "" "%~dp0index.html"
    echo.
    pause
    exit /b
)

echo [OK] Node.js detectado correctamente.
echo.
echo [2/2] Iniciando Servidor Web HTTP en puerto 8080...
echo.
echo -------------------------------------------------------------------
echo  💻 MESA TÉCNICA (PC):        http://localhost:8080
echo  🏢 CREAR / GESTIONAR DOJOS:   http://localhost:8080/crear_dojos.html
echo  📱 POSTULACIÓN CELULARES:    http://localhost:8080/postulacion.html
echo -------------------------------------------------------------------
echo.
echo Abriendo la Mesa Técnica en tu navegador...
start http://localhost:8080/index.html
echo.
echo ===================================================================
echo  🟢 SERVIDOR ACTIVO Y LISTO PARA RECIBIR JUDOKAS DESDE CELULARES
echo  (Deja esta ventana abierta durante todo el torneo)
echo ===================================================================
echo.

node "%~dp0server.js"

pause
