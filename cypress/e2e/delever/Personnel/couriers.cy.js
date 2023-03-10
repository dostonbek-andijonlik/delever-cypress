Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import Couriers from "../../pages/Personnel/couriers.js";
import loginPage from "../../pages/login/login.js";
import SideBars from "../../pages/sidebar.js";

describe("Couriers", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz");
    loginPage.login();
    SideBars.elements.personnelPage().click();
    cy.wait(2000);
    Couriers.elements.couriersPage().click(); 
  });


  it("Change page items limit", () => {
    // cy.wait(2000)
    cy.wait(1000);
    Couriers.changeitemsLimit(50);
  });

  it("Adding courier", () => {
    cy.wait(1000);
    Couriers.addCourier(
      "Test",
      "Cypress",
      "158968548",
      "auto",
      "5",
      true,
      true
    );
  });

  
  it("Search Courier", () => {
    cy.wait(1000);
    Couriers.searchCouriers("Test");
  });

  it("Edit Courier", () => {
    Couriers.editCourier("Test", "Cypress Edited", "158000548", "33");
  });

  it("Delete Courier", () => {
    Couriers.deleteCourier("Test Cypress");
  });
});
