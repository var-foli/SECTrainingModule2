//web storage API
//available to JS via global variable: window (window API)

const myArray = ["eat", "sleep"];
const myObject = {
  name: "Varvara",
  hobbies: ["eat", "sleep"],
  logName: function () {
    console.log(this.name);
  }
};

//sessionStorage will store data while the tab is open
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

//localStorage will store data even after tab closed
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
//remove indiv element, will then return null
localStorage.removeItem("myLocalStore");
//remove all items
localStorage.clear();
//returns last element in store
const length = localStorage.length;
const key = localStorage.key(length-1);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);