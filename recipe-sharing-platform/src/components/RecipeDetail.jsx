import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams(); // Get the recipe ID from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const foundRecipe = data.find((r) => r.id === parseInt(id)); // Find recipe by ID
        setRecipe(foundRecipe);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Dependency array ensures fetch happens only when id changes

  if (!recipe) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Instructions</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-700 list-decimal">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;