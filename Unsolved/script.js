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

// console.log(this);

var choice = ["R", "P", "S"];
var userChoice = prompt("Please Choose R, P, or S");
var computerChoice = choice[Math.floor(Math.random() * choice.length)];

var userSelect = alert("You have chosen... " + userChoice);
var computerSelect = alert("The computer has chosen... " + computerChoice);

var ties = 0;
var wins = 0;
var losses = 0;

if (userChoice === computerChoice) {
  ties++;
  this.alert("It's a Tie!");
  //   console.log(this);
} else if (
  (userChoice === 0 && computerChoice === 2) ||
  (userChoice === 2 && computerChoice === 1) ||
  (userChoice === 1 && computerChoice === 0)
) {
  wins++;
  this.alert("Congrats!! You Win!");
  //   console.log(this);
} else {
  (computerChoice === 0 && userChoice === 2) ||
    (computerChoice === 2 && userChoice === 1) ||
    (computerChoice === 1 && userChoice === 0);
  losses++;
  this.alert("Oof!! You Lost");
}

var tallyCount = alert(
  "wins: " + wins + " losses: " + losses + " ties: " + ties
);

// console.log(ties);
// console.log(wins);
// console.log(losses);

//have memory keep count of

// } else if (userChoice === "R" && computerChoice === "P") {
//   compWins++;
// } else {
// }
