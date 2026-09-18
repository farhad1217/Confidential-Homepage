@echo off
setlocal
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo Install Node.js 22.12 or later in the 22.x line, then run this file again.
  pause
  exit /b 1
)
if not exist node_modules\vite\package.json (
  call npm install
  if errorlevel 1 (
    echo npm install failed. Check internet access and the error above.
    pause
    exit /b 1
  )
)
echo Open http://127.0.0.1:5173 in your browser.
call npm run dev
pause
