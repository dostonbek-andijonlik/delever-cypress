class Popups{
    elements = {
        popupPage: () => cy.get(':nth-child(4) > a > .sidebarItem'),
        search: () => cy.get('input'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        // add Popup
        addPopup:  () => cy.get('.button'),
        popupPeriod: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(3) > .mr-4 > .w-6\/8 > :nth-child(1) > .border > .text-sm'),        // ru
        fromTime: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(3) > .ml-4 > .w-3\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #from_time'),
        toTime: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(3) > :nth-child(3) > .w-3\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #to_time'),
        link: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(4) > :nth-child(2) > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #url'),
        status: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(6) > .w-1\/3 > .w-3\/4 > #active'),
        priority: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(6) > :nth-child(2) > :nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #order_no'),
        addPhoto: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-2 > .h-full > .Gallery > .mt-2'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),


        // ru
        nameRU: () => cy.get('#title_ru'),
        descriptionRU: () => cy.get('#about_ru'),
        buttonTextRU: () => cy.get('#button_ru'),

        // uz
        nameUZ: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1').click().get('#title_uz'),
        descriptionUZ: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1').click().get('#about_uz'),
        buttonTextUZ: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1').click().get('#button_uz'),

        // en
        nameEN: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1').click().get('#title_en'),
        descriptionEN: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1').click().get('#about_en'),
        buttonTextEN: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1').click().get('#button_en'),
    }
}

module.exports = new Popups()