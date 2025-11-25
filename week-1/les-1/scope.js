const message = "Hey daar!"; //global scope

function sayHello() { // outer scope / parent
  const message = "Bye!"; 

  function say() { // inner scope / child
    const newMessage = "YOLO"; // inner scope / child
    console.log(message);  // outer scope / parent
  }

  console.log(newMessage); // error: newMessage only exists inside say() is not returned or logged 

  say(); // shows Bye! = log(message) in the func say
}

sayHello(); // Bye!
console.log(message); // Hey daar!



// const message = "Hey daar!"; 
//
// function sayHello() { 
//   const message = "Bye!";
//
//   function say() { 
//     const newMessage = "YOLO";
//     console.log(newMessage);
//     console.log(message);
//   } 
//
//   say();
// }
//
// sayHello();
// console.log(message);

