//var, let, and const

//const when value constant
//let when value can change

//global scope
var x = 4;
let y = 2; //let is function-scoped not block-scoped, so putting var inside of a block will still affect value after block
const z = 3;

//local scope
//block scope
{
  let y = 4;
  console.log(y);
}

//function scope
function myFunc() {
  const z = 5;
  console.log(z);
}
myFunc();