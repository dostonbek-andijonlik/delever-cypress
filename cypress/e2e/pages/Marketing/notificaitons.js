class Notifications{
    elements ={
        notificationsPage: () => cy.get(':nth-child(3) > a > .sidebarItem'),
        itemsLimit: () => cy.get('.ml-2'),
        thirty: () => cy.get('.MuiPaper-root > :nth-child(2)'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        // add notification
        addNotification: () => cy.get('.button'),        
        receiverType: () => cy.get('.select__indicator'),
        courierType: () => cy.get('#react-select-4-option-0'),
        clientType: () => cy.get('#react-select-2-option-1'),
        nameField: () => cy.get('.Input > input'),
        descriptionField: () => cy.get(':nth-child(3) > .w-2\/4'),
        addButton: () => cy.contains('Добавить'),
        totalQuantity: () => cy.get('.flex-1'),
    }

    notif(){
        this.elements.notificationsPage().click()
    }

    itemLimit(){
        this.elements.itemsLimit().click({multiple: true})
        this.elements.thirty().click()
        this.elements.nextPage().click({force: true})
    }

    addNotif(name, desc){
        this.elements.addButton().click({multiple: true})
        // this.elements.receiverType().click()
        // this.elements.courierType().click()
        this.elements.nameField().type(name)
        // this.elements.descriptionField().type(desc)
        this.elements.addButton().click(    )
    }
}

module.exports = new Notifications()
