/// <refrence types="cypress" />

describe("Test suite for Home page in Desktop View", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
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
    cy.get(
      ".slick-active > :nth-child(1) > .sp8unc > .tburq2x > .c1hr9zt3 > .dxcjrp > .rzjt6q5 > p"
    ).click();
    cy.wait(2000);
    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
    cy.wait(2000);
  });

  it("Should be able to click on links in Indrive Mobility section", () => {
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
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".c5o3ebf").scrollIntoView();
    cy.get(".b1ktp264 > .rzjt6q5").click();
    cy.wait(2000);

    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
  });

  it("Should be able to click on links in Indrive Services section", () => {
    cy.get(".m19chpxv > :nth-child(9)").scrollIntoView();
    cy.wait(2000);
    cy.get('.cmgnqbs > [data-testid="utm-link"]').click({ force: true });
  });

  it("Should be able to click on all links in Imapct Projects Section", () => {
    cy.get(":nth-child(11) > .a1q518el").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(11) > .a1q518el > .ihwutvj > .t55jd3y > .c1ergle9 > a > .clq835v"
    ).click();
    cy.wait(1000);
    cy.get(
      ".navbar > .container-9 > .nav-content-2 > .brand-2 > .image-81"
    ).click();
    cy.get(":nth-child(11) > .a1q518el").scrollIntoView();
    cy.wait(2000);
    cy.get(".leqa5vp > a").then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(".leqa5vp > a").click();
  });

  it("Should be able to click on download app button", () => {
    cy.get(".meipcra.sasruxz").scrollIntoView();
    cy.wait(1000);
    cy.get(".bzfw9o7").click();
    cy.wait(1000);

    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
  });
});
