import React, { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import RecipeDetails from "./recipeDetails";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const match = useMatch("/recipe/:id");
  const selectedId = match ? match.params.id : null;

  // Get recipes from backend.
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("https://animated-spork-5j6r59grrr42pv4r-5050.app.github.dev/recipe");
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const recipes = await response.json();
      setRecipes(recipes);
    }

    getRecipes();
  }, []);

  // Delete a recipe.
  async function deleteRecipe(id) {
    await fetch(`https://animated-spork-5j6r59grrr42pv4r-5050.app.github.dev/recipe/${id}`,{ method: "DELETE" });
    const newRecipes = recipes.filter((el) => el._id !== id);
    setRecipes(newRecipes);
  }

  // Display all recipes.
  function recipeList() {
    const rows = [];
    recipes.forEach((recipe) => {
      rows.push(
        <tr key={recipe._id}>
          <td>
            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
          </td>
          <td>
            <Link className="btn-custom btn-edit" to={`/edit/${recipe._id}`}>Edit</Link>
            <button className="btn-custom btn-delete" onClick={() => deleteRecipe(recipe._id)}>Delete</button>
          </td>
        </tr>
      );
      // If a recipe is clicked, show the details in a row below it.
      if (selectedId === recipe._id) {
        rows.push(
          <tr key={`${recipe._id}-details`}>
            <td colSpan="2">
              <RecipeDetails />
            </td>
          </tr>
        );
      }
    });
    return rows;
  }

  return (
    <div>
      <h3 style={{ marginLeft: 20 }}>Recipe List:</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{recipeList()}</tbody>
      </table>
    </div>
  );
}