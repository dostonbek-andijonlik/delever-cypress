class Menu {
  elements = {
    menuOpenPage: () => cy.get('.is-active > .sidebarItem'),

    searchForMenu: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editMenu: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    deleteButton: () => cy.get('[tabindex="-1"] > .ml-2'),
  }
}

module.exports = new Menu();