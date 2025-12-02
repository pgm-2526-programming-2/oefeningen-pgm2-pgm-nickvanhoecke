const shoppingCart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],

  // Aangepaste methode om totale prijs te berekenen
  calculateTotal: function () {
    let total = 0;
    for (const item of this.items) {
        total += item.price
    }
    return total;
  },
};

const totalPrice = shoppingCart.calculateTotal();

console.log("Totale prijs van de winkelwagen:", totalPrice);

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart.items)
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart.items)
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart.items)
console.log("Namen en prijzen van items:", itemEntries);