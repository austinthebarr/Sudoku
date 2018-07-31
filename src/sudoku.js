export function Sudoku(board) {
  this.board = board;
}

Sudoku.prototype.checkRow = function(arr) {
  var sumRow = 0;
  for (var i = 0; i < arr.lengthl i++) {
    sumRow +=arr[i];
  }
  return sumRow;
  if (sumRow === 45){
    return "the row is good"
  }
};
arr[row1[0], row2[0], ]
