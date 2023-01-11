Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
  import loginPage from "../../pages/login/login.js"
  import SideBars from "../../pages/sidebar.js"
  import SMS from '../../pages/Marketing/sms'
  
  
  describe('SMS', () => { 
    
    beforeEach(() => {
      //logine
      cy.visit('https://test.admin.delever.uz')
      loginPage.login()      
      SideBars.elements.marketingPage().click()
      SMS.elements.smsPage().click()
    });
  
  
  
  
  
  
   
  
    it('Send SMS to CLient', () => {
        cy.wait(1000)
        SMS.sendToClient(
          "Test Cypress Message",
          "I am TESTER"
        )
    });
  
  
    it('Filter Clients by order price', () => {
        cy.wait(1000)
        SMS.clientOrderPriceFilter(
          '12',
          '140000'
        )
    });
  
    it('Filter Clients by order quantity ', () => {
      cy.wait(1000)
        SMS.clientOrderQuantityFilter(
          '10',
          '200'
        )
    });
  
  
    it.only('Choose Client Period', () => {
        cy.wait(1000)
        SMS.clientDatePicker(
          "13 января 2023 г.",
          "25 февраля 2023 г."
        )
    });
  
    it('Send SMS to Courier', () => {
      cy.wait(1000)
      SMS.sendToCourier(
        "Hello Courier, this is test message from Cypress",
        "Fast"
      )
  });
  
  
  
  });