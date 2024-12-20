//callbacks, promises, thenables, and async/await and Fetch API

// callbacks - functions passed to other fxns as parameters AKA "callback hell" bc keeps going deeper with callbacks
function firstFunction(parameters, callback) {
  //do stuff
  callback();
}



//promises (async code): pending, fulfilled, rejected
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

console.log(myPromise);



//thenables - force js to complete tasks in order after the fetch, otherwise could do things syncronously and wouldn't wait for steps to finish
myPromise.then(value => {
  console.log(value);
  return value + 1;
})
.then(newValue => {
  console.log(newValue);
})
//can catch errors in thenables
.catch(err => {
  console.error(err);
});

//including a 3 sec delay to show that the next promise can be delayed and is async, but other code could keep running and not wait
const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  console.log(value);
});


const users = fetch("https://jsonplaceholder.typicode.com/users")

//pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      console.log(user);
    })
  });



//async/await
//await can only be used inside of an async function
const myUsers = {
  userList: []
}

const myCoolFunction = async () => {
  //tells code to wait for it to fetch api data before continuing
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
}

//can chain functions with await
const anotherFunc = async() => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
}

anotherFunc();



//workflow function
const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  //creating an array of all user emails
  const userEmailArray = jsonUserData.map(user => {
    return user.email;
  });
  console.log(userEmailArray);
  postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
  console.log(data);
}

getAllUserEmails();



//2nd parameter of Fetch is an object
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET", //can also use "POST" to post data
    headers: {
      Accept: "application/json"
      //can also accept data as text
      //Accept: "text/plain"
    }
  });
  const jsonJokeData = await response.json();
  //const textJokeData = await response.text();
  console.log(jsonJokeData.joke);
  //console.log(textJokeData);

}
getDadJoke();

//can also post data
const jokeObject = {
  id: "001KAD223", 
  joke: "Why was is called the dark ages? Because of all the knights."
}

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
}
postData(jokeObject);



//can also pass data in through the url
const requestJoke = async (firstName, lastName) => {
  const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke);
}
requestJoke("Clint","Eastwood");



//abstract into functions
//maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
  };
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}}`;
}

const requestJoke2 = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();
