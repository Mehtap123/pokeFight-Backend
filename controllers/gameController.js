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

// export const updateHighscore = async (req, res) => {
//   try {
//     const { name, highscore: highscore } = req.body;
//     const updateHighscore = await Pokemon.findOneAndUpdate(
//       name,
//       { highscore: highscore },
//       {
//         new: true,
//       }
//     );
//     res.status(200).json(updateHighscore);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

export const updateHighscore = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, highscore } = req.body;
    const updateHighscore = await Pokemon.findByIdAndUpdate(
      id,
      { name, highscore },
      { new: true }
    );
    res.status(200).json(updateHighscore);
  } catch (err) {
    res.status(500).json(err);
  }
};

// export const updateHighscore = async (req, res) => {
//   try {
//     const { name, highscore } = req.body;
//     const updateHighscore = await Pokemon.findOneAndUpdate(
//       name,
//       { highscore },
//       {
//         new: true,
//       }
//     );
//     res.status(200).json(updateHighscore);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// export const getSingleHighscores =  (req, res)={

// };
