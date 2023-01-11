class Tag {
  elements = {
    addButton: () => cy.contains("+ Добавит"),
    tags_page: () => cy.get(':nth-child(7) > a > .sidebarItem'),
    // ru title
    ruTitle: () => cy.get("#title_ru"),
    search: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    // en title
    enTitle: () => cy.get("#title_en"),

    // uz title
    uzTitle: () => cy.get("#title_uz"),

    tagName: () => cy.get("#name"),

    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };


}

module.exports = new Tag();
