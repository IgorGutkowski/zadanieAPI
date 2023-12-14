import React from 'react';

const MealList = ({ meals, onMealSelect }) => {
    return (
        <div>
            {meals.map((meal) => (
                <div
                    key={meal.idMeal}
                    onClick={() => onMealSelect(meal.idMeal)}
                >
                    {meal.strMeal}
                </div>
            ))}
        </div>
    );
};

export default MealList;
