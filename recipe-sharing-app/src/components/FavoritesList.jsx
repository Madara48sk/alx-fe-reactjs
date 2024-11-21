import React from 'react';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore();
  const favRecipes = favorites.map((id) => recipes.find((r) => r.id === id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;