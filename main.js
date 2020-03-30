const { app, BrowserWindow, globalShortcut } = require("electron");

let win;

function createWindow() {
	win = new BrowserWindow({
		transparent: true,
		width: 1200,
		height: 1000,
		frame: false,
		icon: __dirname + "/public/icons/icon.png",
		webPreferences: {
			nodeIntegration: true,
			webviewTag: true
		}
	});

	//win.loadURL("https://twitter.com")
	win.loadFile("index.html");

	globalShortcut.register("f5", () => {
		win.reload();
	});
	globalShortcut.register("CmdOrCtrl+R", () => {
		win.reload();
	});
	globalShortcut.register("CmdOrCtrl+D", () => {
		if (win.isVisible()) {
			win.hide();
		}
		else {
			win.restore();
		}
	});

	win.on("closed", () => {
		win = null;
	});
}

app.on("ready", createWindow);
