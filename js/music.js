const youtube =document.querySelector(".music__box iframe")
const youtubeLink =[
    {
        name: "jazz",
        url: "https://www.youtube.com/embed/6Kn_o5H76yI"
    },
    {
        name:"pop",
        url: "https://www.youtube.com/embed/3JkwA3mvwSA"
    },
    {
        name:"rap",
        url: "https://www.youtube.com/embed/Dhy20HC8bM4"
    },
    {
        name:"rofi",
        url: "https://www.youtube.com/embed/SyqyRv6NS_U"
    },
    {
        name:"classic",
        url: "https://www.youtube.com/embed/_dn5vYN2GWY"
    }
];

const jazz = document.querySelector(".jazz");
const pop = document.querySelector(".pop");
const rapper = document.querySelector(".rapper");
const rofi = document.querySelector(".rofi");
const classic = document.querySelector(".classic");


function playJazz(){
    youtube.src = youtubeLink[0].url;
}
function playPop(){
    youtube.src = youtubeLink[1].url;
}
function playRap(){
    youtube.src = youtubeLink[2].url;
}
function playRofi(){
    youtube.src = youtubeLink[3].url;
}
function playClassic(){
    youtube.src = youtubeLink[4].url;
}

jazz.addEventListener("click",playJazz);
pop.addEventListener("click",playPop);
rapper.addEventListener("click",playRap);
rofi.addEventListener("click",playRofi);
classic.addEventListener("click",playClassic);