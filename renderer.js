_css = "html,body { background: rgba(0, 0, 0, 0); } ::-webkit-scrollbar { background: rgba(0, 0, 0, 0.5); width: 10px; } ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); }"

let webview = document.getElementById("twitter");
webview.addEventListener("dom-ready", () => {
	webview.insertCSS(_css);
});

