const filesystemModule = require("fs")
const pathModule = require("path")

const leesBestandPath = pathModule.join(__dirname, "leesbestand.txt")

const fileContent = filesystemModule.readFileSync(leesBestandPath, "utf8")

console.log(fileContent);
