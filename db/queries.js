const pool = require("./pool");

async function getAllGames() {
  const query = `
    SELECT 
      g.id AS game_id,
      g.title,
      g.release_date,
      ge.name AS genre,
      d.name AS developer,
      d.country AS developer_country
    FROM 
      games g
    LEFT JOIN 
      genres ge ON g.genre_id = ge.id
    LEFT JOIN 
      developers d ON g.developer_id = d.id;
  `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error fetching games list from db: ", error.message);
    throw error;
  }
}

async function getSingleGame(game_id) {
  query = "SELECT * FROM games WHERE id = $1";

  try {
    const result = await pool.query(query, [game_id]);
    return result.rows;
  } catch (error) {
    console.error("Error fetching game from db: ", error.message);
    throw error;
  }
}

async function updateGame(game_title, game_genre, game_id) {
  const query = `
    UPDATE games
    SET title = $1, genre_id = $2
    WHERE id = $3
    RETURNING *;
  `;

  try {
    const result = await pool.query(query, [game_title, game_genre, game_id]);
    return result.rows[0]; // Return the updated game
  } catch (error) {
    console.error("Error updating game from db: ", error.message);
    throw error;
  }
}

async function getAllGenres() {
  const query = "SELECT id, name FROM genres";

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error fetching genres from db: ", error.message);
    throw error;
  }
}

async function getAllDevelopers() {
  const query = "SELECT id, name FROM developers";

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error fetching developers from db: ", error.message);
    throw error;
  }
}

async function createGame(title, genre, developer, country, release_date) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    //Check if developer exists, if not insert it
    let developerResult = await client.query(
      "SELECT id from developers WHERE name = $1",
      [developer]
    );

    let developerId;

    if (developerResult.rows.length === 0) {
      const developerInsert = await client.query(
        "INSERT INTO developers (name, country) VALUES ($1, $2) RETURNING id",
        [developer, country]
      );
      developerId = developerInsert.rows[0].id;
    } else {
      developerId = developerResult.rows[0].id;
    }

    //Check if genre exists, if not insert it
    let genreResult = await client.query(
      "SELECT id FROM genres WHERE name = $1",
      [genre]
    );

    let genreId;
    if (genreResult.rows.length === 0) {
      const genreInsert = await client.query(
        "INSERT INTO genres (name) VALUES ($1) RETURNING id",
        [genre]
      );
      genreId = genreInsert.rows[0].id;
    } else {
      genreId = genreResult.rows[0].id;
    }

    // Insert the game into the games table
    const gameInsert = await client.query(
      "INSERT INTO games (title, genre_id, developer_id, release_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, genreId, developerId, release_date]
    );

    await client.query("COMMIT");

    return gameInsert.rows[0]; //Return inserted game
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error creating game: ", error.message);
    throw error;
  } finally {
    client.release();
  }
}

async function deleteGame(game_id) {
  try {
    await pool.query("DELETE FROM games WHERE id = $1", [game_id]);
  } catch (error) {
    console.error("Error deleting game from db: ", error.message);
    throw error;
  }
}

module.exports = {
  getAllGames,
  getSingleGame,
  updateGame,
  getAllGenres,
  getAllDevelopers,
  createGame,
  deleteGame,
};
