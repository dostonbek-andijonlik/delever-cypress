///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import NewMenu from "../../pages/catalog/menu/new_menu";

import Menu from "../../pages/catalog/menu/get_all_menu"

describe("Catalog categories", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open menu page", () => {
    loginPage.login();
    SideBar.catalog();
    Menu.openMenu();
  });

  it("Update menu", () => {
    loginPage.login();
    SideBar.catalog();
    Menu.updateMenu(
      "Menu Name",
      // "English Name",
      // "Uz Name",
      // "Kombo"
      );
  });

  it("Delete menu", () => {
    loginPage.login();
    SideBar.catalog();
    Menu.deleteMenu(
      // "Rus Name",
      // "Eng Name",
      // "Uzbek Name",
      // 3
    );
  });

  it("Add Menu", () => {
    loginPage.login();
    SideBar.catalog();
    NewMenu.addmenu("VIP Menu");
  });
});
