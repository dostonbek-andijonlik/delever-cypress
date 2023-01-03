class SMSIntegration{
    elements = {
        smsPage: () => cy.get(':nth-child(6) > a > .sidebarItem'),
        nameField: () => cy.get('#name'),
        loginField: () => cy.get('#login'),
        passwordField: () => cy.get('#password'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
    }
}

module.exports = new SMSIntegration()