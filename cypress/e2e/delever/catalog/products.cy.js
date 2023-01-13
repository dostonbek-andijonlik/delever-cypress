///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import GetAllProducts, { deleteCharact } from "../../pages/catalog/tovar/get_tovar";

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
    GetAllProducts.addRecommendedProd();
  });

  it("Add modifier to simple product", () => {
    GetAllProducts.addModifier(2, 5, "modificator{enter}");
  });

  it("Delete linked product", () => {
    GetAllProducts.deleteLinkedProduct();
  });

  it("Delete Modifier product", () => {
    GetAllProducts.deleteModifier();
  });

  it("Update Modifier", () => {
    GetAllProducts.editModifier(1, 4, "modificator");
  });

  it("Create modifiers", () => {
    Catalog.createModificator(
      "Russian Name",
      "Russian Descr",
      3,
      12500,
      20000,
      "English Name",
      "English Descr",
      "Uzbek Name",
      "Uzbek Desc"
    );
  });

  it("Update Modificator", () => {
    Catalog.editModifier(
      "Updated Modificator",
      "Updated descr",
      5,
      12350,
      21000,
      "Updated Modif",
      "Updated descr",
      "Updated Name",
      "Updated Desc"
    );
  });

  it("Add recommended product to the modificator", () => {
    Catalog.addLinkedProductToModif(
      "овощи{enter}",
    )
  });

  it("User can add option to characteristics in modifier product", () => {
    Catalog.addOptionToCharacterisitcs()
  })

  it("User can delete characteristics item in modifier product", () => {
    GetAllProducts.deleteCharact()
  })

  it("User can add characteristics item in modifier product", () => {
    GetAllProducts.addCharact()
  })

  it.only("User can delete option in characteristics in modifier product", () => {
    GetAllProducts.deleteCharOption()
  })
});
