const express = require("express");
const { getQuotes, getQuotesById } = require("../controllers/quotes.controller");
const quotesRoutor = express.Router();

quotesRoutor.get("/quotes", getQuotes);
quotesRoutor.get("/quotes/:questionId", getQuotesById)
quotesRoutor.post("/quotes", (req, res) => {
  res.send("Post request");
});

module.exports = quotesRoutor;
