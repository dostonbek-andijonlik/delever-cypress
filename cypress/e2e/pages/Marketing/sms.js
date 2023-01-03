class SMS{
    elements = {
        smsPage: () => cy.get(':nth-child(2) > a > .sidebarItem'),
        search: () => cy.get('.bg-white > .flex > .flex-1'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        
        //client
        periodClient: () => cy.get('.gap-4 > .space-x-2 > .text-sm'),
        fromOrderQuantityClient: () => cy.get(':nth-child(3) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        toOrderQuantityClient: () => cy.get(':nth-child(4) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        fromOrderPriceClient: () => cy.get(':nth-child(5) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        toOrderPriceClient: () => cy.get(':nth-child(6) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),

        // corier
        couriersSubpage: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1'), 
        
        // send message
        sendMessage: () => cy.get('.items-center > .text-sm'),
        messageField: () => cy.get('.modal-component > .bg-white > .w-full'),
        cancelButton: () => cy.get('.grid > :nth-child(1) > .button > .flex'),
        sendButton: () => cy.get(':nth-child(2) > .button > .flex'),
    }
}

module.exports = new SMS();