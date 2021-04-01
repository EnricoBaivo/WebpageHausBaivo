console.log("Lockomokoscroll import abgeschlossen");

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
function play() {
    var video1 = document.getElementById("video1");
    video1.play();

}
function scrollToSection(section) {
    let a;
    if (section == 1) {
        a = document.getElementById("section1");

    }
    if (section == 2) {
        a = document.getElementById("section2");

    }
    if (section == 3) {
        a = document.getElementById("section3");

    }
    if (section == 4) {
        a = document.getElementById("section4");

    }
    scroll.scrollTo(a);
};
var swiperbtn = document.getElementById("swiperdown");
var totop = document.getElementById("totop");
swiperbtn.addEventListener("click", function () { scrollToSection(2) });
totop.addEventListener("click", function () { scrollToSection(1) });

scroll.on('call', (obj) => {
    console.log(obj);
    if (obj == "testEvent1"){
      
    }
    if (obj == "videoplayevent"){
        play();
    }
});