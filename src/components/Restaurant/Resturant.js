import React from 'react';

const Resturant = () => {
    const searchFood = e => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h2>Find The Food You want</h2>
            <input onChange={searchFood} type="text" name="" id="" />
        </div>
    );
};

export default Resturant;