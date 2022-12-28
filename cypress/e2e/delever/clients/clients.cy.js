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

   
    //Search client
    // cy.get('.focus-within\:ring-2 > .bg-white > .flex').type('FirstName', {force: true}) //to be completed

    // Pagination
    // cy.get('.py-1\.5').click({force: true})
    // cy.get('.MuiPaper-root > :nth-child(3)').click() //to be completed

    //Next Page
    // cy.get(':nth-child(2) > .MuiButtonBase-root').click({force: true})
    // cy.wait(2000)
    // cy.get(':nth-child(3) > .MuiButtonBase-root').click({force: true})
    // cy.wait(2000)
    // cy.get(':nth-child(4) > .MuiButtonBase-root').click({force: true})
    // cy.wait(2000)
    // cy.get(':nth-child(5) > .MuiButtonBase-root').click({force: true})
    // cy.wait(2000)
    // cy.get(':nth-child(6) > .MuiButtonBase-root').click({force: true})
    // cy.wait(2000)

    //Catalog
    cy.get(':nth-child(5) > a.flex > .active-sidebar').click()
  });
});
