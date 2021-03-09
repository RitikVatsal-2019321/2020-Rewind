var homev = document.getElementById("home");
let two1 = document.getElementById("tofire");
let two2 = document.getElementById("toboom");
let zero1 = document.getElementById("tocob");
let zero2 = document.getElementById("toeco");
let dataH = document.querySelector(".headin");
let dataT = document.querySelector(".tex");
let cobDisp = document.querySelector(".cobidanim");
let firDisp = document.querySelector(".fireframe");
let boomDisp = document.querySelector(".boomframe");
let ecoDisp = document.querySelector(".ecoframe");


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


        cobDisp.classList.value = 'cobidanim hide';
        firDisp.classList.value = 'fireframe';
        boomDisp.classList.value = 'boomframe hide';
        ecoDisp.classList.value = 'ecoframe hide';
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

        cobDisp.classList.value = 'cobidanim';
        firDisp.classList.value = 'fireframe hide';
        boomDisp.classList.value = 'boomframe hide';
        ecoDisp.classList.value = 'ecoframe hide';

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

        cobDisp.classList.value = 'cobidanim hide';
        firDisp.classList.value = 'fireframe hide';
        boomDisp.classList.value = 'boomframe';
        ecoDisp.classList.value = 'ecoframe hide';
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
        ecoDisp.classList.value = 'ecoframe';
        cobDisp.classList.value = 'cobidanim hide';
        firDisp.classList.value = 'fireframe hide';
        boomDisp.classList.value = 'boomframe hide';
        ecoDisp.classList.value = 'ecoframe';


    } else {
        zero2.src = "Resources/nor0eco.png"
        homev.src = "Resources/home.mp4";
        cnte = 0;
        dataH.classList.value = 'headin';
        dataT.classList.value = 'tex';

    }
}
let load = document.getElementById("loader");

function loaded() {
    load.style.display = 'none';
}


var box = $("#cobidframe");
var caller1 = $("#run1");
var caller2 = $("#run2");
var caller3 = $("#run3");
var caller4 = $("#run4");

function foo1() {
    var randX = Math.floor(Math.random() * 450);
    var randY = Math.floor(Math.random() * 500);
    console.log([randX, randY]);
    caller1.stop().animate({ "left": randX + "px", "top": randY + "px" });

}

$(document).ready(function() { caller1.on('mouseenter', foo1); });

function foo2() {
    var randX = Math.floor(Math.random() * 450);
    var randY = Math.floor(Math.random() * 500);
    console.log([randX, randY]);
    caller2.stop().animate({ "left": randX + "px", "top": randY + "px" });

}

$(document).ready(function() { caller2.on('mouseenter', foo2); });


function foo3() {
    var randX = Math.floor(Math.random() * 450);
    var randY = Math.floor(Math.random() * 500);
    console.log([randX, randY]);
    caller3.stop().animate({ "left": randX + "px", "top": randY + "px" });

}

$(document).ready(function() { caller3.on('mouseenter', foo3); });

function foo4() {
    var randX = Math.floor(Math.random() * 450);
    var randY = Math.floor(Math.random() * 500);
    console.log([randX, randY]);
    caller4.stop().animate({ "left": randX + "px", "top": randY + "px" });

}

$(document).ready(function() { caller4.on('mouseenter', foo4); });