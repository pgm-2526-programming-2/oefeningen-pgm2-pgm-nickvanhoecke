function calculateArea(width, height) {
    if (width <= 0 || height <= 0) throw new Error("Ongeldige afmetingen");
    const result = width * height
    return result
}

console.log(calculateArea(0, 0));
