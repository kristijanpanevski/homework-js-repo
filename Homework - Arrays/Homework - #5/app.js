console.log("Script is working");

function maxAndMinNumberSum(arr) {
  let numberMax = arr[0];
  let numberMin = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > numberMax) {
      numberMax = arr[i];
    }

    if (arr[i] < numberMin) {
      numberMin = arr[i];
    }
  }

  const sum = numberMax + numberMin;

  return `Max: ${numberMax}, Min: ${numberMin}, Sum: ${sum}`;
}

console.log(maxAndMinNumberSum([3, 5, 6, 8, 11]));
