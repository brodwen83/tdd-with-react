import React, { useState } from 'react';
import NewRestaurantForm from './forms/NewRestaurantForm';
import RestaurantList from './RestaurantList';

function RestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(
    false,
  );

  const handleAddRestaurant = restaurant => {
    setRestaurants([...restaurants, restaurant]);
  };

  const handleShowNewRestaurantForm = () => {
    setShowNewRestaurantForm(!showNewRestaurantForm);
  };

  return (
    <div>
      <button
        data-test="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </button>

      {showNewRestaurantForm && (
        <NewRestaurantForm onSave={handleAddRestaurant} />
      )}

      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default RestaurantPage;
