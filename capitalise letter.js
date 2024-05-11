var userInput = prompt("What's your name?");
var indexLetter = userInput.slice(0,1);
var remainingLetters = userInput.slice(1,userInput.length)

var capitalLetter = indexLetter.toUpperCase();

capitalLetter + remainingLetters;
