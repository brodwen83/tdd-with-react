import React, { useState } from 'react';

function NewRestaurantForm(props) {
  const [textInput, setTextInput] = useState('');

  const handleTextinputChange = event => {
    setTextInput(event.target.value);
  };

  const handleOnSave = () => {
    const { onSave } = props;

    onSave(textInput);
  };

  return (
    <div>
      <input
        type="text"
        value={textInput}
        data-test="newRestaurantName"
        onChange={handleTextinputChange}
      />
      <button
        data-test="saveNewRestaurantButton"
        onClick={handleOnSave}
      >
        Save
      </button>
    </div>
  );
}

export default NewRestaurantForm;
