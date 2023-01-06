///<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "/cypress/e2e/pages/login/login";

import Banners, { addBanner2 } from "../../pages/Marketing/banners";

import SideBar from "../../pages/sidebar";

describe("Marketing Banner", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("open banner page", () => {
    loginPage.login();
    SideBar.marketing();
    Banners.banners();
  });

  it("search item from the list", () => {
    loginPage.login();
    SideBar.marketing();
    Banners.banners();
    Banners.search("rus");
  });

  it("Update Banner", () => {
    loginPage.login();
    SideBar.marketing();
    Banners.banners();
    Banners.updateAction('Rus', 'Eng', 'Uzb');
  });

  it('Delete one Banner', () => {
    loginPage.login()
    SideBar.marketing()
    Banners.banners()
    Banners.deleteBanner()
  })

  it('Add banner', () => {
    loginPage.login()
    SideBar.marketing()
    Banners.banners()
    Banners.addBanner2('Rus', 'Eng')
  })


});
