import React, { useState } from 'react';

function NewRestaurantForm({ onSave }) {
  const [textInput, setTextInput] = useState('');

  const handleTextinputChange = ({ target: { value } }) => {
    setTextInput(value);
  };

  const handleOnSave = event => {
    event.preventDefault();

    onSave(textInput);
    setTextInput('');
  };

  return (
    <form onSubmit={handleOnSave}>
      <input
        type="text"
        value={textInput}
        data-test="newRestaurantName"
        onChange={handleTextinputChange}
      />
      <button
        data-test="saveNewRestaurantButton"
        onClick={handleOnSave}
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default NewRestaurantForm;
