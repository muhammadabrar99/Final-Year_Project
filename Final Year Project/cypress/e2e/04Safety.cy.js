/// <refrence types="cypress" />
import "cypress-iframe";

// Test suite for InDrive Safety page
describe("Check all the links and buttons in Safety page", () => {
  // test cases for Desktop view
  it("Check all the links and buttons in Safety page in Desktop view", () => {
    cy.viewport(1600, 900);

    // Visit the Safety page
    cy.visit("https://indrive.com/en/safety/");

    cy.iframe(".c10mi285").within(() => {
      // Click on indrive Button
      cy.get(".indrive > a").click({ force: true });
      cy.wait(2000);

      //   Click on Passenger Button
      cy.get(".pass > a").click({ force: true });
      cy.wait(2000);

      //   // Click on Drivers Button
      cy.get(".driv > a").click({ force: true });
      cy.wait(2000);
    });
  });

  // test cases for Tablet view
  it("Check all the links and buttons in Safety page in Tablet view", () => {
    cy.viewport(768, 1024);

    // Visit the Safety page
    cy.visit("https://indrive.com/en/safety/");
    cy.wait(3000);

    // Click on indrive Button
    cy.iframe(".c10mi285").within(() => {
      // Click on indrive Button
      cy.get(".indrive > a").click({ force: true });
      cy.wait(2000);

      //   Click on Passenger Button
      cy.get(".pass > a").click({ force: true });
      cy.wait(2000);

      //   // Click on Drivers Button
      cy.get(".driv > a").click({ force: true });
      cy.wait(2000);
    });
  });
  
  // test cases for Mobile view
  it("Check all the links and buttons in Safety page in Mobile view", () => {
    cy.viewport(425, 667);

    // Visit the Safety page
    cy.visit("https://indrive.com/en/safety/");
    cy.wait(3000);

    // Click on indrive Button
    cy.iframe(".c10mi285").within(() => {
      // Click on indrive Button
      cy.get(".indrive > a").click({ force: true });
      cy.wait(2000);

      //   Click on Passenger Button
      cy.get(".pass > a").click({ force: true });
      cy.wait(2000);

      //   // Click on Drivers Button
      cy.get(".driv > a").click({ force: true });
      cy.wait(2000);
    });
  });
});
