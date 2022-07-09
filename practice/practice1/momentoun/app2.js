const loginForm=document.querySelector(".login-form");
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
const link = document.querySelector("a");
const nameValue = document.querySelector("h1");


const USERNAME_KEY = "username";// 직접 만든 string로 반복 사용되고 실수를 줄이기 위해서 대문자 상수로 변수 할당

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLogInClick(){
    const value = loginInput.value;
    if(value ===""){
        alert("please write your name");
    }else if(value.length > 15 ){
        alert("Your name is too Long!!");
    }
}


function onSubmit(event){
    event.preventDefault(); //어떤 이벤트의 기본적인 행동이 진행되지 않도록 막는것, form은 submit이 된후, 새로고침을 하는데, 이를 정지시킨다.
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY ,username);
    paintGreeting(username);
}

function paintGreeting(username){
    nameValue.classList.remove("hidden");
    nameValue.innerText = `Hello ${username}`; //"Hello " + username; back tic으로 시작. ${} - 변수 담기
}

function onLink(event){
    event.preventDefault();
    console.log(event);
}


//link.addEventListener("click", onLink);
//브라우저가 실행하고 이러한 실행에 필요한 info를 담고 있다. 이러한 info를 담기 위해서는 인자를 받으면 된다.

if(savedUserName===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onSubmit);
}else{
    paintGreeting(savedUserName);
}