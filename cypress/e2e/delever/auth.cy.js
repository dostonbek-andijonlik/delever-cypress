// /<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
import loginPage from "../pages/login/login";

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("Logging in", () => {
    loginPage.login();
  });
});

// cy.go('back');
// const login1 = new loginPage();
// login1.getLogin.type('oybek3');
// login1.getPassword.type("oybek1024");
// loggin.obj.login.type("oybek")
// cy.get('#login').type("oybek3");
// cy.get("#password").type("oybek1024{enter}");
// cy.get('.mb-5 > :nth-child(1) > .p-4').click()  //branches count dashboard
// cy.go('back');
// cy.get(':nth-child(2) > .p-4').click()  // Clients count
// cy.go('back');
// cy.get('.mb-5 > :nth-child(3) > .p-4').click() // Couriers Count
// cy.go('back');
// cy.get('.w-16 > :nth-child(2) > a.flex > .active-sidebar').click()  //Orders
