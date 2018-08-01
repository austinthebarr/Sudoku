export class Sudoku{
  constructor(board) {
    this.board = board;
  }


  checkRow() {
    let desiredList = [1,2,3,4,5,6,7,8,9];
    let checkArra = this.board.slice();
    for(let i = 0; i < checkArra.length; i++){
      let sortArra = checkArra[i].sort();
      for(let j = 0; j < sortArra.length; j++)
      {
        if(sortArra[j] != desiredList[j]){
          return false;
        }
      }
    }
    return true;
  };

    checkColumn() {
    let final = [];
    let desiredList = [1,2,3,4,5,6,7,8,9];
    let checkArra = this.board.slice();
    for(let i = 0; i < checkArra.length; i++){
      let tempRow = []
      for(let j = 0; j < checkArra.length; j++){
        tempRow.push(this.board[j][i]);
      }
      final.push(tempRow);
    }
    for(let i = 0; i < checkArra.length; i++){
      let sortArra = final[i].sort();
      for(let j = 0; j < sortArra.length; j++)
      {
        if(sortArra[j] != desiredList[j]){
          return false;
        }
      }
    }
    return true;
  };

}
