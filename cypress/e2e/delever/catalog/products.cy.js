///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import GetAllProducts from "../../pages/catalog/tovar/get_tovar";

import Catalog from "../../pages/catalog/tovar/new_tovar";

describe("Catalog Product", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
    loginPage.login();
    SideBar.catalog();
    
  });

  it("open products page", () => {
   GetAllProducts.open();
  });

  it("Add Simple Product", () => {
    GetAllProducts.nextPage1();
    Catalog.addSimpleProduct(
      "Rus Name",
      "Rus Desc",
      4,
      12000,
      18000,
      "Englis Title",
      "English desc",
      "Uzbek Name",
      "Uzbek desc"
    );
    });
  it("Update Simple Product", () => {
    GetAllProducts.editProduct(
      "Rus Name",
      "English Name",
      "Uz Name",
      1500,
      3500
    );
  });

  it("Delete Simple Product", () => {
    GetAllProducts.deleteSimpleProduct();
  });


  it("Pagination Counts", () => {
    GetAllProducts.itemLimit();
  });

  it("Next Page", () => {
    GetAllProducts.nextPage1();
  });

  it("Add recommendation for products", () => {
    GetAllProducts.addRecommendedProd()
  })

  it("Add modifier to simple product", () => {
    GetAllProducts.addModifier(
      2,
      5,
      "modificator{enter}"
    )
  })

  it("Delete linked product", () => {
    GetAllProducts.deleteLinkedProduct()
  })

  it("Delete Modifier product",  () => {
    GetAllProducts.deleteModifier()
  })

  it("Update Modifier", () => {
    GetAllProducts.editModifier(
      1,
      4,
      "modificator"
    )
  })

  it.only("Create modifiers", () => {
    Catalog.createModificator(
      "Russian Name",
      "Russian Descr",
      3
    )
  })

});