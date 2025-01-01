const { Router } = require("express");
const gamesController = require("../controllers/gamesController");

const gamesRouter = Router();

gamesRouter.get("/", gamesController.gamesListGet);

gamesRouter.get("/:gameId/update", gamesController.gameUpdateGet);

gamesRouter.post("/:gameId/update", gamesController.gameUpdatePost);

gamesRouter.get("/create", gamesController.gameCreateGet);

gamesRouter.post("/create", gamesController.gameCreatePost);

gamesRouter.get("/:gameId/delete", gamesController.gameDeleteGet);

module.exports = gamesRouter;
