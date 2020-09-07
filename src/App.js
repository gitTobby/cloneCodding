import React from 'react';
import PropTypes from 'prop-types';
import './css/common.css';

function Food({key, name, picture, rating}) {
  //let i = arguments.length;
  //console.log(i);

  return (
    <div>
      <h3>I like {name}.</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: '4.9',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: '3.5',
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

function App() {
    return (
      <div>
        {foodILike.map(dish => (
            <Food key={dish.key} name={dish.name} picture={dish.image} rating={dish.rating} />
          )
        )}
      </div>
    );
}

export default App;