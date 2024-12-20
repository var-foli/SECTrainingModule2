//Conditionals: If Statements

let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply

if (customerIsBanned === true) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}.`;
} else {
  reply = `Sorry, we're out of soup.`;
}

console.log(reply)

//Conditionals: Switch Statements

//syntax
switch (expression OR value) {
  case choice1:
    //run this code
    break;
  case choice2:
    //run this different code
    break;
  default:
    //run this code if no case matches
    //break not needed here
}

switch (1) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("No match")
}
