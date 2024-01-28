/// <refrence types="Cypress" />
import "cypress-iframe";

describe("Test suite for Safety page in Desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/safety/");
    cy.wait(2000);
  });

  it("pass", () => {
    cy.iframe(".c10mi285").within(() => {
      cy.get("[class='tab driver']").scrollIntoView();
      cy.wait(4000);
    });
  });

  it("Should be able to click on inDrive button and scroll to inDrive section", () => {
    cy.iframe(".c10mi285").within(() => {
      // Click on indrive Button
      cy.get(".indrive > a").click({ force: true });
      cy.wait(1000);
    });
  });

  //   it("Should be able to click on Passenger button and scroll to Passenger section", () => {
  //     cy.iframe(".c10mi285").within(() => {
  //       // Click on Passenger Button
  //       cy.get(".pass > a").click({ force: true });
  //       cy.wait(1000);
  //     });
  //   });

  //   it("Should be able to click on Drivers button and scroll to Drivers section", () => {
  //     cy.iframe(".c10mi285").within(() => {
  //       // Click on Drivers Button
  //       cy.get(".driv > a").click({ force: true });
  //       cy.wait(1000);
  //     });
  //   });
});
