Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
import Operators  from "../../pages/Personnel/operators.js";
import loginPage from "../../pages/login/login.js"
import SideBars from "../../pages/sidebar.js"
  
context('Operators', () => {
    it('Login', () => {
        cy.visit('https://test.admin.delever.uz')
        loginPage.login()            
        SideBars.elements.personnelPage().click()
    });


    it('Open Operators', () => {
        Operators.searchItem('test')
        
    });


    it('Change page items limit', () => {
        Operators.changeitemsLimit()
    });


    it('Adding operator', () => {
        Operators.addOperator(
            "TestCypress",
            "158968548",
            "testerCypress",
            "123tester321",
            "кассир"          
        )
    });


    it('Edit Operator', () => {
        Operators.editOperator(
            "TestCypressEdited",
            "138466748",
            "testerCypressEdited",
        )
    });

    it('Delete Operator', () => {
        Operators.deleteOperator("TestCypress")
    });
});