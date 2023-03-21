const calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero');
        }
        return num1 / num2;
    },
};

module.exports = calculator;