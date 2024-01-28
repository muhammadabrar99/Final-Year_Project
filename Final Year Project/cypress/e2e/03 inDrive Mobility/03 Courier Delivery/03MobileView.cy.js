/// <refrence types="cypress" />

describe("Test suite for Courier delivery page in Mobile view", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(2000);
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".ColBox-sc-1p3mafh-0 > #dwnld_hdr_link").click();
    cy.wait(2000);
  });

  it("Should be able to click on City Rides", () => {
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(1000);
  });

  it("Should be able to click on Freight Delivery", () => {
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .hLiATl > .deoPkS").click();
    cy.wait(1000);
  });

  it("Should be able to click on City to city rides", () => {
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .hLiATl > .deoPkS").click();
    cy.wait(1000);
  });

  it("Should be able to click on slider dots in how to get started section", () => {
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
  });

  it("Should be able to click on Download app button in how to get started section", () => {
    cy.get(".s1dgl8gd").scrollIntoView();
    cy.wait(1000);
    cy.get("#dwnld_spcl_link").click();
  });
});
