console.log("script is working");

let userInput = prompt("How much money do you have?");

let numberResult = Number(userInput);

if (Number.isNaN(numberResult)) {
  console.log("this is not a number");
} else if (numberResult < 50) {
  console.log("You should work harder!");
} else if (numberResult >= 50) {
  console.log("You should take a rest");
}

console.log(userInput, numberResult);
