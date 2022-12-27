class Client {
  elements = {
    // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    // Add button
    addButton: () => cy.get(".button").click(),

    // FirstName
    firstName: () => cy.get("#first_name").type("FirstName"),

    // LastName
    lastName: () => cy.get("#last_name").type("LastName"),

    // Phone Number
    phoneNumber: () => cy.get("#phone").type("+998 90 690 31 32"),

    // Type Client's
    clientTypes: () => cy.get(".select__value-container").click(),

    // Type Client's
    b2c: () => cy.get("#react-select-2-option-0").click({ force: true }),

    // Save Button
    saveButton: () => cy.get(":nth-child(2) > .button").click(),
  };
}
