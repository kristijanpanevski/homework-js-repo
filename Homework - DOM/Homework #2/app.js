let numbersArr = [23, 5, 14, 53, 8];

let sum = 0;
for (let i = 0; i < numbersArr.length; i++) {
  sum += numbersArr[i];
}

let body = document.body;

let list = document.createElement("ul");

for (let a = 0; a < numbersArr.length; a++) {
  let listItem = document.createElement("li");
  listItem.textContent = numbersArr[a];
  list.appendChild(listItem);
}

body.appendChild(list);

let totalSum = document.createElement("p");
totalSum.textContent = "Sum: " + sum;
body.appendChild(totalSum);
