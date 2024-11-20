import React from 'react';
import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => {
        setSearchTerm(e.target.value);
        filterRecipes();
      }}
    />
  );
};

export default SearchBar;