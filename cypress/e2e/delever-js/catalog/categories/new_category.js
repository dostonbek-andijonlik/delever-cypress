const cypress = require("cypress");

class NewCategory{
  elements = {
    addButton: () => cy.contains('+ Добавит'),

     // ru title
     ruTitle: () => cy.get("#title_ru"),

     // ru desc
     ruDesc: () => cy.get("#description_ru"),

     // en title
     ruTitle: () => cy.get("#title_en"),

     // en desc
     ruDesc: () => cy.get("#description_en"),

     // uz title
     ruTitle: () => cy.get("#title_uz"),

     // uz desc
     ruDesc: () => cy.get("#description_uz"),

     order_no: () => cy.get('#order_no'),

     statusButton: () => cy.get('#title_ru'),

     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  }
}

module.exports = new NewCategory();