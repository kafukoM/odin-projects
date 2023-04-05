const createPlayer = require('./player.js');
const createGameBoard = require('./board.js');

describe('createPlayer', () => {
    test('returns an object with the given name and game board', () => {
        const gameBoard = createGameBoard();
        const player = createPlayer('Player 1', gameBoard);
        expect(player.name).toBe('Player 1');
        expect(player.gameBoard).toBe(gameBoard);
    });

    test('has an empty array of attacks', () => {
        const gameBoard = createGameBoard();
        const player = createPlayer('Player 1', gameBoard);
        expect(player.attacks).toEqual([]);
    });

    describe('attack', () => {
        test('returns false if the coordinate has already been attacked', () => {
            const gameBoard = createGameBoard();
            const player = createPlayer('Player 1', gameBoard);
            const coordinate = { x: 0, y: 0 };
            gameBoard.receiveAttack(coordinate);
            const result = player.attack(coordinate);
            expect(result).toBe(false);
            expect(player.attacks).toEqual([coordinate]);
        });

        test('adds the coordinate to the attacks array and returns the result of receiveAttack', () => {
            const gameBoard = createGameBoard();
            const player = createPlayer('Player 1', gameBoard);
            const coordinate = { x: 0, y: 0 };
            const result = player.attack(coordinate);
            expect(result).toBeDefined();
            expect(player.attacks).toEqual([coordinate]);
        });
    });

    describe('randomAttack', () => {
        test('calls the attack method with a random coordinate', () => {
            const gameBoard = createGameBoard();
            const player = createPlayer('Player 1', gameBoard);
            const spy = jest.spyOn(player, 'attack');
            player.randomAttack();
            expect(spy).toHaveBeenCalled();
        });
    });
});