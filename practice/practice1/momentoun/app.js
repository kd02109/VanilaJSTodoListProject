alert("hi");


/*send massage*/

let a=5; /* 변수 */
const b=2;
const myName ="Junseok" /*camelCase 연결해서 쓰기, string*/
const amIFat = true;
const nothing = null; /*null:  값이 없다는 것을 의미  - nothing, type pythom - None*/
let something; /*undifined*/
/* const: 상수 값을 바꿀 수 없다. let: 변환 가능 변수  var: 예전에 변수를 할당하는 방법.*/
/* always const sometimes let never using var*/

console.log(5341); /*print*/
console.log(a / b);
console.log(a * b);
console.log(a + b);
console.log("Hello" + myName);
console.log(amIFat);
console.log(something); /*undefined 갑이 주어지지 않은 것.*/
a=3;

//Array

const dayOfWeek =["mon",'tue',"wen","thu","fri","sat","sun"];
console.log(dayOfWeek[4]);
dayOfWeek.push("month"); //add

//Objects

const player ={
    name:"nico",
    points: 10,
    fat: true,
}; //python dict과 유사.
console.log(player);
console.log(player.fat);
console.log(player["name"]);
player.level = 10; // 새로운 property 형성
player.fat=false; // values 값 변경.


//Function
function sayHello(nameOfPerson, age){
    console.log("Hello My name is "+nameOfPerson);
    console.log("My ages are "+age);
}

sayHello("Son", 12);
sayHello("dal", 10);
sayHello("Ann", 13);
// NaN = Not a Number

const player2 ={
    name:"nico",
    sayHello: function(name){
        console.log("Hello "+ name);
    },
}; //python dict과 유사.

player2.sayHello("Youn");

const calculator={
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    power: function(a,b){
         return a**b;
    },
};

console.log(calculator.plus(5,6));

//conditional
const age = parseInt(prompt("How old are you?"));
//사용자에게 메시지를 보여준다 이때 나타나는 propmt는 자바스크립트를 일시정지 시킨다. 이때 데이터의 타입은 string이다.
//그러한 이유로 더이상 prompt를 사용하지 않는다. 변결을 할 수 없기 때문이다. 이는 매우 오래된 방법이다.
//현재는 css, html을 통해 자기만의 입력창을 사용한다.

console.log(age);
console.log(typeof age);
// type change. (parseInt: string -> int)
console.log(typeof "15", typeof parseInt("15"));

//isNaN - number 인지 아닌지 알려주는 property
if(isNaN(age)){
    console.log("please write the number");
} else if(age <18 || age >0){
    console.log("You are too Young!@! lol");
} else {
    console.log("You can Drink!!");
}
// and--> && or--> || same --> ===, not -> !==

//documnet --> console에서 html을 호출, document-- 만든 웹사이트를 의미.
//console.dir(document)
//javascript에서 html을 가져오는 방법 --> id를 많이 사용. document.getElementById("")

const title = document.getElementById("title");
console.dir(title);
title.innerText = "Ex";

const hellos = document.getElementsByClassName("practice"); //같은 클래스를 모두 리스트오 가져올 수 있다.
console.log(hellos);

const tagsearch = document.getElementsByTagName("h5");
console.log(tagsearch);//tag를 통해 a, div, nav, img 등에 접근

const querySearch= document.querySelector(".div h5");//css 방벙으로 선택하는 것.
console.log(querySearch);

// 중복되는 클래스에 중복되는 테그가 있을 때, 오직 첫 번째 요소만을 가져온다.

const querySearches= document.querySelectorAll(".div h5");
console.log(querySearches);
querySearches[3].innerText = "OKAY!!!";
querySearches[3].style.color="blue";

function handleTitleClick(){
    console.log("Title was clicked!");
}
function mouseEnter(){
    title.innerText="mouse is here";
}
function mouseLeave(){
    title.innerText="mouse is gone";
}
function handleWindowResize(){
    document.body.style.backgroundColor ="white";
}


title.addEventListener("click",handleTitleClick); //title.onclick = handleTitleClick;
//click event 우리가 실행버튼 ()을 넣지 않아도 된다. js가 자동으로 실행시켜준다.
title.addEventListener("mouseleave",mouseLeave);

window.addEventListener("resize",handleWindowResize);

const h1 = querySearches[3];
console.log(h1);

function handleColor(){
    const classMake = "active";
    if(h1.className===classMake){
        h1.className="";
    }else{
        h1.className=classMake;
    }
}

function handleColor2(){
    const classMake = "active";
    if(h1.classList.contains(classMake)){
        h1.classList.remove(classMake);
    }else{
        h1.classList.add(classMake);
    }
}
//toogle = 클래스가 있다면, 제거 - 클래스가 없다면, 추가
h1.addEventListener("click",handleColor3);

function handleColor3(){
    const classMake = "active";
    h1.classList.toggle(classMake);
}


