//Conditionals: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

let soup;
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);


//nested ternary operator
soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" 
: soup
? `Yes, we have ${soup} today.`
: "Sorry, no soup today.";
console.log(soupAccess)

let testScore = 79;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My grade is a ${myGrade}.`);