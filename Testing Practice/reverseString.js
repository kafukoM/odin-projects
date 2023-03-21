function reverseString(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Reverse the string
    return str.split('').reverse().join('');
}

module.exports = reverseString;