
//console.log(firstName); // not hoisted
console.log(lastName); // hoisted but has no value yet this is like a box thats empty but hey at least the box exists
//console.log(age); // not hoisted
const firstName = "Nick";
var lastName = "Van Hoecke";
let age = 20;

showMessage(); // hoisted
//showAnotherMessage() // not hoisted
//showArrowMessage();  // not hoisted

function showMessage() {
  console.log("hello world");
}

// function expression
const showAnotherMessage = function () {
  console.log("Another world");
};

// arrow function
const showArrowMessage = () => {
  console.log("Arrow message!");
};

showAnotherMessage();
showArrowMessage()




