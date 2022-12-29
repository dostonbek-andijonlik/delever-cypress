class NewOperator{
  elements = {
    personalOpenPage: () => cy.get('.is-active-sidebar > .active-sidebar'),

    addButton: () => cy.contains('+ Добавит'),

     // full name
     fullName: () => cy.get(':nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),

     // phone
     phone: () => cy.get('#phone'),

     // login
     login: () => cy.get(':nth-child(6) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),

     // password
     password: () => cy.get(':nth-child(8) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),

     // job title
     jobTitle: () => cy.get('.select__value-container'),

     // operator_one
     operator1: () => cy.get('#react-select-3-option-0'),

     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  
  }
}

module.exports = new NewOperator();