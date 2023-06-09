const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");
const score = document.getElementById("score");
const modal = document.querySelector(".modal");


const scoreboard = {
    player: 0,
    computer: 0
};

choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearmodal);
restart.addEventListener("click", restartGame);


// play game
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

}

//---computer choice---

function getComputerChoice() {
    const random = Math.random();
    if (random < 0.35) {
        return "rock";
    } else if (random <= 0.67) {
        return "paper";

    } else {
        return "scissors";

    }
}

//--who is the winner--
function getWinner(p, c) {
    if (p === c) {
        return "draw";
    } else if (p === "rock") {
        if (c === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "computer";
        } else {
            return "player";

        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "computer";
        } else {
            return "player"
        }

    }

}

function showWinner(winner, computerChoice) {
    if (winner === "player") {

        scoreboard.player++;

        result.innerHTML = `
            <h1 class = "text-win">You Win<h1>
            <i class ="fas fa-hand-${computerChoice} fa-5x"></i>
            <p> Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;

    } else if (winner === "computer") {

        scoreboard.computer++;

        result.innerHTML = `
            <h1 class = "text-lose"> You loose </h1>
            <i class ="fas fa-hand-${computerChoice} fa-5x"></i>
            <p> Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;

    } else {

        result.innerHTML = `
            <h1> Match Draw</h1>
            <i class ="fas fa-hand-${computerChoice} fa-5x "></i>
            <p> Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;

    }

    //====show result=======
    score.innerHTML = `
        <p>Player : ${scoreboard.player}</p>
        <p>Computer : ${scoreboard.computer}</p>`;
    modal.style.display = "block";
}



//====restart game ========
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player : 0 </p>
        <p>Computer : 0</p>`;
    restart.style.display = "none";

}


//===== clear modal======

function clearmodal(e) {
    if (e.target == modal) {
        modal.style.display = "none"
        
    }
}
