const {app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")

let win

app.on("ready", () => {

  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.setMenu(null)

  win.loadURL(url.format({
    pathname: path.join(__dirname, "..", "game.html"),
    protocol: "file:",
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on("closed", () => {
    win = null
  })

})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit()
})
