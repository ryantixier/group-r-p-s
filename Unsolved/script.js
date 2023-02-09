// //created in-class, 2/9/23

// // requests user input
// var userChoice = prompt("Please choose Rock, Paper, or Scissors");

// // send the user a message
// var alert = "you have chosen" + userChoice;

// var input = "returns boolean true/false";

// BEGIN CODE
// declaare variables
// fxn declaration (main logic for game)
// add prompt(r, p, s) [variables] first
// alert (win/loss)

console.log(this);

var choice = ["R", "P", "S"];
var userChoice = prompt("Please Choose R, P, or S");
var computerChoice = choice[Math.floor(Math.random() * choice.length)];

var userAlert = alert("You have chosen... " + userChoice);
var computerAlert = alert("The computer has chosen... " + computerChoice);

if (userChoice === computerChoice) {
  //   ties++;
  this.alert("It's a Tie!");
} else if (
  (userChoice === "R" && computerChoice === "S") ||
  (userChoice === "S" && computerChoice === "P") ||
  (userChoice === "P" && computerChoice === "R")
) {
  this.alert("Congrats!! You Win!");
} else {
  (computerChoice === "R" && userChoice === "S") ||
    (computerChoice === "S" && userChoice === "P") ||
    (computerChoice === "P" && userChoice === "R");
  //   losses++;
  this.alert("Oof!! You Lost!");
}

// var tallyAlert = ()

//have memory keep count of

// } else if (userChoice === "R" && computerChoice === "P") {
//   compWins++;
// } else {
// }
