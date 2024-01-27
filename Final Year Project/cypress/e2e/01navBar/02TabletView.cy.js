/// <reference types="cypress" />

describe("Tests Suite for Navbar in Tablet view", () => {
  beforeEach(() => {
    cy.viewport(768, 1024);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);
  });

  it("Should be able to click on Change Language button", () => {
    cy.get(".sgoBd > .l1e825z9 > .lt0vyk1").click();
    cy.wait(1000);
    cy.get('[title="click to switch to Urdu language"]').click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(1)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive InterCity Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Delivery Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(3)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Cargo Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(4)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Services Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get('.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(1000);
  });

  it("Should be able to visit Safety Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get('.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(1000);
  });

  it("Should be able to visit Our Origin & Values Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Impact Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a'
    ).then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Contacts Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Newsroom Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a'
    ).then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Careers Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(7) > .light-font").then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(":nth-child(7) > .light-font").click();
    cy.wait(1000);
  });

  it("Should be able to click on Become a Driver button", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.contains("Become a driver").click({ force: true });
    cy.wait(1000);
  });

  it("Should be able to click on Download App button", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get("#dwnld_link").click();
    cy.wait(1000);
  });
});
