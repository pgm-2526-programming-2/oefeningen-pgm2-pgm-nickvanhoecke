// Je code hier
function mergeOptions({option1, option2}, {option3, option4}) {
const merged = {...{option1, option2}, ...{option3, option4}}
console.log(merged);
}

// or

// function mergeOptions(obj1, obj2) {
//     const {option1, option2} = obj1
//     const {option3, option4} = obj2
//     const merged = {
//     ...obj1,
//     ...obj2
//     }
//     console.log(merged);
// }

// Voorbeeldgebruik:
mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }