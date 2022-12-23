///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://test.admin.delever.uz/#/home/dashboard')
    cy.get('#login').type("oybek3");
    cy.wait(3000)
    cy.get("#password").type("oybek1024");

    cy.wait(3000)
    cy.get('.button').click();
    
    cy.get('.w-16 > :nth-child(2) > a.flex > .active-sidebar').click()  //Orders
    cy.wait(3000)

    cy.get('#full-width-tab-0').click()   //Pre-Order
    cy.wait(3000)

    
    cy.get('#full-width-tab-1').click();  //New
    cy.wait(3000)

    cy.get('#full-width-tab-2').click()  //Operator Accepted
    cy.wait(3000);

    cy.get('#full-width-tab-3').click()  //Заготовка
    cy.wait(3000)

    cy.get('#full-width-tab-4').click()  //Courier on the way
    cy.wait(3000);

    cy.get('#full-width-tab-5').click()  //Finished 
    cy.wait(3000);

    cy.get(':nth-child(2) > .button').click()  //Open filters
    cy.wait(3000)

    cy.get('#customer > .css-8pw2m5-control').click()  // Search for by phone number
    cy.wait(3000);

    //dynamic dropdown
    cy.get('#customer').select()
    // cy.get(':nth-child(3) > :nth-child(1) > .button').click()
    // cy.get('.rc-switch').click()
    // cy.get('.select__control').click()
    // cy.get('#react-select-4-option-3').click()
    // cy.get(':nth-child(2) > :nth-child(1) > .button').click()
    // cy.get(':nth-child(2) > :nth-child(1) > .button').click()  // Bill
    // cy.get('#phone_number').click().type('+998112224455')
    // cy.get('#order_id').click().type(315127)
    // cy.get('.select__indicator').click()
    // cy.get('#react-select-2-option-1').click()
    // cy.get('.button').click()
    // cy.get('.py-1\.5 > .text-black-1').click()
    // cy.get('.MuiPaper-root > :nth-child(2)').click()
  })
})