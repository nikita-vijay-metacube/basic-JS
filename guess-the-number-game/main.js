let x = Math.floor(Math.random() * (100 - 0));
console.log(x);
let turn = 0;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('chancesLeft').innerHTML = 10-turn
})
/* Function to Restart Game */

function restartGame(){
    x = Math.floor(Math.random() * (100 - 0));
    let chanceSlabElements = document.getElementsByClassName('btn-group')[0].children
    turnTemp = turn
    while(turnTemp > 0){
        chanceSlabElements[turnTemp-1].classList.remove("disabled")
        turnTemp--
    }
    document.getElementById("answerReveal").classList.add('d-none')
    document.getElementById("correctGuess").classList.add('d-none')
    document.getElementById("wrongGuessed").classList.add('d-none')
    document.getElementById("guessedNumber").value =''
    document.getElementById("checkIfRightButton").removeAttribute('disabled')
    turn = 0;
    document.getElementById('chancesLeft').innerHTML = 10-turn
    
}

/* Function to Check if we guessed the number right */

function checkIfRight(){
    if(turn < 10){
        var element = document.getElementById("wrongGuessed");
        element.classList.add("d-none");
        let number = document.getElementById('guessedNumber').value
        if(number != 'undefined' && number != ""){
            let chanceSlabElements = document.getElementsByClassName('btn-group')[0].children
            chanceSlabElements[turn].classList.add("disabled")
            turn++;
            if(x == number){
                var element = document.getElementById("correctGuess");
                var checkIfRightButton = document.getElementById("checkIfRightButton");
                checkIfRightButton.setAttribute("disabled", true);
                document.getElementById("correctNumber").innerHTML = (number)
            }else{
                var element = document.getElementById("wrongGuessed");
                if(x > number){
                    element.innerHTML = 'Oops, You guessed <b>smaller</b> number. <p>Now try something <b>larger</b> than <b>'+ number + '</b></p>'
                }else{
                    element.innerHTML = 'Oops, You guessed <b>larger</b> number. <p>Now try something <b>smaller</b> than <b>'+ number + '</b></p>'
                }
                document.getElementById('chancesLeft').innerHTML = (10-turn > 0) ? 10-turn : 'NO'
            }
            if(turn == 10){
                var checkIfRightButton = document.getElementById("checkIfRightButton");
                checkIfRightButton.setAttribute("disabled", true);
                document.getElementById("answerReveal").classList.remove('d-none')
                document.getElementById("answerReveal").innerHTML = ('Sorry, you do not have an chances left, The Correct Number is: '+x + '. <p>Click <button type="button" onclick="restartGame()">Restart Game</button> to play again</p>')
            }else{
                element.classList.remove("d-none");
            }
            document.getElementById("guessedNumber").value =''
        }
    }
}
