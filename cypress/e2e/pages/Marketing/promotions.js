class Promotions{
    elements = {
        searchPromotions: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        addPromotions:  () => cy.get('.button'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        deleteYes: () => cy.get(':nth-child(2) > .button > .flex'),
        deleteNo: () => cy.get('.grid > :nth-child(1) > .button > .flex'),
        // add promotion page
        addPhoto: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .mb-14 > div.col-span-3 > .flex > .Gallery > .mt-2'),
        startDate: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .mb-14 > .col-span-9 > .grid > :nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #start_date'),
        endDate: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .mb-14 > .col-span-9 > .grid > :nth-child(3) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #end_date'), 
        // ru 
        nameRU: () => cy.get('#title_ru'),
        descriptionRU: () => cy.get('#description_ru'),
        // en
        nameEN: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1').click().get('#title_en'),
        descriptionEN: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1').click().get('#desctiption_en'),
        // uz
        nameUZ: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1').click().get('#title_uz'),
        descriptionUZ: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1').click().get('#desctiption_uz'),
        createButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
       }
}

module.exports = new Promotions()
