## Input  
There are several methods of user input in the Recipe Finder application. These include the text fields for adding or editing a recipe (name, ingredients, instructions, and cook time), the "Create Recipe" button, clicking on a recipe name in the recipe list, and clicking the "Edit" or "Delete" buttons for an existing recipe.

## Process  
When a user fills out the text fields and clicks the "Create Recipe" button, the new recipe is automatically assigned an ID, added to the list, and the page updates to display the new recipe. Similarly, when a user clicks on a recipe name in the list, the application retrieves the recipe’s details and renders them directly beneath the selected recipe. Clicking the "Edit" button allows the user to modify the recipe details, which are then updated in the database and reflected on the page. Clicking the "Delete" button removes the recipe from the list, ensuring the page displays only the current recipes.

## Output  
The output is a constantly accurate list of recipes and their details, dynamically rendered to the screen. Any changes, such as adding, editing, or deleting a recipe, are immediately reflected in the user interface.