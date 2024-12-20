//JS classes

class Pizza {
  //public and private fields must be declared above constructor
  //public field property - will return value with console.log(myPizza.crust)
  //crust = "original";

  //private field properties - will return undefined if user tries accessing with console.log(myPizza.sauce) 
  //#sauce = "traditional";
  //#size
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];

    //this.#size = pizzaSize;
  }
  
  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(topping) {
    this.toppings.push(topping);
  }

  bake() {
    console.log(`Baking a ${this.size} ${this._crust} ${this.type} crust pizza.`)
  }

  //method using private field properties
  /*
  hereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)};
  */
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "thin";
//or
myPizza.setCrust("thick");
myPizza.bake();

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.pizzaCrust);
console.log(myPizza.getToppings());



//child class
class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super("The Works", pizzaSize);
  }

  slice() {
    console.log(`Our ${this.type} ${this._size} pizza has 8 slices.`);
  }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();


//factory function
//poperties crust and size can't be accessed outside of block, so acts as a class
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}

const yourPizza = pizzaFactory("small");
yourPizza.bake();