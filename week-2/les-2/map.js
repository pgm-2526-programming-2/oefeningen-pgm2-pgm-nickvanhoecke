
// VAT bij Europese webshop
// BTW bij Belgische webshop

// Instelling
const regionNotation = "btw";

const product = {
    price: 25,
    name: "GameBoy",
    [regionNotation]: 21
}

const productKeys = Object.keys(product)


product.color = "Red"
product.color = "Blue"
product[regionNotation] = 32

productKeys.length

const productMap = new Map(); 
productMap.set("price", 25)
productMap.set("name", "GameBoy")
productMap.set("color", "Red")
productMap.set("color", "Blue")
productMap.set(regionNotation, 20)

const productMapLength = productMap.size

console.log(product, productMap);

