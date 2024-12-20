//modules
//need to include "type="module"" in script in the html file for js to know you're using modules
//"type="module"" implies defer so you don't have to include for DOM
//strict mode is also automatically applied

import playGuitar from "./guitars.js";
console.log(playGuitar());

//rename functions as you import them
import { shredding as shred, plucking as fingerpicking} from "./guitars.js";
console.log(shred());
console.log(fingerpicking());

//import all functions at once
//but then default fxn has to be called default
import * as Guitars from "./guitars.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());


import User from "./user.js";
const me = new User("myEmail@gmail.com","Varvara");
console.log(me)
console.log(me.greeting());