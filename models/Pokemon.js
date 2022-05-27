import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
  name: String,
  highscore: Number,
});

export default model("Pokemon", pokemonSchema);
