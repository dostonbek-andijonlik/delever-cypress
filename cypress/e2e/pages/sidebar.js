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

    // Personnel Page
    personnelPage: () => cy.get(':nth-child(4) > a.flex > .active-sidebar > .text-secondary > .MuiSvgIcon-root'),
   
    //Marketing
    marketingPage: () => cy.get(':nth-child(6) > a.flex > .active-sidebar'),

  };
}

module.exports = new SideBars();
