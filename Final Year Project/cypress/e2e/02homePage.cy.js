/// <reference types="cypress" />

describe("Check the functionallity of Home page", () => {
  it("Should be able to Click on all Buttons and Links of Home page in Desktop Mode", () => {
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/");
    cy.wait(10000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    // Click on Indrive logo
    cy.get('.iWJKqT > [data-testid="utm-link"]').click({ force: true });
    cy.wait(3000);

    // check Slide Buttons
    cy.get(".b17nm4v5 > :nth-child(2)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(3)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(4)").click();
    cy.wait(1500);

    // Click on Download App button
    cy.get(
      ".slick-active > :nth-child(1) > .sp8unc > .tburq2x > .c1hr9zt3 > .dxcjrp > .rzjt6q5 > p"
    ).click();
    cy.wait(2000);
    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
    cy.wait(2000);

    // Click on Link in Indrve Mobility section
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(2000);
    cy.get('.l15smieq > :nth-child(1) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(2) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(3) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(4) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    // Click on Link in Indrve Services section
    cy.get(".m19chpxv > :nth-child(9)").scrollIntoView();
    cy.wait(2000);
    cy.get('.cmgnqbs > [data-testid="utm-link"]').click({ force: true });
    cy.wait(5000);
    cy.visit("https://indrive.com/en/home/");

    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo("center", { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
  });

  it("Should be able to Click on all Buttons and Links of Home page in Phone Mode", () => {
    cy.viewport(375, 667);

    cy.visit("https://indrive.com/");
    cy.wait(10000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    // Click on Indrive logo
    cy.get('.iWJKqT > [data-testid="utm-link"]').click({ force: true });
    cy.wait(3000);

    // check Slide Buttons
    cy.get(".b17nm4v5 > :nth-child(2)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(3)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(4)").click();
    cy.wait(1500);

    // Click on Download App button
    cy.get(
      ".slick-active > :nth-child(1) > .sp8unc > .tburq2x > .c1hr9zt3 > .dxcjrp > .rzjt6q5 > p"
    ).click({ force: true });
    cy.wait(2000);
    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
    cy.wait(2000);

    // Click on Link in Indrve Mobility section
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(2000);
    cy.get('.l15smieq > :nth-child(1) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(2) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(3) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(4) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    // Click on Link in Indrve Services section
    cy.get(".m19chpxv > :nth-child(9)").scrollIntoView();
    cy.wait(2000);
    cy.get('.cmgnqbs > [data-testid="utm-link"]').click({ force: true });
    cy.wait(5000);
    cy.visit("https://indrive.com/en/home/");

    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo("center", { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
  });

  it("Should be able to Click on all Buttons and Links of Home page in Tablet Mode", () => {
    cy.viewport(768, 1024);

    cy.visit("https://indrive.com/");
    cy.wait(10000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.wait(3000);
    // Click on Indrive logo
    cy.get('.iWJKqT > [data-testid="utm-link"]').click({ force: true });
    cy.wait(3000);

    // check Slide Buttons
    cy.get(".b17nm4v5 > :nth-child(2)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(3)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(4)").click();
    cy.wait(1500);

    // Click on Download App button
    cy.get(
      ".slick-active > :nth-child(1) > .sp8unc > .tburq2x > .c1hr9zt3 > .dxcjrp > .rzjt6q5 > p"
    ).click({ force: true });
    cy.wait(2000);
    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
    cy.wait(2000);

    // Click on Link in Indrve Mobility section
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(2000);
    cy.get('.l15smieq > :nth-child(1) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(2) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(3) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    cy.get('.l15smieq > :nth-child(4) > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/home/");
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);

    // Click on Link in Indrve Services section
    cy.get(".m19chpxv > :nth-child(9)").scrollIntoView();
    cy.wait(2000);
    cy.get('.cmgnqbs > [data-testid="utm-link"]').click({ force: true });
    cy.wait(5000);
    cy.visit("https://indrive.com/en/home/");

    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo("center", { duration: 2000 });
    cy.wait(2000);
    cy.scrollTo("top", { duration: 3000 });
  });
});
