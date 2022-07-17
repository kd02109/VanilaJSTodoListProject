const todo = document.querySelector(".todo-name__write input");
const todoBtn = document.querySelector(".todo-name__write button");
const todoList = document.querySelector(".todo__list");

let todos =[];
const TODO_KEY = "todos";

function saveTodo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}

function writeNewtodo(event){
    const todoValue = todo.value;
    todo.value = "";
    const newTodoDic ={
        text: todoValue,
        id: Date.now(),
    };
    todos.push(newTodoDic);
    paintTodo(newTodoDic);
    saveTodo();
}

function paintTodo(todo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    list.id = todo.id;
    span.innerText = todo.text;
    button.innerText = "❌";
    button.classList.add("delete");
    span.classList.add("todo__list")
    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);

   button.addEventListener("click",deleteTodo);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos= todos.filter((list)=>list.id !== parseInt(li.id));
    saveTodo();
} 

const localStorageTodo = localStorage.getItem(TODO_KEY);

if(saveTodo !== null){
    const arrayTodo = JSON.parse(localStorageTodo);
    arrayTodo.forEach(paintTodo);
}


todoBtn.addEventListener("click", writeNewtodo);



