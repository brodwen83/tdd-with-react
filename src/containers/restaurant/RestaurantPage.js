import React, { useState } from 'react';
import NewRestaurantForm from './forms/NewRestaurantForm';
import RestaurantList from './RestaurantList';

function RestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);

  const handleAddRestaurant = restaurant => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <div>
      <button data-test="addRestaurantButton">Add Restaurant</button>
      <NewRestaurantForm onSave={handleAddRestaurant} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default RestaurantPage;
