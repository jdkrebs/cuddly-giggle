import express from "express";

const app = express();

app.listen(3001, () => {
  console.log(`Api Server started on port 3001`);
});
