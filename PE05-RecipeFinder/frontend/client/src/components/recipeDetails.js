import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails({ id: propId }) {
  const { id: paramId } = useParams();
  const id = propId || paramId;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the recipe details.
  useEffect(() => {
    if (!id) return;
    async function fetchRecipe() {
      try {
        const response = await fetch(`https://animated-spork-5j6r59grrr42pv4r-5050.app.github.dev/recipe/${id}`);
        if (!response.ok) {
          setError("Error fetching recipe");
          setLoading(false);
          return;
        }
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching recipe");
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
    </div>
  );
}