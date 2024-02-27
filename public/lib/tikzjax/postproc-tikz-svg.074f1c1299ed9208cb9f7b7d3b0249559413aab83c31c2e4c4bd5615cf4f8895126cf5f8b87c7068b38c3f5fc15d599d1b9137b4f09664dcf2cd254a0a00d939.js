var bg-color = var(--tw-prose-pre-bg)

function convertSVG(svg) {
	return svg.replaceAll(/("#000"|"black")/g, `"currentColor"`)
              .replaceAll(/("#fff"|"white")/g, `"var(bg-color)"`);
}

var scripts = document.getElementsByTagName('script');
var tikzScripts = Array.prototype.slice.call(scripts).filter(
    (e) => (e.getAttribute('type') === 'image/tikz'));

tikzScripts.map((s) => s.outerHTML = bg-color;//convertSVG(s.innerHTML));
// should be made cleaner using s.getElementsByTagName("svg")
// but that doesn't seem to work sometimes...
