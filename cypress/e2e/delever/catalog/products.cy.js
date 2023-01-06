///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

// import GetAllProducts from "../../pages/catalog/tovar/get_tovar";
import GetAllProducts from "../../pages/catalog/tovar/get_tovar"

describe("Marketing Popup", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open products page", () => {
    loginPage.login();
    SideBar.catalog()
    GetAllProducts.open()
  });

  it.only('Update Product', () =>{
    loginPage.login();
    SideBar.catalog()
    GetAllProducts.editProduct()
  })

});
