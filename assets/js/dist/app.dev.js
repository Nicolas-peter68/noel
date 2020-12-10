"use strict";

var bgm = document.getElementById("bgm");
bgm.play();

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