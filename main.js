const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

//   win.loadFile('dist/index.html')
  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
  createWindow()
})