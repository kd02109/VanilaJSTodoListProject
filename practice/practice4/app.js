const rangeForm = document.querySelector("#range");
const rangeInput = document.querySelector("#range input")
const startForm = document.querySelector("#startGame");
const startInput = document.querySelector("#startGame input");
const startBtn = document.querySelector("#startGame btn");
const answer = document.querySelector("#answer");
const question = document.querySelector("#question");


function saveRange(event){
    event.preventDefault();
    const inputValue = rangeInput.value;
    console.dir(inputValue);
    startForm.addEventListener("submit",predictNum);
}

function predictNum(event){
    event.preventDefault();
    const rangeNum = parseInt(rangeInput.value);
    const predictNumber = parseInt(startInput.value);
    const random = Math.ceil(Math.random()*rangeNum);
    let answers = ``;
    let span = ``;
    console.log(predictNumber);
    console.log(rangeNum);
    console.log(random);

    if(random!==predictNumber){
        answers = `</span><h4>You lost!</h4>`;
        span = `<span>You chose: ${predictNumber}, the machine chose: ${random}</span><h4>You lost!</h4>`;
        question.innerHTML = span;
        answer.innerHTML = answers;
    }else{
        answers = `<span>You Won!</span>`
        span = `<span>You chose: ${predictNumber}, the machine chose: ${random}</span><h4>You lost!</h4>`;
        question.innerHTML = span;
        answer.innerHTML = answers;
    }
}




rangeForm.addEventListener("submit", saveRange);
