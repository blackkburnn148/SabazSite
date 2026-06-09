@echo off
echo ===================================================
echo Sabaz Sigorta - Yerel Calistirma ve Cloudflare Tunnel
echo ===================================================

echo [1] Yerel Vite sunucusu baslatiliyor (Port: 3001)...
start /b cmd /c "npm run dev:local"

echo [2] Sunucunun acilmasi bekleniyor...
timeout /t 3 /nobreak > nul

echo [3] Cloudflare Tunnel baslatiliyor...
echo.
echo ===================================================
echo Lutfen asagida belirecek olan "https://....trycloudflare.com"
echo linkini kopyalayip tarayiciniza yapistirin.
echo Kapatmak icin bu pencereyi kapatin veya Ctrl+C yapin.
echo ===================================================
echo.

npx -y cloudflared tunnel --url http://localhost:3001