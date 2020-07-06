const container = document.querySelector('.container');
const grids = document.querySelectorAll('.grid');
let gameOver = false;

// Method that holds the game board
const gameBoard = (() => {
  const board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];

    const winningCombos = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]  
    ];
})();

const Player = (symbol) => {
  let symbols = ["O", "X"];
  let player;

  const setSymbol = () => {
    if(symbol === "O") {
      player = symbols[0];
    }
    else if(symbol === "X") {
      player = symbols[1];
    }
    return player;
  };
  return {setSymbol}
};

const inputHandler = (() => {
  let playerTurn = 0;

  const checkWin = (playerData) => {
    for(let i = 0; i < grids.length - 1; i++)
    {
      // Horizontal O
      if(grids[0].textContent === 'O' && grids[1].textContent === 'O' && grids[2].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[3].textContent === 'O' && grids[4].textContent === 'O' && grids[5].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[6].textContent === 'O' && grids[7].textContent === 'O' && grids[8].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      // Horizontal X
      else if(grids[0].textContent === 'X' && grids[1].textContent === 'X' && grids[2].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[3].textContent === 'X' && grids[4].textContent === 'X' && grids[5].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[6].textContent === 'X' && grids[7].textContent === 'X' && grids[8].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      // Vertical O
      else if(grids[0].textContent === 'O' && grids[3].textContent === 'O' && grids[6].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[1].textContent === 'O' && grids[4].textContent === 'O' && grids[7].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[2].textContent === 'O' && grids[5].textContent === 'O' && grids[8].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      // Vertical X
      else if(grids[0].textContent === 'X' && grids[3].textContent === 'X' && grids[6].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[1].textContent === 'X' && grids[4].textContent === 'X' && grids[7].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[2].textContent === 'X' && grids[5].textContent === 'X' && grids[8].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      // Diagonal O
      else if(grids[0].textContent === 'O' && grids[4].textContent === 'O' && grids[8].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[2].textContent === 'O' && grids[4].textContent === 'O' && grids[6].textContent === 'O')
      {
        console.log("player " + playerData + " Wins");
      }
      // Diagonal X
      else if(grids[0].textContent === 'X' && grids[4].textContent === 'X' && grids[8].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }
      else if(grids[2].textContent === 'X' && grids[4].textContent === 'X' && grids[6].textContent === 'X')
      {
        console.log("player " + playerData + " Wins");
      }    
      else if(grids[0].textContent === 'O' && grids[2].textContent === 'O' && grids[5].textContent === 'O' && 
      grids[6].textContent === 'O') 
      {
        console.log("It's a draw");
      }   
      else if(grids[0].textContent === 'X' && grids[2].textContent === 'X' && grids[5].textContent === 'X' && 
      grids[6].textContent === 'X') 
      {
        console.log("It's a draw");
      }
    }
  };
  
  const drawToBoard = (playerA, playerB) => {
    for(let i = 0; i < grids.length; i++) {
      grids[i].addEventListener('click', () =>{
        if(grids[i].textContent === "" && playerTurn === 0){
          grids[i].textContent = playerA.setSymbol();
          checkWin(playerA.setSymbol());
          playerTurn = 1;
        }
        else if(grids[i].textContent === "" && playerTurn === 1){
          grids[i].textContent = playerB.setSymbol();
          checkWin(playerB.setSymbol());
          playerTurn = 0;
        }
      });
    }
  };

  return {drawToBoard, checkWin};

})();


function main() {
    const player1 = Player("O");
    const player2 = Player("X");
    inputHandler.drawToBoard(player1, player2);
}

main();
