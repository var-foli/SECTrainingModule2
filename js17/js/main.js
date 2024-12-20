//objects

const myObj = {name: "Varvara"}
const anotherObj = {
  //properties
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "coffee",
    afternoon: "iced tea"
  },
  //method
  action: function() { //annonymous function
    //this refers to the object
    return `Time for ${this.beverage.morning}`;
  }
};
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["hobbies"][0]);
console.log(anotherObj.action());
console.log(Object.keys(anotherObj));
console.log(Object.values(anotherObj));
for (let each_key in anotherObj) {
  console.log(`For ${each_key}, it's ${anotherObj[each_key]}`);
}
delete anotherObj.action;
console.log(anotherObj.hasOwnProperty("action"));

const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vroom!";
  }
}
//creates a vehicle object called truck using the constructor
const truck = Object.create(vehicle);
//creates new property
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //these properties are INHERITED from the vehicle object
console.log(truck.engine());



//destructuring objects
const {beverage: myVariable, hobbies} = anotherObj;
console.log(myVariable);
console.log(hobbies);

//function using property in object
function drinks({beverage}) { return `drinking ${beverage.morning}!`};
console.log(drinks(anotherObj));
