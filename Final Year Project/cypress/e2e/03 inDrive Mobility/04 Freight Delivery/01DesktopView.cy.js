/// <refrence types="Cypress" />

describe("Test suite for Freight Delivery page in Desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/cargo/");
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

  it("Should be able to click on City rides link", () => {
    cy.get(
      ":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on Courier delivery link", () => {
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on City to city link", () => {
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to mouse hover on slider dosts in how to get started section", () => {
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > .RowBox-sc-1p3mafh-1 > .jBwRrb").trigger(
      "mouseover"
    );
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .RowBox-sc-1p3mafh-1 > .jBwRrb").trigger(
      "mouseover"
    );
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .RowBox-sc-1p3mafh-1 > .jBwRrb").trigger(
      "mouseover"
    );
  });

  it("Should be able to click on Download app button in how to get started section", () => {
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get("#dwnld_spcl_link").click();
  });
});
