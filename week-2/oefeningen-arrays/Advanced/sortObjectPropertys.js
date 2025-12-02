function sorterenOpEigenschap(objecten, eigenschap) {
  objecten.sort((obj1, obj2) => {

    if (typeof obj1[eigenschap] === "number") {
      return obj1[eigenschap] - obj2[eigenschap];
    }


    const propertyOfObj1 = obj1[eigenschap].toUpperCase();
    const propertyOfObj2 = obj2[eigenschap].toUpperCase();

    if (propertyOfObj1 < propertyOfObj2) {
      return -1;
    }
    if (propertyOfObj1 > propertyOfObj2) {
      return 1;
    }
    return 0;
  });
  return objecten;
}

let objectenArray = [
  { naam: "Anna", leeftijd: 30 },
  { naam: "Bob", leeftijd: 25 },
  { naam: "Charlie", leeftijd: 35 },
];
let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, "naam");
console.log(gesorteerdOpNaam);

// Schrijf een functie die een array van objecten sorteert op basis van een eigenschap van het object.
