//JSON

const myObj = {
  name: "Varvara",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  }
};


//JSON does not send functions, sends data as strings
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
