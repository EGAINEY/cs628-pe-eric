import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: "",
  });
  const navigate = useNavigate();
 
  // Update the state properties.
  function updateForm(value) {
    return setForm((prev) => ({ ...prev, ...value }));
  }
 
  // Handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
 
    const newRecipe = { ...form };
 
    // Create recipe.
    await fetch("https://animated-spork-5j6r59grrr42pv4r-5050.app.github.dev/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
 
    setForm({ name: "", ingredients: "", instructions: "", cookTime: "" });
    navigate("/");
  }
 
  // Display the form.
  return (
    <div style={{margin: 20}}>
      <h3>Create a New Recipe:</h3>
      <br/>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
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
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            className="form-control"
            id="ingredients"
            value={form.ingredients}
            onChange={(e) => updateForm({ ingredients: e.target.value })}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            className="form-control"
            id="instructions"
            value={form.instructions}
            onChange={(e) => updateForm({ instructions: e.target.value })}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="cookTime">Cook Time:</label>
          <input
            type="text"
            className="form-control"
            id="cookTime"
            value={form.cookTime}
            onChange={(e) => updateForm({ cookTime: e.target.value })}
          />
        </div>
        <br/>
        <div className="form-group">
          <input type="submit" value="Create Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}