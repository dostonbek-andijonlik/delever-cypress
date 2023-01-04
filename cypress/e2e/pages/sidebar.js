class SideBars {
  elements = {
    //personal
    personalOpenPage: () => cy.get(".is-active-sidebar > .active-sidebar"),
    
    //Orders
    ordersPage: () =>
    cy.get(".w-16 > :nth-child(2) > a.flex > .active-sidebar"),
    
    //Catalog
    catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

    // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    //Reports Page
    reportsPage: () => cy.get(':nth-child(7) > a.flex > .active-sidebar'),

  };

  clients(){
    this.elements.clientsPage().click()
  }
}

module.exports = new SideBars();
