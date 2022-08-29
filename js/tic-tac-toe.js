(function() {
  const gameBoard = {
    gameboard: [],
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function() {
      const openingDisplay = document.querySelector('[data-opening-display]');
      const modeDisplay = document.querySelector('[data-mode-display]');
      const pvpBtn = document.querySelector('[data-pvp-btn]');
      const pvaBtn = document.querySelector('[data-pva-btn]');
      const playerDisplay = document.querySelector('[data-player-display]');
      const player1 = document.querySelector('[data-player-1]');
      const player2 = document.querySelector('[data-player-2]');
      const tttGrid = document.querySelector('[data-ttt-grid]');
      const tttCell = document.querySelector('[data-ttt-cell]');
      const winnerDisplay = document.querySelector('[data-winner-display]');
      const winnerMsg = document.querySelector('[data-winner-msg]');
      const restartBtn = document.querySelector('[data-restart-btn]');
    },
    bindEvents: function() {

    },
    render: function() {

    },

  }
  gameBoard.init();
})()

// some classes to use: .x-mark, .o-mark, .x-turn, .o-turn