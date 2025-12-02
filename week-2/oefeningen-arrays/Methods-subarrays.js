const willekeurigeNamenArray = [
  ['Alice', 'Bob', 'Charlie'],
  ['David', 'Eva', 'Frank'],
  ['Grace', 'Hank', 'Ivy'],
  ['Jack', 'Kelly', 'Liam']
];
console.log(willekeurigeNamenArray);


// Maak een nieuwe array die alle subarrays flat maakt.
const flatNames = willekeurigeNamenArray.flat()
console.log(flatNames);
console.log("===============================");

// Verdubbel elk getal en maak een nieuwe array door alle subarrays te flatten.
const flatNamesDouble = flatNames.map(naam => naam + naam)
console.log(flatNamesDouble)
console.log("===============================");


// Verwijder het eerste element uit elke subarray.
const shiftRandomNames = willekeurigeNamenArray.map(naam => {
    naam.shift()
    return naam;
})

console.log(shiftRandomNames)
console.log("===============================");


// Verwijder het laatste element uit de array.
const popRandomNames = willekeurigeNamenArray.map(naam => {
    naam.pop()
    return naam;
})
console.log(popRandomNames)
console.log("===============================");