(function() {
  const displayController = (function() {
    const openingDisplay = document.querySelector('[data-opening-display]');
    const pvpBtn = document.querySelector('[data-pvp-btn]');
    // const pvaBtn = document.querySelector('[data-pva-btn]'); TBD
    const playerDisplay = document.querySelector('[data-player-display]');
    const winnerDisplay = document.querySelector('[data-winner-display]');
    const startBtn = document.querySelector('[data-start-btn]');
    const restartBtn = document.querySelector('[data-restart-btn]');

    _init();

    function _init() {
      pvpBtn.addEventListener('click', _transitionPlayerDisplay);
      // pvaBtn.addEventListener('click', _transitionPlayerDisplay); TBD
      startBtn.addEventListener('click', _transitionOpeningDisplay);
      restartBtn.addEventListener('click', () => { 
        _transitionWinnerDisplay();
        _transitionOpeningDisplay();
      });
    }
    
    function _render(display) {
      switch (display) {
        case 'opening':
          if (Object.keys(playerController.players).length === 2) { // possible scope issue here in the playercontroller module, players is empty 
            if (openingDisplay.classList.contains('hide')) {
            openingDisplay.classList.remove('hide');
            } else {
            openingDisplay.classList.add('hide');
            }
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
      pvpBtn : pvpBtn,
      startBtn : startBtn,
      restartBtn : restartBtn,
      changeDisplay : changeDisplay
    }

  })()

const gameController = (function() {
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    const tttGrid = document.querySelector('[data-ttt-grid]');
    const tttCell = document.querySelectorAll('[data-ttt-cell]');
    const winnerMsg = document.querySelector('[data-winner-msg]');
    const xMark = 'x-mark';
    const oMark = 'o-mark';
    let xTurn;
    

    _init();

    function _init() {
      tttCell.forEach(cell => {
        cell.addEventListener('click', _controlTurn, { once : true })
      });
      xTurn = true;
      _indicateRoundHover();
      displayController.restartBtn.addEventListener('click', _wipeBoard)
    }

    function _render(cell, currentTurn) {
      cell.classList.add(currentTurn);
    }

    function _controlTurn(e) {
      const cell = e.target;  
      let currentTurn = xTurn ? xMark : oMark;
      _render(cell, currentTurn);
      if (_checkWin(currentTurn)) {
        winnerMsg.innerText = `${xTurn ? playerController.players.player1 : playerController.players.player2} Dominates!`;
        displayController.changeDisplay();
      } else if ([...tttCell].every(cell => cell.classList.contains(xMark) || cell.classList.contains(oMark))) {
        winnerMsg.innerText = `It's a Stalemate!`
        displayController.changeDisplay();
      }
      xTurn = !xTurn;
      _indicateRoundHover();
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

    function _wipeBoard() {
      tttCell.forEach(cell => {
        cell.classList.remove(xMark);
        cell.classList.remove(oMark);
        cell.removeEventListener('click', _controlTurn);
      })
    }

  })()

  const playerController = (function() {
    let players = {};
    const player1 = document.querySelector('[data-player-1]');
    const player2 = document.querySelector('[data-player-2]');

    _init();

    function _init() {
      displayController.pvpBtn.addEventListener('click', _wipePlayers);
      player1.addEventListener('keyup', _checkInput);
      player2.addEventListener('keyup', _checkInput);
      displayController.startBtn.addEventListener('click', _checkInput);
      displayController.restartBtn.addEventListener('click', _wipePlayers);
    }

    function _checkInput() {
      if (player1.value === '') {
        player1.classList.add('input-error');
      } else {
        player1.classList.remove('input-error');
      }
      if (player2.value === '') {
        player2.classList.add('input-error');
      } else {
        player2.classList.remove('input-error');
      }
      _addPlayers();
    }

    function _addPlayers() {
      players = {};
      players.player1 = player1.value;
      players.player2 = player2.value;
    }

    function _wipePlayers() {
      players = {};
      player1.value = '';
      player2.value = '';
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