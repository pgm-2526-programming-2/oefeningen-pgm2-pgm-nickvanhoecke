// Je code hier
function printDetails(obj) {
    const {name, age = 25, gender = "Unknown"} = obj
    console.log(name, age, gender);
    
};

// or

// function printDetails({name, age = 25, gender = "Unknown"}) {
//     console.log(name, age, gender);
// };

// Voorbeeldgebruik:
printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown
