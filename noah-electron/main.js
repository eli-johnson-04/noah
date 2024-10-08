// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron')
const path = require('node:path')

function createWindow () {
  // First, get the screen's size
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "Noah - Ark Foundation",
    width: width,
    height: height,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  // Maximize window to fill the screen
  mainWindow.maximize();

  // Load the React app based on the environment
  const startUrl = process.env.ELECTRON_START_URL || `file://${path.join(__dirname, 'build', 'index.html')}`;
  mainWindow.loadURL(startUrl);

  // Prevents the page title from updating to something other than the set title
  mainWindow.on('page-title-updated', function(e) {
    e.preventDefault()
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.