function addProperty(OGobj, newprop, newvalue) {
    return {
        ...OGobj,
        [newprop]: newvalue
    }
}

const originalObject = { name: "Alice" };

const updatedObject = addProperty(originalObject, "age", 25);

console.log(updatedObject); // Output: { name: 'Alice', age: 25 }
