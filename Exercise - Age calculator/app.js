console.log("Script is working");

function calculateAge(currentYear, birthYear) {
  let result = currentYear - birthYear;

  return result;
}
let currentYear = new Date().getFullYear();
let resultOne = calculateAge(currentYear, 2000);
console.log(`You are ${resultOne} years old`);

let resultTwo = calculateAge(currentYear, 2001);
console.log(`You are ${resultTwo} years old`);

let resultThree = calculateAge(currentYear, 2002);
console.log(`You are ${resultThree} years old`);
