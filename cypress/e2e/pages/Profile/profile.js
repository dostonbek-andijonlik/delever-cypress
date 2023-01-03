class Profile{
    elements = {
        // Statistics
        periodField: () => cy.get('.border > .MuiSvgIcon-root'),
        saveButton: () =>  cy.get(':nth-child(2) > :nth-child(1) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > :nth-child(1) > .button'),
        //Personal Info
        personalInfoPage: () => cy.get('.flex > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        nameField: () => cy.get('#name'),
        loginField: () => cy.get('#login'),
        phoneNumber: () => cy.get('#phone'),
        changePersonalInfo: () => cy.get('.sticky > :nth-child(1) > .button'),

        //Change Password
        passwordPage: () => cy.get('.p-4 > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        oldPassword: () => cy.get('#old_password'),
        newPassword: () => cy.get('#new_password'),
        confirmPassword: () => cy.get('#confirm_password'),
        changePassword: () => cy.get('.sticky > :nth-child(1) > .button'),
    }
}

module.exports = new Profile()