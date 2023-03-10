Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "../../pages/login/login";

import SideBar from "../../pages/sidebar";

import GetAllProducts from "../../pages/catalog/products/get_tovar";

import Catalog from "../../pages/catalog/products/new_tovar";

const imagesPath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/pizza.jpg";
const varImagePath =
  "C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/food.jpg";

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
    Catalog.addLinkedProductToModif("??????????{enter}");
  });

  // SMY35 General product -------------------------------
  it.only("Add General Product", () => {
    cy.wait(1000);
    GetAllProducts.addGenProd(
      "????????????????",
      "???????????????? ????????????????",
      "cypress",
      "cypress description",
      "cypress uz",
      "cypress desc",
      true,
      "1",
      "??????????????",
      "????????????",
      "suzma",
      "??????????????",
      "?????? ???? ????????????",
      "??????????????????",
      "UZS",
      "33",
      "336",
      "123",
      "321",
      imagesPath
    );
  });

  it("Edit General Product", () => {
    cy.wait(1000);
    GetAllProducts.editGenProd(
      "????????????????",
      "???????????????? ??????????",
      "???????????????? ?????????? ????????????????",
      "cypress edit",
      "cypress description",
      "cypress uz edit",
      "cypress desc",
      true,
      "5",
      "33",
      "336",
      "123",
      "321",
      imagesPath
    );
  });

  it("Delete", () => {
    cy.wait(1000);
    GetAllProducts.deleteGenProd("????????????????");
  });

  it("Link Products", () => {
    cy.wait(2000);
    GetAllProducts.linkProducts("????????????????", "prostoy");
  });

  it("Delete Link Products", () => {
    cy.wait(2000);
    GetAllProducts.deleteLinkedProduct("????????????????", "prostoy");
  });

  it("Add variation", () => {
    cy.wait(1000);
    GetAllProducts.addVariation(
      "????????????????",
      "balmaz",
      "123",
      "12345",
      varImagePath
    );
  });

  it("Link product to Variation", () => {
    cy.wait(1000);
    GetAllProducts.linkProductToVariation("????????????????", "pizza iiko");
  });

  it("Delete Variation", () => {
    cy.wait(1000);
    GetAllProducts.deleteVariation("????????????????", "???????????????? balmaz");
  });

  it("Add modificator to combo", () => {
    GetAllProducts.addModifierToCombo("????????????????", 1, 3);
  });

  it("Update modifier in combo", () => {
    GetAllProducts.updateModificatorInCombo("????????????????", 1, 5);
  });

  it("Delete modifier from combo", () => {
    GetAllProducts.rmvModiffromCombo('????????????????',)
  })
});
