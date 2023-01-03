class Feedback{
    elements = {
        feedbackPage: () => cy.get(':nth-child(6) > .spanITem > .undefined > .w-full > .-rotate-180 > .MuiSvgIcon-root').click().get(':nth-child(6) > .spanITem > .undefined > .flex-col > :nth-child(1) > a > .sidebarItem'),
        searchfeedback:  () => cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        addFeedback:  () => cy.get('.button'),
        itemsLimit: () => cy.get('.button'),
        previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1)'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        descriptionUZ: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        belongsTO:() =>  cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(4) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator'),
        type: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(6) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator'),
        status: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(8) > .rc-switch'),
        descriptionRU: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1').click().get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
    }
}

module.exports = new Feedback()