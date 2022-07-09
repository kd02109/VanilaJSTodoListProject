const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // c와 파이썬의 출력 형식 정하기 -- padStart
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =(`${hours}:${minute}:${second}`);
}

getClock();
setInterval(getClock, 1000);//실행하고자 하는 함수, 간격(ms) -- 자동으로 반복 호출.
//setTimeout(sayHello, 5000);// 지정한 ms 이후에 처음으로 시작.


