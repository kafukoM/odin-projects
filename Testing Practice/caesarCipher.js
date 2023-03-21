// caesarCipher.js

const caesarCipher = (str, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strArr = str.split('');

    const shiftedArr = strArr.map(char => {
        if (!/[a-z]/i.test(char)) {
            return char;
        }

        const isUpperCase = char === char.toUpperCase();
        const charIndex = alphabet.indexOf(char.toLowerCase());
        const shiftedIndex = (charIndex + shift) % alphabet.length;
        const shiftedChar = alphabet[shiftedIndex];

        return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    });

    return shiftedArr.join('');
};

module.exports = caesarCipher;