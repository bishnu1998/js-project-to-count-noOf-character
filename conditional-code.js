const myName = "Max";

if (True) {
  console.log("hello");
}

let isLoggedIn = true;

if (!isLoggedIn) {
  console.log("user is not logged in!");
}

const enteredUserName = "Maximilian";

if (enteredUserName.length > 0) {
  console.log("input is valid");
}

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for of loop
const users = ["Max", "Anna", "Joel"];
for (const user of users) {
  console.log(user);
}

//for in loop
const loggedInUser = {
  name: "Max",
  age: 42,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName[propertyName]);
}

//while loopj
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log('Done!!')
