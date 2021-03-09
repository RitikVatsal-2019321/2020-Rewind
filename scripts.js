var homev = document.getElementById("home");
let two1 = document.getElementById("tofire");
let two2 = document.getElementById("toboom");
let zero1 = document.getElementById("tocob");
let zero2 = document.getElementById("toeco");
let dataH = document.querySelector(".headin");
let dataT = document.querySelector(".tex");

// var video = document.getElementById("home");

var cntf = 0;
var cntc = 0;
var cntb = 0;
var cnte = 0;



function fire() {
    if (cntf == 0) {
        homev.src = "Resources/fire.mp4";

        cntb = 0;
        cntc = 0;
        cnte = 0;
        cntf = 0;
        two1.src = "Resources/nor2fire.png"
        two2.src = "Resources/nor2boom.png"
        zero1.src = "Resources/nor0cob.png"
        zero2.src = "Resources/nor0eco.png"


        cntf = 1;
        two1.src = "Resources/2fire.png"

        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
        dataH.classList.add("fire");
        dataT.classList.add("fire");


    } else {
        two1.src = "Resources/nor2fire.png"
        homev.src = "Resources/home.mp4";
        cntf = 0;
        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
    }
}




function cobid() {
    if (cntc == 0) {
        cntb = 0;
        cntc = 0;
        cnte = 0;
        cntf = 0;
        two1.src = "Resources/nor2fire.png"
        two2.src = "Resources/nor2boom.png"
        zero1.src = "Resources/nor0cob.png"
        zero2.src = "Resources/nor0eco.png"

        homev.src = "Resources/cobid.mp4";
        cntc = 1;
        zero1.src = "Resources/0cob.png"

        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
        dataH.classList.add("cobid");
        dataT.classList.add("cobid");

    } else {
        zero1.src = "Resources/nor0cob.png"
        homev.src = "Resources/home.mp4";
        cntc = 0;
        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
    }
}




function bomb() {
    if (cntb == 0) {
        cntb = 0;
        cntc = 0;
        cnte = 0;
        cntf = 0;
        two1.src = "Resources/nor2fire.png"
        two2.src = "Resources/nor2boom.png"
        zero1.src = "Resources/nor0cob.png"
        zero2.src = "Resources/nor0eco.png"

        homev.src = "Resources/boom.mp4";
        cntb = 1;
        two2.src = "Resources/2boom.png"

        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
        dataH.classList.add("boom");
        dataT.classList.add("boom");
    } else {
        two2.src = "Resources/nor2boom.png"
        homev.src = "Resources/home.mp4";
        cntb = 0;
        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
    }
}



function econ() {
    if (cnte == 0) {
        cntb = 0;
        cntc = 0;
        cnte = 0;
        cntf = 0;
        two1.src = "Resources/nor2fire.png"
        two2.src = "Resources/nor2boom.png"
        zero1.src = "Resources/nor0cob.png"
        zero2.src = "Resources/nor0eco.png"

        homev.src = "Resources/ecocrsh.mp4";
        cnte = 1;
        zero2.src = "Resources/0eco.png"

        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';
        dataH.classList.add("eco");
        dataT.classList.add("eco");
    } else {
        zero2.src = "Resources/nor0eco.png"
        homev.src = "Resources/home.mp4";
        cnte = 0;
        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';

    }
}