function hidecookiepop() {
    let cookiepopa = document.getElementById("cookiepop").classList.remove("f");
    stopScroll();
};

function popcookiesetting() {
    let cookiepush = document.getElementById("cookiepop").classList.add("f");
    stopScroll();
};

var cookieclose = document.getElementById("cookieclose");
var cookiebtn = document.getElementById("cookiebtn");
cookiebtn.addEventListener("click", popcookiesetting);
cookieclose.addEventListener("click", hidecookiepop);

console.log("cookiessetting.js import abgeschlossen");