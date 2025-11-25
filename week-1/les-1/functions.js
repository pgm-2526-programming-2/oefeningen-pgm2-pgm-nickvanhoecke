// Oefening: multiply, division.

function sum(a = 0, b = 0) {
  return a + b;
}

function multiply(a = 0, b = 0) {
  return a * b;
}

function division(a = 0, b = 0) {
  return a / b;
}

function subtraction(a = 0, b = 0) {
  return a - b;
}

sum(5, 5)

// Oefening: Maak een functie showCalculation die 3
// parameters heeft. 2 getallen en een van onze functies

function showCalculation(a = 0, b = 0, calculate = sum) {
  console.log(calculate(a, b));
}


showCalculation(5, 5, multiply);
showCalculation(5, 5, division);
showCalculation(5, 5, sum);
showCalculation(5, 5, subtraction);
showCalculation();

// =============================================================


const name = "Nick";
const divisions = () => {};
const multiplier = function () {};

function selectRandomStudent(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const age = 21;
const students = ["Yme", "Arne", "Mert"];

console.log(sum(age, 10));
console.log(20);
console.log(selectRandomStudent(students));

function showMessage(message) {
  console.log(`Answer Checker Message`, message);
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback("✅");
    return true;
  }

  callback("❌");
  return false;
}

checkAnswer("Ja", "Oplossing", showMessage);


