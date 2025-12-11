function showBooks(books) {
// Weergave van boeken
console.log("Boekenlijst:");
console.log("============");
books.forEach((book) =>
  console.log(
    `ID: ${book.id}, Titel: ${book.title}, Auteur: ${book.author}, Genre: ${book.genre}`
  )
);
}

function showMembers(members) {
// Weergave van leden
console.log("\nLedeninformatie:");
console.log("=================");
members.forEach((member) =>
  console.log(
    `ID: ${member.id}, Naam: ${member.name}, Lidmaatschap: ${member.membershipType}`
  )
);
}

function showLoans(loans, books, members) {
// Weergave van uitleningen
console.log("\nUitleningen:");
console.log("============");
loans.forEach((loan) => {
  const book = books.find((b) => b.id === loan.bookId);
  const member = members.find((m) => m.id === loan.memberId);
  console.log(
    `Boek: ${book.title}, Lid: ${member.name}, Vervaldatum: ${loan.dueDate}, Geretourneerd: ${loan.returned}`
  );
});
}

function showLoanedBooks(loansPerMember, members) {
// Weergave van het aantal uitgeleende boeken per lid
console.log("\nAantal uitgeleende boeken per lid:");
console.log("==================================");
Object.keys(loansPerMember).forEach((memberId) => {
  const member = members.find((m) => m.id == memberId);
  console.log(`${member.name}: ${loansPerMember[memberId]} boeken`);
});
}

module.exports = {
    showBooks,
    showLoanedBooks,
    showLoans,
    showMembers
}