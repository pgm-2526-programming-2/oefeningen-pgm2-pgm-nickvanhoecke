function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

console.log(checkAge(20));



function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // Werkt deze functie nog zoals verwacht?
  return confirm("Did parents allow you?");
}

console.log(checkAge(20));



// beide functies werken boven 18 onder 18 geven ze allebei ReferenceError: confirm is not defined