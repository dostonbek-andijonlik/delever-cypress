class Aggregator{
    elements = {
        aggregatorPage: () => cy.get(':nth-child(3) > a > .sidebarItem > span'),
        searchAggregator: () => cy.get('.bg-white > .flex > .flex-1'),
        addButton: () => cy.get('.button'),
        itemsLimit: () => cy.get('.ml-2'),
        previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1)'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        nameField: () => cy.get(':nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        phoneNumber: () => cy.get('#phone'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
    }
}

module.exports = new Aggregator()
