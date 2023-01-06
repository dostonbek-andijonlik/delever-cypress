///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import Client from "../../pages/Clients/get_clients";
import loginPage from "../../pages/login/login";

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("get all clients", () => {
    loginPage.login();
    Client.getAllClients();
  });

  it("paginate", () => {
    loginPage.login();
    Client.getAllClients();
    Client.clientsCountOnPage();
  });

  it("switch name column", () => {
    loginPage.login();
    Client.getAllClients();
    Client.transition();
  });

  it("action update", () => {
    loginPage.login();
    Client.getAllClients();
    Client.updateClient("FirstName", "LastName", "998999999");
  });

  it("search for client", () => {
    loginPage.login();
    Client.getAllClients();
    Client.searchClient("First");
  });

  it("delete one client", () => {
    loginPage.login();
    Client.getAllClients();
    Client.deleteClient();
  });
});
