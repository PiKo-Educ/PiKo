@echo off
setlocal
cd /d "%~dp0"
echo ======================================
echo             PiKo Website
echo ======================================
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 20.9 or newer first.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)
echo Starting PiKo...
call npm run dev
pause
