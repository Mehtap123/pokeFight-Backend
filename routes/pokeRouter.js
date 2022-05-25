import { Router } from "express";
import {
  getAllPokemon,
  getSinglePokemon,
} from "../controllers/pokeController.js";

const pokeRouter = Router();

pokeRouter.route("/").get(getAllPokemon);

pokeRouter.route("/:id").get(getSinglePokemon);

export default pokeRouter;
