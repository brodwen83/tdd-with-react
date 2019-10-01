import React from 'react';

function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants &&
        restaurants.map(restaurant => (
          <li key={restaurant}>{restaurant}</li>
        ))}
    </ul>
  );
}

export default RestaurantList;
