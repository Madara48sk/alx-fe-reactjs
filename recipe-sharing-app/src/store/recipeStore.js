import create from 'zustand';

const useRecipeStore = create((set, get) => ({
    recipes: [],
    favorites: [],
    filter: '', // New filter state
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (recipeId) =>
        set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== recipeId) })),
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),
    setRecipes: (recipes) => set({ recipes }),
    addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) =>
        set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),
    setFilter: (filter) => set({ filter }), // Action to set filter
    get filteredRecipes() {
        const filter = get().filter.toLowerCase();
        const recipes = get().recipes;
        if (!filter) return recipes; // if no filter
        return recipes.filter(recipe => (recipe.title.toLowerCase().includes(filter) || recipe.description.toLowerCase().includes(filter)))
    }

}));

export default useRecipeStore;