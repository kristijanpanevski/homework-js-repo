console.log("Script is working");

function stringArr(stringsInput) {
  let stringResult = "";
  for (let i = 0; i < stringsInput.length; i++) {
    stringResult += stringsInput[i];

    if (i < stringsInput.length - 1) {
      stringResult += " ";
    }
  }
  return stringResult;
}

console.log(stringArr(["Hello ", "there ", "students ", "of ", "SEDC", "!"]));
