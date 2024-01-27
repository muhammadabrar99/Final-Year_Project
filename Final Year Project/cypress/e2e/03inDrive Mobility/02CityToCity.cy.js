/// <refrence types="cypress" />

// Test Suite for City to City page
describe("Test City to City page via Automation Testing", () => {
  // Test case: Check all the links and buttons on the page
  it("Should be able to click on all the links and buttons on the page in Desktop view", () => {
    cy.viewport(1600, 900);

    // Visit the City to City page
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".d19deltf > #dwnld_hdr_link > p").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/intercity/");

    cy.get(".s1ewsd0p").scrollIntoView({ duration: 2000 });

    // Click on City Rides
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/intercity/");

    // Click on City Rides
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(":nth-child(3) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/intercity/");

    // Click on City Rides
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(":nth-child(4) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/intercity/");

    // Scroll to How to get started section
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });
    cy.wait(1000);

    // Mouse hover the Elements
    cy.get(
      ":nth-child(2) > .RowBox-sc-1p3mafh-1 > .jBwRrb > .s16qj5vx"
    ).trigger("mouseover");
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > .RowBox-sc-1p3mafh-1 > .jBwRrb > .s16qj5vx"
    ).trigger("mouseover");
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(4) > .RowBox-sc-1p3mafh-1 > .jBwRrb > .s16qj5vx"
    ).trigger("mouseover");
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Scroll to FAQ Section
    cy.get(".smg6bp4 > .highlight").scrollIntoView();

    // Click on FAQ links
    cy.get(":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.scrollTo("top", { duration: 2000 });
  });

  //   Test case: Check all the links and buttons on the page
  it("Should be able to click on all the links and buttons on the page in Tablet view", () => {
    cy.viewport(768, 1024);

    // Visit the City to City page
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(2000);

    // Click on City Rides
    cy.get(
      ":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();

    // Click on Courier Delivery
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();

    // Click on Freight Delivery
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();
    cy.wait(2000);

    // Scroll to Slick Section
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });

    // Click on Slick Buttons
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);

    // Scroll to FAQ Section
    cy.get(".smg6bp4 > .highlight").scrollIntoView();

    // Click on FAQ links
    cy.get(":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.scrollTo("top", { duration: 2000 });
  });

  //   Test case: Check all the links and buttons on the page
  it("Should be able to click on all the links and buttons on the page in Mobile view", () => {
    cy.viewport(400, 667);

    // Visit the City to City page
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".ColBox-sc-1p3mafh-0 > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(2000);

    // Click on City Rides
    cy.get(
      ":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();

    // Click on Courier Delivery
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();

    // Click on Freight Delivery
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();
    cy.wait(2000);

    // Scroll to Slick Section
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });

    // Click on Slick Buttons
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);

    // Scroll to FAQ Section
    cy.get(".smg6bp4 > .highlight").scrollIntoView();

    // Click on FAQ links
    cy.get(":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.get(":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m").click();
    cy.wait(1500);
    cy.scrollTo("top", { duration: 2000 });
  });
});
