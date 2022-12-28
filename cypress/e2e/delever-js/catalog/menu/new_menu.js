class NewMenu {
  elements = {
    addButton: () => cy.contains("+ Добавит"),

    menuName: () => cy.get("#name"),

    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };
}

module.exports = new NewMenu();
