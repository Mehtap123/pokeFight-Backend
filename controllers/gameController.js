import Pokemon from "../models/Pokemon.js";

export const getAllHighscores = async (req, res) => {
  try {
    const allHighscores = await Pokemon.find();
    res.status(200).json({ pokemons: allHighscores });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const saveHighscore = async (req, res) => {
  try {
    const { name, highscore } = req.body;
    const newHighscore = await Pokemon.create({ name, highscore });
    res.status(201).json(newHighscore);
  } catch (err) {
    res.status(500).json(err);
  }
};

// export const getSingleHighscores =  (req, res)={

// };
