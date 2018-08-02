
import { Sudoku } from './../src/sudoku.js';
describe('Sudoku', function(){

  it('should test if checkRow works', function(){
    let board = new Sudoku([[4,3,5,2,6,9,7,8,1],
                           [6,8,2,5,7,1,4,9,3],
                           [1,9,7,8,3,4,5,6,2],
                           [8,2,6,1,9,5,3,4,7],
                           [3,7,4,6,8,2,9,1,5],
                           [9,5,1,7,4,3,6,2,8],
                           [5,1,9,3,2,6,8,7,4],
                           [2,4,8,9,5,7,1,3,6],
                           [7,6,3,4,1,8,2,5,9]])
    expect(board.checkRow()).toEqual(true);
  });

  it('board is inncorrect should fail', function(){
    let board = new Sudoku([[4,3,5,2,6,9,7,8,1],
                           [6,8,2,5,8,1,4,9,3],
                           [1,9,7,8,8,4,5,6,2],
                           [8,2,6,1,9,5,3,4,7],
                           [3,7,4,6,8,2,9,1,5],
                           [9,5,1,7,4,3,6,2,8],
                           [5,1,9,3,2,6,8,7,4],
                           [2,4,8,9,5,7,1,3,6],
                           [7,6,3,4,1,8,2,5,9]])
    expect(board.checkRow()).toEqual(false);
  });

  it('should fail sine board has string inputs', function(){
    let board = new Sudoku([[4,3,5,2,6,9,7,8,1],
                           [6,"a",2,5,8,1,4,9,3],
                           [1,9,7,8,8,4,5,6,2],
                           [8,2,6,1,9,5,"b",4,7],
                           [3,7,4,6,8,2,9,1,5],
                           [9,5,1,7,4,3,6,2,8],
                           [5,1,9,3,2,6,8,7,4],
                           [2,4,8,9,5,7,1,3,6],
                           [7,6,3,4,1,8,2,5,9]])
    expect(board.checkRow()).toEqual(false);
  });
  it('should check every columns which would fail', function(){
    let board = new Sudoku([[4,3,5,2,6,9,7,8,1],
                           [6,8,2,5,7,1,4,9,3],
                           [2,9,7,8,5,4,5,6,2],
                           [8,2,6,1,5,5,3,4,7],
                           [4,7,4,6,8,2,9,1,5],
                           [9,5,1,7,4,3,6,2,8],
                           [5,1,9,3,2,6,8,7,4],
                           [2,4,8,9,5,7,1,3,6],
                           [7,6,3,4,1,8,2,5,9]])
    expect(board.checkColumn()).toEqual(false);
  });
  it('should test if checkColumn works comes back true', function(){
    let board = new Sudoku([[4,3,5,2,6,9,7,8,1],
                           [6,8,2,5,7,1,4,9,3],
                           [1,9,7,8,3,4,5,6,2],
                           [8,2,6,1,9,5,3,4,7],
                           [3,7,4,6,8,2,9,1,5],
                           [9,5,1,7,4,3,6,2,8],
                           [5,1,9,3,2,6,8,7,4],
                           [2,4,8,9,5,7,1,3,6],
                           [7,6,3,4,1,8,2,5,9]])
    expect(board.checkRow()).toEqual(true);
  });
  it('should test if checkColumn comes back  with letters false', function(){
    let board = new Sudoku([[4,3,5,2,6,9,7,8,1],
                           [6,8,2,5,7,1,4,9,3],
                           [1,9,7,8,"a",4,5,6,2],
                           [8,2,6,1,9,5,3,4,7],
                           [3,7,4,6,8,2,9,1,5],
                           [9,5,1,7,4,3,6,2,8],
                           [5,1,9,3,2,6,8,7,4],
                           [2,4,8,9,5,7,'b',3,6],
                           [7,6,3,4,1,8,2,5,9]])
    expect(board.checkRow()).toEqual(false);
  });
  it('should test if checkColumn comes back false', function(){
    let board = new Sudoku([[1,3,5,2,6,9,7,8,1],
                           [1,8,2,5,7,1,4,9,3],
                           [1,9,7,8,3,4,5,6,2],
                           [1,2,6,1,9,5,3,4,7],
                           [1,7,4,6,8,2,9,1,5],
                           [1,5,1,7,4,3,6,2,8],
                           [1,1,9,3,2,6,8,7,4],
                           [1,4,8,9,5,7,1,3,6],
                           [1,6,3,4,1,8,2,5,9]])
    expect(board.checkRow()).toEqual(false);
  });
  it('should test if checkColumn works comes back as true', function(){
    let board = new Sudoku([[8,6,1,7,9,4,3,5,2],
                           [3,5,2,1,6,8,7,4,9],
                           [4,9,7,2,5,3,1,8,6],
                           [2,1,8,9,7,5,6,3,4],
                           [6,7,5,3,4,1,9,2,8],
                           [9,3,4,6,8,2,5,1,7],
                           [5,2,6,8,1,9,4,7,3],
                           [7,4,3,5,2,6,8,9,1],
                           [1,8,9,4,3,7,2,6,5]])
    expect(board.checkRow()).toEqual(true);
  });
  // it('THREE  BY THREE', function(){
  //   let board = new Sudoku([[8,6,1],
  //                          [3,5,2],
  //                          [4,9,7]])
  //   expect(board.checkThreeByThree()).toEqual(true);
  // });
  // it('THREE  BY THREE will fail', function(){
  //   let board = new Sudoku([[8,9,1],
  //                          [3,5,2],
  //                          [4,9,7]])
  //   expect(board.checkThreeByThree()).toEqual(false);
  // });
  it('test', function(){
    let board = new Sudoku([[8,6,1,7,9,4,3,5,2],
                           [3,5,2,1,6,8,7,4,9],
                           [4,9,7,2,5,3,1,8,6],
                           [2,1,8,9,7,5,6,3,4],
                           [6,7,5,3,4,1,9,2,8],
                           [9,3,4,6,8,2,5,1,7],
                           [5,2,6,8,1,9,4,7,3],
                           [7,4,3,5,2,6,8,9,1],
                           [1,8,9,4,3,7,2,6,5]])
    expect(board.checkThreeByThree()).toEqual(true);
  });


});
