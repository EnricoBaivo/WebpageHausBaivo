function hidecoronanews() {
    let hidecoronanews = document.getElementById("coronanewsid").classList.remove("f");
    stopScroll();
};

function showcoronanews() {
    let showcoronanews = document.getElementById("coronanewsid").classList.add("f");
    stopScroll();
};

// stop form scrolling helper
function stopScroll() {
    let docOverflow = document.body.classList.toggle("overflow");
};

var coronaclose = document.getElementById("getback");
var cornaclickbtn = document.getElementById("cornaclickbox");
cornaclickbtn.addEventListener("click", showcoronanews);
coronaclose.addEventListener("click", hidecoronanews);

console.log("corona.js import abgeschlossen");