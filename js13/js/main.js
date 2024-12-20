//Functions

//function declaration:
function sum(num1, num2) {
  return num1+num2;
}

console.log(sum(2,6))


//anonymous function befined by getUser = annonFunction
const getUserNameFromEmail1 = function(email) {
  return email.slice(0,email.indexOf("@"));
};


//arrow function
const getUserNameFromEmail2 = (email) => {
  return email.slice(0,email.indexOf("@"));
};

console.log(getUserNameFromEmail2("playerone@randomemail.com"));