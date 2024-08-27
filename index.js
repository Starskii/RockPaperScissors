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
    if(winningCombinations[humanSelection] === computerSelection){
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        returnValue = 1;
    }
    else if(winningCombinations[computerSelection] === humanSelection){
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        returnValue = 2;
    }
    else{
        console.log(`It's a tie. You both chose ${humanSelection}!`);
    }
    return returnValue;
};

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    for(let round = 0; round < rounds; round++){
        const roundOutcome = playRound(getUserChoice(), getComputerChoice());
        switch(roundOutcome){
            case 1: 
                humanScore++;
                break;
            case 2:
                computerScore++;
                break;
        }
    }

    console.log(`The final score was \nHuman: ${humanScore} \nComputer: ${computerScore}`);
}

playGame();