import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state: an empty array of recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Adds a recipe
  setRecipes: (recipes) => set({ recipes }), // Sets the recipes array (useful for loading from an external source later)
}));

export default useRecipeStore;