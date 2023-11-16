import express from "express";
import "dotenv/config";
import { router as contactRoutes } from "./routes/contactRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to the root API!" });
});

app.use("/api/contacts", contactRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
