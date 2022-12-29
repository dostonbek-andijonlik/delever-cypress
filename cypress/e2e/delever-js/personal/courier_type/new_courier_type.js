class NewCourierType{
  elements = {
    personalOpenPage: () => cy.get('.is-active-sidebar > .active-sidebar'),

    addButton: () => cy.contains('+ Добавит'),

    //name
    name: () => cy.get('#name'),

    //distance from
    distanceFrom: () => cy.get('#distance_from'),

     // distance to
     distanceTo: () => cy.get('#distance_to'),

     workingStatus : () => cy.get(':nth-child(5) > :nth-child(4) > .rc-switch'), 
     
     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  
  }
}

module.exports = new NewCourierType();