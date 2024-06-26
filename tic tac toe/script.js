let currentPlayer = 'X';
let moves = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(cellIndex) {
    if (gameActive && moves[cellIndex] === '') {
        moves[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (!moves.includes('')) {
            document.getElementById('message').innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i];
        if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    moves = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
