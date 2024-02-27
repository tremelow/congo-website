var bgcolor = window.getComputedStyle(document.getElementsByTagName("body")[0])["background-color"]

function convertSVG(svg) {
	return svg.replaceAll(/("#000"|"black")/g, `"currentColor"`)
              .replaceAll(/("#fff"|"white")/g, bgcolor);
}

var scripts = document.getElementsByTagName('script');
var tikzScripts = Array.prototype.slice.call(scripts).filter(
    (e) => (e.getAttribute('type') === 'image/tikz'));

tikzScripts.map((s) => s.outerHTML = bg-color;//convertSVG(s.innerHTML));
// should be made cleaner using s.getElementsByTagName("svg")
// but that doesn't seem to work sometimes...
