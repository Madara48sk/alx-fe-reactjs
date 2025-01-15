// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
    const { recommendations, generateRecommendations } = useRecipeStore(state => ({
        recommendations: state.recommendations,
        generateRecommendations: state.generateRecommendations,
    }));

    useEffect(() => {
      generateRecommendations()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(recommendations.length === 0) return <p>No recommendations at the moment!</p>

    return (
        <div>
            <h2>Recommendations</h2>
            {recommendations.map(recipe => (
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

export default RecommendationsList;