// declairing my constants chatGPT helped me with the .querySelector one. it also helped me with the backticks and putting the users input next to the "You chose" and Computer chose:
const choices = document.querySelector(".choices");
const display = document.getElementById("userChoice");
const randomChoiceDisplay = document.getElementById("randomChoice");
const resultDisplay = document.getElementById("result");
let wins = 0;
let losses = 0;
let ties = 0;
choices.addEventListener("click", (event) => {
    const userChoice = event.target.getAttribute("data-choice");
    playGame(userChoice);
})

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    display.textContent = `You Chose: ${userChoice}`;
    randomChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;


    let result;
    if (userChoice === computerChoice) {
        result = "tie";
        ties++;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win";
        wins++;

    } else {
        result = "You lose";
        losses++;
    }

    resultDisplay.textContent = `Result: ${result}`;
    updateStats();
}
function updateStats() {
    const statsDisplay = document.getElementById("stats");
    statsDisplay.textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

