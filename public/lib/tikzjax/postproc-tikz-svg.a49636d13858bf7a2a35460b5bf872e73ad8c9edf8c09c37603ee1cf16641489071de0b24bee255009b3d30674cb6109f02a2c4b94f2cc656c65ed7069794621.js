import { optimize } from "./svgo.browser";

async function optimizeSVG(svg: string) {
    // Optimize the SVG using SVGO
    // Fixes misaligned text nodes on mobile

    return optimize(svg, {plugins:
        [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        // Don't use the "cleanupIDs" plugin
                        // To avoid problems with duplicate IDs ("a", "b", ...)
                        // when inlining multiple svgs with IDs
                        cleanupIDs: false
                    }
                }
            }
        ]
    }).data;
}

window.onload = async function() {
    await load();
    
    var bgcolor = window.getComputedStyle(document.getElementsByTagName("body")[0])["background-color"];

    function convertSVG(svg) {
        return svg.replaceAll(/("#000"|"black")/g, `"currentColor"`)
                  .replaceAll(/("#fff"|"white")/g, bgcolor);
    }

    var scripts = document.getElementsByTagName('script');
    var tikzScripts = Array.prototype.slice.call(scripts).filter(
        (e) => (e.getAttribute('type') === 'image/tikz'));

    tikzScripts.map(
        (s) => s.outerHTML = optimizeSVG(convertSVG(s.innerHTML)));
    // should be made cleaner using s.getElementsByTagName("svg")
    // but that doesn't seem to work sometimes...
}

// var bgcolor = window.getComputedStyle(document.getElementsByTagName("body")[0])["background-color"];

// function convertSVG(svg) {
//     return svg.replaceAll(/("#000"|"black")/g, `"currentColor"`)
//               .replaceAll(/("#fff"|"white")/g, bgcolor);
// }

// var scripts = document.getElementsByTagName('script');
// var tikzScripts = Array.prototype.slice.call(scripts).filter(
//     (e) => (e.getAttribute('type') === 'image/tikz'));

// tikzScripts.map(
//     (s) => s.outerHTML = optimizeSVG(convertSVG(s.innerHTML)));
// // should be made cleaner using s.getElementsByTagName("svg")
// // but that doesn't seem to work sometimes...
