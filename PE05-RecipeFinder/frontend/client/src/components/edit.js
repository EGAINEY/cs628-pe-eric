import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: "",
  });
  const params = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`https://animated-spork-5j6r59grrr42pv4r-5050.app.github.dev/recipe/${id}`);
 
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
 
      const recipe = await response.json();
      if (!recipe) {
        window.alert(`Recipe with id ${id} not found`);
        navigate("/");
        return;
      }
 
      setForm(recipe);
    }
 
    fetchData();
 
    return;
  }, [params.id, navigate]);
 
  // Update state properties.
  function updateForm(value) {
    return setForm((prev) => ({ ...prev, ...value }));
  }
 
  async function onSubmit(e) {
    e.preventDefault();
    const editedRecipe = {
      name: form.name,
      ingredients: form.ingredients,
      instructions: form.instructions,
      cookTime: form.cookTime,
    };
 
    // Update the recipe.
    await fetch(`https://animated-spork-5j6r59grrr42pv4r-5050.app.github.dev/recipe/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedRecipe),
      headers: {
        'Content-Type': 'application/json'
      },
    });
 
    navigate("/");
  }
 
  // Display the form.
  return (
    <div style={{margin: 20}}>
      <h3>Update Recipe: </h3>
      <br/>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea
            className="form-control"
            id="ingredients"
            value={form.ingredients}
            onChange={(e) => updateForm({ ingredients: e.target.value })}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="instructions">Instructions: </label>
          <textarea
            className="form-control"
            id="instructions"
            value={form.instructions}
            onChange={(e) => updateForm({ instructions: e.target.value })}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="cookTime">Cook Time: </label>
          <input
            type="text"
            className="form-control"
            id="cookTime"
            value={form.cookTime}
            onChange={(e) => updateForm({ cookTime: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Update Recipe"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}