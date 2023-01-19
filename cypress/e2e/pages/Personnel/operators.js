

class Operators{
    elements = {
        searchOperator: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        addOperator: () => cy.get('.items-center > .fill-current > .MuiSvgIcon-root'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get(':nth-child(5) > .MuiButtonBase-root'),
        previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1) > .MuiButtonBase-root'),
        actions: () => cy.get(':nth-child(1) > :nth-child(4) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        modifyTable: () => cy.get('.transition-a    ll > .fill-current > .MuiSvgIcon-root'),
        firstTableItem: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2) > div'),
        itemsLimitThirty: () => cy.get('.MuiPaper-root > :nth-child(2)'),
        tableBody: () => cy.get('.MuiTableBody-root'),
        // for new order page 
        
        rolesList: () => cy.get('.select__menu-list'),
        
        fullNameField: () => cy.get(':nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        phoneNumberField: () => cy.get('#phone'),
        loginField: () => cy.get(':nth-child(6) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        passwordField: () => cy.get(':nth-child(8) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex'),
        chooseRole: () => cy.get('.select__indicator'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () =>  cy.get(':nth-child(1) > .button'),
        pages: () => cy.get('.MuiPagination-ul')
    };
    
    searchItem(operatorName){
        this.elements.searchOperator().type(operatorName)
        cy.wait(1000)
        this.elements.tableBody().should('contain', operatorName)
        this.elements.searchOperator().click().clear()
    };

    changeitemsLimit(){
        this.elements.itemsLimit().click()
        this.elements.itemsLimitThirty().click()
        cy.wait(1000)
        this.elements.tableBody().its('length').should('be.lte', 30)
        
    }

    addOperator(
        operatorName,
        phoneNumber,
        login,
        password,
        roleName,
    ){
        this.elements.addOperator().click()
        this.elements.fullNameField().as('fullname').click().type(operatorName)
        this.elements.phoneNumberField().click().type(phoneNumber)
        this.elements.loginField().click().type(login)
        this.elements.passwordField().click().type(password)
        this.elements.chooseRole().click()
        this.elements.rolesList().contains(roleName).click()
        this.elements.saveButton().click()
        cy.wait(2000)
        this.elements.tableBody().should('contain', operatorName)
    }

    deleteOperator(operatorName){
        cy.wait(3000)
        this.elements.actions().click()
        this.elements.actionsDelete().click()
        cy.contains("Да").click()
        cy.wait(2000)
        this.elements.tableBody().should('not.have.value', operatorName)
    }

    editOperator(
        newName,
        newPhoneNumber,
        newLogin,
    ){
        cy.wait(3000)
        this.elements.actions().click()
        this.elements.actionsEdit().click()
        this.elements.fullNameField().click().clear().type(newName)
        this.elements.phoneNumberField().click().clear().type(newPhoneNumber)
        this.elements.loginField().click().clear().type(newLogin)
        this.elements.saveButton().click()
        // should be deleted
        this.elements.cancelButton().click()
        // ---
        //this.elements.tableBody().should('contain', newName)

    }

};


module.exports = new Operators()
