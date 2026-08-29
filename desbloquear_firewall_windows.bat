@echo off
chcp 65001 >nul
title Desbloquear Puerto 8080 en Firewall de Windows - Kosen Judo
color 0E
cls
echo ===================================================================
echo   🥋 CONFIGURACIÓN DE FIREWALL DE WINDOWS - KOSEN JUDO
echo ===================================================================
echo.
echo Este script creará una regla en el Firewall de Windows para permitir
echo que los teléfonos celulares en el mismo Wi-Fi se conecten al puerto 8080.
echo.

net session >nul 2>&1
if %errorLevel% neq 0 (
    color 0C
    echo ⚠️ ATENCIÓN: Este script requiere Permisos de Administrador.
    echo.
    echo Por favor, haz clic derecho sobre este archivo y selecciona:
    echo "EJECUTAR COMO ADMINISTRADOR"
    echo.
    pause
    exit /b
)

echo Creando regla de Firewall para puerto 8080 TCP...
netsh advfirewall firewall delete rule name="KosenJudo Torneo Server" >nul 2>&1
netsh advfirewall firewall add rule name="KosenJudo Torneo Server" dir=in action=allow protocol=TCP localport=8080 profile=any >nul

if %errorlevel% equ 0 (
    color 0A
    echo.
    echo [OK] ¡Regla creada con éxito en el Firewall de Windows!
    echo Los celulares ya tienen permiso para conectarse al servidor del torneo.
) else (
    color 0C
    echo.
    echo [ERROR] No se pudo agregar la regla al Firewall.
)

echo.
pause
