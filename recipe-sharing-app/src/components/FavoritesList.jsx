// src/components/FavoritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
    const { favorites, recipes } = useRecipeStore(state => ({
        favorites: state.favorites,
        recipes: state.recipes
    }));
    const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);

    if(favoriteRecipes.length === 0) return <p>No favorites yet!</p>

    return (
        <div>
            <h2>My Favorites</h2>
            {favoriteRecipes.map(recipe => (
                <div key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                        <h3>{recipe.title}</h3>
                    </Link>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FavoritesList;