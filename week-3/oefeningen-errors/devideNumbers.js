function divideNumbers(num1, num2) {
if (num2 === 0) {throw new Error("Kan niet door nul delen");} 
const result = num1 / num2
return result
}

console.log(divideNumbers(5, 0));
