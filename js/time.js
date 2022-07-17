const monthBox = document.querySelector(".time__mon")
const hourBox = document.querySelector(".time__hour")


function getClock(){
    const time = new Date();
    const year = time.getFullYear();
    const month =  String(time.getMonth()).padStart(2,"0");
    const date =  String(time.getDate()).padStart(2,"0");
    const day = time.getDay();
    const dayname =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    monthBox.innerText = `${year}.${month}.${date}.${dayname[day]}`;


    const hour = String(time.getHours()).padStart(2,"0"); 
    const min = String(time.getMinutes()).padStart(2,"0");
    const sec = String(time.getSeconds()).padStart(2,"0");
    hourBox.innerText = (`${hour}:${min}:${sec}`);
}

getClock();
setInterval(getClock, 1000);