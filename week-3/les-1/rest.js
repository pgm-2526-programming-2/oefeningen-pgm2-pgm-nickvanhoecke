// selecteer "de rest"
function sum(a, b, ...rest) {
    return a + b + rest.reduce((prev, curr) => prev + curr, 0)
}
console.log(sum(1, 2, 3, 4));
