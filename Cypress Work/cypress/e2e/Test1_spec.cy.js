// cypress/integration/formy_project_spec.js

describe('Formy Project Test', () => {
  it('should open the Formy Project page and click on a link', () => {
    // Visit the Formy Project page
    cy.visit('https://formy-project.herokuapp.com');

    // Click on the specified CSS selector
    cy.get('body > div > div > li:nth-child(7) > a').click();
  });

  it('should click on an element with ID checkbox-1 using CSS selector', () => {
    // Visit the Formy Project page
    cy.visit('https://formy-project.herokuapp.com');

    // Click on the specified CSS selector
    cy.get('body > div > div > li:nth-child(7) > a').click();

    // Click on an element with ID checkbox-1 using CSS selector
    cy.get('#checkbox-1').click();

    // Assert that the checkbox is checked after clicking
    cy.get('#checkbox-1').should('be.checked');
  });
});