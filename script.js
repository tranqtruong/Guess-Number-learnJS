'use strict';

var secretNumber = createNewSecretNumber()
var score = 20;
var highscore = 0;

function createNewSecretNumber(){
    return Math.trunc(Math.random()*20 + 1);
}


// Handler Check Button
document.querySelector(".check").addEventListener('click', handlerCheckButton);

function handlerCheckButton(){
    let guess = Number(document.querySelector(".guess").value)

    if(isInvalidNumber(guess)){
        changeTextElement(".message", "secret number in 0 to 20!");
        return;
    }

    if(isScoreOver(score)){
        changeTextElement(".message", 'Game over!');
        changeTextElement(".number", secretNumber);
        return;
    }

    handleGuessNumber(guess)

}

function isInvalidNumber(number){
    if(!number || number > 20 || number < 0){
        return true;
    }
    return false;
}

function changeTextElement(elementIdOrClass, text){
    document.querySelector(elementIdOrClass).textContent = text
}

function handleGuessNumber(guessNumber){
    if(guessNumber > secretNumber){
        changeTextElement(".message", "Too high!")
        score--;
    }else if(guessNumber < secretNumber){
        changeTextElement(".message", "Too low!");
        score--;
    }else{
        changeTextElement(".message", "Correct Number!");
        changeTextElement(".number", secretNumber)
        changeBackgroundColor("body", "#60b347");
        changeWidthText(".number", "30rem");
        changeHighScore();
    }

    changeTextElement(".score", score);
}

function isScoreOver(score){
    return (score <= 0) ? true : false;
}

function changeBackgroundColor(elementIdOrClass, color){
    document.querySelector(elementIdOrClass).style.backgroundColor = color;
}

function changeWidthText(elementIdOrClass, width){
    document.querySelector(elementIdOrClass).style.width = width;
}

function changeValueElement(elementIdOrClass, value){
    document.querySelector(elementIdOrClass).value = value;
}

function changeHighScore(){
    if(score > highscore){
        highscore = score;
        changeTextElement(".highscore", highscore);
    }
}


// Handler Again! Bytton
document.querySelector(".again").addEventListener("click", handlerAgainButton);

function handlerAgainButton(){
    secretNumber = createNewSecretNumber();
    resetScore();
    changeTextElement(".score", score);
    changeTextElement(".number", "?");
    changeTextElement(".message", "Start guessing...");
    changeTextElement(".highscore", highscore)
    changeBackgroundColor("body", "#222");
    changeValueElement(".guess", '');
}

function resetScore(){
    score = 20;
}