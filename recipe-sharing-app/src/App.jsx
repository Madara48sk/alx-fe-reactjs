import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import './App.css';
import useRecipeStore from '../store/recipeStore';
import RegistrationForm from './components/RegistrationForm';

function App() {
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

    useEffect(() => {
      generateRecommendations();
    }, [generateRecommendations]);

    return (
      <Router>
        <div className="App">
          <h1>Recipe Sharing App</h1>
          <AddRecipeForm /> {/* Only one AddRecipeForm */}
          <SearchBar />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          </Routes>
          <FavoritesList />
          <RecommendationsList />
        </div>
        <div className="App">
          <h1>Registration</h1>
          <RegistrationForm /> {/* Or <FormikForm /> */}
        </div>
      </Router>
    );
  }

export default App;