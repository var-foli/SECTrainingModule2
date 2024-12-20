// strings
const myVariable = "Mathematic";

//Length property
console.log("Every good boy does fine".length);

//string methods
console.log(myVariable.charAt(6));
console.log(myVariable.indexOf("at"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5,8));
//slice nothing returned if end greater than beginning
console.log(myVariable.slice(5,2));
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("mat"));
console.log(myVariable.split("e"));
