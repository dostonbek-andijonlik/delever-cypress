class Client {
  elements = {
    // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    // Pagination
    nextPage: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    //search for clients
    searchForClients: () => cy.get('.focus-within\:ring-2 > .bg-white'),

    paginationNumber: () => cy.get('.py-1\.5'),

    pageNumber: () => cy.get(':nth-child(3) > .MuiButtonBase-root'),

    transitionAll: () => cy.get('.transition-all > .fill-current > .MuiSvgIcon-root > path'),

    action: () => cy.get(':nth-child(3) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root > path'), 

    edit: () => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),

    delete: () => cy.get('.MuiList-root > [tabindex="-1"]'),

    nextPage: () => cy.get(':nth-child(9) > .MuiButtonBase-root'),

    previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1)'),
    
  };
}
