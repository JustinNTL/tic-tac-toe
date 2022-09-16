(function() {
  const gameBoard = (function() {
    const gameBoard = [];
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    const players = {};

    const openingDisplay = document.querySelector('[data-opening-display]');
    const modeDisplay = document.querySelector('[data-mode-display]');
    const pvpBtn = document.querySelector('[data-pvp-btn]');
    const pvaBtn = document.querySelector('[data-pva-btn]');
    const playerDisplay = document.querySelector('[data-player-display]');
    const player1 = document.querySelector('[data-player-1]');
    const player2 = document.querySelector('[data-player-2]');
    const startBtn = document.querySelector('[data-start-btn]');
    const tttGrid = document.querySelector('[data-ttt-grid]');
    const tttCell = document.querySelectorAll('[data-ttt-cell]'); //console.log([...tttCell])
    const winnerDisplay = document.querySelector('[data-winner-display]');
    const winnerMsg = document.querySelector('[data-winner-msg]');
    const restartBtn = document.querySelector('[data-restart-btn]');
    const xRound = 'x-turn';
    const oRound = 'o-turn';
    let xTurn;

    
    init();

    function init() {
      tttCell.forEach(cell => cell.addEventListener('click', turnController, { once : true }));
      xTurn = true;
      indicateRoundHover();
    }

    function render(cell, currentTurn) {
      cell.classList.add(currentTurn);
    }

    function turnController(e) {
      const xMark = 'x-mark';
      const oMark = 'o-mark';
      const cell = e.target;  
      let currentTurn = xTurn ? xMark : oMark;
      render(cell, currentTurn);
      xTurn = !xTurn;
      indicateRoundHover();
    }

    function indicateRoundHover() {
      tttGrid.classList.remove(xRound);
      tttGrid.classList.remove(oRound);
      if (xTurn) {
        tttGrid.classList.add(xRound);
      } else {
        tttGrid.classList.add(oRound);
      }
    } 

    function addPlayer() {
      
    }
   
    function checkWin() {

    }

  })()
})()

(function() {
  const displayController = (function() {})()
})()


// Code for player v player, v AI later/end
// take in user input for names, and choice of x/o 

// render x-o on click in cells
// set winning conditions array

// remember to look at rubric eg. :

/* if you only ever need ONE of something (gameBoard, displayController), 
use a module. If you need multiples of something (players!), 
create them with factories. */