function hidecookiepop() {
    let cookiepop = document.getElementById("cookiepop").classList.remove("f");
    stopScroll();
};

function popcookiesetting() {
    let cookiepush = document.getElementById("cookiepop").classList.add("f");
    stopScroll();
};

// stop form scrolling helper
function stopScroll() {
    let docOverflow = document.body.classList.toggle("overflow");
};

var cookieclose = document.getElementById("cookieclose");
var cookiebtn = document.getElementById("cookiebtn");
cookiebtn.addEventListener("click", popcookiesetting);
cookieclose.addEventListener("click", hidecookiepop);

console.log("cookiessetting.js import abgeschlossen");