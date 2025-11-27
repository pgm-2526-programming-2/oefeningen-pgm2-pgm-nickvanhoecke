const student = Symbol("Yme")
const person = Symbol("Yme")

console.log(
    student, student.toString(), student.description, "|",
    person, person.toString(), person.description, "|",
    student === person);

const STATES = {
    LOADING: Symbol("Laden"),
    LOADED: Symbol("Laden")
}

console.log(STATES.LOADING === STATES.LOADED);
