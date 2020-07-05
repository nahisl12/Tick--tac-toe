const container = document.querySelector('.container');
const grids = document.querySelectorAll('.grid');

const gameBoard = (() => {
  board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];

  // winningCombos = [
  //   [1,2,3],
  //   [4,5,6],
  //   [7,8,9],
  //   [1,4,7],
  //   [2,5,8],
  //   [3,6,9],
  //   [1,5,9],
  //   [3,5,7]  
  // ];

  const drawBoard = () => {
    for(let i = 0; i < grids.length; i++) {
      grids[i].addEventListener('click', () =>{
        grids[i].textContent = i;
      });
    }
  };
  return {drawBoard};

})();

gameBoard.drawBoard();