/// <reference types="cypress" />

describe("Tests Suite for Navbar in desktop view", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://indrive.com/en/home");
    cy.wait(2000);
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/city/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive InterCity Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/intercity/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Delivery Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/delivery/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Cargo Page", () => {
    cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/en/cargo/");
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Services Page", () => {
    cy.get(
      '.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Safety Page", () => {
    cy.get(
      '.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Origin & Values Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Our origin and values").click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Impact Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Our impact").click();
    cy.wait(1000);
  });

  it("Should be able to visit Contacts Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Contacts").click();
    cy.wait(1000);
  });

  it("Should be able to visit Newsroom Page", () => {
    cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
    cy.wait(1000);
    cy.contains("Newsroom").click();
    cy.wait(1000);
  });

  it("Should be able to visit Careers Page", () => {
    cy.get(".s18zxe3h > :nth-child(5) > div > a").then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(".s18zxe3h > :nth-child(5) > div > a").click();
    cy.wait(1000);
  });

  it("Should be able to Click on Change Language button", () => {
    cy.get(".RowBox-sc-1p3mafh-1 > .l1e825z9 > .lt0vyk1").click();
    cy.wait(1000);
    cy.visit("https://indrive.com/ms/home/");
    cy.wait(1000);
  });

  it("Should be able to Click on Become a Driver button", () => {
    cy.get("#global__header__button_become_driver__home > a").click();
    cy.wait(1000);
  });
});

describe("Tests Suite for Navbar in Tablet view", () => {
  beforeEach(() => {
    cy.viewport(768, 1024);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);
  });

  it("Should be able to click on Change Language button", () => {
    cy.get(".sgoBd > .l1e825z9 > .lt0vyk1").click();
    cy.wait(1000);
    cy.get('[title="click to switch to Urdu language"]').click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(1)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive InterCity Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Delivery Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(3)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Cargo Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1)").click();
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(4)'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Services Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get('.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(1000);
  });

  it("Should be able to visit Safety Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get('.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(1000);
  });

  it("Should be able to visit Our Origin & Values Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Impact Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a'
    ).then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Contacts Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Newsroom Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a'
    ).then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Careers Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(7) > .light-font").then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(":nth-child(7) > .light-font").click();
    cy.wait(1000);
  });

  it("Should be able to click on Become a Driver button", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.contains("Become a driver").click({ force: true });
    cy.wait(1000);
  });

  it("Should be able to click on Download App button", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get("#dwnld_link").click();
    cy.wait(1000);
  });
});

describe("Tests Suite for Navbar in Mobile view", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://indrive.com/en/home/");
    cy.wait(2000);
  });

  it("Should be able to click on Change Language button", () => {
    cy.get(".sgoBd > .l1e825z9 > .lt0vyk1 > p").click();
    cy.wait(1000);
    cy.get('[title="click to switch to Russian language"]').click();
    cy.wait(1000);
    cy.get(".sgoBd > .l1e825z9 > .lt0vyk1 > p").click();
    cy.wait(1000);
    cy.get('[title="click to switch to English language"]').click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive City Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive InterCity Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Delivery Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Cargo Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Indrive Services Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get('.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(1000);
  });

  it("Should be able to visit Safety Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get('.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]').click({
      force: true,
    });
    cy.wait(1000);
  });

  it("Should be able to visit Our Origin & Values Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Our Impact Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a'
    ).then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Contacts Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Newsroom Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .molw04z").click({ force: true });
    cy.wait(1000);
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a'
    ).then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(
      '[style="--bju7flq-0: flex; --bju7flq-1: 10px 0; --bju7flq-2: auto;"] > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a'
    ).click();
    cy.wait(1000);
  });

  it("Should be able to visit Careers Page", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get(":nth-child(7) > .light-font").then(($link) => {
      $link.removeAttr("target");
      $link.attr("rel", "noopener noreferrer");
    });
    cy.get(":nth-child(7) > .light-font").click();
    cy.wait(1000);
  });

  it("Should be able to click on Become a Driver button", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.contains("Become a driver").click({ force: true });
    cy.wait(1000);
  });

  it("Should be able to click on Download App button", () => {
    cy.get(".b2nifjw").click();
    cy.wait(1000);
    cy.get("#dwnld_link").click({ force: true });
    cy.wait(1000);
  });
});

