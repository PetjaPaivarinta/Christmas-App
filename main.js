const { app, BrowserWindow } = require('electron')
const remoteMain = require('@electron/remote/main')

remoteMain.initialize()

const createWindow = () => {
  const win = new BrowserWindow({
    frame: false,
    transparent: true,
    width: 400,
    height: 600,
    icon: 'Assets/images/logo.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  remoteMain.enable(win.webContents)

  win.loadFile('index.html')
  win.setResizable(false)
  win.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})