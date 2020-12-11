const bgm = document.getElementById("bgm");
bgm.play();
function mute(m){

  if(bgm.muted == true){
      bgm.muted = false;
      m.classList.add('fa-volume-up')
      m.classList.remove("fa-volume-mute");
  }
  else{
      bgm.muted = true;
      m.classList.remove('fa-volume-up')
      m.classList.add("fa-volume-mute");
  }
}

function message(){
    setTimeout(() => {
      let mess = document.createElement("p");
      mess.innerText = "Et meilleurs voeux pour l'année 2021";
      mess.classList.add("fade-in");
      mess.setAttribute("id","texte2");
      let next= document.getElementById('texte1');
      next.after(mess);
    }, 9000);
    setTimeout(() => {
      let mess2 = document.createElement('img');
      mess2.classList.add("fade-in");
      mess2.setAttribute("src","assets/img/Modern_Christmas_Tree_4_by_Merlin2525.svg");
      mess2.setAttribute("height","600px");
      let next2 = document.getElementById("texte2");
      next2.after(mess2);
    }, 15000);
    setTimeout(() => {
      let mess3 = document.createElement('img');
      mess3.classList.add("slide-left","star1");
      mess3.setAttribute("src","assets/img/251px-Golden_star.png");
      let next3 = document.getElementById("bgm");
      next3.after(mess3);
    }, 20000);
    setTimeout(() => {
      let mess4 = document.createElement('img');
      mess4.classList.add("slide-left","star2");
      mess4.setAttribute("src","assets/img/251px-Golden_star.png");
      let next4 = document.getElementById("bgm");
      next4.after(mess4);
    }, 20000);
    
};

window.onload = message();