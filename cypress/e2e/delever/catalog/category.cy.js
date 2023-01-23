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
    cy.visit("https://test.admin.delever.uz");
    loginPage.login();
    cy.viewport(1900, 700)
    SideBar.catalog();
  });

  it("Open category page", () => {
    Category.openPage();
  });

  it("Add Category", () => {
    NewCategory.addCategory(
      "Rus Name",
      "Eng Name",
      "Uzbek Name",
      3
    );
  });  

  it("Edit category", () => {
    Category.editCategory(
      "Rus Name",
      "Rus Name Edited",
      "English Name Edited",
      "Uz Name Edited"
      );
  });



  it('Add Subcategory', () => {
    cy.wait(1000)
    NewCategory.addSubcategory(
      "Субкат Ру",
      "Субкат описание",
      "Uz Subcat",
      "Uz Desc ",
      "En Subcat",
      "En Desc ",
      "2",
      "Rus Name Edited",
      imagesPath     
    )
  });


  it('Edit SubCategory', () => {
    cy.wait(1000)
    NewCategory.editSubcategory(
      "Редак Субкат Ру",
      "Редак Субкат описание",
      "Edited Uz Subcat",
      "Edited Uz Desc ",
      "Edited En Subcat",
      "Edited En Desc ",
      "2",
      "Rus Name Edited",
      "Субкат Ру"

    )
  });
  
  it('Delete Subcategory', () => {
    cy.wait(1000)
    NewCategory.deleteSubcategory(
      "Редак Субкат Ру"
    )
    
  });

  
  it("Delete Category", () => {
    cy.wait(2000)
    Category.deleteCategory("Rus Name Edited");
  });
});
