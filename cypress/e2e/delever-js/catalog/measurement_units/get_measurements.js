class Measurement {
  elements = {
    measureOpenPage: () => cy.get('.is-active > .sidebarItem'),

    searchForMeasurement: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editMeasurement: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    deleteMeasurement: () => cy.get('[tabindex="-1"] > .ml-2'),
  }
}

module.exports = new Measurement();