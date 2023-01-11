class Menu {
  elements = {
    tagsOpenPage: () => cy.get(':nth-child(7) > a > .sidebarItem'),
    addButton: () => cy.get('.button > .items-center'),
    ruTitle: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    enField: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1'),
    enTitle: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    uzField: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1'),
    uzTitle: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    chooseColor: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(4) > .text-body > .basic-single > .select__control > .select__value-container'),
    actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),

    search: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    tableBody: () => cy.get('.MuiTableBody-root'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editTag: () => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),


    deleteButton: () => cy.get('[tabindex="-1"] > .ml-2'),
  }

  searchTag(
    tag_name
  ){
    cy.wait(1000)
    this.elements.search().click().type(tag_name).type('{enter}')
    this.elements.tableBody().should('contain', tag_name)
  }


  createTag(
    uzName,
    ruName, 
    enName,
    color
  ){
    this.elements.addButton().click()
    cy.wait(500)
    this.elements.ruTitle().click().type(ruName).type('{enter}')
    
    this.elements.chooseColor().click()
    cy.contains(color).click({force:true})
    cy.wait(500)
    this.elements.uzField().click({force:true})
    this.elements.uzTitle().click({force:true}).type(uzName)
    cy.wait(500)
    this.elements.enField().click({force:true})
    this.elements.enTitle().click({force:true}).type(enName)
    // cy.wait(1000) 
    this.elements.saveButton().click()
    
    // this.elements.tagsOpenPage().click() }
  }

  editTag(
    tag_name,
    enNewName,
    ruNewName,
    uzNewName,
    newColor,
  ){
    this.elements.search().click().type(tag_name).type('{enter}')
    cy.wait(1000)
    this.elements.actions().click()
    this.elements.editTag().click()  

    this.elements.ruTitle().click().clear().type(ruNewName)
    
    this.elements.chooseColor().click()
    cy.contains(newColor).click({force:true})
    cy.wait(500)
    this.elements.uzField().click({force:true})
    this.elements.uzTitle().click({force:true}).clear().type(uzNewName)
    cy.wait(500)
    this.elements.enField().click({force:true})
    this.elements.enTitle().click({force:true}).clear().type(enNewName)
    this.elements.saveButton().click()  

  }


  deleteTag(
    tag_name
  ){
    this.elements.search().click().type(tag_name).type('{enter}')
    cy.wait(1000)
    this.elements.actions().click()
    this.elements.deleteButton().click()
    cy.contains('Да').click()
    this.elements.tableBody().should('not.have.value', tag_name)
    this.elements.search().click().clear()
  }
};

module.exports = new Menu();