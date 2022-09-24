(function() {
  const gameController = (function() {
    const gameBoard = []; // maybe find way to put nodelist tttcell into array with spread?
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    const tttGrid = document.querySelector('[data-ttt-grid]');
    const tttCell = document.querySelectorAll('[data-ttt-cell]');
    let xTurn;

    _init(); // make call start button and restart button here and clear the board of classes

    function _init() {
      tttCell.forEach(cell => cell.addEventListener('click', _controlTurn, { once : true }));
      xTurn = true;
      _indicateRoundHover();
    }

    function _render(cell, currentTurn) {
      cell.classList.add(currentTurn);
    }

    function _controlTurn(e) {
      const xMark = 'x-mark';
      const oMark = 'o-mark';
      const cell = e.target;  
      let currentTurn = xTurn ? xMark : oMark;
      _render(cell, currentTurn);
      xTurn = !xTurn;
      _indicateRoundHover();
      if (_checkWin(currentTurn)) {
        displayController.changeDisplay();
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

    return {
      
    };
    
  })()

  const displayController = (function() {
    const openingDisplay = document.querySelector('[data-opening-display]');
    const pvpBtn = document.querySelector('[data-pvp-btn]');
    // const pvaBtn = document.querySelector('[data-pva-btn]');
    const playerDisplay = document.querySelector('[data-player-display]');
    const winnerDisplay = document.querySelector('[data-winner-display]');
    const startBtn = document.querySelector('[data-start-btn]');
    const restartBtn = document.querySelector('[data-restart-btn]');
    const winnerMsg = document.querySelector('[data-winner-msg]');

    _init();

    function _init() {
      pvpBtn.addEventListener('click', _transitionPlayerDisplay);
      // pvaBtn.addEventListener('click', _transitionPlayerDisplay);
      startBtn.addEventListener('click', _transitionOpeningDisplay);
      restartBtn.addEventListener('click', () => { 
        _transitionWinnerDisplay();
        _transitionOpeningDisplay();
      });
    }
    
    function _render(display) {
      switch (display) {
        case 'opening':
          if (openingDisplay.classList.contains('hide')) {
            openingDisplay.classList.remove('hide');
          } else {
            openingDisplay.classList.add('hide');
          }
          break;
        case 'player':
          if (playerDisplay.classList.contains('show')) {
            playerDisplay.classList.remove('show');
          } else {
            playerDisplay.classList.add('show');
          }
          break;
        case 'winner':
          if (winnerDisplay.classList.contains('show')) {
            winnerDisplay.classList.remove('show');
          } else {
            winnerDisplay.classList.add('show');
          }
          break;
      }
    }

    function changeDisplay() {
      _transitionWinnerDisplay();
    }

    function _transitionOpeningDisplay() {
      const display = 'opening';
      _render(display);
    }

    function _transitionPlayerDisplay() {
      const display = 'player';
      _render(display);
    }

    function _transitionWinnerDisplay() {
      const display = 'winner';
      _render(display);
    }

    return {
      startBtn : startBtn,
      restartBtn : restartBtn,
      changeDisplay : changeDisplay
    }

  })()

  const playerController = (function() { // create factory within module since there are other related functions.., check for empty input values on click
    const players = {};                  // you can keep the object keys, but just remove the properties on restart
    const player1 = document.querySelector('[data-player-1]');
    const player2 = document.querySelector('[data-player-2]');

    _init();

    function _init() {
      displayController.startBtn.addEventListener('click', _addPlayers);
      displayController.restartBtn.addEventListener('click', _wipePlayers);
    }

    function _addPlayers() {
      players.player1 = player1.value;
      players.player2 = player2.value;
    }

    function _wipePlayers() {
      
    }

    return {
      players : players
    }

  })()

})()


// Code for player v player, v AI later/end
// take in user input for names, assumption that x will be player 1 and o will be player 2.

// remember to look at rubric eg. :

/* if you only ever need ONE of something (gameBoard, displayController), 
use a module. If you need multiples of something (players!), 
create them with factories. */