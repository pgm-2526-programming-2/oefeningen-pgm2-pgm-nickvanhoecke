const express = require("express");
const myServer = express();
const filesystemModule = require("fs")
const pathModule = require("path")

const PORT = 3000;
const HOST = "localhost";

function getContentFromFile(FileNameAndExtension) {
    const fileContentAsString = filesystemModule.readFileSync(pathModule.join(__dirname, FileNameAndExtension))
    return JSON.parse(fileContentAsString)
}

function getCurrentTime() {
  const now = new Date();
  return `${
    now.getUTCHours() + 1
  }:${now.getUTCMinutes()} `;
}

myServer.get("/api", (request, response) => {
  console.log("Verzoek op de server", request.body);
  response.status(200);
//   response.send(`(Antwoord van de server) + De tijd op de server bedraagd: ${getCurrentTime()}`);
  response.json({
    name: "Nick",
    requestTime: getCurrentTime()
  });
});


// Maak een /api/recipes endpoint! Geef hier alle recepten terug!
myServer.get("/api/recipes", (request, response) => {
response.json(getContentFromFile("recipes.json"))
});



myServer.listen(PORT, HOST, () => {
  console.log(`Server staat aan op http://${HOST}:${PORT}`); // afsluiten: ctrl C
});

console.log("Server bestand");
