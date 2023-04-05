const createBoard = require('./board.js');
const createShip = require('./ship');

describe('Game Board', () => {
    let board;
    let ship;

    beforeEach(() => {
        board = createBoard(10);
        ship = createShip(3);
    });

    test('places ship on the board', () => {
        board.placeShip(ship, { x: 0, y: 0 }, true);

        expect(board.shipsArray).toContain(ship);
        expect(ship.coordinates).toEqual([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]);
    });

    test('throws error if ship exceeds board size', () => {
        expect(() => {
            board.placeShip(ship, { x: 8, y: 0 }, true);
        }).toThrow('Ship exceeds board size!');
    });

    test('throws error if ships overlap', () => {
        const ship1 = createShip(2);
        const ship2 = createShip(3);

        board.placeShip(ship1, { x: 0, y: 0 }, true);

        expect(() => {
            board.placeShip(ship2, { x: 0, y: 0 }, true);
        }).toThrow('Ships are overlapping');
    });

    test('registers missed attack', () => {
        board.receiveAttack({ x: 0, y: 0 });

        expect(board.missedAttacks).toContainEqual({ x: 0, y: 0 });
    });

    test('registers hit attack', () => {
        board.placeShip(ship, { x: 0, y: 0 }, true);
        board.receiveAttack({ x: 0, y: 0 });

        expect(ship.hits).toEqual([true, false, false]);
    });

    test('knows when all ships are not sunk', () => {
        const ship1 = createShip(2);
        const ship2 = createShip(3);

        board.placeShip(ship1, { x: 0, y: 0 }, true);
        board.placeShip(ship2, { x: 1, y: 0 }, true);

        expect(board.allShipsSunk()).toBe(false);
    });

    test('knows when all ships are sunk', () => {
        const ship1 = createShip(2);
        const ship2 = createShip(3);

        board.placeShip(ship1, { x: 0, y: 0 }, true);
        board.placeShip(ship2, { x: 1, y: 0 }, true);

        ship1.hits = [true, true];
        ship2.hits = [true, true, true];

        expect(board.allShipsSunk()).toBe(true);
    });
});