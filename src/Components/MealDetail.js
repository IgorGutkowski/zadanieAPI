import React, { useState } from 'react';
import Rating from './Rating';

const MealDetail = ({ meal, onBack }) => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const instructions = meal.strInstructions.split('\n').filter((step) => step.trim() !== '');

    return (
        <div>
            <button onClick={onBack}>
                Powrót do listy
            </button>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
            <p><strong>Kategoria:</strong> {meal.strCategory}</p>
            <p><strong>Pochodzenie:</strong> {meal.strArea}</p>

            <h3>Składniki:</h3>
            <ul>
                {Array.from(Array(20)).map((_, index) => {
                    const ingredient = meal[`strIngredient${index + 1}`];
                    const measure = meal[`strMeasure${index + 1}`];
                    return ingredient ? <li key={index}>{ingredient} - {measure}</li> : null;
                })}
            </ul>

            <div>
                <h3>Instrukcje:</h3>

                    {instructions.map((step, index) => (
                        <p key={index}>{step}</p>
                    ))}



            </div>

            <div>
                <Rating rating={rating} onRatingChange={handleRatingChange} />

            </div>
        </div>
    );
};

export default MealDetail;
