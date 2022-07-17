const API_KEY = "c47315d79a0769250e92cb73c58327c5";
const state = ["Clear","Clouds","Rain","Snow"];
const picture=["snow.png","cloud.png","rain.png","sun.png"]
const weatherBox = document.querySelector(".weather__img");

function onGeo(position){
    const lat =position.coords.latitude;
    const long = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data.name, data.weather[0].main,data.main.temp_min);
        const name = data.name;
        const weather = data.weather[0].main;
        const Temp = data.main.temp;

        const span1 = document.querySelector(".weather span:first-child");
        const span2 = document.querySelector(".weather span:nth-child(2)");
        const span4 = document.querySelector(".weather__img span");
        if(weather === state[0]){
            const img =weatherBox.createElement("img");
            img.classList.add("weather__pic");
            img.src=`icon/${picture[3]}`;
            weatherBox.appendChild(img);
        }else if(weather === state[1]){
            const img =document.createElement("img");
            img.classList.add("weather__pic");
            img.src=`icon/${picture[1]}`;
            console.log(img);
            weatherBox.appendChild(img);
        }else if(weather === state[2]){
            const img =weatherBox.createElement("img");
            img.classList.add("weather__pic");
            img.src=`icon/${picture[2]}`;
            weatherBox.appendChild(img);
        }else if(weather === state[3]){
            const img =weatherBox.createElement("img");
            img.classList.add("weather__pic");
            img.src=`icon/${picture[0]}`;
            weatherBox.appendChild(img);
        };

        span1.innerText =name;
        span2.innerText =Temp;
        span4.innerText =weather;
        console.log(span2);
    });
}

function onGeoError(){
    alert("can't find your Position!!");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);