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

it('Search Tag', () => {
    cy.wait(1000)
    Tag.searchTag(
    'Топ продаж'
    )
});

it('Create Tag', () => {
    cy.wait(1000)
    Tag.createTag(
    "Cypress",
    "Сайпрес",
    "Cypress",
    'Желтый'
    )
});

it('Edit Tag', () => {
    cy.wait(1000)
    Tag.editTag(
    "Cypress",
    "Cypress Edited",
    "Сайпрес Редак",
    "Cypress Edited",
    'Красный'      
    )
});


it('Delete Tag', () => {
    cy.wait(1000)
    Tag.deleteTag("Сайпрес Редак")
});


});

  
  