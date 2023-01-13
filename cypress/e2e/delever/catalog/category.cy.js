///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "../../pages/login/login";

import SideBar from "../../pages/sidebar";

import Category from "../../pages/catalog/categories/get_categories";

import NewCategory from "../../pages/catalog/categories/new_category"


const imagesPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/person.jpg'


describe("Catalog categories", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
    loginPage.login();
    SideBar.catalog();
  });

  it("open category page", () => {
    Category.openPage();
  });

  it("Update category", () => {
    Category.editCategory(
      "Rus Name",
      "English Name",
      "Uz Name",
      "Kombo"
      );
  });

  it("Add Category", () => {
    NewCategory.addCategory(
      "Rus Name",
      "Eng Name",
      "Uzbek Name",
      3
    );
  });

  it("Delete Category", () => {
    Category.deleteCategory();
  });

  it("Next Page", ()=>{
    Category.nextPage()
  })

  it.only('Add Subcategory', () => {
    cy.wait(1000)
    NewCategory.addSubcategory(
      "Субкат Ру",
      "Субкат описание",
      "Uz Subcat",
      "Uz Desc ",
      "En Subcat",
      "En Desc ",
      "2",
      "Сэндвич",
      imagesPath     
    )
  });

  it.only('Edit Category', () => {
    cy.wait(1000)
    NewCategory.editSubcategory(
      "Редак Субкат Ру",
      "Редак Субкат описание",
      "Edited Uz Subcat",
      "Edited Uz Desc ",
      "Edited En Subcat",
      "Edited En Desc ",
      "2",
      "Хотдог",
      "Субкат Ру"

    )
  });
  
  it.only('Delete Subcategory', () => {
    cy.wait(1000)
    NewCategory.deleteSubcategory(
      "Редак Субкат Ру"
    )
    
  });
});
