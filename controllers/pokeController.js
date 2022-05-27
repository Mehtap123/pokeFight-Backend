import data from "./pokeparser.js";

// Endpunkt /pokemon
export const getAllPokemon = (req, res) => {
  res.status(200).json(data);
};

// Endpunkt pokemon/:id
export const getSinglePokemon = (req, res) => {
  const { id } = req.params;
  const indexInArray = id - 1;
  res.status(200).json(data[indexInArray]);
};
