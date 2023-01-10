///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import Category from "../../pages/catalog/categories/get_categories";

import NewCategory from "../../pages/catalog/categories/new_category"

describe("Catalog categories", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open category page", () => {
    loginPage.login();
    SideBar.catalog();
    Category.openPage();
  });

  it("Update category", () => {
    loginPage.login();
    SideBar.catalog();
    Category.editCategory(
      "Rus Name",
      "English Name",
      "Uz Name",
      "Kombo"
      );
  });

  it("Add Category", () => {
    loginPage.login();
    SideBar.catalog();
    NewCategory.addCategory(
      "Rus Name",
      "Eng Name",
      "Uzbek Name",
      3
    );
  });

  it("Delete Category", () => {
    loginPage.login();
    SideBar.catalog();
    Category.deleteCategory();
  });

  it.only("Next Page", ()=>{
    loginPage.login();
    SideBar.catalog();
    Category.nextPage()
  })
});
