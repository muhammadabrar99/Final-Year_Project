/// <refence types="cypress" />

describe("Test suite for City to City page in Desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(2000);
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".d19deltf > #dwnld_hdr_link > p").click();
    cy.wait(2000);
  });

  it("Should be able to click on City Rides link", () => {
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(1000);
  });

  it("Should be able to click on Courier delivery link", () => {
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on freight delivery link", () => {
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to mouse over on elements in get started section", () => {
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > .RowBox-sc-1p3mafh-1 > .jBwRrb").trigger(
      "mouseover"
    );
    cy.wait(1000);
    cy.get(":nth-child(3) > .RowBox-sc-1p3mafh-1 > .jBwRrb").trigger(
      "mouseover"
    );
    cy.wait(1000);
    cy.get(":nth-child(4) > .RowBox-sc-1p3mafh-1 > .jBwRrb").trigger(
      "mouseover"
    );
    cy.wait(1000);
  });

  it("Should be able to click on Download on the App button in how to get started section", () => {
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get("#dwnld_spcl_link").click();
  });

  it("Should be able to click on FAQ links", () => {
    cy.get(".smg6bp4 > .highlight").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1000);
    cy.get(":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1000);
  });
});
