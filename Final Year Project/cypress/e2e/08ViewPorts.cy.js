/// <reference types="cypress" />

describe("Check whether all the Pages & content of Indrive.com load well or not", () => {
  it("Visit Indrive Home Page", () => {
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/");
    cy.wait(5000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 3000 });
  });

  //   Check the Indrive Mobility DropDown
  it("Should be able to click on Indrive mobility menu and visit pages one by one", () => {
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/");

    // Visit Indrive City Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/city/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 2000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/");

    // Visit Indrive InterCity Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 2000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/");

    // Visit Indrive Delivery Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 2000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/");

    // Visit Indrive Cargo Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 2000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/");
  });

  //   Visit Indrive Services Page
  it("Should be able to click on inDrive Services and visit the Page", () => {
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/en/home/");
    cy.wait(3000);
    cy.get(
      '.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
  });

  //   Visit Safety Page
  it("Should be able to click on Safety and visit the Page", () => {
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/en/home/");
    cy.wait(3000);
    cy.get(
      '.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(5000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
  });

  //   //   Check the About Us DropDown
  it("Should be able to click on About US and Visit all pages one by one", () => {
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/en/home/");
    cy.wait(3000);

    // Visit Our Story Page
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/our-story/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);

    // Visit Our Impact Page
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);

    // Visit Contact us Page
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://indrive.com/en/contacts/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);

    // Visit News Page
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.visit("https://promo.indrive.com/newsroom");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);
  });

  //   Visit Careers Page
  it("Should be able to click on Career and visit the page", () => {
    cy.viewport(1600, 900);

    cy.visit("https://careers.indrive.com/");
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    cy.scrollTo("top", { duration: 3000 });
    cy.wait(1000);
    cy.visit("https://indrive.com/en/home/");
  });
});
