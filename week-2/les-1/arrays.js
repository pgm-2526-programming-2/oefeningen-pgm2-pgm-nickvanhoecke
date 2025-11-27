const games = ["Super Mario Bros", "Zelda", "N Game", "Pokemon"];
const favoriteGames = [
  {
    name: "Super Mario Bros",
    releaseYear: 1996,
  },
  {
    name: "Zelda",
    releaseYear: 1999,
  },
  {
    name: "N Game",
    releaseYear: 2002,
  },
];

const altGames = new Array();
Array.isArray(games); // true

const secondGame = games[1];
const altSecond = games.at(1);
const lastGame = games.at(-1); // games[length - 1]

const values = [
  "Nick",
  function () {
    console.log("Hello");
  },
];

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;

const stringArray = "[1, 2 , 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);

numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(stringArray, numbers, numbersString);

const students = ["Nick", "Mert", "yens"];
const people = ["Nick", "Mert", "yens"];

const teacher = "Adriaan";
const pgmDocent = "Adriaan";

console.log(teacher === pgmDocent); // true
console.log(students === people); // false

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return JSON.stringify(array1) === JSON.stringify(array2);
}

console.log(areArraysEqual(students, people));







const matrix = [
  ["O", "O", "O", "O"],
  ["O", "X", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
];

matrix[1][1];





const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}

colors.forEach((color) => {
  console.log(color);
});

colors.forEach(function (color) {
  console.log(color);
});

colors.push("purple");
colors.pop();
colors.unshift("Begin van array toevoegen");
colors.shift();







console.log("Numbers: " + numbers);
const doubleNumbers = numbers.map((value, index) => {
  if (value === 2) {
    return value;
  }

  return value * index;
});

console.log("Double numbers: " + doubleNumbers);

console.log("Double numbers as String: " + doubleNumbers.join("|"));

const numbersWithoutEight = doubleNumbers.filter((value) => {
  return value !== 8;
});

console.log(numbersWithoutEight);

numbers.some((number) => {
    return number === 8
})
numbers.some((number) => number === 8)

numbers.every((number) => {
    return number === 8
})








// Reduce 
// Van een array naar 1 getal te gaan (meestal som)

const sales = [4, 10, 6]

const totalSales = sales.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
})

// loop 1: 0 + 4 = 4
// loop 2: 4 + 10 = 14
// loop 3: 14 + 6 = 20

const products = [
    {name: "Shirt", price: 20 },
    {name: "Shoes", price: 50 },
    {name: "Hat", price: 15 },
]

const totalProductsPrice = products.reduce((prevReturnedPrice, productObj) => {
    return prevReturnedPrice + productObj.price
}
, 0)

console.log(totalProductsPrice);

