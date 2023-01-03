class Couriers{
    elements = {
        searchCourier: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        addCourier:  () => cy.get('.button'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        modifyTable: () => cy.get('.transition-all > .fill-current > .MuiSvgIcon-root > path'),
        // for add operator page 
        firstNameField: () => cy.get('#first_name'),
        lastNameField: () => cy.get('#last_name'),
        phoneNumberField: () => cy.get('#phone'),
        chooseCourierType: () => cy.get('.select__indicator'),
        maxOrderCountField: () => cy.get('#max_orders_count'),
        status: () => cy.get(':nth-child(1) > .w-3\/4 > .rc-switch'),
        is_wokring: () => cy.get(':nth-child(2) > .w-3\/4 > .rc-switch'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
    }
}


module.exports = new Couriers()