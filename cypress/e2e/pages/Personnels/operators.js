class Operators{
    elements = {
        searchOperator: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex'),
        addOperator: () => cy.get('.items-center > .fill-current > .MuiSvgIcon-root'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get(':nth-child(5) > .MuiButtonBase-root'),
        previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1) > .MuiButtonBase-root'),
        actions: () => cy.get(':nth-child(1) > :nth-child(4) > .ActionMenu > .MuiButtonBase-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        modifyTable: () => cy.get('.transition-all > .fill-current > .MuiSvgIcon-root'),
        // for new order page 
        fullNameField: () => cy.get('.bg-white > .flex > .MuiSvgIcon-root'),
        phoneNumberField: () => cy.get('#phone'),
        loginField: () => cy.get(':nth-child(6) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        passwordField: () => cy.get(':nth-child(8) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex'),
        chooseRole: () => cy.get('.select__indicator'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () =>  cy.get(':nth-child(1) > .button'),
    }
    

}


module.exports = new operatorsPage()
