const express = require("express");
const app = express();
const { getQuotes } = require("./controllers/quotes.controller");
const quotesRoutor = require("./routes/quotes.routes");

const HOST = "localhost";
const PORT = 8080;

app.use("/api/", quotesRoutor);

app.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(error.message);
  }

  console.log(`Server is opgestart en draaiende op http:/${HOST}:${PORT}`);
});
