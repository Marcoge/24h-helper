const { app, BrowserWindow } = require("electron");

const env = process.env.NODE_ENV || "development";

function createWindow() {
  const window = new BrowserWindow({
    width: 1280,
    height: 768,
    show: false,
    webPreferences: { 
        contextIsolation: true,
        preload: `${__dirname}/preload.js` },
  });

  window.webContents.on("did-finish-load", () => {
    window.show();
    window.focus();
  });

  window.removeMenu();
  window.maximize();

  window.loadFile("dist/24h-helper/browser/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
