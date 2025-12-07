// Operators

// > < === !==


// Spread en Rest operator

// ...


const numbers = [1, 2, 3]
console.log(numbers, ...numbers);


// Reden om te spreaden?
// 1. kopie maken van een ref datatype
const students = ["student 1", "student 2"]
students.push("student 3")
const friends = students

// [ [ 'student 1', 'student 2', 'student 3' ] ]
const people = [...students];
students.push("students 4")

console.log(friends); // zelfde link
console.log(students); // zelfde link
console.log(people); // copy




// 2. om arrays samen te voegen
const drinks = ["Pintje", "Jin", "Cocktail"]
const snacks = ["friekandel", "chips"]

const menu = [...drinks, "Cola", ...snacks, "pretzels"]
console.log(menu);


// 3. wanneer een methode geen arrays aanvaard
Math.max(3, 5, 7, 1, 2)
Math.max(...numbers)


// Dit werkt ook alemaal met objects
const car = {
    brand: "Citroen",
    model: "C8",
    year: 2011
}

const upgrade = {
    spoiler: true,
    extra: ["GPS", "Custom uitlaat"]
}

// car.upgrade = upgrade
// console.log(car);

// =

//   brand: 'Citroen',
//   model: 'C8',
//   year: 2011,
//   upgrade: { 
//      spoiler: true, 
//      extra: [ 'GPS', 'Custom uitlaat' ] }


const upgradeCar = {
    ...car,
    ...upgrade,
}

console.log(upgradeCar);

// =

//   brand: 'Citroen',
//   model: 'C8',
//   year: 2011,
//   spoiler: true,
//   extra: [ 'GPS', 'Custom uitlaat' ]




// Object keys advanced syntax
const a = "hallo"

const obj = {
    a
}

// a: a
// a: "hallo"
//korte schrijfwijze: a
