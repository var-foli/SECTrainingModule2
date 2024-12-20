//errors and error handling

//puts JS in strict mode that enforces rules
"use strict";


//reference error
//variable = "Dave";
//console.log(variable);


//syntax error
//Object..create();


//type error
//const name = "Dave";
//name = "Joe";


//error catching
const makeError = () => {
  try {
    const name = "Dave";
    name = "Joe";
  } catch(err) {
    console.error(err.message);
    console.error(err.stack);
    console.warn(err.name);
    console.table(err);
  }
};
makeError();


//making a custom error
//error object
function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}.`
}
//error catching
const makeCustomError = () => {
  try {
    throw new customError("This is a custom error!");
    //can also just throw an error
    //throw new Error("This is an error!");
  } catch(err) {
    console.error(err.stack);
  } 
  //finally block will run even if error is thrown
    finally {
      console.log("... finally");
  }
};
makeCustomError();