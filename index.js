import express from "express";
// import { pokedex } from "./db/pokedex.json";

// const pokemon = JSON.parse(pokedex);

let jsonData = require("./db/pokedex.json");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server hört auf port ${port}`));
