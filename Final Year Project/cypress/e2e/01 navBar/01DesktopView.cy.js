/// <reference types="cypress" />

describe("Tests Suite for Navbar in desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/home");
    cy.wait(2000);
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(":nth-child(1) > .dt0vyk1 > .d1o3m61r").click();
    cy.contains("City rides").click();
    cy.url().should("include", "city/");
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(":nth-child(1) > .dt0vyk1 > .d1o3m61r").click();
    cy.contains("City to city").click();
    cy.url().should("include", "city/");
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(":nth-child(1) > .dt0vyk1 > .d1o3m61r").click();
    cy.contains("Courier delivery").click();
    cy.url().should("include", "delivery/");
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(":nth-child(1) > .dt0vyk1 > .d1o3m61r").click();
    cy.contains("Freight delivery").click();
    cy.url().should("include", "cargo/");
  });

  it("Should be able to visit Indrive Services Page", () => {
    cy.get(
      '.s1nn0uo9 > :nth-child(2) > div > [data-testid="utm-link"]'
    ).click();
    cy.url().should("include", "inlocal/");
  });

  it("Should be able to visit Safety Page", () => {
    cy.get(
      '.s1nn0uo9 > :nth-child(3) > div > [data-testid="utm-link"]'
    ).click();
    cy.url().should("include", "safety/");
  });

  it("Should be able to visit Our Origin & Values Page", () => {
    cy.get(":nth-child(4) > .dt0vyk1 > .d1o3m61r").click();
    cy.wait(1000);
    cy.contains("Our origin and values").click();
    cy.url().should("include", "our-story/");
  });

  it("Should be able to visit Our Impact Page", () => {
    cy.get(":nth-child(4) > .dt0vyk1 > .d1o3m61r").click();
    cy.wait(1000);
    cy.contains("Our impact").click();
    cy.url().should("include", "our-impact/");
  });

  it("Should be able to visit Contacts Page", () => {
    cy.get(":nth-child(4) > .dt0vyk1 > .d1o3m61r").click();
    cy.wait(1000);
    cy.contains("Contacts").click();
    cy.url().should("include", "contacts/");
  });

  it("Should be able to visit Newsroom Page", () => {
    cy.get(":nth-child(4) > .dt0vyk1 > .d1o3m61r").click();
    cy.wait(1000);
    cy.contains("Newsroom").invoke("removeAttr", "target").click();
    cy.url().should("include", "newsroom");
  });

  it("Should be able to visit Careers Page", () => {
    cy.get(".s1nn0uo9 > :nth-child(5) > div > a")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(1000);
    cy.url().should("include", "careers.indrive.com/");
  });

  it("Should be able to Click on Change Language button", () => {
    cy.get(".ltbrxf1 > .l1e825z9").click();
    cy.wait(1000);
    cy.get('[title="click to switch to Urdu language"]').click();
    cy.wait(1000);
    cy.url().should("include", "ur-PK/");
  });

  it("Should be able to Click on Become a Driver button", () => {
    cy.get("#global__header__button_become_driver__home > a").click();
    cy.wait(1000);
  });
});