// describe("Check the functionallity of navbar in all modes", () => {
//   // Test cases for Desktop mode
//   it("Check the functionallity of navbar in large Screen", () => {
//     cy.viewport(1600, 900);
//     cy.visit("https://indrive.com/en/home");

//     // Visit Indrive City Page
//     cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/city/");
//     cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(1000);

//     // Visit Indrive InterCity Page
//     cy.visit("https://indrive.com/en/intercity/");
//     cy.wait(3000);
//     cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(1000);

//     // Visit Indrive Delivery Page
//     cy.visit("https://indrive.com/en/delivery/");
//     cy.wait(3000);
//     cy.get(":nth-child(1) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(1000);

//     // Visit Indrive Cargo Page
//     cy.visit("https://indrive.com/en/cargo/");
//     cy.wait(3000);

//     //   Visit Indrive Services Page
//     cy.get(
//       '.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);

//     //   Visit Safety Page
//     cy.get(
//       '.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");

//     // //  Check the About Us DropDown
//     cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(1500);
//     cy.contains("Our origin and values").click();
//     cy.wait(3000);
//     cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(1500);
//     cy.contains("Our impact").click();
//     cy.wait(3000);
//     cy.get("#w-dropdown-toggle-1 > .text-block-72").click();
//     cy.wait(1500);
//     cy.contains("Contacts").click();
//     cy.wait(3000);
//     cy.get(":nth-child(4) > .d1ckzqn8 > .despyjd").click();
//     cy.wait(1500);
//     cy.contains("Newsroom").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//     cy.wait(1000);

//     //   Visit Careers Page
//     cy.get(".s18zxe3h > :nth-child(5) > div > a").then(($link) => {
//       $link.removeAttr("target");
//       $link.attr("rel", "noopener noreferrer");
//     });
//     cy.get(".s18zxe3h > :nth-child(5) > div > a").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//     cy.wait(1000);

//     // // Click on Change Language button
//     cy.get(".RowBox-sc-1p3mafh-1 > .l1e825z9 > .lt0vyk1").click();
//     cy.wait(1000);
//     cy.visit("https://indrive.com/ms/home/");
//     cy.wait(3000);
//     cy.get(".RowBox-sc-1p3mafh-1 > .l1e825z9 > .lt0vyk1").click();
//     cy.visit("https://indrive.com/en/home/");
//     cy.wait(1000);

//     // Click on Become a Driver button
//     cy.get("#global__header__button_become_driver__home > a").click();
//     cy.wait(3000);
//     cy.get("#global__header__button_become_driver__driver > a").click();
//   });

