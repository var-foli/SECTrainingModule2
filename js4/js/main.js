//Numbers

const myNumber = 42;
const myFloat = 42.159;
const myString = "42abc";

console.log(myString +3);
console.log(Number(myString) + 3);
console.log(Number("Varvara"));

console.log(Number.parseFloat(myNumber));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myString));

//chaining methods together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//determine if passed value is NaN AND its type is Number
console.log(Number.isNaN("Varvara"));

//determine if passed value is NaN
console.log(isNaN("Varvara"));