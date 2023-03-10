Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import CouriersType from "../../pages/Personnel/courier_types.js";
import loginPage from "../../pages/login/login.js";
import SideBars from "../../pages/sidebar.js";

describe("Couriers types", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz");
    loginPage.login();
    SideBars.elements.personnelPage().click();
    cy.wait(2000);
    CouriersType.elements.courierTypesPage().click();
  })

  it("Change page items limit", () => {
    cy.wait(1000);
    CouriersType.changeitemsLimit(50);
  });

  it("Adding Courier Type", () => {
    cy.wait(1000);
    CouriersType.addCourierType("cypress", "12", "150");
  });

  it("Search Courier Type", () => {
    cy.wait(1000);
    CouriersType.searchCourierType("cypress");
  });

  it("Edit Courier Type", () => {
    cy.wait(2000);
    CouriersType.editCourierType("cypressEdited", "133", "1234");
  });

  it("Delete Courier", () => {
    cy.wait(1000);
    CouriersType.deleteCourierType("cypressEdited");
  });
});
