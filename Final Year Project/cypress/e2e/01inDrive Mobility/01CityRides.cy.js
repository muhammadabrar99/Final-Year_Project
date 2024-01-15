/// <refrence types="Cypress" />

// Test Suite: Check all the links and buttons on the page
describe("Check all the links and Buttons of City rides page", () => {
  // test cases for Desktop view
  it("Should be able to click on the links and buttons in Mobile view", () => {
    cy.viewport(1600, 900);

    // Visit the page
    cy.visit("https://indrive.com/en/home/");
    cy.wait(3000);
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("City rides").click();
    cy.wait(2000);

    // Scroll to Bottom
    cy.scrollTo("bottom", { duration: 5000 });

    // Scroll to Top
    cy.scrollTo("top", { duration: 5000 });
    cy.wait(2000);

    // Click on Download App button
    cy.get(".d19deltf > #dwnld_hdr_link").click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/city/");
    cy.wait(2000);

    // Click on Courier delivery
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("City rides").click();
    cy.wait(2000);

    // Clcik on freight delivery
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("City rides").click();
    cy.wait(2000);

    // // Click on city to city
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("City rides").click();
    cy.wait(2000);

    // Scroll to How to get started
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });
    cy.wait(2000);

    // Scroll to Media Mentions
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);

    // Check the buttons of Media Mentions
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .fQFnBs > :nth-child(1)"
    ).click();
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".ColBox-sc-1p3mafh-0 > .fQFnBs > :nth-child(2)").click();
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);

    // Scroll to FAQ
    cy.get(".ccQLBy").scrollIntoView({ duration: 1000 });
    cy.wait(1000);

    // // Check the FAQ buttons
    cy.get(
      ":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.get(".ccQLBy").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.get(".ccQLBy").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.scrollTo("top", { duration: 2000 });
  });

  // test cases for tablet view
  it("Should be able to click on the links and buttons in Mobile view", () => {
    cy.viewport(768, 1024);

    // Visit the page
    cy.visit("https://indrive.com/en/home/");
    cy.wait(3000);
    cy.get(".b2nifjw").click();
    cy.wait(2000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(3000);

    cy.scrollTo("bottom", { duration: 5000 });
    cy.scrollTo("top", { duration: 5000 });

    // Click on Download App button
    cy.contains("Download the app").click({ force: true });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/city/");
    cy.wait(1000);

    // Click on Courier delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);

    // Clcik on freight delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);

    // Click on city to city
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);

    // Scroll to How to get started
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });
    cy.wait(2000);

    // Check the Slick Slider
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);

    // Scroll to Media Mentions
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);

    // Check the buttons of Media Mentions
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .fQFnBs > :nth-child(1)"
    ).click();
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".ColBox-sc-1p3mafh-0 > .fQFnBs > :nth-child(2)").click();
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);

    // Scroll to FAQ
    cy.get(".ccQLBy").scrollIntoView({ duration: 1000 });
    cy.wait(1000);

    // // Check the FAQ buttons
    cy.get(
      ":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.get(".ccQLBy").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.get(".ccQLBy").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    scrollTo("top", { duration: 2000 });
  });

  // test cases for mobile view
  it("Should be able to click on the links and buttons in Mobile view", () => {
    cy.viewport(425, 667);

    // Visit the page
    cy.visit("https://indrive.com/en/home/");
    cy.wait(3000);
    cy.get(".b2nifjw").click();
    cy.wait(2000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(3000);

    cy.scrollTo("bottom", { duration: 5000 });
    cy.scrollTo("top", { duration: 5000 });

    // Click on Download App button
    cy.contains("Download the app").click({ force: true });
    cy.wait(2000);
    cy.visit("https://indrive.com/en/city/");
    cy.wait(1000);

    // Click on Courier delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(
      ":nth-child(2) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);

    // Clcik on freight delivery
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(
      ":nth-child(3) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);

    // Click on city to city
    cy.get(".s1ewsd0p").scrollIntoView();
    cy.get(
      ":nth-child(4) > .hLiATl > .deoPkS > .i16gorgr > .RowBox-sc-1p3mafh-1"
    ).click();
    cy.wait(2000);
    // Go Back to Previous Page
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z").click();
    cy.get(
      '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);

    // Scroll to How to get started
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });
    cy.wait(2000);

    // Check the Slick Slider
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(1000);

    // Scroll to Media Mentions
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);

    // Check the buttons of Media Mentions
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .fQFnBs > :nth-child(1)"
    ).click();
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".ColBox-sc-1p3mafh-0 > .fQFnBs > :nth-child(2)").click();
    cy.get(
      ".sq1pve0 > :nth-child(1) > .ColBox-sc-1p3mafh-0 > .hLiATl > .sqtl1gd"
    ).scrollIntoView();
    cy.wait(1000);

    // Scroll to FAQ
    cy.get(".ccQLBy").scrollIntoView({ duration: 1000 });
    cy.wait(1000);

    // // Check the FAQ buttons
    cy.get(
      ":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.get(".ccQLBy").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.get(".ccQLBy").scrollIntoView();
    cy.wait(1000);
    cy.get(
      ":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(5) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .q1aemzkr"
    ).click();
    cy.wait(1000);
    scrollTo("top", { duration: 2000 });
  });
});
