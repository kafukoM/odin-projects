require("dotenv").config();

const express = require("express");
const app = express();

const gamesRouter = require("./routes/gameRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/games", gamesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
