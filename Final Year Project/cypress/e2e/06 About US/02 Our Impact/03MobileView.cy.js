/// <refrence types="Cypress" />

describe("Test suite for Our Impact Page in Mobile view", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
  });

  it("Should be able to click on carousel dots", () => {
    cy.get(".home-hero__swiper-pagination > :nth-child(2)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".home-hero__swiper-pagination > :nth-child(1)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);
  });

  it("Should be able to click on BeginIT", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // click on link in BeginIt
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });

  it("Should be able to click on StarTeam", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c5-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click in link in Start Team
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });

  it("Should be able to click on AuroraTech", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ea-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // CLick on link in Aurora Tech
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });

  it("Should be able to click on Underdog Awards", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Clcik on link in UnderDog Awards
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });

  it("Should be able to click on AYARKUT", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link in Ayarkut
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });

  it("Should be able to click on Film Project", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Film project
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });

  it("Should be to able click on Super Novas", () => {
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb516-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Super Novas
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(2000);
  });
});
