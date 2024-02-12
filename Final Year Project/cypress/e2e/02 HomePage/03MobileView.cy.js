/// <refrence types="cypress" />

describe("test suite for Home page in Mobile View", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);
  });

  it("Scroll from top to bottom of page to check all sections", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
    cy.wait(1000);
  });

  it("Click on Indrive logo", () => {
    cy.get(".iWJKqT > [data-testid='utm-link']").click({ force: true });
    cy.wait(2000);
  });

  it("Should be able to click on curosel buttons", () => {
    cy.get(".b17nm4v5 > :nth-child(2)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(3)").click();
    cy.wait(1500);
    cy.get(".b17nm4v5 > :nth-child(4)").click();
    cy.wait(1500);
  });

  it("Should be able to click on Download app button", () => {
    cy.get("#dwnld_hdr_link_5").click();
    cy.wait(2000);
  });

  it("Should be able to click on all links in Safety section", () => {
    cy.get(".s1tnciyi").scrollIntoView();
    cy.wait(1000);
    cy.get('.t1q24d0t > [data-testid="utm-link"]').click();
  });

  it("Should be able to click on all links in Inrive mobiility section", () => {
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);
    cy.get('.l15smieq > :nth-child(1) > [data-testid="utm-link"]').click();
    cy.wait(1000);
    // Click on Indrive logo
    cy.get('.iWJKqT > [data-testid="utm-link"]').click();
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);
    cy.get('.l15smieq > :nth-child(2) > [data-testid="utm-link"]').click();
    cy.wait(1000);
    // Click on Indrive logo
    cy.get('.iWJKqT > [data-testid="utm-link"]').click();
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);
    cy.get('.l15smieq > :nth-child(3) > [data-testid="utm-link"]').click();
    cy.wait(1000);
    // Click on Indrive logo
    cy.get('.iWJKqT > [data-testid="utm-link"]').click();
    cy.get(".mb88p12.at62d2f > .a1q518el").scrollIntoView();
    cy.wait(1000);
    cy.get('.l15smieq > :nth-child(4) > [data-testid="utm-link"]').click();
    cy.wait(1000);
  });

  it("Should be able to click on download app button", () => {
    cy.get(".c5o3ebf").scrollIntoView();
    cy.wait(1000);
    cy.get("#dwnld_main_link").click();
  });

  it("Should be able to click on all links in Indrive services section", () => {
    cy.get(":nth-child(9) > .a1q518el").scrollIntoView();
    cy.wait(1000);
    cy.get('.cmgnqbs > [data-testid="utm-link"]').click();
  });

  it("Should be able to click on links in impact section", () => {
    cy.get(
      ":nth-child(11) > .a1q518el > .c122lhwp > .l15smieq > :nth-child(4)"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".leqa5vp > a").invoke("removeAttr", "target").click();
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".meipcra.sasruxz").scrollIntoView();
    cy.wait(1000);
    cy.get("#dwnld_extra_link").click();
  });
});
