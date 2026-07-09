let wins = 0;
let losses = 0;
let draws = 0;

const OUTCOMES = {
    rock: { rock: 'draw', paper: 'lost', scissors: 'won' },
    paper: { rock: 'won', paper: 'draw', scissors: 'lost' },
    scissors: { rock: 'lost', paper: 'won', scissors: 'draw'}
}

runGame();

function runGame() {
    let playAgain = true;

    while (playAgain) {
        const userPick = getUserPick(); 

        if (userPick === null) {
            break;
        }

        const computerPick = getComputerPick(); 
        const outcome = comparePicks(userPick, computerPick);

        if (!outcome) {
            alert('Invalid choice! Try again')
        } else {
            switch (outcome) {
                case('draw'):
                    draws++;
                    alert(`Computer's pick: ${computerPick}. It's a draw!`);
                    break;
                case('won'):
                    wins++;
                    alert(`Computer's pick: ${computerPick}. You ${outcome}!`);
                    break;
                case('lost'):
                    losses++;
                    alert(`Computer's pick: ${computerPick}. You ${outcome}!`);
                    break;
            }
            showResults();
            playAgain = confirm(`Do you want to play again?`);
        } 
    }

    alert ('Thanks for playing! Goodbye!');
}

function getUserPick() { //get user's pick
    let choice = prompt('rock, paper or scissors?');
    if (choice !== null) {
        choice = choice?.trim().toLowerCase();
    }
    return choice;
}

function getComputerPick() { //generates computer's pick
    const randomNumber = Math.floor(Math.random() * 101); //random number from 0 - 100

    if (randomNumber < 34) {
        return 'paper';
    } else if (randomNumber >= 34 && randomNumber < 67) {
        return 'scissors';
    } else {
        return 'rock';
    }
}

function comparePicks(userPick, computerPick) {  //compare computer's pick with user's
    return OUTCOMES[userPick]?.[computerPick];
}

function showResults() {
    alert(`${wins} wins, ${losses} losses, ${draws} draws`);
}