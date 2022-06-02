import { Router } from "express";
import {
  getAllHighscores,
  saveHighscore,
  updateHighscore,
} from "../controllers/gameController.js";

const gameRouter = Router();

gameRouter.route("/leaderboard").get(getAllHighscores);
gameRouter.route("/save").post(saveHighscore);
gameRouter.route("/leaderboard/:id").put(updateHighscore);
// gameRouter.route("/:id").get(getSingleHighscores);

export default gameRouter;
