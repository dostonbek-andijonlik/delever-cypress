class Couriers {
  elements = {
    personalOpenPage: () => cy.get('.is-active-sidebar > .active-sidebar'),

    couriersOpenPage: () => cy.get('.is-active > .sidebarItem'),

    searchForCouriers: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editCouriers: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    deleteCouriers: () => cy.get('[tabindex="-1"] > .ml-2'),
  }
}

module.exports = new Couriers();