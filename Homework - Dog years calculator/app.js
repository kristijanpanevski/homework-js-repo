console.log("Script is working");

// Human to dog years convertor
function calculateDogyears(humanYears) {
  let humanYearsConvertedToDogYears = humanYears * 7;
  return humanYearsConvertedToDogYears;
}

let resultOne = calculateDogyears(8);
console.log(`Your dog is ${resultOne} dog years old`);

//ATM
// let totalAmount = 500;

// function atmWithdrawal(withdrawnAmount) {
//   if (isNaN(withdrawnAmount)) {
//     console.log("This is not a valid input, please enter a number.");
//     return;
//   }

//   if (withdrawnAmount > totalAmount) {
//     console.log("Not enough money");
//   } else {
//     totalAmount -= withdrawnAmount;
//     console.log(`You have ${totalAmount} MKD left.`);
//   }
// }

// atmWithdrawal(50);
