/// <refrence types="cypress" />

// Test suite for InDrive Service page
describe("InDrive Service page", () => {
  // Test cases for Desktop view
  it("Check all the links and buttons in inDrive Services page in Desktop view", () => {
    // Click on the InDrive Service page
    cy.viewport(1600, 900);

    cy.visit("https://indrive.com/en/home/");
    cy.wait(1000);

    // Visit the InDrive Service page
    cy.get(
      '.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(3000);

    // Scroll to the bottom of the page
    cy.scrollTo("bottom", { duration: 5000 });

    // Scroll to the top of the page
    cy.scrollTo("top", { duration: 5000 });
    cy.wait(2000);

    // Scroll to center of the page
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });

    //   Mouse over the elements
    cy.get(":nth-child(1) > .RowBox-sc-1p3mafh-1 > .gbQiUu > .p7awpzq").trigger(
      "mouseover"
    );
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    cy.get(":nth-child(2) > .RowBox-sc-1p3mafh-1 > .gbQiUu > .p7awpzq").trigger(
      "mouseover"
    );
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    cy.get(":nth-child(3) > .RowBox-sc-1p3mafh-1 > .gbQiUu > .p7awpzq").trigger(
      "mouseover"
    );
    cy.get(".kgTyYr > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Click on Download button
    cy.get(":nth-child(2) > #dwnld_main_link").click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/inlocal/");
  });
  
  //   Test cases for Tablet view
  it("Check all the links and buttons in inDrive Services page in Tablet view", () => {
    cy.viewport(768, 1024);

    // Visit the InDrive Service page
    cy.visit("https://indrive.com/en/home/");
    cy.wait(1000);

    // Visit the InDrive Service page
    cy.get(".b2nifjw").click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .light-font > [data-testid="utm-link"]').click();
    cy.wait(3000);

    // Scroll to the bottom of the page
    cy.scrollTo("bottom", { duration: 5000 });

    // Scroll to the top of the page
    cy.scrollTo("top", { duration: 5000 });

    // Scroll to center of the page
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });

    // Check the slick slider
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Click on Download button
    cy.get(
      ".m1umjdco > .ColBox-sc-1p3mafh-0 > .RowBox-sc-1p3mafh-1 > #dwnld_main_link"
    ).click();
    cy.wait(2000);

    cy.visit("https://indrive.com/en/home/");
  });

  //   Test cases for Mobile view
  it("Check all the links and buttons in inDrive Services page in Mobile view", () => {
    cy.viewport(425, 667);

    // Visit the InDrive Service page
    cy.visit("https://indrive.com/en/home/");
    cy.wait(1000);

    // Visit the InDrive Service page
    cy.get(".b2nifjw").click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .light-font > [data-testid="utm-link"]').click();
    cy.wait(3000);

    // Scroll to the bottom of the page
    cy.scrollTo("bottom", { duration: 5000 });

    // Scroll to the top of the page
    cy.scrollTo("top", { duration: 5000 });

    // Scroll to center of the page
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView({
      duration: 2000,
    });

    // Check the slick slider
    cy.get(":nth-child(2) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(3) > .ft-slick__dots--custom").click();
    cy.get(".dZnpDZ > .ColBox-sc-1p3mafh-0 > .sqtl1gd").scrollIntoView();
    cy.wait(2000);

    // Click on Download button
    cy.get(
      ".m1umjdco > .ColBox-sc-1p3mafh-0 > .RowBox-sc-1p3mafh-1 > #dwnld_main_link"
    ).click();
    cy.wait(2000);

    cy.visit("https://indrive.com/en/home/");
  });
});
