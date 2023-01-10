// const cypress = require("cypress");

class NewCategory{
  elements = {
    categoryOpenPage: () => cy.get(':nth-child(2) > a > .sidebarItem'),

    addButton: () => cy.get('.button'),//cy.contains('+ Добавит'),

     // ru title
     ruTitle: () => cy.get("#title_ru"),

     // ru desc
     ruDesc: () => cy.get("#description_ru"),

     // en title
     enTitle: () => cy.get("#title_en"),

     // en desc
     enDesc: () => cy.get("#description_en"),

     // uz title
     uzTitle: () => cy.get("#title_uz"),

     // uz desc
     uzDesc: () => cy.get("#description_uz"),

     order_no: () => cy.get('#order_no'),

     categorySelect: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(3)'),

     lavashType: () => cy.contains('Лаваш'),

     statusButton: () =>cy.get('.p-4 > [style="overflow-x: hidden;"] > .react-swipeable-view-container > [aria-hidden="false"]'),

     orderNum: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(4)'),

     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  }

  addCategory(ruName, enName, uzName, number){
    this.elements.categoryOpenPage().click()
    this.elements.addButton().click()
    this.elements.ruTitle().type(ruName, {force: true})
    this.elements.enTitle().type(enName, {force: true})
    this.elements.uzTitle().type(uzName, {force: true})
    this.elements.categorySelect().find('input').click({force: true})
    this.elements.lavashType().click({force: true})
    this.elements.orderNum().find('input').type(number)
    this.elements.statusButton().find('button').click({force: true}, {multiple: true})
    this.elements.saveButton().click()
  }
}

module.exports = new NewCategory();