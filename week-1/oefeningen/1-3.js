// Eenvoudige functie

function greetings() {
    return "Hallo daar!";
}

console.log(greetings());


// Functie met parameters

function greetings(name) {
    return "Hallo " + name + "!";
}

console.log(greetings("Anna"))


// Standaard parameters

function greetings(name = "daar") {
    return "Hallo " + name + "!";
}

console.log(greetings())

