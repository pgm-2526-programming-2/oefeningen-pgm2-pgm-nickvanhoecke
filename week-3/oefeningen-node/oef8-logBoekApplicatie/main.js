const {createErrorMessage, createInfoMessage, createWarningMessage} = require("./logboek")

try {
    const infoMessage = "dit is een informatief bericht voor het logboek"
    createInfoMessage(infoMessage)
} catch (error) {
    createErrorMessage(error)
}

try {
    const infoMessage = "dit is een waarshuwend bericht voor het logboek"
    createWarningMessage(infoMessage)
} catch (error) {
    createErrorMessage(error)
}