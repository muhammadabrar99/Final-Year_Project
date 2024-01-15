/// <refrence types="Cypress" />

// Test Suite for Our Impact Page
describe("Our Impact Page Test", () => {
  // Desktop View
  it.only("Our Impact Page Test in Desktop view", () => {
    cy.viewport(1600, 900);

    // Go to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(3000);

    // Scroll to Bottom
    cy.scrollTo("bottom", { duration: 4000 });

    // Scroll to Top
    cy.scrollTo("top", { duration: 4000 });
    cy.wait(2000);

    // Check slider button
    cy.get(".home-hero__swiper-pagination > :nth-child(2)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".home-hero__swiper-pagination > :nth-child(1)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);

    // Scroll to BeginIt
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // click on link in BeginIt
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c5-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click in link in Start Team
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ea-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // CLick on link in Aurora Tech
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Clcik on link in UnderDog Awards
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link in Ayarkut
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Film project
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb516-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Super Novas
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 4000 });
  });

  // Tablet View
  it("Our Impact Page Test in tablet view", () => {
    cy.viewport(768, 1024);

    // Go to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(3000);

    // Scroll to Bottom
    cy.scrollTo("bottom", { duration: 4000 });

    // Scroll to Top
    cy.scrollTo("top", { duration: 4000 });
    cy.wait(2000);

    // Check slider button
    cy.get(".home-hero__swiper-pagination > :nth-child(2)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".home-hero__swiper-pagination > :nth-child(1)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);

    // Scroll to BeginIt
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // click on link in BeginIt
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c5-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click in link in Start Team
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ea-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // CLick on link in Aurora Tech
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Clcik on link in UnderDog Awards
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link in Ayarkut
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Film project
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb516-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Super Novas
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 4000 });
  });

  // Mobile View
  it("Our Impact Page Test in mobile view", () => {
    cy.viewport(400, 667);

    // Go to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(3000);

    // Scroll to Bottom
    cy.scrollTo("bottom", { duration: 4000 });

    // Scroll to Top
    cy.scrollTo("top", { duration: 4000 });
    cy.wait(2000);

    // Check slider button
    cy.get(".home-hero__swiper-pagination > :nth-child(2)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);
    cy.get(".home-hero__swiper-pagination > :nth-child(1)").click();
    cy.get(
      ".swiper-slide-active > .home-hero__header > .heading"
    ).scrollIntoView();
    cy.wait(1000);

    // Scroll to BeginIt
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });
    cy.wait(1000);

    // click on link in BeginIt
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c9-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4c5-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click in link in Start Team
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-b8989f42-68cf-aa6c-283b-a343dd657ef5-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ea-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // CLick on link in Aurora Tech
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e2-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Clcik on link in UnderDog Awards
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4e8-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f4-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link in Ayarkut
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4f9-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Film project
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb4ff-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.get(
      "#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb516-8d3eb4ba"
    ).scrollIntoView({ duration: 2000 });

    // Click on link Super Novas
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba").then(
      ($link) => {
        $link.removeAttr("target");
      }
    );
    cy.get("#w-node-_1f7de81e-2243-2cb3-342a-ce2a8d3eb510-8d3eb4ba").click();
    cy.wait(2000);
    // Back to Our Impact Page
    cy.visit("https://indrive.com/en/our-impact/");
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 4000 });
  });
});
