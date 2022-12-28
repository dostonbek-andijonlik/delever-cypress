class NewMeasurement {
  elements = {
    addButton: () => cy.contains("+ Добавит"),

    measurementUnit: () =>
      cy.get(
        "#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(2) > .text-body > .basic-single > .select__control > .select__value-container"
      ),

    kgMeasurement: () => cy.get("#react-select-4-option-0"),

    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),

    accuracyMeasurement: () =>
      cy.get(
        "#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .grid-cols-2 > .rounded-lg > .p-4 > .grid > :nth-child(6) > .text-body > .basic-single > .select__control > .select__value-container"
      ),

    oneAccuaracy: () => cy.get("#react-select-5-option-0"),
  };
}

module.exports = new NewMeasurement();
