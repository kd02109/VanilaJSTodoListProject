const num =["1","2","3","4","5","6","7"];
const source=[".jpg",".jpeg",".jpg",".jpg",".jpg",".jpeg",".png"]
const ran = Math.floor(Math.random()*num.length);
const body=document.querySelector("body");

body.style.background = `url("img/${num[ran]}${source[ran]}`;
body.style.backgroundSize="100% 100%";