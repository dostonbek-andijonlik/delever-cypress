class Payme{
    elements = {
        paymePage: () => cy.get(':nth-child(2) > .spanITem > .undefined > .w-full > :nth-child(1)').click().get('.flex-col > :nth-child(1) > a > .sidebarItem > span'),
        search: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get('.bg-lightgray-5 > :nth-child(5) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        // add payme
        addPaymeCredential: () => cy.get('.button'),
        chooseBranch: () =>cy.get('#branch_id'),
        keyField: () => cy.get(':nth-child(1) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        loginField: () => cy.get(':nth-child(1) > .alisa-input'),
        merchantID: () => cy.get(':nth-child(2) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'), 
    }
}

module.exports = new Payme()


