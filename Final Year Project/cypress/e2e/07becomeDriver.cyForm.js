/// <refrence types="cypress" />

// Test Suite: Become a Driver form

describe("Test Become a Driver form via Automation Testing", () => {
  // Test case: Check all the links and buttons on the page
  it("Should be able to click on all the links and buttons on the page", () => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/home");
    cy.wait(3000);
    cy.get("#global__header__button_become_driver__home > a").click();
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 8000 });
    cy.wait(2000);
    cy.get("#download-block").scrollIntoView({ duration: 2000 });
    cy.wait(1000);
    cy.get(":nth-child(2) > #dwnld_main_link").click();
    cy.wait(2000);
    cy.visit("https://indrive.com/en/driver/");
    cy.wait(2000);
    cy.get(".smg6bp4").scrollIntoView({ duration: 3000 });
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .s1dovwt0"
    ).click();
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .s1dovwt0"
    ).click();
    cy.get(".smg6bp4").scrollIntoView({ duration: 3000 });
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .s1dovwt0"
    ).click();
    cy.get(".smg6bp4").scrollIntoView({ duration: 3000 });
    cy.wait(2000);
    cy.get(
      ":nth-child(4) > .ColBox-sc-1p3mafh-0 > .q13cdn5m > .RowBox-sc-1p3mafh-1 > .s1dovwt0"
    ).click();
    cy.get(".smg6bp4").scrollIntoView({ duration: 3000 });
    cy.wait(2000);
  });

  //
  it("Should not be able to successfuly submit Become a Driver form", () => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/home");
    cy.wait(3000);
    cy.get("#global__header__button_become_driver__home > a").click();
    cy.wait(2000);
    cy.get(".image").scrollIntoView();
    cy.get("#ds-user_city-input").type("Peshawar");
    cy.wait(1000);
    cy.get(".image").scrollIntoView();
    cy.wait(1000)
    cy.get("#user_phone").type("1234567890");
    cy.wait(1000);
    cy.contains("Get code").click();
    cy.get(".image").scrollIntoView();
  });
});
