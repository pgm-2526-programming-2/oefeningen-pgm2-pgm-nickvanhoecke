const path = require("path")
const filesystemModule = require("fs")

const logPath = path.join(__dirname, "logboek.txt")

function createInfoMessage(message) {
    filesystemModule.appendFileSync(logPath, "[INFO]" + message + "\n")
}
function createWarningMessage(message) {
    filesystemModule.appendFileSync(logPath, "[WARNING]" + message + "\n")
} 
function createErrorMessage(error) {
    filesystemModule.appendFileSync(logPath, "[ERROR]" + error + "\n")
} 

module.exports = {
  createInfoMessage,
  createWarningMessage,
  createErrorMessage
};