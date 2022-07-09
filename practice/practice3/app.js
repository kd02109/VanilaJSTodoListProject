const body = document.querySelector("body")
body.classList.add("zero-screen");

function colorChange(){
    let className = body.classList.value;
    if(window.innerWidth>700 &&window.innerWidth<=1000){
        body.classList.remove(className);
        body.classList.add("third-screen");
    }else if(window.innerWidth>500 && window.innerWidth<=700){
        body.classList.remove(className);
        body.classList.add("second-screen");
    }else if(window.innerWidth >0 &&window.innerWidth<=500){
        body.classList.remove(className);
        body.classList.add("first-screen");
    }else{
        body.classList.remove(className);
        body.classList.add("zero-screen");
    }
}

window.addEventListener("resize",colorChange);

console.dir(window.innerWidth);