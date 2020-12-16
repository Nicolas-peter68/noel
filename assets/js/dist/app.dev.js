"use strict";

var bgm = document.getElementById("bgm"); //bgm.play();

function mute(m) {
  if (bgm.muted == true) {
    bgm.muted = false;
    m.classList.add('fa-volume-up');
    m.classList.remove("fa-volume-mute");
  } else {
    bgm.muted = true;
    m.classList.remove('fa-volume-up');
    m.classList.add("fa-volume-mute");
  }
}

function message() {
  setTimeout(function () {
    var mess = document.createElement("p");
    mess.innerText = "Puisse cette nouvelle année être merveilleuse et pleine de bonheur";
    mess.classList.add("fade-in");
    mess.setAttribute("id", "texte2");
    var next = document.getElementById('texte1');
    next.after(mess);
  }, 9000);
  setTimeout(function () {
    var mess2 = document.createElement('img');
    mess2.classList.add("fade-in");
    mess2.setAttribute("src", "assets/img/Modern_Christmas_Tree_4_by_Merlin2525.svg");
    mess2.setAttribute("height", "400px");
    var next2 = document.getElementById("texte2");
    next2.after(mess2);
  }, 15000);
  setTimeout(function () {
    var mess3 = document.createElement('img');
    mess3.classList.add("slide-left", "star1");
    mess3.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next3 = document.getElementById("bgm");
    next3.after(mess3);
  }, 20000);
  setTimeout(function () {
    var mess4 = document.createElement('img');
    mess4.classList.add("slide-left", "star2");
    mess4.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next4 = document.getElementById("bgm");
    next4.after(mess4);
  }, 20000);
  setTimeout(function () {
    var mess5 = document.createElement('img');
    mess5.classList.add("slide-right", "star3");
    mess5.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next5 = document.getElementById("bgm");
    next5.after(mess5);
  }, 20000);
  setTimeout(function () {
    var mess6 = document.createElement('img');
    mess6.classList.add("slide-right", "star4");
    mess6.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next6 = document.getElementById("bgm");
    next6.after(mess6);
  }, 20000);
  setTimeout(function () {
    var mess3 = document.createElement('img');
    mess3.classList.add("slide-bottom", "star5");
    mess3.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next3 = document.getElementById("bgm");
    next3.after(mess3);
  }, 20000);
  setTimeout(function () {
    var mess4 = document.createElement('img');
    mess4.classList.add("slide-bottom", "star6");
    mess4.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next4 = document.getElementById("bgm");
    next4.after(mess4);
  }, 20000);
  setTimeout(function () {
    var mess5 = document.createElement('img');
    mess5.classList.add("slide-top", "star7");
    mess5.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next5 = document.getElementById("bgm");
    next5.after(mess5);
  }, 20000);
  setTimeout(function () {
    var mess6 = document.createElement('img');
    mess6.classList.add("slide-top", "star8");
    mess6.setAttribute("src", "assets/img/251px-Golden_star.png");
    var next6 = document.getElementById("bgm");
    next6.after(mess6);
  }, 20000);
}

;
window.onload = message();