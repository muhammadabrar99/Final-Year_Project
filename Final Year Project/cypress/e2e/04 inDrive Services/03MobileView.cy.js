/// <refrence types="cypress" />

describe("Test suite for indrive services page in Mobile view", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://indrive.com/en/inlocal/");
    cy.wait(2000);
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("Should be able to click on slider dots in how does it work section", () => {
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".s6py5h").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ".m1umjdco > .ColBox-sc-1p3mafh-0 > .RowBox-sc-1p3mafh-1 > #dwnld_main_link"
    ).click();
  });
});
