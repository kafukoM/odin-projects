function createBoard(size) {
    const Board = {
        size: size,
        shipsArray: [],
        missedAttacks: [],
        placeShip: function(ship, coordinates, isHorizontal) {

            const { length } = ship

            //Determine end position of ship
            const endCoordinate = isHorizontal ? { x: coordinates.x + length - 1, y: coordinates.y } : { x: coordinates.x, y: coordinates.y + length - 1 }

            //Check if ship fits game board
            if (endCoordinate.x >= size || endCoordinate.y >= size) {
                throw new Error('Ship exceeds board size!')
            }

            // Check that the ship does not overlap with any other ship
            for (const existingShip of this.shipsArray) {
                const overlappingCoordinates = ship.coordinates.filter((coordinate) =>
                    existingShip.coordinates.some(
                        (existingCoordinate) =>
                        existingCoordinate.x === coordinate.x && existingCoordinate.y === coordinate.y
                    )
                );

                if (overlappingCoordinates.length > 0) {
                    throw new Error('Ships are overlapping')
                }

            }

            //Add new ship object to existing array of ships
            this.shipsArray.push(ship)
            ship.coordinates = coordinates
        },

        receiveAttack: function(attackCoordinates) {
            //find ship whose coordinates match attack coordinates
            const hitShip = this.shipsArray.find((ship) =>
                ship.coordinates.some((coordinate) =>
                    coordinate.x === attackCoordinates.x && coordinate.y === attackCoordinates.y
                )
            )

            //set coordinates of ship hit to true
            if (hitShip) {
                hitShip.hits[attackCoordinates.x - hitShip.coordinates[0].x][attackCoordinates.y - hitShip.coordinates[0].y] = true
            }
        },

        //check if all ships sunk
        allShipsSunk: () => this.shipsArray.every((ship) => ship.isSunk.includes(ship)),

    }

    return Board
}

module.exports = createBoard