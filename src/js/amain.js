console.log("%c  Dev by Enrico Bono — https://baivo.studio", "background-color: #222222; color: #f9d63d; font-size:10px; padding:8px 10px 6px; border-radius:4px;")
console.log("main.js import abgeschlossen");

function hidecookiepop() {
    let cookiepop = document.getElementById("cookiepop").classList.remove("f");
    stopScroll();
};

function popcookiesetting() {
    let cookiepush = document.getElementById("cookiepop").classList.add("f");
    stopScroll();
};

// stop form scrolling helper
const overflowcroll =  function overflowScroll() {
    let docOverflow = document.body.classList.toggle("overflow");
};


console.log("cookiessetting.js import abgeschlossen");