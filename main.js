const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {

  const url         = 'https://admin.simple-api.app/'
  const icon        = 'public/icons/mac/icon.icns/sapi-256.icns'

  const mainWindow  = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    icon: path.join(__dirname, icon),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadURL(url)
  mainWindow.setIcon(path.join(__dirname, icon))
  mainWindow.setFullScreenable(true)
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
