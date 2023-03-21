const capitalize = require('./capitalize')
const reverseString = require('./reverseString')
const calculator = require('./calculator')
const caesarCipher = require('./caesarCipher')
const analyzeArray = require('./analyzeArray');


// capitalize.test.js
test('first letter is capital', () => {
    expect(capitalize('marvin')).toMatch('Marvin')
})

test('invalid input', () => {
    expect(() => {
        capitalize(1)
    }).toThrow('Please enter a valid string')
})

test('invalid input', () => {
    expect(() => {
        capitalize('')
    }).toThrow('String is empty')
})

// reversString.test.js
describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(reverseString('hello')).toEqual('olleh')
        expect(reverseString('world')).toEqual('dlrow')
        expect(reverseString('12345')).toEqual('54321')
    })

    it('should throw an error if input is not a string', () => {
        expect(() => reverseString(123)).toThrow('Input must be a string')
        expect(() => reverseString(null)).toThrow('Input must be a string')
        expect(() => reverseString(undefined)).toThrow('Input must be a string')
        expect(() => reverseString({})).toThrow('Input must be a string')
        expect(() => reverseString([])).toThrow('Input must be a string')
        expect(() => reverseString(() => {})).toThrow('Input must be a string')
    })

    it('should return an empty string if input is an empty string', () => {
        expect(reverseString('')).toEqual('')
    });
});


// calculator.test.js
describe('calculator', () => {
    describe('add', () => {
        it('should add two numbers', () => {
            expect(calculator.add(1, 2)).toEqual(3);
            expect(calculator.add(5, -2)).toEqual(3);
            expect(calculator.add(-10, -5)).toEqual(-15);
        });
    });

    describe('subtract', () => {
        it('should subtract two numbers', () => {
            expect(calculator.subtract(5, 2)).toEqual(3);
            expect(calculator.subtract(5, -2)).toEqual(7);
            expect(calculator.subtract(-10, -5)).toEqual(-5);
        });
    });

    describe('multiply', () => {
        it('should multiply two numbers', () => {
            expect(calculator.multiply(2, 3)).toEqual(6);
            expect(calculator.multiply(5, -2)).toEqual(-10);
            expect(calculator.multiply(-10, -5)).toEqual(50);
        });
    });

    describe('divide', () => {
        it('should divide two numbers', () => {
            expect(calculator.divide(6, 2)).toEqual(3);
            expect(calculator.divide(-10, -5)).toEqual(2);
            expect(calculator.divide(10, 5)).toEqual(2);
        });

        it('should throw an error if the second number is zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
        });
    });
});


// caesarCipher.test.js


describe('caesarCipher', () => {


    it('should handle punctuation', () => {
        expect(caesarCipher('Hello, World!', 7)).toEqual('Olssv, Dvysk!');
        expect(caesarCipher('!!!test!!!', 3)).toEqual('!!!whvw!!!');
    });
});


// analyzeArray.test.js
describe('analyzeArray', () => {
    test('returns the correct average, min, max, and length for an array of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expected = {
            average: 3,
            min: 1,
            max: 5,
            length: 5
        };
        expect(analyzeArray(numbers)).toEqual(expected);
    });

    test('returns the correct average, min, max, and length for an array with negative numbers', () => {
        const numbers = [-3, -2, -1, 0, 1, 2, 3];
        const expected = {
            average: 0,
            min: -3,
            max: 3,
            length: 7
        };
        expect(analyzeArray(numbers)).toEqual(expected);
    });

    test('returns the correct average, min, max, and length for an array with repeating numbers', () => {
        const numbers = [1, 1, 1, 1, 1];
        const expected = {
            average: 1,
            min: 1,
            max: 1,
            length: 5
        };
        expect(analyzeArray(numbers)).toEqual(expected);
    });

    test('returns the correct average, min, max, and length for an array with a single number', () => {
        const numbers = [4];
        const expected = {
            average: 4,
            min: 4,
            max: 4,
            length: 1
        };
        expect(analyzeArray(numbers)).toEqual(expected);
    })

})