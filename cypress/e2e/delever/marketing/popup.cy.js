///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import Popups from "../../pages/Marketing/popup";

describe("Marketing Popup", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open popup page", () => {
    loginPage.login();
    SideBar.marketing();
    Popups.openPage();
  });

  it("Item Limit", () => {
    loginPage.login();
    SideBar.marketing();
    Popups.openPage();
    Popups.itemLimit();
  });

  it("Update popup", () => {
    loginPage.login();
    SideBar.marketing();
    Popups.openPage();
    Popups.updatePopup(
      "Rus terminology",
      "Rus Description here",
      "0001",
      "2359",
      "English Name",
      "English description",
      "Uzbek Name",
      "Uzbek Description",
      9
    );
  });
});
