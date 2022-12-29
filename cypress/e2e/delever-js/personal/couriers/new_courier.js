class NewCourier{
  elements = {
    personalOpenPage: () => cy.get('.is-active-sidebar > .active-sidebar'),

    addButton: () => cy.contains('+ Добавит'),

    //first name
    firstName: () => cy.get('#first_name'),

    //last name
    lastName: () => cy.get('#last_name'),

     // phone
     phone: () => cy.get('#phone'),

   // courier type
     courierType: () => cy.get('.select__value-container'),

     // cour. type value
     value: () => cy.get('#react-select-4-option-0'),

     //max order count
     maxOrderCount: () => cy.get('#max_orders_count'),

     statusButton: () => cy.get('#title_ru'),

     workingStatus : () => cy.get(':nth-child(2) > .w-3\/4 > .rc-switch'), 

     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  
  }
}

module.exports = new NewCourier();