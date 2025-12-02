function zijnObjectenIdentiek(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true
  } else {
  return false
  }
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true