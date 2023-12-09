console.log("Script is working");

function typeOf(input) {
  let checkInput = typeof input;
  return checkInput;
}
let checkTypeOne = typeOf(21);
console.log(`This is a ${checkTypeOne}`);
let checkTypeTwo = typeOf("dfsdhj");
console.log(`This is a ${checkTypeTwo}`);
let checkTypeThree = typeOf(false);
console.log(`This is a ${checkTypeThree}`);
let checkTypeFour = typeOf([]);
console.log(`This is a ${checkTypeFour}`);
let checkTypeFive = typeOf(undefined);
console.log(`This is a ${checkTypeFive}`);
