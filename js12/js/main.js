// Loops

//while-loop
let myNumber = 0;
while (myNumber < 50) {
  console.log(myNumber);
  myNumber = myNumber + 1;
  //does the same thing - adds myNumber by 1
  myNumber++;
  //will increment by 2
  myNumber += 2;
}

myNumber = 0;
//do-while loop will start no matter what and check after
do {
  console.log(myNumber);
  myNumber++;
  //will break out of loop if i === 50
  //can also use continue statement similarly
  if (myNumber === 50) break;
} while (myNumber < 50)

//for-loop
//i starts at 0 and increments by one while i <= 10
for (let i = 0; i <= 10; i++) {
  console.log(i)
}