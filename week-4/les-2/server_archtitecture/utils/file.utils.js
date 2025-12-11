const filesystemModule = require("fs")
const pathModule = require("path")

function getContentFromFile(File) {
    try {
        const pathOfFile = pathModule.join(__dirname, File)
        const fileContent = filesystemModule.readFileSync(pathOfFile, "utf8")
        return JSON.parse(fileContent)
    } catch (error) {
        throw new Error()
    }
}

// console.log(getContentFromFile("../models/quotes.json")); // het werkt


module.exports = {
    getContentFromFile
}