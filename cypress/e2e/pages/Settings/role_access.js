class RoleAndAccess{
    elements = {
        roleAndAccessPage: () => cy.get(':nth-child(4) > a > .sidebarItem > span'),
        addButton: () => cy.get('.button'),
        itemsLimit: () => cy.get('.ml-2'),
        previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1)'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        userTypeFilter: () => cy.get('.select__indicator'),
        actions: () => cy.get(':nth-child(1) > :nth-child(3) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        nameField: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        chooseUserType: () => cy.get('.select__value-container'),
        moveButtons: () =>cy.get('.select__value-container'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
    }
}

module.exports = new RoleAndAccess()