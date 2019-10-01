import React from 'react';
import { mount } from 'enzyme';
import { NewRestaurantForm } from '../../src/containers/restaurant';

describe('NewRestaurantForm', () => {
  describe('clicking the save', () => {
    it('calls the onSave handler', () => {
      const saveHandler = jest.fn();

      const wrapper = mount(
        <NewRestaurantForm onSave={saveHandler} />,
      );

      wrapper
        .find('[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'Sushi Place' } });

      wrapper
        .find('[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });
  });
});
