/// <refrence types="cypress" />

// Test Suite for Freight Delivery
describe("Test Freight Delivery page via Automation Testing", () => {
  // Test case for freight Delivery page in Desktop view
  it("Test Freight Delivery page in Desktop view", () => {
    cy.viewport(1600, 900);

    // Visit Freight Delivery page
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);

    // Back to the previous page
    cy.visit("https://indrive.com/en/cargo/");

    // Click on City Rides
    cy.get(":nth-child(1) > .hLiATl > .deoPkS > .i16gorgr").click();
    cy.wait(3000);
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(2000);

    // Click on City To City Delivery
    cy.get(":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr").click();
    cy.wait(3000);
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(2000);

    // Click on City to City Delivery
    cy.get(":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr").click();
    cy.wait(3000);
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(2000);

    // Scroll to How to get Started Section
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 3000,
    });
    cy.wait(2000);

    // Mouse hover on Elements
    cy.get(
      ":nth-child(2) > .RowBox-sc-1p3mafh-1 > .jBwRrb > .s16qj5vx"
    ).trigger("mouseover");
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    cy.get(
      ":nth-child(3) > .RowBox-sc-1p3mafh-1 > .jBwRrb > .s16qj5vx"
    ).trigger("mouseover");
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    cy.get(
      ":nth-child(4) > .RowBox-sc-1p3mafh-1 > .jBwRrb > .s16qj5vx"
    ).trigger("mouseover");
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Scroll to top of the page
    cy.scrollTo("top", { duration: 3000 });
  });

  // Test case for freight Delivery page in Tablet view
  it("Test Freight Delivery page in Mobile view", () => {
    cy.viewport(768, 1024);

    // Visit Freight Delivery page
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(2000);

    // Click on City Rides
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();

    // Click on City To City Delivery
    cy.get(":nth-child(2) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();

    // Click on City to City Delivery
    cy.get(":nth-child(3) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();

    // Scroll to How to get Started Section
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 3000,
    });
    cy.wait(2000);

    // Click on slick dots
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Scroll to top of the page
    cy.scrollTo("top", { duration: 2000 });
  });

  // Test case for freight Delivery page in Mobile view
  it("Test Freight Delivery page in Mobile view", () => {
    cy.viewport(400, 667);

    // Visit Freight Delivery page
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(3000);

    // Click on Download on the App Store button
    cy.get(".ColBox-sc-1p3mafh-0 > #dwnld_hdr_link").click();
    cy.wait(2000);
    // Back to the previous page
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(2000);

    // Click on City Rides
    cy.get(":nth-child(1) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();

    // Click on City To City Delivery
    cy.get(":nth-child(2) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();

    // Click on City to City Delivery
    cy.get(":nth-child(3) > .hLiATl > .deoPkS").click();
    cy.wait(2000);
    cy.get(".b2nifjw").click();
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();

    // Scroll to How to get Started Section
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 3000,
    });
    cy.wait(2000);

    // Click on slick dots
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Scroll to top of the page
    cy.scrollTo("top", { duration: 2000 });
  });
});
