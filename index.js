import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).json("Welcome to the root API!");
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
