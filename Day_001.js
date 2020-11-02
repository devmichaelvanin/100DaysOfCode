const gameBoard = [
  [O, X, 0],
  [X, X, 0],
  [X, O, X]
];

for (i = 0; i < gameBoard.length; i++){
  let row = gameBoard[i];
  for (j = 0; j < row.length){
    console.log("Row: ", i + 1 + ": ", j);
  }
}