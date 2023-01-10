class Menu {
  elements = {
    menuOpenPage: () => cy.get(':nth-child(3) > a > .sidebarItem'),

    menuName: () => cy.get('#name'),

    menuProducts: () => cy.get('#full-width-tab-1'),

    addProductToMenu: () => cy.get('.pl-4 > :nth-child(1) > .button > .items-center'),

    selecCheckbox: () => cy.get('/html/body/div[5]//div/div[1]'),

    searchForMenu: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex > .flex-1'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editMenu: () => cy.get(':nth-child(1) > :nth-child(5) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label'),

    saveButton: () => cy.get('.justify-end > .gap-5 > :nth-child(2) > .button'),

    save2Button: () => cy.get(':nth-child(2) > .button'),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    deleteButton: () => cy.get('[tabindex="-1"] > .ml-2'),

    // confirButton: () => 
  }

  openMenu(){
    this.elements.menuOpenPage().click()
  }

  updateMenu(name){
    this.elements.menuOpenPage().click()
    this.elements.editMenu().click()
    // this.elements.menuName().clear().type(name)
    this.elements.menuProducts().click()
    // this.elements.addProductToMenu().click({multiple: true})
    // this.elements.selecCheckbox().check()
    this.elements.save2Button().click()
  }

  deleteMenu(){
    this.elements.menuOpenPage().click()
    this.elements.editMenu().click()
    this.elements.deleteButton().click()
    // this.

  }
}

module.exports = new Menu();