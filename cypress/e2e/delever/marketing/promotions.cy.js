Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
  import loginPage from "../../pages/login/login.js"
  import SideBars from "../../pages/sidebar.js"
  import Promotions from '../../pages/Marketing/promotions'
  
  const imagesPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/person.jpg'
  
  
  describe('Promotions', () => {
    
    beforeEach(() => {
      //login
      cy.visit('https://test.admin.delever.uz')
      loginPage.login()      
      SideBars.elements.marketingPage().click()
    });
  
  
  
  
    it('Change Limit', () => {
      cy.wait(2000)
        Promotions.changeitemsLimit(30)
    });
  
    it('Create Promotion', () => {
        cy.wait(1000)
        Promotions.addPromotion(
          "сайпрес",
          "сайпресс автоматизация",
          "cypress",
          "cypress yaxshi",
          "cypress",
          "cypress is good",
          imagesPath
        )
    });
  
    it('Search Promotion', () => {
      cy.wait(1000)
      Promotions.searchPromotion("сайпрес")
    });
  
    it('Edit promotion', () => {
        cy.wait(2000)
        Promotions.editPromotion(
          "сайпрес редак",
          "сайпресс автоматизация редак",
          "cypress edited",
          "cypress yaxshi  edted",
          "cypress edited",
          "cypress is good edited",
        )
    });
  
    it('Delete Promotion', () => {
        cy.wait(2000)
        Promotions.deletePromotion("сайпрес")
    });
  
  
  
  });
  