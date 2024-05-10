// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredients) => {
    const response = await fetch(
      `http://localhost:8000/receitas?ingredientes=${ingredients}`
    );
    const data = await response.json();
    setRecipes(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Bot de Receitas</h1>
      <IngredientInput onSearch={searchRecipes} />
      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;
