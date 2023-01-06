///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "../../pages/login/login";
import SideBars from "../../pages/sidebar"
import AddClient from "../../pages/Clients/new_client"
describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });
  
  it("new client page", () => {
    loginPage.login()
    SideBars.clients()
    AddClient.add()
  })

  it('fill in the inputs', () => {
    loginPage.login()
    SideBars.clients()
    AddClient.add()
    AddClient.fillIn('First', "Last", "098765423")
  })
})