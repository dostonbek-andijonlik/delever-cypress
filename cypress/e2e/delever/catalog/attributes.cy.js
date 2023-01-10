///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import Attributes from "../../pages/catalog/attributes/get_attributes";

describe("Catalog Attributes", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open attributes page", () => {
    loginPage.login();
    SideBar.catalog();
    Attributes.openPage();
  });

  it("Update attribute", () => {
    loginPage.login();
    SideBar.catalog();
    Attributes.updateAttribute(
      "Menu Name",
      "English Name",
      "Uz Name",
      "rus option name"
      );
  });



  it("Delete attributes", () => {
    loginPage.login();
    SideBar.catalog();
    Attributes.deleteAttrib();
  });

  it.only("Add attribute", () => {
    loginPage.login();
    SideBar.catalog();
    Attributes.addmenu("VIP Menu");
  });
});
