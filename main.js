const { app, BrowserWindow, Menu } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    icon: 'Assets/images/logo.ico',
  })

  win.loadFile('index.html')
  win.setResizable(null)
  win.setBackgroundColor('#00FFFF')
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

// Quit when all windows are closed, except on macOS. There, it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})