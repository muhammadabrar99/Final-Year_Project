/// <refrence types="cypress" />

describe("Test suite for indrive services page in Desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/inlocal/");
    cy.wait(2000);
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("should be able to mouse over on elements in How does it work section", () => {
    cy.get(".s1dgl8gd > .fQFnBs").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(1) > .RowBox-sc-1p3mafh-1 > .gbQiUu > .p7awpzq").trigger(
      "mouseover"
    );
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > .RowBox-sc-1p3mafh-1 > .gbQiUu > .p7awpzq").trigger(
      "mouseover"
    );
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);

    cy.get(":nth-child(3) > .RowBox-sc-1p3mafh-1 > .gbQiUu > .p7awpzq").trigger(
      "mouseover"
    );
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
  });

  it("Should be able to click on Download app button", () => {
    cy.get("#download-block").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > #dwnld_main_link").click();
    cy.wait(1000);
  });
});
