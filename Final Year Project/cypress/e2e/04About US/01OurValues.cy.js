/// <refrence types="Cypress" />

describe("Our Values Page Test", () => {
  // Desktop View
  it("Our Values Page Test in Desktop view", () => {
    cy.viewport(1600, 900);

    // Go to Our Values Page
    cy.visit("https://indrive.com/en/our-story/");
    cy.wait(3000);

    // Scroll to Center
    cy.get(".hcmxg2u").scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // Scroll to bottom
    cy.get(".dOVYTu").scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // Scroll to Top
    cy.scrollTo("top", { duration: 4000 });
  });

  // Tablet View
  it("Our Values Page Test in Tablet view", () => {
    cy.viewport(768, 1024);

    // Go to Our Values Page
    cy.visit("https://indrive.com/en/our-story/");
    cy.wait(3000);

    // Scroll to Center
    cy.get(".hcmxg2u").scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // Scroll to bottom
    cy.get(".dOVYTu").scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // Scroll to Top
    cy.scrollTo("top", { duration: 4000 });
  });

  // Mobile View
  it("Our Values Page Test in mobile view", () => {
    cy.viewport(400, 667);

    // Go to Our Values Page
    cy.visit("https://indrive.com/en/our-story/");
    cy.wait(3000);

    // Scroll to Bottom
    cy.get(".hcmxg2u").scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // Scroll to bottom
    cy.get(".tfugzbi").scrollIntoView({ duration: 2000 });

    // Scroll to Top
    cy.scrollTo("top", { duration: 4000 });
  });
});
