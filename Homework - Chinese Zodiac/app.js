console.log("Script is working");

let year = prompt("Enter your birth year!");
console.log(year);

let yearEntered = Number(year);
let zodiacSign = (year - 4) % 12;

if (Number.isNaN(yearEntered)) {
  console.log("This is not a valid entry! Please enter a number.");
} else if (zodiacSign === 0) {
  console.log("Your sign is Rat");
} else if (zodiacSign === 1) {
  console.log("Your sign is Ox");
} else if (zodiacSign === 2) {
  console.log("Your sign is Tiger");
} else if (zodiacSign === 3) {
  console.log("Your sign is Rabbit");
} else if (zodiacSign === 4) {
  console.log("Your sign is Dragon");
} else if (zodiacSign === 5) {
  console.log("Your sign is Snake");
} else if (zodiacSign === 6) {
  console.log("Your sign is Horse");
} else if (zodiacSign === 7) {
  console.log("Your sign is Goat");
} else if (zodiacSign === 8) {
  console.log("Your sign is Monkey");
} else if (zodiacSign === 9) {
  console.log("Your sign is Rooster");
} else if (zodiacSign === 10) {
  console.log("Your sign is Dog");
} else if (zodiacSign === 11) {
  console.log("Your sign is Pig");
}
