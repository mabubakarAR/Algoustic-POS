const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const isDev = require('electron-is-dev');
const ipcMain = require('electron').ipcMain;
const Datastore = require('nedb');
const globalShortcut = electron.globalShortcut;
let FixityDatabase = {}
FixityDatabase.sale = new Datastore({ filename: 'sales.db', autoload: true, timestampData: true});
FixityDatabase.purchases = new Datastore({ filename: 'purchases.db', autoload: true, timestampData: true});
global.databaseObj = {myDatabase: FixityDatabase};
ipcMain.on('show-database', function(event) {
});
 
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 900,
    minHeight: 600,
    resizable: true,
    show: true,
    icon: "src/icons/POS-Icon.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.on("ready", createWindow);

app.on('browser-window-focus', function () {
  // globalShortcut.register("CommandOrControl+R", () => {
  //   console.log("CommandOrControl+R is pressed: Shortcut Disabled");
  // });
  // globalShortcut.register("F5", () => {
  //   console.log("F5 is pressed: Shortcut Disabled");
  // });
  // globalShortcut.register("CommandOrControl+Shift+R", () => {
  //   console.log("CommandOrControl+Shift+R is pressed: Shortcut Disabled");
  // });
});