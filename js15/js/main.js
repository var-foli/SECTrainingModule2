//arrays

const myArray = [];

//add elements to an array
myArray[0] = "Varvara";
myArray[1] = 1011;

console.log(myArray);
console.log(myArray[myArray.length -1]);

myArray.push("school");
console.log(myArray);

const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

const newLength = myArray.unshift(42);
console.log(myArray);
console.log(newLength);

const firstItem = myArray.shift();
console.log(firstItem);

myArray[0] = "Varvara";
myArray[1] = 1011;
myArray[2] = false;
console.log(myArray);
//removing one item at position 1 and replacing with 42
myArray.splice(1, 1, 42);
console.log(myArray);
//inserting 33 at position 1
myArray.splice(1, 0, 33);
console.log(myArray);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

let newArray = myArrayB.concat(myArrayA);
console.log(newArray);

//spread operator spreads values from arrays into a new array
newArray = [...myArrayA, ...myArrayB];
console.log(newArray);

//creates an array with nested arrays
newArray = [myArrayA, myArrayB];
console.log(newArray);