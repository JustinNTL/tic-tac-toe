(function() {
  const gameBoard = {
    gameboard: [],
    winningSequences: [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ],
    _init: function() {
      this._cacheDom();
      this._bindEvents();
      console.log(this.winningSequences[0]);
    },
    _cacheDom: function() {
      const openingDisplay = document.querySelector('[data-opening-display]');
      const modeDisplay = document.querySelector('[data-mode-display]');
      const pvpBtn = document.querySelector('[data-pvp-btn]');
      const pvaBtn = document.querySelector('[data-pva-btn]');
      const playerDisplay = document.querySelector('[data-player-display]');
      const player1 = document.querySelector('[data-player-1]');
      const player2 = document.querySelector('[data-player-2]');
      const startBtn = document.querySelector('[data-start-btn]');
      const tttGrid = document.querySelector('[data-ttt-grid]');
      const tttCell = document.querySelector('[data-ttt-cell]');
      const winnerDisplay = document.querySelector('[data-winner-display]');
      const winnerMsg = document.querySelector('[data-winner-msg]');
      const restartBtn = document.querySelector('[data-restart-btn]');
    },
    _bindEvents: function() {

    },
    _render: function() {

    },
    _createPlayers: function(player1, player2) {
      let players = {};

    }
  }
  gameBoard._init();
})()

// some classes to use: .x-mark, .o-mark, .x-turn, .o-turn

// Code for player v player, v AI later/end
// take in user input for names, and choice of x/o 

// render x-o on click in cells
// set winning conditions array

// remember to look at rubric eg. :

/* if you only ever need ONE of something (gameBoard, displayController), 
use a module. If you need multiples of something (players!), 
create them with factories. */

/* (function() {
  const gameBoard = () => {
    const gameBoard = [];
    const winningSequences = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    const openingDisplay = document.querySelector('[data-opening-display]');
    const modeDisplay = document.querySelector('[data-mode-display]');
    const pvpBtn = document.querySelector('[data-pvp-btn]');
    const pvaBtn = document.querySelector('[data-pva-btn]');
    const playerDisplay = document.querySelector('[data-player-display]');
    const player1 = document.querySelector('[data-player-1]');
    const player2 = document.querySelector('[data-player-2]');
    const startBtn = document.querySelector('[data-start-btn]');
    const tttGrid = document.querySelector('[data-ttt-grid]');
    const tttCell = document.querySelector('[data-ttt-cell]');
    const winnerDisplay = document.querySelector('[data-winner-display]');
    const winnerMsg = document.querySelector('[data-winner-msg]');
    const restartBtn = document.querySelector('[data-restart-btn]');
  }
})() */