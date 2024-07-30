Установите Node.js и npm, если они еще не установлены.

Создайте новую директорию для вашего проекта и перейдите в нее:

mkdir my-electron-app
cd my-electron-app

npm init -y

npm install electron --save-dev

Создайте файл main.js:

const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


Создайте файл index.html:

<!DOCTYPE html>
<html>
<head>
    <title>My Electron App</title>
</head>
<body>
    <h1>Hello, Electron!</h1>
    <p>This is a simple Electron application.</p>
</body>
</html>



Обновите package.json, добавив скрипт для запуска Electron:


{
  "name": "my-electron-app",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "devDependencies": {
    "electron": "^13.1.7"
  }
}