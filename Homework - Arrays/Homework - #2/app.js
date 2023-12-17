console.log("Script is working");

function numberSum(numbersArr) {
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum += numbersArr[i];
  }
  return sum;
}

console.log(numberSum([5, 1, 3, 6, 8]));
