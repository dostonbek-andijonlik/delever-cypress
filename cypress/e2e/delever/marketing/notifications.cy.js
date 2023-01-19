///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import Notifications from "../../pages/Marketing/notificaitons";

import SideBar from "../../pages/sidebar";

describe("Marketing Banner", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open notif page", () => {
    loginPage.login();
    SideBar.marketing();
    Notifications.notif();
  });

  it("Item Limit", () => {
    loginPage.login();
    SideBar.marketing();
    Notifications.notif();
    Notifications.itemLimit();
  });

  it("Add notification", () => {
    loginPage.login();
    SideBar.marketing();
    Notifications.notif();
    Notifications.addNotif("Name1", "Description");
  });
});
