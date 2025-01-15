import useRecipeStore from '../store/recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DeleteRecipeButton = ({ recipeId, onRecipeDeleted }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate(); // Get navigate function

    const handleDelete = () => {
        deleteRecipe(recipeId);
        onRecipeDeleted();
        navigate('/'); // Navigate back after delete
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;