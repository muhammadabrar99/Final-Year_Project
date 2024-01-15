/// <refrence types="Cypress" />

// This suite is to test the News Room page
describe("News Room Page", () => {
  // desktop view
  it("should display the desktop view", () => {
    cy.viewport(1600, 900);

    // visit the News Room page
    cy.visit("https://promo.indrive.com/newsroom");

    // Scroll to the bottom of the page
    cy.scrollTo("bottom", { duration: 7000 });

    // Scroll to the top of the page
    cy.scrollTo("top", { duration: 7000 });
  });

  // tablet view
  it("should display the tablet view", () => {
    cy.viewport(768, 1024);

    // visit the News Room page
    cy.visit("https://promo.indrive.com/newsroom");

    // Scroll to the bottom of the page
    cy.scrollTo("bottom", { duration: 7000 });

    // Scroll to the top of the page
    cy.scrollTo("top", { duration: 7000 });
  });

  // mobile view
  it("should display the mobile view", () => {
    cy.viewport(400, 667);

    // visit the News Room page
    cy.visit("https://promo.indrive.com/newsroom");

    // Scroll to the bottom of the page
    cy.scrollTo("bottom", { duration: 7000 });

    // Scroll to the top of the page
    cy.scrollTo("top", { duration: 7000 });
  });
});