//   // Test cases for Tablet mode
//   it("Check the functionallity of navbar in Tablet mode", () => {
//     cy.viewport(768, 1024);
//     cy.visit("https://indrive.com/en/home/");
//     cy.wait(3000);
//     // Visit Indrive City Page
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(1)").click();
//     cy.visit("https://indrive.com/en/city/");
//     cy.wait(3000);
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(1)").click();
//     cy.visit("https://indrive.com/en/intercity/");
//     cy.wait(3000);
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(1)").click();
//     cy.visit("https://indrive.com/en/delivery/");
//     cy.wait(3000);
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(1)").click();
//     cy.visit("https://indrive.com/en/cargo/");
//     cy.wait(3000);
//     // Visit Indrive Services Page
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get('.s18zxe3h > :nth-child(2) > div > [data-testid="utm-link"]').click({
//       force: true,
//     });
//     cy.wait(3000);
//     // Visit Safety Page
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get('.s18zxe3h > :nth-child(3) > div > [data-testid="utm-link"]').click({
//       force: true,
//     });
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//     // Click on our Origin & Values
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(4) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(
//       '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);
//     // Click on Our Impact
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(4) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a").then(
//       ($link) => {
//         $link.removeAttr("target");
//         $link.attr("rel", "noopener noreferrer");
//       }
//     );
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a").click();
//     cy.wait(3000);
//     // Click on Contact Us
//     cy.get(".div-block-227 > .menu-button-3").click();
//     cy.wait(1000);
//     cy.get("#w-dropdown-toggle-1 > .text-block-72").click({ force: true });
//     cy.wait(1000);
//     cy.get(
//       '#w-dropdown-list-1 > [href="https://indrive.com/en/contacts/"]'
//     ).click();
//     cy.wait(3000);
//     // Click on Newsroom
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(":nth-child(4) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a").then(
//       ($link) => {
//         $link.removeAttr("target");
//         $link.attr("rel", "noopener noreferrer");
//       }
//     );
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//     // Visit Careers Page
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get(".bCVzGv > :nth-child(5) > .light-font").then(($link) => {
//       $link.removeAttr("target");
//       cy.get(".bCVzGv > :nth-child(5) > .light-font").click({ force: true });
//       $link.attr("rel", "noopener noreferrer");
//     });
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//     // Visit Careers Page
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.contains("Become a driver").click({ force: true });
//     cy.wait(3000);
//     cy.get(".b2nifjw").click();
//     cy.wait(1000);
//     cy.get("#dwnld_link").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//   });

//   // Test cases for Mobile mode
//   it("Check the functionallity of navbar in Mobile mode", () => {
//     cy.viewport(375, 667);
//     cy.visit("https://indrive.com/en/home/");
//     cy.wait(3000);

//     // Check language button
//     cy.get(".sgoBd > .l1e825z9 > .lt0vyk1 > p").click();
//     cy.wait(1000);
//     cy.get('[title="click to switch to Russian language"]').click();
//     cy.wait(1000);
//     cy.get(".sgoBd > .l1e825z9 > .lt0vyk1 > p").click();
//     cy.wait(1000);
//     cy.get('[title="click to switch to English language"]').click();
//     cy.wait(1000);

//     // Check menu button
//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(
//       '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);

//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2)").click();
//     cy.wait(3000);

//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(
//       '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(3) > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);

//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(".bCVzGv > :nth-child(1) > .molw04z > p").click({ force: true });
//     cy.wait(1000);
//     cy.get(
//       '.bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(4) > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);

//     // Click on Safety button
//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(':nth-child(2) > .light-font > [data-testid="utm-link"]').click();
//     cy.wait(3000);

//     // Click on Indrive Services
//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(':nth-child(3) > .light-font > [data-testid="utm-link"]').click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//     cy.wait(1500);

//     // Check all the links of About US
//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(":nth-child(4) > .molw04z").click();
//     cy.wait(1000);

//     // Visit Our Origin & Values
//     cy.get(
//       '.ColBox-sc-1p3mafh-0 > :nth-child(1) > [data-testid="utm-link"]'
//     ).click();
//     cy.wait(3000);

//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(":nth-child(4) > .molw04z").click();
//     cy.wait(1000);

//     // Visit Our Impact
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a").then(
//       ($link) => {
//         $link.removeAttr("target");
//         $link.attr("rel", "noopener noreferrer");
//       }
//     );
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(2) > a").click();
//     cy.wait(3000);

//     cy.get(".div-block-227 > .menu-button-3 > .div-merg > .rec1").click();
//     cy.wait(1500);
//     cy.get("#w-dropdown-toggle-1").click();
//     cy.wait(1000);

//     // Visit Contacts
//     cy.get(
//       '#w-dropdown-list-1 > [href="https://indrive.com/en/contacts/"]'
//     ).click();
//     cy.wait(3000);

//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(":nth-child(4) > .molw04z").click();
//     cy.wait(1000);

//     // Visit Newsroom
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a").then(
//       ($link) => {
//         $link.removeAttr("target");
//         $link.attr("rel", "noopener noreferrer");
//       }
//     );
//     cy.get(".bju7flq > .ColBox-sc-1p3mafh-0 > :nth-child(5) > a").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");

//     // Visit Careers
//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get(".bCVzGv > :nth-child(5) > .light-font").then(($link) => {
//       $link.removeAttr("target");
//       $link.attr("rel", "noopener noreferrer");
//     });
//     cy.get(".bCVzGv > :nth-child(5) > .light-font").click();
//     cy.wait(3000);

//     // Visit Become a Driver
//     cy.get(".b4kal56").click();
//     cy.wait(1500);
//     cy.contains("Become a driver").click({ force: true });
//     cy.wait(3000);

//     // Visit Download App
//     cy.get(".b2nifjw").click();
//     cy.wait(1500);
//     cy.get("#dwnld_link").click();
//     cy.wait(3000);
//     cy.visit("https://indrive.com/en/home/");
//   });
// });
