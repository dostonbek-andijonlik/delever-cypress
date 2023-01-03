class NewAttributes {
  elements = {
    addButton: () => cy.contains("+ Добавит"),

    // ru title
    ruTitle: () => cy.get("#title_ru"),

    // ru desc
    ruDesc: () => cy.get("#description_ru"),

    // en title
    ruTitle: () => cy.get("#title_en"),

    // en desc
    ruDesc: () => cy.get("#description_en"),

    // uz title
    ruTitle: () => cy.get("#title_uz"),

    // uz desc
    ruDesc: () => cy.get("#description_uz"),

    //option attribute
    optionAttribute: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4 > .justify-between > .w-5/6 > :nth-child(2) > .alisa-input > .focus-within:ring-2 > .bg-white > .flex"
      ),

    //add button
    addAttributes: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4 > .jss16 > .MuiButtonBase-root"
      ),

    //delete option
    deleteButton: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4 > .justify-between > .focus:outline-none"
      ),

    statusButton: () => cy.get("#title_ru"),

    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };
}

module.exports = new NewAttributes();
