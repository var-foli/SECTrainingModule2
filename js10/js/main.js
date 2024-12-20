// User Input
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
//if user presses cancel instead of entering name, 
//name will be == null. ?? checks that value in name 
//otherwise prints statement
console.log(name ?? "You didn't enter your name."); 

//checking that name has a length
if (name) {
  console.log(name);
} else {
  console.log("You didn't enter your name.")
}
