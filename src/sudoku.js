export class Sudoku{
  constructor(board) {
    this.board = board;
  }


  checkRow() {
    const desiredList = [1,2,3,4,5,6,7,8,9];
    let checkArra = this.board.slice();
    for(let i = 0; i < checkArra.length; i++){
      let sortArra = checkArra[i].slice().sort();
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
    const desiredList = [1,2,3,4,5,6,7,8,9];
    let checkArra = this.board.slice();
    for(let i = 0; i < checkArra.length; i++){
      let tempRow = [];
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

  checkThreeByThree(){
    let final = [];
    let desiredList = [1,2,3,4,5,6,7,8,9];
    let checkArra = this.board.slice();
    for(let i = 0; i < checkArra.length; i++){
      for(let j = 0; j < checkArra.length; j++)
      {
        final.push(checkArra[i][j]);
      }
    }
    let sortArra = final.sort();
    for(let j = 0; j < sortArra.length; j++){
      if(sortArra[j] != desiredList[j]){
        return false;
      }
    }
    return true;
  }

  checkNineByNine(){
    let final = [];
    const desiredList = [1,2,3,4,5,6,7,8,9];
    let checkArra = this.board.slice();
    let startingPoint = 0;
    let condition = startingPoint + 3;

    for(let k = 0; k < checkArra.length; k++){
      let tempRow = [];
      for(let i = startingPoint; i < condition; i++){
        for(let j = startingPoint; j < condition; j++){
          tempRow.push(checkArra[i][j]);
        }
      }
      final.push(tempRow)
      startingPoint += 3;
      condition += 3;
      if(condition == 12){
        startingPoint = 0
        condition -= 9
      }
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
  }

  completeCheck(){
    return (this.checkRow() && this.checkColumn() && this.checkNineByNine());
  }
}
