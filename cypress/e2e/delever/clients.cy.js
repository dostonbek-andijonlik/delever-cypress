///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("clients", () => {
    //Type username
    cy.get("#login").type("oybek3");

    //Type Password
    cy.wait(3000);
    cy.get("#password").type("oybek1024");

    //show password
    cy.get(".cursor-pointer > .MuiSvgIcon-root > path").click();
    cy.wait(3000);
    cy.get(".button").click();

    //Open Client's page
    cy.get(":nth-child(3) > a.flex > .active-sidebar").click();

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

    //Search client
    cy.get('.focus-within\:ring-2 > .bg-white > .flex').type('FirstName')
  });
});
