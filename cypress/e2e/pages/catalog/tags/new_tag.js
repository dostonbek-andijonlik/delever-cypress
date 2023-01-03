class NewTag {
  elements = {
    addButton: () => cy.contains("+ Добавит"),

    // ru title
    ruTitle: () => cy.get("#title_ru"),

    // en title
    ruTitle: () => cy.get("#title_en"),

    // uz title
    ruTitle: () => cy.get("#title_uz"),

    tagName: () => cy.get("#name"),

    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };
}

module.exports = new NewTag();
