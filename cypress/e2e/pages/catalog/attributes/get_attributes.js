class Attributes {
  elements = {
    attributesOpenPage: () => cy.get(':nth-child(4) > a > .sidebarItem'),

    addButton: () => cy.get('.button'),

    searchForattributes: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editAttributes: () => cy.get(':nth-child(1) > :nth-child(5) > .flex > .ActionMenu > .MuiButtonBase-root'),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    rusName: () => cy.get('#title_ru'),

    ruName: () => cy.get('#full-width-tab-0'),

    engPage: () => cy.get('#full-width-tab-1'),
    
    enName: () => cy.get('#title_en'),

    uzPage: () => cy.get('#full-width-tab-2'),

    uzName: () => cy.get('#title_uz'),

    deleteOption: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4 > :nth-child(1) > .focus\\:outline-none'),

    addOption: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4'),

    // rusWriteNewOption: () => cy.get('#input'),

    writeOption: () =>cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4 > :nth-child(1) > .w-5\/6 > :nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex'),

    deleteAttribute: () => cy.get('[tabindex="-1"] > .ml-2'),

    confirmButton: () => cy.get(':nth-child(2) > .button'),

    nextPage: () => cy.get(':nth-child(4) > .MuiButtonBase-root'),

    // cy.get('.MuiList-root > [tabindex="-1"]')
  }

  openPage(){
    this.elements.attributesOpenPage().click()
  }

  updateAttribute(ruName, engName, uzName, option1){
    this.elements.attributesOpenPage().click()
    this.elements.editAttributes().click()
    this.elements.reductirovate().click()
    this.elements.rusName().clear().type(ruName)
    this.elements.engPage().click()
    this.elements.enName().clear().type(engName, {force: true})
    this.elements.uzPage().click({force: true})
    this.elements.uzName().clear().type(uzName, {force: true})
    this.elements.deleteOption().click()
    this.elements.deleteOption().click()
    this.elements.deleteOption().click()
    this.elements.addOption().find('button').click({force: true})
    this.elements.addOption().find('button').click({force: true})
    this.elements.addOption().find('button').click({force: true})
    this.elements.rusName().click({force: true})
    // this.elements.rusWriteNewOption().type(rusOption)
    this.elements.writeOption().type(option1)
  }

  deleteAttrib(){
    this.elements.attributesOpenPage().click()
    this.elements.editAttributes().click()
    this.elements.deleteAttribute().click()
    this.elements.confirmButton().click()
    this.elements.nextPage().click({force: true})
  }

  addAttribute(){
    this.elements.addButton().click({force: true})
  }
}

module.exports = new Attributes();