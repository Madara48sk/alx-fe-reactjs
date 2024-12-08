import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!recipeTitle.trim()) newErrors.recipeTitle = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!instructions.trim()) newErrors.instructions = 'Instructions are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    //Here you'd normally make an API call to submit the data.  For now, we just log it to the console
    console.log('Recipe submitted:', { recipeTitle, ingredients, instructions });
    setSubmitted(true);
    setRecipeTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-4">
      {submitted && <p className="text-green-500">Recipe submitted successfully!</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeTitle">
            Recipe Title
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.recipeTitle && 'border-red-500'}`}
            id="recipeTitle"
            type="text"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
          {errors.recipeTitle && <p className="text-red-500 text-xs italic">{errors.recipeTitle}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients && 'border-red-500'}`}
            id="ingredients"
            rows="5"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.instructions && 'border-red-500'}`}
            id="instructions"
            rows="5"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-xs italic">{errors.instructions}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;