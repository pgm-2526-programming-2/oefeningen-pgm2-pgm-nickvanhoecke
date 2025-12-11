const {books} = require("./books.js")
const {loans, returnedBooks} = require("./loans.js")
const {members} = require("./members.js")
const {showBooks, showLoanedBooks, showLoans, showMembers} = require("./showInfo.js")
const {calcLoanedBooksMembers} = require("./calculateInfo.js")

returnedBooks(loans);

showBooks(books);
showMembers(members);
showLoans(loans, books, members)

const loansPerMember = calcLoanedBooksMembers(loans)
showLoanedBooks(loansPerMember, members)
