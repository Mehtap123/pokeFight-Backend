import { Router } from "express";
import {
  getAllHighscores,
  saveHighscore,
  updateHighscore,
  deleteHighscore,
} from "../controllers/gameController.js";

const gameRouter = Router();

gameRouter.route("/leaderboard").get(getAllHighscores);
gameRouter.route("/save").post(saveHighscore);
gameRouter
  .route("/leaderboard/:id")
  .put(updateHighscore)
  .delete(deleteHighscore);
// gameRouter.route("/:id").get(getSingleHighscores);

export default gameRouter;
