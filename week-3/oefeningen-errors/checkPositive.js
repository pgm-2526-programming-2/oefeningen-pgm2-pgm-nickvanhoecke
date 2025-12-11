function checkPositive(value) {
  // TODO: Implementeer de functie
  if (value < 0) throw new RangeError("error value is smaller than 0");
  
}

console.log(checkPositive(-1));
