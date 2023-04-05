function createPlayer(name, gameBoard) {
    const Player = {
        name: name,
        gameBoard: gameBoard,
        attacks: [],

        attack: function(coordinate) {
            // Check if the coordinate has already been attacked
            if (this.attacks.some((attack) => attack.x === coordinate.x && attack.y === coordinate.y)) {
                return false;
            }

            // Add the coordinate to the attacks array and call receiveAttack on the opponent's gameBoard
            this.attacks.push(coordinate);
            const result = this.gameBoard.receiveAttack(coordinate);

            return result;
        },

        randomAttack: function() {
            let x, y;
            do {
                // Generate random coordinates until a coordinate that hasn't been attacked is found
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (this.attacks.some((attack) => attack.x === x && attack.y === y));

            // Call the attack method on the generated coordinate
            const result = this.attack({ x, y });

            return result;
        }
    };

    return Player;
}

module.exports = createPlayer