import React from "react";
import FoodData from './db'

const FoodDataInput = ({ name, picture, rating }) => {
    return (
        <div>
            {/* <h3>{key}</h3> */}
            <h3>I like {name}.</h3>
            <h4>{rating} / 5.0</h4>
            <img src={picture} alt={name} />
            <hr></hr>
        </div>
    );
}

const FoodILike = () => {
    return (
        // function renderFood(dish) {
        //   return <Food name={dish.name} picture={dish.image} />;
        // }
        FoodData.map(dish => (
            <FoodDataInput /*key={dish.id}*/ name={dish.name} picture={dish.image} rating={dish.rating} />
        )
        )
    );
}

export default FoodILike;