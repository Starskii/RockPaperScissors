let choices = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

let winningCombinations = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
};

const getUserChoice = () => {
    let keys = Object.keys(choices);
    let validChoice = false;
    let choice = '';
    while (!validChoice){
        choice = prompt("Please enter 'rock', 'paper', or 'scissors'");
        if(typeof choice === 'string')
            choice = choice.toLowerCase();
        for(const key of keys){
            if(choice == choices[key])
                validChoice = true;
        }
    }
    return choice;
};

const playRound = (humanSelection, computerSelection) => {
    returnValue = 0;
    let messageString = "";
    if(winningCombinations[humanSelection] === computerSelection){
        messageString = `You win! ${humanSelection} beats ${computerSelection}`;
        returnValue = 1;
    }
    else if(winningCombinations[computerSelection] === humanSelection){
        messageString = `You lose! ${computerSelection} beats ${humanSelection}`;
        returnValue = 2;
    }
    else{
        messageString = `It's a tie. You both chose ${humanSelection}!`;
    }
    messageLabel.innerHTML = messageString;
    return returnValue;
};

const playGame = (e) => {
    const userChoice = e.target.innerHTML.toLowerCase();
    const roundOutcome = playRound(userChoice, getComputerChoice());
    switch(roundOutcome){
        case 1: 
            humanScore++;
            break;
        case 2:
            computerScore++;
            break;
    }

    if(humanScore === 5){
        alert("You won!");
        humanScore = 0;
        computerScore = 0;
        messageLabel.innerHTML = "Press a button to play!";
    }
    if(computerScore === 5){
        alert("Computer won!");
        humanScore = 0;
        computerScore = 0;
        messageLabel.innerHTML = "Press a button to play!";
    }

    humanScoreLabel.innerHTML =  `Human Score: ${humanScore}`;
    computerScoreLabel.innerHTML = `Computer Score: ${computerScore}`;
}

const messageLabel = document.querySelector(".message-label");
const humanScoreLabel = document.querySelector(".human-score");
const computerScoreLabel = document.querySelector(".computer-score");

const buttons = document.querySelectorAll(".user-controls button");
for(btn of buttons){
    btn.addEventListener("click", playGame)
}