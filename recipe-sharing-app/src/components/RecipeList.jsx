import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
      <div>
          {recipes.map(recipe => (
              <div key={recipe.id}>
                  <Link to={`/recipe/${recipe.id}`}>
                      <h3>{recipe.title}</h3>
                  </Link>
                  <p>{recipe.description}</p>
              </div>
          ))}
      </div>
  );


  const { filteredRecipes, addFavorite, removeFavorite, favorites } = useRecipeStore();

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <button onClick={() => (isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id))}>
              {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;