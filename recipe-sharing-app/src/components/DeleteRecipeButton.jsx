// src/components/DeleteRecipeButton.jsx
import useRecipeStore from 'recipeStore.js';

const DeleteRecipeButton = ({ recipeId, onRecipeDeleted }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        deleteRecipe(recipeId);
        onRecipeDeleted()
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;