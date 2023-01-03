class AcceptanceReason{
    elements = {
        acceptancePage: () => cy.get(':nth-child(6) > .spanITem > .undefined > .w-full > .-rotate-180 > .MuiSvgIcon-root').click().get(':nth-child(6) > .spanITem > .undefined > .flex-col > :nth-child(3) > a > .sidebarItem > span'),
        search: cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        addButton: cy.get('.button'),
        itemsLimit: cy.get(':nth-child(6) > .spanITem > .undefined > .flex-col > :nth-child(1) > a > .sidebarItem'),
        previousPage: cy.get('.MuiPagination-ul > :nth-child(1)'),
        nextPage: cy.get('.MuiPagination-ul > :nth-child(3)'),
        actions: cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: cy.get('[tabindex="0"] > .ml-2'),
        nameField: cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
    }
}

module.exports = new AcceptanceReason()