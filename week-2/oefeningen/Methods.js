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

const woordenAlsString = woorden.join("-")
console.log(woordenAlsString);


woorden.unshift("Hallo")
console.log(woorden);

woorden.sort();
console.log(woorden);

const woord3rdePositie = woorden.at(3-1)
console.log(woord3rdePositie);

function checkIfBeginsWithB(woorden, val) {
  return woorden.some(woord => woord[0] === val);
}
console.log(checkIfBeginsWithB(woorden, "b"));

function checkIfWoordIsLongerThan2(woorden) {
  return woorden.every(woord => woord.length > 2);
}
console.log(checkIfWoordIsLongerThan2(woorden));

const woorden4LettersOfMinder = woorden.filter((woord) => woord.length < 4); 
console.log(woorden4LettersOfMinder);














