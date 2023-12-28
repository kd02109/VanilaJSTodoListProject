const todo = document.querySelector(".todo-name__write");
const todoInput = document.querySelector(".todo-name__write input");
const todoList = document.querySelector(".todo__list");

let toDos = [];
const TODO_KEY = "todos";

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function writeNewtodo(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const newTodoDic = {
    text: todoValue,
    id: Date.now(),
  };
  toDos.push(newTodoDic);
  paintTodo(newTodoDic);
  saveTodo();
}

function paintTodo(newTodo) {
  console.log(newTodo);
  const list = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  list.id = newTodo.id;
  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.classList.add("delete");
  span.classList.add("todo__list");
  list.appendChild(span);
  list.appendChild(button);
  todoList.appendChild(list);
  button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((list) => list.id !== parseInt(li.id));
  saveTodo();
}

const localStorageTodo = localStorage.getItem(TODO_KEY);

if (localStorageTodo !== null) {
  const arrayTodo = JSON.parse(localStorageTodo);
  arrayTodo.forEach(paintTodo);
}

todo.addEventListener("submit", writeNewtodo);
