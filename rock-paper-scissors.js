let random;
let choice;
let wins = 0;
let losses = 0;
let draws = 0;
let isDataValid;

function runGame() {
    let playAgain;

    while (playAgain !== false) {
        isDataValid = true;
        getUserPick(); 

        if (choice === null) {
            alert ('Thanks for playing!');
            break;
        }

        getComputerPick(); 
        comparePicks();

        if (isDataValid) {
            playAgain = confirm ('Do you want to play again?');
        }
        
    }
    alert ('Goodbye!');
}

function getComputerPick() { //generates computer's pick
    random = Math.floor(Math.random() * 101); //random number from 0 - 100

    if (random < 34) {
        random = 'paper';
    } else if (random >= 34 && random < 67) {
        random = 'scissors';
    } else if (random >= 67) {
        random = 'rock';
    }
}

function getUserPick() { //get user's pick
    choice = prompt(`rock, paper or scissors? \n
${wins} wins
${losses} losses
${draws} draws`);
}

function comparePicks() {  //compare computer's pick with user's
    if (random === 'paper') {
        switch(choice) {
            case ('rock'):
                lostGame();
                break;
            case ('scissors'):
                wonGame();
                break;
            case ('paper'):
                drawGame();
                break;
            default:
                isDataValid = false;
                alert('Invalid choice! Try again');
        }
    } else if (random === 'scissors') {
        switch(choice) {
            case ('rock'):
                wonGame();
                break;
            case ('scissors'):
                drawGame();
                break;
            case ('paper'):
                lostGame();
                break;
            default:
                isDataValid = false;
                alert('Invalid choice! Try again');
        }
    } else if (random === 'rock') {
        switch(choice) {
            case ('rock'):
                drawGame();
                break;
            case ('scissors'):
                lostGame();
                break;
            case ('paper'):
                wonGame();
                break;
            default:
                isDataValid = false;
                alert('Invalid choice! Try again');
        }
    }
}

function lostGame() {
    losses++;
    alert (`You lost! Computer's pick: ${random}`);
}

function wonGame() {
    wins++;
    alert (`You won! Computer's pick: ${random}`);
}

function drawGame() {
    draws++;
    alert (`It's a draw! Computer's pick: ${random}`);
}

runGame();