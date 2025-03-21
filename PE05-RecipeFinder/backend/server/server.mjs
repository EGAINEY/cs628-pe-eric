import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import recipes from "./routes/recipe.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipe", recipes);

// Start the Express server.
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});