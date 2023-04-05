function createShip(length, coordinates) {
    const Ship = {
        length: length,
        coordinates: coordinates,
        hits: new Array(length).fill(false), //Initially Fills each ship array element with false
        hit: function(coordinatesHit) {
            let index = coordinatesHit - this.coordinates
            this.hits[index] = true
            return this.isSunk()
        },
        isSunk: function() {
            this.hits.every((hit) => hit) //Returns true if each ship array element has been hit
        },
    }

    return Ship
}

module.exports = createShip