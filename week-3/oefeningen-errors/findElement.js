function findElement(arr, element) {
    if(!Array.isArray(arr)) throw new TypeError("Ongeldige invoer: arr moet een array zijn");
    if (arr.includes(element)) {
        return arr.indexOf(element)
    } else throw new Error("Element niet gevonden");
    
}

const fruit = ["appel", "Peer", "banaan"]

console.log(findElement("fruit", "banaan"));
