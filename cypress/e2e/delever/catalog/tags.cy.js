Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
import loginPage from "../../pages/login/login.js"
import SideBars from "../../pages/sidebar.js"
import Tag from '../../pages/catalog/tags/get_all_tags'



describe('Tags', () => {

beforeEach(() => {
    //logine
    cy.visit('https://test.admin.delever.uz')
    loginPage.login()      
    SideBars.elements.catalog().click()
    Tag.elements.tagsOpenPage().click()
});

it.only('Search Tag', () => {
    cy.wait(1000)
    Tag.searchTag(
    'Топ продаж'
    )
});

it.only('Create Tag', () => {
    cy.wait(1000)
    Tag.createTag(
    "Cypress",
    "Сайпрес",
    "Cypress",
    'Желтый'
    )
});

it.only('Edit Tag', () => {
    cy.wait(1000)
    Tag.editTag(
    "Cypress",
    "Cypress Edited",
    "Сайпрес Редак",
    "Cypress Edited",
    'Желтый'      
    )
});


it.only('Delete Tag', () => {
    cy.wait(1000)
    Tag.deleteTag("Сайпрес Редак")
});


});

  
  