Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });


import CouriersType from "../../pages/Personnel/courier_types.js"
import loginPage from "../../pages/login/login.js"
import SideBars from "../../pages/sidebar.js"


describe('Couriers types', () => {
    it.only('Login', () => {
      cy.visit('https://test.admin.delever.uz')
      loginPage.login()      
      SideBars.elements.personnelPage().click()
      cy.wait(2000)
      CouriersType.elements.courierTypesPage().click()
    });
  
  
    it('Search Courier Type', () => {
      cy.wait(1000)
      CouriersType.searchCourierType("auto")      
    });
  
  
    it('Change page items limit', () => {
      cy.wait(1000)
      CouriersType.changeitemsLimit(50)
    });
  
  
    it.only('Adding Courier Type', () => { 

        cy.wait(1000)     
        CouriersType.addCourierType(
          "cypress",
          "12",
          "150"
        )
    });
  
  
    it.only('Edit Courier Type', () => {
        cy.wait(2000)
        CouriersType.editCourierType(
          "cypressEdited",
          "133",
          "1234"
        )
    });
  
  
    it.only('Delete Courier', () => {
      cy.wait(1000)
        CouriersType.deleteCourierType("cypressEdited")
    });

  });