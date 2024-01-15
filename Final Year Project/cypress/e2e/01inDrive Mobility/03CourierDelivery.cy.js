/// <refrence types="cypress" />

// Test Suite for Courier Delivery page

describe("Test Courier Delivery page via Automation Testing", () => {
  // Test case for Courier Delivery page in Desktop view
  it("Test Courier Delivery page in Desktop view", () => {
    cy.viewport(1600, 900);

    // Visit Courier Delivery page
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(2000);

    // Click on Download on the App Store button
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/delivery/");

    cy.scrollTo(0, 200);

    // Click on City Rides
    cy.get(
      ":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(1500);

    // Click on Courier Delivery
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(1500);

    // Click on Freight Delivery
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(1500);

    // Scroll to How to get Started Section
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
  });

  // Test case for Courier Delivery page in Tablet view
  it("Test Courier Delivery page in Tablet view", () => {
    cy.viewport(768, 1024);

    // Visit Courier Delivery page
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(2000);

    // Click on City Rides
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();

    // // Click on City To City Delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(2) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();

    // // Click on Freight Delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(4) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3)").click();

    // Scroll to How to get Started Section
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();

    // Click on FAQ links
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1500);
    cy.scrollTo("top", { duration: 2000 });
  });

  // Test case for Courier Delivery page in Mobile view
  it("Test Courier Delivery page in Mobile view", () => {
    cy.viewport(400, 667);

    // Visit Courier Delivery page
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".ColBox-sc-1p3mafh-0 > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(2000);

    cy.get(".s1ewsd0p").scrollIntoView({ duration: 2000 });
    cy.wait(2000);

    // Click on City Rides
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();

    // // Click on City To City Delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(2) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();

    // // Click on Freight Delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(4) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();

    // Scroll to How to get Started Section
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();

    // Click on FAQ links
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1500);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1500);
    cy.scrollTo("top", { duration: 2000 });
  });
});
