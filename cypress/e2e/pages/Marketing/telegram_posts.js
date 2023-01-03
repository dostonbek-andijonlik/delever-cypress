class TelegramPost{
    elements = {
        telegramPostsPage: () => cy.get(':nth-child(6) > a > .sidebarItem'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        search: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        chooseContentType: () => cy.get('.select__indicator'),

        // add telegram post
        addTelegeramPost: () => cy.get('.button'),
        messageField: () => cy.get('.p-4 > .w-full'),
        addPhoto: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .my-4 > .Gallery > .mt-2'),
        addVideo: () => cy.get('.Mui-selected > .MuiTab-wrapper > .px-1').click().get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .my-4 > .Gallery > .mt-2'),
        addGIF: () => cy.get('.Mui-selected > .MuiTab-wrapper > .px-1').click().get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .my-4 > .Gallery > .mt-2'),
        addButton: () => cy.get('.button'),
    }
}

module.exports = new TelegramPost()