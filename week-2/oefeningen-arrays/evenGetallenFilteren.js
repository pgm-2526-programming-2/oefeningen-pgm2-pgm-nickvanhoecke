function filterEvenGetallen(getallen) {
  // Implementeer de logica hier
  const filteredGetal = getallen.filter(getal => getal % 2 === 0)
  return filteredGetal
}


let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen);
console.log(evenGetallen); // geeft [8, 6, 10]


// Schrijf een functie die alle even getallen uit een array filtert en een nieuwe array teruggeeft met enkel de even getallen.