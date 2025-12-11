function complexFunction(input) {
  let result = "5";

  const unknownVariable = " "
  result += unknownVariable;

  if (input > 0) {
  console.log("Input is positief");
  }

  result += input + "10";

  function nonExistentFunction() {
    console.log("this function does not exist")
  };

  let value = "Dit is een waarde";


  let num = parseInt(5);
  console.log(num);

  let divisionResult = input / 5;
  console.log(divisionResult);

  try {
    "hello".toUpperCase();
  } catch (error) {
    console.log(error.message);
  }

  const URI = encodeURI('https://example.com')
  decodeURI(URI);
  
  return result;
}

// Test de functie met een willekeurige invoer
const resultaat = complexFunction(5);
console.log(resultaat);