import { Router } from "express";
import {
  getAllHighscores,
  saveHighscore,
} from "../controllers/gameController.js";

const gameRouter = Router();

gameRouter.route("/leaderboard").get(getAllHighscores);
gameRouter.route("/save").post(saveHighscore);
// gameRouter.route("/:id").get(getSingleHighscores);

export default gameRouter;
