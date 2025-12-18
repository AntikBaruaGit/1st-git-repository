let score = {
  win: 0,
  loss: 0,
  tie: 0,
};

function playGame(playerMove) {
  let computerMove = pickcomputersMove();
  let result = "";
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
      score.loss++;
    } else if (computerMove === "paper") {
      result = "You win";
      score.win++;
    } else if (computerMove === "scissor") {
      result = "Tie";
      score.tie++;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
      score.win++;
    } else if (computerMove === "paper") {
      result = "Tie";
      score.tie++;
    } else if (computerMove === "scissor") {
      result = "You lose";
      score.loss++;
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
      score.tie++;
    } else if (computerMove === "paper") {
      result = "You lose";
      score.loss++;
    } else if (computerMove === "scissor") {
      result = "You win";
      score.win++;
    }
  }

  document.querySelector(".result1").innerHTML = result;
  document.querySelector(".resultWon").innerHTML = `won: ${score.win}`;
  document.querySelector(".resultLoss").innerHTML = `loss: ${score.loss}`;
  document.querySelector(".resultTie").innerHTML = `tie: ${score.tie}`;
}

function pickcomputersMove() {
  let randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = "rock";
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
    computerMove = "paper";
  else computerMove = "scissor";
  return computerMove;
}
