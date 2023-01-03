class Click{
    elements = {
        clickPage: () => cy.get(':nth-child(2) > .spanITem > .undefined > .w-full > :nth-child(1)').click().get('.flex-col > :nth-child(4) > a > .sidebarItem'),
        search: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(5) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        // add click 
        addPaymeCredential: () => cy.get('.button'),
        chooseBranch: () => cy.get('.select__value-container'),
        keyField: () => cy.get(':nth-child(1) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        serviceID: () => cy.get(':nth-child(2) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        merchantID: () => cy.get(':nth-child(2) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        userMerchantID: () => cy.get(':nth-child(3) > .col-span-2 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'), 
    }
}


module.exports = new Click()
