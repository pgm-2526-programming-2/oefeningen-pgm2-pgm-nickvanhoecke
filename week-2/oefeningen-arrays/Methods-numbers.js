const willekeurigeGetallen = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(willekeurigeGetallen);


//Filter de getallen groter dan 10 uit de array.
const filterRandomNumber10 = willekeurigeGetallen.filter((getal) => getal <= 10);
console.log(filterRandomNumber10);
console.log("===============================");


// Controleer of alle getallen in de array kleiner zijn dan 20.
function checkIfGetalIsLongerThan20(willekeurigeGetallen) {
  return willekeurigeGetallen.every(getal => getal < 20);
}
console.log(checkIfGetalIsLongerThan20(willekeurigeGetallen));
console.log("===============================");



// Maak een string door alle elementen in de array te verbinden met een spatie.
const willekeurigeGetallenString = willekeurigeGetallen.join(" ")
console.log(willekeurigeGetallenString);
console.log("===============================");




// Controleer of ten minste één getal in de array groter is dan 30.
function checkIfBiggerThan30(willekeurigeGetallen, val) {
  return willekeurigeGetallen.some(getal => getal > val);
}
console.log(checkIfBiggerThan30(willekeurigeGetallen, 30));
console.log("===============================");



// Verwijder het eerste element uit de array.
willekeurigeGetallen.shift()
console.log(willekeurigeGetallen);
console.log("===============================");


// Verwijder het laatste element uit de array.
const popRandomNumbers = willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);
console.log(popRandomNumbers);
console.log("===============================");


// Verdubbel elk getal in de array.
const mapRandomNumbers = willekeurigeGetallen.map(getal => getal * 2
)
console.log(mapRandomNumbers);
console.log("===============================");


// Voeg het getal 5 toe aan het einde van de array.
willekeurigeGetallen.push(5)
console.log(willekeurigeGetallen);
console.log("===============================");


// Tel alle getallen in de array op.
const reducedRandomNumber = willekeurigeGetallen.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
})
console.log(reducedRandomNumber);
console.log("===============================");

