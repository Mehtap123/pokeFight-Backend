import { readFile } from "fs/promises";
const data = JSON.parse(
  await readFile(new URL("../db/pokedex.json", import.meta.url))
);
export default data;
