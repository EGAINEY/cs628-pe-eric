import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of all recipes.
router.get("/", async (req, res) => {
  let collection = await db.collection("recipes");
  let results = await collection.find({}).toArray();
  res.status(200).send(results);
});

// Get a recipe by id.
router.get("/:id", async (req, res) => {
  let collection = await db.collection("recipes");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.status(404).send("Not found");
  else res.status(200).send(result);
});

// Create a new recipe.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    cookTime: req.body.cookTime,
  };
  let collection = await db.collection("recipes");
  let result = await collection.insertOne(newDocument);
  res.status(201).send(result);
});

// Update a recipe by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      cookTime: req.body.cookTime,
    }
  };

  let collection = await db.collection("recipes");
  let result = await collection.updateOne(query, updates);

  res.status(200).send(result);
});

// Delete a recipe by id.
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = await db.collection("recipes");
  let result = await collection.deleteOne(query);

  res.status(200).send(result);
});

export default router;