/// <refrence types="cypress" />
import "cypress-file-upload";

// Test Suite: Contact Us form
describe("Test Contact Us form via Automation Testing", () => {
  // Test case: Leave one field to check the form will be submitted or not
  it("Should not be able to successfuly submit contact us form", () => {
    cy.viewport(1600, 900);

    // Visit the Indrive Contact Us form
    cy.visit("https://indrive.com/en/contacts/");
    cy.wait(3000);

    cy.get(".cWVBNX > [data-testid='utm-link']").scrollIntoView();
    cy.wait(2000);
    cy.get('.cWVBNX > [data-testid="utm-link"]').click();
    cy.wait(2000);
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.get(
      '[style="border-radius: 16px;"] > .bplllpa > .bn7cu42 > .itgr0ej'
    ).type("Automation Test");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.get("#country").select("Pakistan");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .bplllpa > .bn7cu42 > .itgr0ej").type(
      "Muhammad Abrar"
    );
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get("#user_phone").type("0333-1234567");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(".b5i8904").type("This is a test message");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(".rzjt6q5").click();
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(5000);
  });

  // Test case: Leave @ in email field to check the form will be submitted or not
  it("Should not be able to successfuly submit contact us form", () => {
    cy.viewport(1600, 900);

    // Visit the Indrive Contact Us form
    cy.visit("https://indrive.com/en/contacts/");
    cy.wait(3000);

    cy.get(".cWVBNX > [data-testid='utm-link']").scrollIntoView();
    cy.wait(2000);
    cy.get('.cWVBNX > [data-testid="utm-link"]').click();
    cy.wait(2000);
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.get(
      '[style="border-radius: 16px;"] > .bplllpa > .bn7cu42 > .itgr0ej'
    ).type("Automation Test");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.get("#country").select("Pakistan");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .bplllpa > .bn7cu42 > .itgr0ej").type(
      "Muhammad Abrar"
    );
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get("#user_phone").type("0333-1234567");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(8) > .bplllpa > .bn7cu42 > .itgr0ej").type(
      "exampleabc.com"
    );
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(".b5i8904").type("This is a test message");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(".rzjt6q5").click();
    cy.wait(3000);
    cy.get('[data-testid="Card"]').scrollIntoView();
  });

  // Test case: Fill all the fields in the Contact Us form
  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.viewport(1600, 900);

    // Visit the Indrive Contact Us form
    cy.visit("https://indrive.com/en/contacts/");
    cy.wait(3000);

    cy.get(".cWVBNX > [data-testid='utm-link']").scrollIntoView();
    cy.wait(2000);
    cy.get('.cWVBNX > [data-testid="utm-link"]').click();
    cy.wait(2000);
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.get(
      '[style="border-radius: 16px;"] > .bplllpa > .bn7cu42 > .itgr0ej'
    ).type("Automation Test");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.get("#country").select("Pakistan");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(4) > .bplllpa > .bn7cu42 > .itgr0ej").type(
      "Muhammad Abrar"
    );
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get("#user_phone").type("0333-1234567");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(":nth-child(8) > .bplllpa > .bn7cu42 > .itgr0ej").type(
      "example@abc.com"
    );
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(".b5i8904").type("This is a test message");
    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);

    // Upload a file
    cy.fixture("testFile.txt").then((fileContent) => {
      cy.get("#file-id").attachFile(
        {
          fileContent: fileContent,
          fileName: "testFile.txt",
          mimeType: "text/plain",
        },
        { subjectType: "input" }
      );
    });

    cy.get('[data-testid="Card"]').scrollIntoView();
    cy.wait(1000);
    cy.get(".rzjt6q5").click();
    cy.wait(3000);
    cy.scrollTo("top");
  });
});
