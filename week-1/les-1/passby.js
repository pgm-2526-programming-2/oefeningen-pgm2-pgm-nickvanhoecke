const name = "Nick" // primitief
const age = 20 // primitief
const isStudent = true // primitief
const hobbies = ["Gaming", "Watching shows"] // samengesteld of reference
const address = {
    street: "random street",
    number: 1
} // samengesteld of reference

let nickname = name
const interests = hobbies
const todos = interests

nickname = "Gamer"
interests.push("reading")

console.log(interests);
console.log(nickname);

console.log(interests, hobbies, todos);

let total = 0;


function addFiveToNumber(a = 5) {
    total = a + 5;
    console.log(a + 5);
}

addFiveToNumber(10)
console.log("Totaal: " + total);





function doubleNumber(num) {
    num = num * 2
    console.log("Binnen functie: " + num);
    
}

function doubleNumberWithReference(obj) {
    obj.number = obj.number * 2
    console.log("Binnen functie: " + obj.number);
}


let originalNumber = 5
let originalNumberAsReferenceType = {number:  5}


doubleNumber(originalNumber)
doubleNumberWithReference(originalNumberAsReferenceType)
console.log("Original number uit functie", originalNumber);
console.log("Original number uit functie", originalNumberAsReferenceType);


