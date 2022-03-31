import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';

const Resturant = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2>Find The Food You want</h2>
            <input onChange={searchFood} type="text" name="" id="" /> <br />
            <h3>Result Found :{meals.length}</h3>
            <div>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturant;