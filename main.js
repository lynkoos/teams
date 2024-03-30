const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL('http://localhost:3000');

  win.on('will-resize', (event, newBounds) => {
    if (newBounds.width < 1200 || newBounds.height < 800) {
      event.preventDefault();
    }
  });

  // win.webContents.openDevTools();
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
