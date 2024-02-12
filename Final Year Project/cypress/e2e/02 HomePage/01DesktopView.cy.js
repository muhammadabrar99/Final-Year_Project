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
    cy.get(".b17nm4v5").find(".b663fty").eq(0).click();
    cy.wait(1000);
    cy.get(".b17nm4v5").find(".b663fty").eq(1).click();
    cy.wait(1000);
    cy.get(".b17nm4v5").find(".b663fty").eq(2).click();
    cy.wait(1000);
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".dxcjrp").find(".rzjt6q5").eq(0).click();
    cy.wait(2000);
    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
    cy.wait(2000);
  });

  it("Should be able to click on links in Indrive Mobility section", () => {
    cy.get("[class='m1k6ir4o mb88p12 at62d2f']").scrollIntoView();
    cy.wait(2000);
    // clcik on first link
    cy.get(".c122lhwp")
      .find(".l15smieq")
      .find("[class='c1t1nq80 c10z6eqt']")
      .eq(0)
      .click();
    cy.wait(2000);
    // Go back to home page
    cy.visit("https://indrive.com/en/home/");
    //Scroll to Indrive Mobility section
    cy.get("[class='m1k6ir4o mb88p12 at62d2f']").scrollIntoView();
    cy.wait(1000);
    // clcik on second link
    cy.get(".c122lhwp")
      .find(".l15smieq")
      .find("[class='c1t1nq80 c10z6eqt']")
      .eq(1)
      .click();
    cy.wait(2000);
    // Go back to home page
    cy.visit("https://indrive.com/en/home/");
    //Scroll to Indrive Mobility section
    cy.get("[class='m1k6ir4o mb88p12 at62d2f']").scrollIntoView();
    cy.wait(1000);
    // clcik on third link
    cy.get(".c122lhwp")
      .find(".l15smieq")
      .find("[class='c1t1nq80 c10z6eqt']")
      .eq(2)
      .click();
    cy.wait(2000);
    // Go back to home page
    cy.visit("https://indrive.com/en/home/");
    //Scroll to Indrive Mobility section
    cy.get("[class='m1k6ir4o mb88p12 at62d2f']").scrollIntoView();
    cy.wait(1000);
    // clcik on fourth link
    cy.get(".c122lhwp")
      .find(".l15smieq")
      .find("[class='c1t1nq80 c10z6eqt']")
      .eq(3)
      .click();
    cy.wait(2000);
  });

  it("Should be able to click on Download app button", () => {
    cy.get(".c5o3ebf").scrollIntoView();
    cy.get(".b1ktp264 > .rzjt6q5").click();
    cy.wait(2000);

    // Close Download App modal
    cy.get(".CloseIcon-sc-ziqxz6-2").click();
  });

  it("Should be able to click on links in Indrive Services section", () => {
    cy.get(".s1qkwdkj").scrollIntoView();
    cy.wait(2000);
    cy.get("[class='cmgnqbs c10z6eqt']").find("a").eq(0).click();
  });

  it("Should be able to click on all links in Imapct Projects Section", () => {
    cy.get(":nth-child(11) > .a1q518el").scrollIntoView({ easing: "linear" });
    cy.wait(1000);

    // click on first link
    cy.get(".t55jd3y").eq(2).find(".c1ergle9").find("a").click();
    cy.wait(1000);

    // click on Indrive logo & go back to home page
    cy.get(".nav-content-2")
      .find("[class='brand-2 w-nav-brand']")
      .eq(0)
      .click();

    // click on second link
    cy.get(".leqa5vp").scrollIntoView({ easing: "linear" });
    cy.get(".leqa5vp").find("a").eq(0).invoke("removeAttr", "target").click();
    cy.wait(1000);
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
