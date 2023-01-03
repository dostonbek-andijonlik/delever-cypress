class Notifications{
    elements ={
        notificationsPage: () => cy.get(':nth-child(3) > a > .sidebarItem'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        // add notification
        addNotification: () => cy.get('.button'),        
        receiverType: () => cy.get('.select__indicator'),
        nameField: () => cy.get('.Input > input'),
        descriptionField: () => cy.get(':nth-child(3) > .w-2\/4'),
        addButton: () => cy.get('.button'),
        totalQuantity: () => cy.get('.flex-1'),
    }
}

module.exports = new Notifications()
