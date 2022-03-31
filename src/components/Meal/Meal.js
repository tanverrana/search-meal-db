import React from 'react';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.Meal;
    const { handleAddToOrder, meal } = props;
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={() => handleAddToOrder(meal)}>Add This Food</button>
        </div>
    );
};

export default Meal;