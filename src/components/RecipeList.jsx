// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

function IngredientInput({ onSearch }) {
  const [ingredients, setIngredients] = useState("");

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Digite os ingredientes separados por vírgula"
        value={ingredients}
        onChange={handleInputChange}
        className="w-full border rounded-md p-2"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Buscar Receitas
      </button>
    </form>
  );
}

IngredientInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default IngredientInput;
