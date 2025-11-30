const woorden = [
  'mal',
  'snurkduif',
  'bromvlieg',
  'snottebel',
  'knotsgek',
  'pindakaas',
  'fluitketel',
  'smurfenmuts',
];
console.log(woorden);
console.log("===============================");

// Maak een string door alle elementen in de array te verbinden met een koppelteken.
const woordenAlsString = woorden.join("-")
console.log(woordenAlsString);
console.log("===============================");

// Voeg het woord “Hello” toe aan het begin van de array.
woorden.unshift("Hallo")
console.log(woorden);
console.log("===============================");

// Sorteer de array in oplopende volgorde.
woorden.sort();
console.log(woorden);
console.log("===============================");

// Haal het element op de derde positie in de array op.
const woord3rdePositie = woorden.at(3-1)
console.log(woord3rdePositie);
console.log("===============================");

// Controleer of ten minste één woord in de array begint met de letter “B”.
function checkIfBeginsWithB(woorden, val) {
  return woorden.some(woord => woord[0] === val);
}
console.log(checkIfBeginsWithB(woorden, "b"));
console.log("===============================");

// Controleer of alle woorden in de array meer dan twee letters hebben.
function checkIfWoordIsLongerThan2(woorden) {
  return woorden.every(woord => woord.length > 2);
}
console.log(checkIfWoordIsLongerThan2(woorden));
console.log("===============================");


// Filter de woorden die langer zijn dan vier letters uit de array.
const woorden4LettersOfMinder = woorden.filter((woord) => woord.length < 4); 
console.log(woorden4LettersOfMinder);
console.log("===============================");














