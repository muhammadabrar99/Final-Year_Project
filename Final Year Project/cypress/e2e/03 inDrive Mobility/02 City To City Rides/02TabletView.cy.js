/// <refrence types="cypress" />

describe("Test suite for City Rides page in tablet view", () => {
  beforeEach(() => {
    cy.viewport(768, 1024);
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
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);
  });

  it("Should be able to click on Courier delivery link", () => {
    cy.get(
      ":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on freight delivery link", () => {
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on City to city link", () => {
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("should be able to click on slider dosts in how to get started section", () => {
    cy.get('[data-index="3"] > :nth-child(1) > .eQwJMH').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get('[data-index="3"] > :nth-child(1) > .eQwJMH').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get('[data-index="3"] > :nth-child(1) > .eQwJMH').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get('[data-index="3"] > :nth-child(1) > .eQwJMH').scrollIntoView();
  });

  it("Should be able to click on Download app button in how to get started Section", () => {
    cy.get('[data-index="3"] > :nth-child(1) > .eQwJMH').scrollIntoView();
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
