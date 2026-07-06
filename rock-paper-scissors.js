let random = Math.floor(Math.random() * 101);

if (random < 34) {
    random = 'paper';
} else if (random >=34 && random < 67) {
    random = 'scissors';
} else if (random >= 67) {
    random = 'rock';
}

console.log(`Computer's choice: ` + random)

let choice = prompt('rock, paper or scissors?',);

if (random === 'paper') {
    switch(choice) {
        case ('rock'):
            alert ('You lost!');
            break;
        case ('scissors'):
            alert ('You won!');
            break;
        case ('paper'):
            alert ('Draw!');
    }
} else if (random === 'scissors') {
    switch(choice) {
        case ('rock'):
            alert ('You won!');
            break;
        case ('scissors'):
            alert ('Draw!');
            break;
        case ('paper'):
            alert ('You lost!');
    }
} else if (random === 'rock') {
    switch(choice) {
        case ('rock'):
            alert ('Draw!');
            break;
        case ('scissors'):
            alert ('You lost!');
            break;
        case ('paper'):
            alert ('You won!');
    }
}