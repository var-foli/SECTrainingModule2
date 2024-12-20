//event listeners
//syntax: addEventListener(event, function, useCapture)
//useCapture is false by default
//useCapture true prevents events from bubbling up into parent

//a click event will cause the page to alert
const doSomething = () => {
  alert("doing something");
}
h2.addEventListener("click", doSomething, false);
//removed the event listener
h2.removeEventListener("click", doSomething,false);


//w/ annonymous function
h2.addEventListener("click", (event) => {
  console.log(event.target);
  //clicking changes the text in the event target (the element that was targeted by the click)
  event.target.textContent = "Clicked";
});


//makes it safer to interact with DOM bc you know the page has loaded
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    //kicks off the program once page is ready
    initApp();
  }
})


const initApp = () => {
  //ensure DOM has loaded and can be interacted with
  //need to add "defer" to html code where js script is added in in the header
  const view = document.querySelector("#view2");
  const div = view.querySelector("div")
  const h2 = view.querySelector("h2")

  view.addEventListener("click", (event) => {
    //view.style.backgroundColor = "purple";

    //changes the style using classes - have to add purple class and remove darkblue class
    view.classList.add("purple");
    view.classList.remove("darkblue");

    //can also use toggle for add/remove
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  });

  div.addEventListener("click", (event) => {
    //div.style.backgroundColor = "blue";

    div.classList.toggle("blue");
    div.classList.toggle("black");
  });

  h2.addEventListener("click", (event) => {
    //also can toggle text with if statement
    const myText = event.target.textContent;
    myText === "My 2nd View"
      ? event.target.textContent = "Clicked"
      : event.target.textContent = "My 2nd View"
    //stop propagation makes event stop at specified element
    //event.stopPropagation();
    //event.target.textContent = "Clicked";
  });

  //can toggle with mouseover/mouseout
  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  })
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  })

  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    //prevent page from reloading and words disapearing when event
    event.preventDefault();
    console.log("submit event");
  })
};