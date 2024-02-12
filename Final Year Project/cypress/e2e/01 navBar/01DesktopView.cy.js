/// <reference types="cypress" />

describe("Tests Suite for Navbar in desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/home");
    cy.wait(2000);
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/city/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive InterCity Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Delivery Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Cargo Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Services Page", () => {
    cy.get(
      '.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Safety Page", () => {
    cy.get(
      '.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Origin & Values Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Our origin and values").click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Impact Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Our impact").click();
    cy.wait(1000);
  });

  it("Should be able to visit Contacts Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Contacts").click();
    cy.wait(1000);
  });

  it("Should be able to visit Newsroom Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Newsroom").click();
    cy.wait(1000);
  });

  it("Should be able to visit Careers Page", () => {
    cy.get(".s18zxe3h > :nth-child(5) > div > a").invoke('removeAttr', 'target').click();
    cy.wait(1000);
  });

  it("Should be able to Click on Change Language button", () => {
    cy.get(".RowBox-sc-1p3mafh-1 > .l1e825z9 > .lt0vyk1").click();
    cy.wait(1000);
    cy.get('[title="click to switch to Urdu language"]').click();
    cy.wait(1000);
  });

  it("Should be able to Click on Become a Driver button", () => {
    cy.get("#global__header__button_become_driver__home > a").click();
    cy.wait(1000);
  });
});
