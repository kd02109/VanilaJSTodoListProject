const images =[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
];
const randoms = Math.floor(Math.random()*images.length);
const choseImg = images[randoms];

console.log(choseImg);

const img = document.createElement("img");

img.src= `img/${choseImg}`;

document.body.appendChild(img);