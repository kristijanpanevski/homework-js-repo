console.log("Script is working");

function fullNamesArray(firstNames, lastNames) {
  const fullNames = [];
  for (let i = 0; i < firstNames.length; i++) {
    const fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
    fullNames.push(fullName);
  }
  return fullNames;
}

let first = ["Peter", "Bill"];
let last = ["Jones", "Brown"];
console.log(fullNamesArray(first, last));
