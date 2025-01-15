// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
const RecipeDetails = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );
    if (!recipe) {
        return <p>Recipe not found!</p>
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} onRecipeDeleted={() => navigate('/')} />
        </div>
    );
};

export default RecipeDetails;