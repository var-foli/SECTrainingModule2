//DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);

//# symbols says element based on id
const view2 = document.querySelector("#view2");
console.log(view2);

//change style to show view2/hide view1
//directly accesses CSS
view1.style.display = "none";
view2.style.dislay = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

//specifies views is a class with .
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

//only looking within already selected view1
const divs = view1.querySelectorAll("div");
console.log(divs);

//allows highlights over div when you scroll over
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs)

//specify div, then select only even divs by 2n
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

//changing background color and width/height of even divs
for (let i=0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  evenDivs[i].style.width = "200px";
  evenDivs[i].style.height = "200px";
}

//changing text of h1 element
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

//changes style of text
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!<h1> <p>This should align right.`
navbar.style.justifyContent = "space-between";


//navigating DOM tree
console.log(evenDivs);
console.log(evenDivs[0]);
//logs parent element of the div
console.log(evenDivs[0].parentElement);
//shows children
console.log(evenDivs[0].parentElement.children);
//shows child nodes
console.log(evenDivs[0].parentElement.childNodes);


view1.style.display = "none";
view2.style.display = "flex";
//creating/removing elements of DOM of page
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


//removing all children (all nodes, not just elements) from view2
while (view2.lastChild) {
  view2.lastChild.remove()
}

//adding 12 new divs
const createDivs = (parent, iterator) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iterator;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
}
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}