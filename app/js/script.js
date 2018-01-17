const scoreBox = document.getElementById('scoreBox');//Box where score is printed
const scoreHTML = document.getElementById('score');//place where to print user score
const btnSubmit = document.getElementById('submit');//submit button
const btnShow = document.getElementById('show');//show answers button
const btnReset = document.getElementById('reset');//reset button
const correctAns = document.querySelectorAll('input[value=""]');//all correct answers
const allAns = document.querySelectorAll('input');//all answers

let userScore = 0;//user score at the beginning of the game


//Function which count user score and prints it in a score box
const countScore = () => {

    const checked = document.querySelectorAll('input:checked');

    for(let i=0; i<checked.length; i++){
        if(checked[i].hasAttribute('value')) {
            userScore++;
        }
    }

    scoreBox.style.display = 'flex';
    scoreHTML.innerText = userScore;

};

//Function which colors correct and wrong (if checked) answers
const showAnswers = () => {

    const checked = document.querySelectorAll('input:checked');

    for(let i=0; i<checked.length; i++){
        if(checked[i].hasAttribute('value')){
            checked[i].parentElement.style.backgroundColor = 'rgba(0,255,0,0.8)';
        } else {
            checked[i].parentElement.style.backgroundColor = 'rgba(255,0,0,0.8)';
        }
    }

    for(i = 0; i<correctAns.length; i++) {
        correctAns[i].parentElement.style.backgroundColor = 'rgba(0,255,0,0.8)';
    }

};


//Function which resets the quiz
const reset = () => {

    const checked = document.querySelectorAll('input:checked');

    for (let j=0; j<checked.length; j++){
        checked[j].checked = false;
    }

    for(let i=0; i<allAns.length; i++){
        allAns[i].parentElement.style.backgroundColor = 'rgb(255,255,255)';
    }

    scoreBox.style.display = 'none';

    userScore = 0;
};

//Event listeners for buttons

btnSubmit.onclick = (e) => {
    e.preventDefault();
    countScore();

    btnSubmit.disabled = true;
};

btnShow.onclick = (e) => {
    e.preventDefault();
    showAnswers();
};

btnReset.onclick = (e) => {
    e.preventDefault();
    reset();
    btnSubmit.disabled = false;
};

console.log(window.innerWidth);