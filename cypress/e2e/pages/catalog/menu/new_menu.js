class NewMenu {
  elements = {
    menuOpenPage: () => cy.get(':nth-child(3) > a > .sidebarItem'),

    addButton: () => cy.get('.button > .items-center'),

    menuName: () => cy.get("#name"),

    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };

  addmenu(name){
    this.elements.menuOpenPage().click()
    this.elements.addButton().click()
    this.elements.menuName().type(name)
    this.elements.saveButton().click()
  }
}

module.exports = new NewMenu();
