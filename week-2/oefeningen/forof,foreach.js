const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

numbersString = "Hallo";
for (const number of numbers) {
    numbersString += " " + number
}

console.log(numbersString);



const colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach((color, index) => {
    console.log(`The color on index:${index} is ${color}`);
});

console.log("===============================");


// Alternative: Not zero index based
colors.forEach((color, index) => {
    console.log(`The color on index:${index + 1} is ${color}`);
});
