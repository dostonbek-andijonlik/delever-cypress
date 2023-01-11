Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
  import loginPage from "../../pages/login/login.js"
  import SideBars from "../../pages/sidebar.js"
  import getBrands from '../../pages/catalog/brand/get_brands'
  
  const imagesPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/logo.jpg'
  
  
  describe('Brands', () => {
  
    beforeEach(() => {
      //login
      cy.visit('https://test.admin.delever.uz')
      loginPage.login()      
      SideBars.elements.catalog().click()
      getBrands.elements.brandOpenPage().click()
    });
  
    it('Search Brand', () => {
      cy.wait(1000)
      getBrands.searchBrand(
        'test'
      )
    });
  
    it('Add Brand', () => {
      cy.wait(1000)
      getBrands.addBrand(
        "Cypress Amigo",
        '1',
        imagesPath
      )
    });
  
    it('Edit Brand', () => {
      cy.wait(1000)
      getBrands.editBrand(
        "Cypress Amigo",
        "Amigo Edited",
        '2',
        imagesPath,
      )
    });
  
    
    it('Delete Brand', () => {
      cy.wait(1000)
      getBrands.deleteBrand("Amigo Edited")
    });
  
  
  });
  