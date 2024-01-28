/// <refrence type="cypress" />

describe("Test suite for Freight delivery in Tablet view", () => {
  beforeEach(() => {
    cy.viewport(768, 1024);
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(2000);
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("Should be able to click on Download on the App Store button", () => {
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(1000);
  });

  it("Should be able to click on City Rides", () => {
    cy.get(
      ":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on Courier Delivery", () => {
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(1000);
  });

  it("Should be able to click on City to city rides", () => {
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
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
