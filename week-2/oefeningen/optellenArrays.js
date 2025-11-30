// Schrijf een functie die twee arrays met getallen optelt. De functie moet een nieuwe array teruggeven met de som van de overeenkomstige getallen in de twee arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


function arraySum(arr1, arr2) {
    return arr1.map((num, index) => arr1[index] + arr2[index]);
};

const result = arraySum(array1, array2)
console.log(result);
