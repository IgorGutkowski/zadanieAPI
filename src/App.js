import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealList from './Components/MealList';
import MealDetail from './Components/MealDetail';
import SearchBar from './Components/SearchBar';
import './App.css';
const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealSelect = (mealId) => {
    fetchMealDetails(mealId);
  };

  const handleBackToList = () => {
    setSelectedMeal(null);
  };

  const fetchMealDetails = (mealId) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => setSelectedMeal(response.data.meals[0]));
  };

  const handleSearch = async (query, filter) => {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      if (filter && filter !== 'all') {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`;
      }

      const response = await axios.get(url);
      let filteredMeals = response.data.meals || [];

      if (query && filter !== 'all') {
        filteredMeals = filteredMeals.filter(meal => meal.strMeal.toLowerCase().includes(query.toLowerCase()));
      }

      setMeals(filteredMeals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    handleSearch('', 'all');
  }, []);

  return (
      <div>
        {!selectedMeal && <SearchBar onSearch={handleSearch} />}
        {selectedMeal ? (
            <MealDetail meal={selectedMeal} onBack={handleBackToList} />
        ) : (
            <MealList meals={meals} onMealSelect={handleMealSelect} />
        )}
      </div>
  );
};

export default App;
