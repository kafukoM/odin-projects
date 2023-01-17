'use strict';

const btnX = document.querySelector('#x');
const btnO = document.querySelector('#o');
const squareGroup = document.querySelectorAll('.cell');

let valueX = '';
let valueO = '';



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