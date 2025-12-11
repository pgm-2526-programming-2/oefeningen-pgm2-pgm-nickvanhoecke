const { getContentFromFile } = require("../utils/file.utils");

function getQuotes(req, res) {
    try {
    res.json(getContentFromFile("../models/quotes.json"))
    } catch (error) {
        res.status(500);
        res.send("Er ging iets miss")
    }
}

function getQuotesById(req, res) {
    console.log(req.params, req.query);
    
    const { questionId } = req.params;
    const allQuotes = getContentFromFile("../models/quotes.json")
    const quoteWithId = allQuotes.find(quote => quote.id === questionId)
    res.json(quoteWithId)
}


module.exports = {
    getQuotes,
    getQuotesById
}