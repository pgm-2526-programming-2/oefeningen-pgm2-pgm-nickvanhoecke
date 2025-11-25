const global = "Waarde";

function globalFunc() {
  const global = "Waarde twee";
  console.log(global);
}

globalFunc();
console.log(global);

// Wat gebeurt er?: De const heeft twee keer een andere waarde