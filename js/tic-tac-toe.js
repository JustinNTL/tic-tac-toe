(function() {
  const gameBoard = (function() {
    const gameBoard = [];
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    const startBtn = document.querySelector('[data-start-btn]');
    const tttGrid = document.querySelector('[data-ttt-grid]');
    const tttCell = document.querySelectorAll('[data-ttt-cell]');
    const winnerMsg = document.querySelector('[data-winner-msg]');
    const restartBtn = document.querySelector('[data-restart-btn]');
    let xTurn;
    let displayChange;

    _init();

    function _init() {
      tttCell.forEach(cell => cell.addEventListener('click', _turnController, { once : true }));
      xTurn = true;
      _indicateRoundHover();
    }

    function _render(cell, currentTurn) {
      cell.classList.add(currentTurn);
    }

    function _turnController(e) {
      const xMark = 'x-mark';
      const oMark = 'o-mark';
      const cell = e.target;  
      let currentTurn = xTurn ? xMark : oMark;
      _render(cell, currentTurn);
      xTurn = !xTurn;
      _indicateRoundHover();
      if (_checkWin(currentTurn)) {
        displayChange = 'showWinnerDisplay';
        indicateDisplayChange(displayChange);
      } 
    }

    function _indicateRoundHover() {
      const xRound = 'x-turn';
      const oRound = 'o-turn';
      tttGrid.classList.remove(xRound);
      tttGrid.classList.remove(oRound);
      if (xTurn) {
        tttGrid.classList.add(xRound);
      } else {
        tttGrid.classList.add(oRound);
      }
    }

    function _checkWin(currentTurn) {
      return winningSequences.some(sequence => {
        return sequence.every(index => {
          return tttCell[index].classList.contains(currentTurn);
        });
      });
    }

    function indicateDisplayChange(displayChange) {
      return displayChange;    
    }

    return {
      indicateDisplayChange : indicateDisplayChange
    };
    
  })()

  const displayController = (function() {
    const openingDisplay = document.querySelector('[data-opening-display]');
    const modeDisplay = document.querySelector('[data-mode-display]');
    const playerDisplay = document.querySelector('[data-player-display]');
    const winnerDisplay = document.querySelector('[data-winner-display]');

    function showWinnerDisplay() {
      if (gameBoard.indicateDisplayChange() === 'showWinnerDisplay') {
        console.log('hello');
      }
    }
    
  })()

  const playerController = (function() {
    const players = {};
    const pvpBtn = document.querySelector('[data-pvp-btn]');
    const pvaBtn = document.querySelector('[data-pva-btn]');
    const player1 = document.querySelector('[data-player-1]');
    const player2 = document.querySelector('[data-player-2]');

    
    function addPlayer() {
      
    }

  })()

})()


// Code for player v player, v AI later/end
// take in user input for names, and choice of x/o 

// render x-o on click in cells
// set winning conditions array

// remember to look at rubric eg. :

/* if you only ever need ONE of something (gameBoard, displayController), 
use a module. If you need multiples of something (players!), 
create them with factories. */