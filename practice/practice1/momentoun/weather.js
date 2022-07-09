const API_KEY = "c47315d79a0769250e92cb73c58327c5"


function onGeo(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    //console.log(position, lat, long, url);
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data.name, data.weather[0].main);
        const weatherSpan1 = document.querySelector("#weather span:first-child");
        const weatherSpan2 = document.querySelector("#weather span:last-child");
        const name = data.name;
        const weather = data.weather[0].main;
        weatherSpan1.innerText = name;
        weatherSpan2.innerText = weather;
    });
    /* fetch = promise. 당장 뭔가가 일어나지 않고 시강이 좀 걸린 뒤에 일어나는 것
        서버에 뭔가 물어봤는데, 응답하는데 시간이 걸리는데, 이때 대기하는 시간을 위해 then을 사용
        이후로 reponse를 받는다. 
    */

}

function OnGeoError(){
    alert("can't find you, No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeo, OnGeoError)


// 실행이 잘 되었을 때 나타날 함수, 에러가 발생했을 때, 나타날 함수
