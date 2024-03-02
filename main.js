const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    icon: path.join(__dirname, 'public/icons/mac/icon.icns/sapi-256.icns'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadURL('https://admin.simple-api.app/')
  mainWindow.setIcon(path.join(__dirname, 'public/icons/mac/icon.icns/sapi-256.icns'));
  mainWindow.setFullScreenable(true)
  mainWindow.setTitle('')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
