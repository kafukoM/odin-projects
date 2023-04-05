const Ship = require('./ship');

describe('Ship', () => {
    test('should initialize with the correct length and hits array', () => {
        const ship = Ship(3);
        expect(ship.length).toBe(3);
        expect(ship.hits).toEqual([false, false, false]);
    });

    test('should update hits array correctly when hit', () => {
        const ship = Ship(4);
        ship.hit(2);
        expect(ship.hits).toEqual([false, false, true, false]);
    });

    test('should correctly determine if the ship is sunk', () => {
        const ship = Ship(3);
        expect(ship.isSunk()).toBe(false);

        ship.hit(0);
        expect(ship.isSunk()).toBe(false);

        ship.hit(1);
        expect(ship.isSunk()).toBe(false);

        ship.hit(2);
        expect(ship.isSunk()).toBe(true);
    });
});