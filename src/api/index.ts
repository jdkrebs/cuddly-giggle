import express from "express";

//TODO create a get endpoint that returns a list of pokemon from here -> https://pokeapi.co/api/v2/pokemon

const app = express();

app.listen(3001, () => {
  console.log(`Api Server started on port 3001`);
});
