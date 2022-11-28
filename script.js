let playerPoints = 0;
let PCPoints = 0;

for (let i = 0; i <= 5; i++){
let playerChoice = prompt('rock paper scissors');

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Rock'
    } else if (random === 1) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}
let PC = getComputerChoice();
// console.log(PC);

if (PC === playerChoice) {
    console.log('draw')
} else if (PC === 'Rock' && playerChoice === 'Paper') {
    ++playerPoints;
} else if (PC === 'Rock' && playerChoice === 'Scissors') {
    ++PCPoints;
} else if (PC === 'Scissors' && playerChoice === 'Rock') {
    ++playerPoints;
} else if (PC === 'Scissors' && playerChoice === 'Paper') {
    ++PCPoints;
}
else if (PC === 'Paper' && playerChoice === 'Scissors') {
    ++playerPoints;
} else if (PC === 'Paper' && playerChoice === 'Rock') {
    ++PCPoints;
}
console.log('Player Score is ' +  playerPoints);
console.log('PC Score is ' + PCPoints);
}

if (playerPoints > PCPoints) {
    console.log('You win!')
} else if (playerPoints < PCPoints) {
    console.log('You Lose!')
} else {
    console.log('lewy nie strzelil karniaka XD');
}




/*
let check = singleRound;
console.log(playerChoice);
console.log(getComputerChoice());
console.log (check());
*/

/*
function singleRound(playerChoice, getComputerChoice) {
    switch(playerChoice) {

        case 'Rock':
            if (getComputerChoice === 'Rock') {
                return true;
            } else {
                return false;
            }
        break;

        case 'Scissors':
            if (getComputerChoice === 'Paper') {
                return true;
            } else {
                    return false;
                }
        break;

        case 'Paper': 
            if (getComputerChoice === 'Rock') {
                return true;
            } else {
                return false;
            }
        break;

        default: 
        console.log('here is an error');
            }
}

*/

/*
function Game(){
    let player = 0;
    let computer = 0;
    for (let i = 0; i <= 5; i++){
        if singleRound() === true {
            console.log(player++);
        } else if singleRound() === false {
            console.log(computer++);
        } else { 
            console.log('draw');
        }

    }
} 

*/
