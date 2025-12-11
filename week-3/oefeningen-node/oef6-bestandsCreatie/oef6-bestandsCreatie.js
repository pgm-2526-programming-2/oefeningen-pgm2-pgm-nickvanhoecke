const path = require("path")
const filesystemModule = require("fs")


const newFilePath = path.join(__dirname, "nieuwbestand.txt")

filesystemModule.writeFileSync(newFilePath, "Hallo hoe is het met jou? Dit is een nieuw bestand aangemaakt met fs in js.")

console.log(newFilePath);
