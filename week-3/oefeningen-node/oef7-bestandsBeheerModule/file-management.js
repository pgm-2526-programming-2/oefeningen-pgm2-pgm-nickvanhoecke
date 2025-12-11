const path = require("path")
const filesystemModule = require("fs")

function readAndWriteFile(newFile, fileText) {

const newFilePath = path.join(__dirname, newFile)
filesystemModule.writeFileSync(newFilePath, fileText)
console.log("file created at:", newFilePath);

const fileContent = filesystemModule.readFileSync(newFilePath, "utf8")
console.log("file content:", fileContent);
}

module.exports = {
    path,
    filesystemModule,
    readAndWriteFile,
}
