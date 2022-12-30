let playerChoice;

let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');

const player = document.querySelector('#winCount');
player.textContent = `Player Score: ${playerScore}`;

const comp = document.querySelector('#lossCount');
comp.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector('#output');
output.textContent = 'Good luck!';

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        playerChoice = button.id;
        output.textContent = playRound(playerChoice, getComputerChoice());
        player.textContent = `Player Score: ${playerScore}`;
        comp.textContent = `Computer Score: ${compScore}`;
        if (playerScore === 5) {
            output.textContent = 'You win!!!';
        } else if (compScore === 5) {
            output.textContent = 'You lose...';
        }
    })
})


function getComputerChoice(){
    let a = Math.random();
    let b = Math.random();
    let c = Math.random();
    if ((a > b) && (a > c)) {
        return 'rock';
    } else if ((b > a) && (b > c)) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 'tie';
        } else if (computerSelection === 'paper') {
            compScore++;
            return 'lose';
        } else {
            playerScore++;
            return 'win';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'win';
        } else if (computerSelection === 'paper') {
            return 'tie';
        } else {
            compScore++;
            return 'lose';
        }
    } else {
        if (computerSelection === 'rock') {
            compScore++;
            return 'lose';
        } else if (computerSelection === 'paper') {
            playerScore++;
            return 'win';
        } else {
            return 'tie';
        }
    }
}