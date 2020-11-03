// Iterating through a nested array using a nested for...of() loop in JavaScript
const chessBoard = [
  ['WQR', 'WQN', 'WQB', 'WQ', 'WK', 'WKB', 'WKN', 'WKR'],
  ['WQRP', 'WQNP', 'WQBP', 'WQP', 'WKP', 'WKBP', 'WKNP', 'WKRP'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['BQRP', 'BQNP', 'BQBP', 'BQP', 'BKP', 'BKBP', 'BKNP', 'BKRP'],
  ['BQR', 'BQN', 'BQB', 'BQ', 'BK', 'BKB', 'BKN', 'BKR'],
];

for (i = 0; i < chessBoard.length; i++){
  for (let squareState of chessBoard){
    i++;
    console.log(`Rank ${i}: ${squareState}`);
  }
}