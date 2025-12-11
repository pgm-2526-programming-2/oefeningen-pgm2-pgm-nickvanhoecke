function calcLoanedBooksMembers(loans) {
// Bereken het aantal uitgeleende boeken per lid
const loansPerMember = {};
loans.forEach((loan) => {
  loansPerMember[loan.memberId] = (loansPerMember[loan.memberId] || 0) + 1;
});
return loansPerMember
}

module.exports = {
    calcLoanedBooksMembers,
}