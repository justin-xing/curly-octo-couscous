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
            return 'lose';
        } else {
            return 'win';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'win';
        } else if (computerSelection === 'paper') {
            return 'tie';
        } else {
            return 'lose';
        }
    } else {
        if (computerSelection === 'rock') {
            return 'lose';
        } else if (computerSelection === 'paper') {
            return 'win';
        } else {
            return 'tie';
        }
    }
}

function game() {
    let w = 0;
    let l = 0;
    for (let i = 0; i < 5; i++) {
        const player = prompt("Choose your move");
        const computer = getComputerChoice();
        const result = playRound(player, computer);
        console.log('Computer chose ' + computer + ', ' + result);
        if (result === 'win') {
            w += 1;
        } else if (result === 'lose') {
            l += 1;
        } else {
        }
    }
    if (w > l) {
        console.log('You won!');
    } else if (w > l) {
        console.log('You lost...');
    } else {
        console.log('Tie!');
    }
}