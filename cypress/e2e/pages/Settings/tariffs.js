class Tariffs{
    elements = {
        search: () => cy.get('.bg-white > .flex > .flex-1'),
        actions: () => cy.get(':nth-child(3) > :nth-child(5) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),

        // add tariff
        addTariff: () => cy.get('.button'),
        nameField: () => cy.get(':nth-child(1) > .col-span-2 > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        type: () => cy.get('.select__indicator'),
        basePrice: () => cy.get('#base_price'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
   }
}


module.exports = new Tariffs()