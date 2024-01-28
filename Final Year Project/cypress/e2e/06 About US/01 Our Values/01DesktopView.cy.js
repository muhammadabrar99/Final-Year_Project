/// <refrence types="cypress" />

describe("Test suite for Our Values Page in Desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/our-story/");
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("should be able Scroll to indrive values section and click on", () => {
    cy.get(
      '[style="--ar5a3n9-0:0 30px 80px;--ar5a3n9-1:1px solid;--ar5a3n9-2:#1B1B1C;--ar5a3n9-3:0 0 40px"]'
    ).scrollIntoView({ duration: 2000 });
    cy.wait(1000);
    cy.get('.c73tq11 > [data-testid="utm-link"]').click();
  });
});
