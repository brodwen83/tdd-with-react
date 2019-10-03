import React, { useState } from 'react';
import NewRestaurantForm from './forms/NewRestaurantForm';
import RestaurantList from './RestaurantList';
import { Button } from 'react-materialize';

function RestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(
    false,
  );

  const handleAddRestaurant = restaurant => {
    setRestaurants([...restaurants, restaurant]);
    setShowNewRestaurantForm(false);
  };

  const handleShowNewRestaurantForm = () => {
    setShowNewRestaurantForm(true);
  };

  return (
    <div>
      <Button
        data-test="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </Button>

      {showNewRestaurantForm && (
        <NewRestaurantForm onSave={handleAddRestaurant} />
      )}

      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default RestaurantPage;
