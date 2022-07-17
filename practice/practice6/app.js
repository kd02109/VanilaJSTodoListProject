const form = document.querySelector("#change");
const btn = document.querySelector("#change button");
const body = document.querySelector("body");
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

function changeBakgroundColor(event){
    event.preventDefault();
    let random1 = Math.floor(Math.random()*colors.length);
    let random2 = Math.floor(Math.random()*colors.length);
    let color1 = colors[random1];
    let color2 = colors[random2];
    body.style.background=`linear-gradient(0.25turn,${color1},${color2})`
}

form.addEventListener("submit",changeBakgroundColor)

