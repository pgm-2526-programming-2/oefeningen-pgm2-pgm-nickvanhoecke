const person = {
    firstName: "Nick",
    lastname: "Van Hoecke",
    age: 20
}

const firstNametest = person.firstName
const lastnametest = person.lastname
const agetest = person.age

// const {firstName, lastname, age} = person
const {firstName, age, gender = "Male"} = person
console.log(age, gender);



const options = {
    c: 20000,
    w: 3000,
    mod: "c8",
    b: undefined
}

const {c: cost, w: weight, mod: model, b: brand = "Citroen"} = options


const {w: altWeight, ...rest} = options

console.log(altWeight);












const song = {
    name: "Flowers",
    artist: "Miley"
}

const edit = {
    name: "7 Things"
}

function editSong(s, {name}) {
    s.name = name
}

editSong(song, edit)



