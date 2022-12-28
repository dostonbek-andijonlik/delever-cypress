class Client {
  elements = {
    // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    // Add button
    addButton: () => cy.get(".button"),

    // FirstName
    firstName: () => cy.get("#first_name"),

    // LastName
    lastName: () => cy.get("#last_name"),

    // Phone Number
    phoneNumber: () => cy.get("#phone"),

    // Type Client's
    clientTypes: () => cy.get(".select__value-container"),

    // Type Client's
    b2c: () => cy.get("#react-select-2-option-0"),

    // Save Button
    saveButton: () => cy.get(":nth-child(2) > .button"),

    // Pagination
    nextPage: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    
  };
}
