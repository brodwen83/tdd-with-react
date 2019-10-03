/// <reference types="Cypress" />

describe('adding resstaurant', () => {
  const restaurantName = 'Sushi Place';

  it('displays the restaurant in the list', () => {
    cy.visit('http://localhost:1234');

    cy.get('[data-test="newRestaurantName"]').should('not.exist');

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.contains(restaurantName);
  });
});
