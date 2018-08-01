export function Sudoku(board) {
  this.board = board;
}
var desiredList = [1,2,3,4,5,6,7,8,9];

Sudoku.prototype.checkRow = function() {
  console.log(this.board)
  var checkArra = this.board.slice();
  console.log(checkArra);
  for(var i = 0; i < checkArra.length; i++){
    var sortArra = checkArra[i].sort();
    console.log(sortArra);
    for(var j = 0; j < sortArra.length; j++)
    {
      if(sortArra[j] != desiredList[j]){
        return false;
      }
    }
  }
  return true;
};
