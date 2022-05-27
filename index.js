import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import pokeRouter from "./routes/pokeRouter.js";
import gameRouter from "./routes/gameRouter.js";

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());

app.use("/api/pokemon", pokeRouter);
app.use("/api/game", gameRouter);
app.get("/", (req, res) => res.send("<h1>This shall be our Pokemon API!</h1>"));

app.listen(port, () => console.log(`Server hört auf port ${port}`));
