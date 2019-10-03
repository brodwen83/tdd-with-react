import React, { useState } from 'react';
import { Button, Icon, TextInput } from 'react-materialize';

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
      <div className="formGroup">
        <TextInput
          type="text"
          value={textInput}
          data-test="newRestaurantName"
          onChange={handleTextinputChange}
          label="Enter Restaurant Name"
        />

        <Button
          type="submit"
          waves="light"
          data-test="saveNewRestaurantButton"
          onClick={handleOnSave}
          type="submit"
        >
          Submit
          <Icon right>send</Icon>
        </Button>
      </div>
    </form>
  );
}

export default NewRestaurantForm;
