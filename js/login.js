const loginForm = document.querySelector(".login");
const loginName = document.querySelector("#js-name");
const loginBtn = document.querySelector("#js-login");
const usernameDisplay = document.querySelector(".username h1");
const main = document.querySelector(".mainbox");
const logout = document.querySelector(".username button");


const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

function sendName(event){
    event.preventDefault();
    const name = loginName.value;
    loginForm.classList.add("hidden");
    main.classList.remove("hidden");
    localStorage.setItem(USERNAME_KEY,name);
    helloName(name);
}

function helloName(name){
    usernameDisplay.innerText = name+"'s List";
}

function deleteUsername(){
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove("hidden");
    main.classList.add("hidden");
}

if(savedUserName===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",sendName);
}else{
    main.classList.remove("hidden");
    helloName(savedUserName);
}

logout.addEventListener("click",deleteUsername);