//JSON.stringify() --> 어떠한 형식이든 문자로 변환시켜 준다. 

const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos =[];

const TODO_KEY = "todos"

function saveTodo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));//단순 나열된 하나의 문장으로 저장된다.
}

function deleteTodo(event){
    console.log(event);
    console.dir(event.target.parentElement);
    console.log(event.target.parentElement.innerText);
    // target - html element. 
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item)=> item.id !== parseInt(li.id));
    saveTodo();
}

function paintToDo(newTodo){
    console.log(newTodo);
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    list.id = newTodo.id;
    span.innerText=newTodo.text;
    button.innerText="❌";
    button.addEventListener("click", deleteTodo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoOb = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoOb);
    paintToDo(newTodoOb);
    saveTodo();
}

function sayHello(item){
    console.log("THis is a Item",item);// forEach에서 각각의 인덱스의 벨류를 반환 - item
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedTodos = localStorage.getItem(TODO_KEY);
console.log(savedTodos);

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos); //string 을 array로 반환
    toDos= parsedToDos;
    console.log(parsedToDos);
    //parsedToDos.forEach(sayHello);
    //parsedToDos.forEach((item) => console.log("this is the Item",item));  --> sameWay
    parsedToDos.forEach(paintToDo); // 반복문과 같이 자동으로 객체 반복.
}

//toDOs array에서 요소 값을 지우기 위해서, 랜덤한 id 값을 텍스트에 할당한다. 
// 이제는 단순한 텍스트의 나열이 아닌 object를 만든다. 이때 Date.now() 메서드를 활용한다.
// array에서 item을 제거하는 것은 기존의 array에서 아이템을 삭제하는 것이 아닌 이를 제외한 새로운 array를 만드는 것이다.


function sexyFilter(item){
 if(item===4){
    return false;
 }else{
    return true;
}
}//반드시 true를 리턴해야 된다. false를 리턴하면, false를 제외한 새로운 array를 만든다.

console.log([1,2,3,4].filter(sexyFilter));

//참고!!
const arr=[1,2,3,4]
console.log(arr.filter(item => item>2));