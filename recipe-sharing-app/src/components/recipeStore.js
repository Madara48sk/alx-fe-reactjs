import create from 'zustand';

const useRecipeStore = create((set, get) => ({
    recipes: [],
    favorites: [],
    filter: '',
    searchTerm: '',
    recommendations: [], // New recommendations array
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
    setFilter: (filter) => set({ filter }),
    setSearchTerm: (term) => set({ searchTerm: term }),
    generateRecommendations: () => set((state) => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.3 // 30% chance to show the recipe if it's favorited.
        );
      return { recommendations: recommended };
    }),
    get filteredRecipes() {
        const filter = get().filter.toLowerCase();
        const searchTerm = get().searchTerm.toLowerCase();
        const recipes = get().recipes;

        if (!filter && !searchTerm) return recipes;

        return recipes.filter(recipe => (
            (filter ? recipe.title.toLowerCase().includes(filter) || recipe.description.toLowerCase().includes(filter) : true)
            && (searchTerm ? recipe.title.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm) : true)
        ))
    }
}));

export default useRecipeStore;