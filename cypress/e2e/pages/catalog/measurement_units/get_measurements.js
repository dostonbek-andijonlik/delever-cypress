class Measurement {
  elements = {
    measureOpenPage: () => cy.get(':nth-child(6) > a > .sidebarItem'),
    actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
    tableBody: () => cy.get('.MuiTableBody-root'),
    addButton: () => cy.get('.button'),
    searchForMeasurement: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    //editMeasurement: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),

    editMeasurementUnit: () => cy.get('[tabindex="0"] > .ml-2'),

    deleteMeasurement: () => cy.get('[tabindex="-1"] > .ml-2'),
    saveButton: () => cy.get(":nth-child(2) > .button"),

    selectionMenuList: () => cy.get('.select__menu-list'),
    cancelButton: () => cy.get(":nth-child(1) > .button"),

    nameRU: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .text-body > .basic-single > .select__control'),
    precisonField: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(6) > .text-body > .basic-single > .select__control'),
    enField: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1'),
    nameEN: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .text-body > .basic-single > .select__control'),
    uzField: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1'),
    nameUZ: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .text-body > .basic-single > .select__control')
  }

  search(
    name
  ){
    this.elements.searchForMeasurement().click().type(name).type('{enter}')
    cy.wait(3000)
    this.elements.tableBody().should('contain', name)
  }


  addMeasurementUnit(
    precision,
    ruName,
    enName,
    uzName
  ){
    this.elements.addButton().click()
    cy.wait(2000)
    this.elements.precisonField().click()
    this.elements.selectionMenuList().contains(precision).click({force:true})
    this.elements.nameRU().click()
    this.elements.selectionMenuList().contains(ruName).click({force:true})
    this.elements.enField().click({force:true})
    this.elements.nameEN().click()
    this.elements.selectionMenuList().contains(enName).click({force:true})
    this.elements.uzField().click({force:true})
    this.elements.nameUZ().click()
    this.elements.selectionMenuList().contains(uzName).click()
    this.elements.saveButton().click()
    cy.wait(3000)
    this.elements.tableBody().should('contain', ruName)    
  }

  editMeasurement(
    name,
    newPrecision
  ){
    this.elements.searchForMeasurement().click().type(name).type('{enter}')
    cy.wait(3000)
    this.elements.actions().click()
    this.elements.editMeasurementUnit().click()
    this.elements.precisonField().click()
    cy.wait(1000)
    this.elements.selectionMenuList().contains(newPrecision).click()
    this.elements.saveButton().click()
  }

  deleteMeasurement(
    name
  ){
    this.elements.searchForMeasurement().click().type(name).type('{enter}')
    cy.wait(3000)
    this.elements.actions().click()
    this.elements.deleteMeasurement().click()
    cy.contains("????").click()
    cy.wait(3000)
    this.elements.tableBody().should('not.have.value', name)

  }

}

module.exports = new Measurement();