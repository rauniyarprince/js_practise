const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

function handleClick(e) {
  const index = e.target.dataset.index;

  // prevent overwrite & stop game
  if (board[index] !== "" || !gameActive) return;

  // update board
  board[index] = currentPlayer;

  // show X or O
  e.target.textContent = currentPlayer;

  // ADD CLASS FOR COLOR
  e.target.classList.add(currentPlayer.toLowerCase());

  checkWinner();

  // switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  let winner = false;

  winPatterns.forEach(pattern => {
    const [a,b,c] = pattern;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
    }
  });

  if (winner) {
    statusText.textContent = `Player ${currentPlayer} Wins 🎉`;
    gameActive = false;
  } 
  else if (!board.includes("")) {
    statusText.textContent = "It's a Draw 😐";
    gameActive = false;
  }
}

//  RESTART FIXED
restartBtn.addEventListener('click', () => {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o"); // remove colors
  });
});