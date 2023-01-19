Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import SideBar from "../../pages/sidebar";

import Attributes from "../../pages/catalog/attributes/get_attributes";

describe("Catalog Attributes", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
    loginPage.login();
    SideBar.catalog();
  });

  it("open attributes page", () => {
    Attributes.openPage();
  });
  it("Add attribute", () => {
    Attributes.addAttribute(
      "Атрибут элементы",
      "это описание элементы",
      "атрибут1",
      "атрибут1",
      "Cypress first attribute",
      "This is cypress description",
      "first attribute",
      "second attribute",
      "Saypresga atribyut",
      "Bu saypresga deskripshn",
      "nomer odin atribut1",
      "nomer dva atribut2"
    );
  });

  it("Update attribute", () => {
    Attributes.updateAttribute(
      "отредактированный атрибут",
      "Атрибут элементы",
      "после добавленную опцию",
      "post added option",
      "yangi atribut"
    );
  });

  it("Delete attributes", () => {
    Attributes.deleteAttrib("отредактированный атрибут");
  });
});
