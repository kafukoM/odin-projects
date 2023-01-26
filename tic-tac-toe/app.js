const btn = document.querySelector('.addPlayer');
const playerContainer = document.querySelector('.player-container');



const gameBoard = () => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let player1 = prompt("Player 1, please choose your symbol 'x' or 'o' ").toUpperCase();
    let player2 = player1 === 'X' ? 'O' : 'X';

    let currentPlayer = player1;

    playerContainer.innerHTML = `
    Player 1 Choice: ${player1}
    <br>
    Player 2 Choice: ${player2}
    `



    const placeMove = (x, y) => {
        //push player symbol to array index
        if (board[x][y] === '') {
            board[x][y] = currentPlayer;

            //render player symbol in DOM cell
            const cell = document.getElementById(`cell-${x}-${y}`);
            cell.innerHTML = currentPlayer;

            //check game status
            const state = checkState();
            if (state === `${player1} wins`) {
                alert(`${player1} wins!`);
            } else if (state === `${player2} wins`) {
                alert(`${player2} wins!`);
            } else if (state === 'tie') {
                alert('Tie!');
            }
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    };

    const checkState = () => {

        //check row win
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
                return board[i][0] + ' wins';
            }

            //check column win
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
                return board[0][i] + ' wins';
            }
        }

        //check diagonal
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
            return board[0][0] + ' wins';
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
            return board[0][2] + ' wins';
        }
        // check for a tie
        let emptySpaces = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    emptySpaces++;
                }
            }
        }
        if (emptySpaces === 0) {
            return 'tie';
        }

        // otherwise, the game is still in progress
        return 'in progress';
    };

    return { placeMove, checkState };
}


btn.addEventListener('click', () => {
    const newBoard = gameBoard();

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const x = cell.dataset.x;
            const y = cell.dataset.y;
            newBoard.placeMove(x, y);
        });
    });
})