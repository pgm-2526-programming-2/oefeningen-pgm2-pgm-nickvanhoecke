function addOnlyNumbers(...rest) {
  console.log(
    "Er waren " + (rest.length) + " argumenten, de som van de getallen is " +
      rest.reduce((prev, curr) => {
        if (typeof curr === "number") {
          return prev + curr;
        } else {
            return prev;
      }
}, 0));
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.
