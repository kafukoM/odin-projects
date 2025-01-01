const db = require("../db/queries");

async function gamesListGet(req, res) {
  try {
    const gamesList = await db.getAllGames();
    res.render("games-list", { games: gamesList });
  } catch (error) {
    console.error("Error retrieving games list: ", error.message);
    res.status(500).send("Server Error");
  }
}

async function gameUpdateGet(req, res) {
  try {
    const gameId = req.params.gameId;
    // Fetch the single game to edit
    const singleGame = await db.getSingleGame(gameId);

    // Fetch all genres for the dropdown
    const allGenres = await db.getAllGenres();

    // Fetch all developers for the publisher field
    const allDevelopers = await db.getAllDevelopers();

    console.log(singleGame);

    // Render the update-game template with all required data
    res.render("update-game", {
      singleGame: singleGame[0], // Send the first game object
      allGenres: allGenres,
      allDevelopers: allDevelopers,
    });
  } catch (error) {
    console.error("Error retrieving game: ", error.message);
    res.status(500).send("Server Error");
  }
}

async function gameUpdatePost(req, res) {
  try {
    const { title, genre } = req.body; // Form data
    const { gameId } = req.params;

    console.log("title form value: ", title);
    console.log("genre form value: ", genre);
    console.log("gameId: ", gameId);

    const updatedGame = await db.updateGame(title, genre, gameId);

    // Redirect to a relevant page or respond with the updated game details
    if (updatedGame) {
      console.log("Game updated successfully:", updatedGame);
      res
        .status(200)
        .json({ message: "Game updated successfully", game: updatedGame });
    } else {
      // Handle the case where no rows were updated
      res.status(404).send("Game not found or not updated.");
    }
  } catch (error) {
    console.error("Error updating game: ", error.message);
    res.status(500).send("Server Error");
  }
}

async function gameCreateGet(req, res) {
  // Fetch all genres for the dropdown
  const allGenres = await db.getAllGenres();

  res.render("create-game.ejs", {
    allGenres: allGenres,
  });
}

async function gameCreatePost(req, res) {
  const { title, genre, developer, country, release_date } = req.body;

  try {
    const newGame = await db.createGame(
      title,
      genre,
      developer,
      country,
      release_date
    );
    res.status(201).json({
      message: "Game created successfully",
      game: newGame,
    });
  } catch (error) {
    console.error("Error creating game: ", error.message);
    res.status(500).send("Server Error");
  }
}

async function gameDeleteGet(req, res) {
  const gameId = req.params.gameId;

  try {
    await db.deleteGame(gameId);
    res.status(201).json({
      message: "Game deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting game: ", error.message);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  gamesListGet,
  gameUpdateGet,
  gameUpdatePost,
  gameCreatePost,
  gameCreateGet,
  gameDeleteGet,
};
