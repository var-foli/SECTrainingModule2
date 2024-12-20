//regex example

//html file would contain data for a form asking for a phone number

document.getElementById('phoneNum').addEventListener("input", (event) => {
  //searching for possible open parentheses, then three digits, and a possible open parentheses
  //then a possible character set that could be a - a . or a space
  //then 3 digits
  //optional dash period or space
  //four digits
  //has to end with $ for ending character
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("phoneNum");
  const format = document.querySelector(".phoneFormat");
  const phone = input.value;
  //passing input phone value into the regex
  const found = regex.test(phone);
  if (!found && phone.length) {
    //adds a block and turns text red
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("phoneNum");
  //search for parentheses dash period or space
  const regex = /[()-. ]/g;
  //removing these extra characters to process and use in the program
  const savedPhoneNum = input.value.replaceAll(regex, "");
  console.log(savedPhoneNum);
});



//regex example2
//html file containing form where user inputs text

document.getElementById("textForm").addEventListener("submit", (event) => {
  //preventing page from reloading after submit
  event.preventDefault();
  const input = document.getElementById("textEntry");
  //looking for 2 or more spaces
  const regex = / {2,}/g;
  //trims any whitespace at the beginning or middle or end
  const newText = input.value.replaceAll(regex, " ").trim();
  console.log(newText);
  //JS method for encoding a url
  //text needs to be cleaned up before submitting to this method
  const encodedInputText = encodeURI(input.value);
  const encodedCleanText = encodeURI(newText);
});