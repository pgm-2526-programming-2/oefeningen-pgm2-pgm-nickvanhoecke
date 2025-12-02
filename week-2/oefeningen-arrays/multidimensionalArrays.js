const matrix = [
  ["5", "3", "2"],
  ["9", "4", "8"],
];

function getNumberOutMatrix(row, column) {
  if (row > matrix.length || column > matrix.length + 1) {
    return;
  }
  console.log(matrix[row - 1][column - 1]);
}

getNumberOutMatrix(2, 3);
