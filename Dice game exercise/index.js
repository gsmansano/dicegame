  // FIRST DICE
  let = randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  // SECOND DICE
  let = randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  // WIN/DRAW STATEMENT
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h2").innerHTML = "It is a draw!";
  }
