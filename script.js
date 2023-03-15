const html_code = document.getElementById("html");
const css_code = document.getElementById("css");
const js_code = document.getElementById("js");
const result = document.getElementById("result");

function updateOutput() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

function clearEditor() {
    html_code.value = "";
    css_code.value = "";
    js_code.value = "";
    result.contentDocument.body.innerHTML = "";
}

document.querySelector(".run-btn").addEventListener("click", updateOutput);
document.querySelector(".clear-btn").addEventListener("click", clearEditor);
