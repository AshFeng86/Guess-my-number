"use strict";
/*
// Selecting an element in JS(. for Class; # for ID)
// Same selector in CSS and HTML

// document is the entry point to the DOM (Document Object Model)
console.log(document.querySelector(".message").textContent); // .message is in index.html, the message is "Start guessing..."
//--------------------------------------------
// DOM Manipulation: Manipulate the content
document.querySelector(".message").textContent = "Correct Number!"; //.textContent -> is part of a HTML element and describes what's insdie the tage with stripped out other htmlelements

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// Manipulate the value: .value --> value is part of HTMLInputElement and is the text a user can put into an input field
document.querySelector(".guess").value = 23;
// Get the value: .value
console.log(document.querySelector(".guess").value);
*/

// .addEventListener(): Handling Click Events: Event Listener
// Implementing the Game Logic
let secretNumber = Math.trunc(Math.random() * 20) + 1; // random num: 0 - 20
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// Because there's another button again, we are just interested in check
document.querySelector(".check").addEventListener("click", function () {
  // This entire function part is called evenHandler
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // When there's no input
    // document.querySelector(".message").textContent = "No number!";
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    // When player wins
    // document.querySelector(".message").textContent = "You WIN!";
    displayMessage("You WIN");

    // Manipulating CSS Styles
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem";

    // Update highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     score > guess ? "Too HIGH" : "Too LOW";
      displayMessage(guess > secretNumber ? "Too HIGH" : "Too LOW");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You've lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     // When it's too high
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too HIGH";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You've lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else {
  //     // When it's too low
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too LOW";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You've lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

// Challenge 1: set up the Again! button
document.querySelector(".again").addEventListener("click", function () {
  // Change the score back to 20
  score = 20;
  document.querySelector(".score").textContent = score;

  // Set a new secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reinitial the conditions of the message, number, scores and guess input field
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";

  // Restore the background color and number width
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
