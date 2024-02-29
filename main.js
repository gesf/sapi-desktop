const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    icon: path.join(__dirname, 'sapi.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  app.setName('API Platform')
  mainWindow.setTitle('API Platform')
  mainWindow.setFullScreenable(true)
  mainWindow.loadURL('https://admin.simple-api.app/')
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
