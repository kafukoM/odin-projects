//const btnX = document.querySelector('#x');
//const btnO = document.querySelector('#o');
const squareGroup = document.querySelectorAll('.cell');

let squareIndex = 0;



function Player(name, playerChoice) {
    return {
        name,
        playerChoice,
        render() {
            console.log(`Player ${name} has chosen ${playerChoice} for game`);
        }
    }

}

const p1 = Player('marvin', 'X');


let gameBoard = {
    board: [
        ['X', 'O', 'X'],
        ['O', 'O', 'X'],
        ['X', 'O', 'O']
    ],
    getBoard: function(x, y) {
        return this.board[x][y];
    },

    defaultGrid: function() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                squareGroup[squareIndex].innerHTML = `${this.board[i][j]}`;
                squareIndex++;
            }
        }
    },

    playerFill: function() {
        squareGroup.forEach((square) => {
            square.addEventListener('click', () => {
                square.innerHTML = `${p1.playerChoice}`;
            })
        })
    }





}


gameBoard.playerFill();


/*
btnX.addEventListener('click', () => {
    btnX.setAttribute('class', 'clicked');
    valueX = btnX.getAttribute('value');
    btnO.removeAttribute('class');
    valueO = '';
});

btnO.addEventListener('click', () => {
    btnO.setAttribute('class', 'clicked');
    valueO = btnO.getAttribute('value');
    btnX.removeAttribute('class');

    valueX = '';
});


squareGroup.forEach((square) => {
    square.addEventListener('click', () => {
        if (valueX == 'X' && valueO == '') {
            square.innerHTML = `${valueX}`;
        } else if (valueO == 'O' && valueX == '') {
            square.innerHTML = `${valueO}`;
        }
    })
})
*/