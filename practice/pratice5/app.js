const clock = document.querySelector("#clock");




function christmasDDay(){
    const christmas = new Date('December 25, 22 00:00:00');
    const today = new Date();
    const christmasDay = christmas - today;
    const leftDay = Math.floor(christmasDay/1000/60/60/24);
    const leftHour = Math.floor(christmasDay/1000/60/60%24);
    const leftMinute=Math.floor(christmasDay/1000/60%60);
    const leftSecond=Math.floor(christmasDay/1000%60);

    const days = String(leftDay).padStart(3,"0");
    const hour = String(leftHour).padStart(2,"0");
    const minute = String(leftMinute).padStart(2,"0");
    const second = String(leftSecond).padStart(2,"0");

    clock.innerText = `${days}d ${hour}h ${minute}m ${second}s`
}

christmasDDay();
setInterval(christmasDDay,1000);