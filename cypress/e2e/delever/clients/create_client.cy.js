///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("clients", () => {
 

// // Add button
    // cy.get(".button").click();

    // // FirstName
    // cy.get("#first_name").type("FirstName");

    // // LastName
    // cy.get("#last_name").type("LastName");

    // // Phone Number
    // cy.get("#phone").type("+998 90 690 31 32");

    // // Type Client's
    // cy.get(".select__value-container").click();

    // // Type Client's
    // cy.get("#react-select-2-option-0").click({ force: true });

    // // Save Button
    // cy.get(":nth-child(2) > .button").click();
  })
})