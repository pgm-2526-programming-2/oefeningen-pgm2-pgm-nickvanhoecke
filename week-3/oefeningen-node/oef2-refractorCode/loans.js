const loans = [];

// Uitleningen uitvoeren
loans.push({
  bookId: 1,
  memberId: 101,
  dueDate: "2023-05-01",
  returned: false,
});
loans.push({
  bookId: 2,
  memberId: 102,
  dueDate: "2023-04-15",
  returned: false,
});
loans.push({
  bookId: 3,
  memberId: 103,
  dueDate: "2023-06-01",
  returned: false,
});

function returnedBooks() {
// Simuleer enkele boeken die zijn teruggebracht
loans[0].returned = true;
loans[2].returned = true;
}

module.exports = {
    returnedBooks,
    loans
}