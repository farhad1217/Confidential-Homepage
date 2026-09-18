@echo off
setlocal
cd /d "%~dp0"
call npm install
if errorlevel 1 goto error
call npm run build
if errorlevel 1 goto error
echo Build complete. The production files are in dist.
pause
exit /b 0
:error
echo Build failed. Read the error above.
pause
exit /b 1
