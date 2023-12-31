"use strict";
exports.__esModule = true;

const electron_1 = require("electron");
const path = require("path");

function createWindow() {
    // Create the browser window.
    const mainWindow = new electron_1.BrowserWindow({
        title: 'Scrum App',
        height: 800,
        webPreferences: {
            // preload: path.join(__dirname, "preload.js")
        },
        width: 1200,
        icon : "./dist/images/doll.ico",
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "./dist/index.html"));
    // mainWindow.webContents.openDevTools();
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=main.js.map