class SideBars {
  elements = {
      //Catalog
      catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

      // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    //Orders
    ordersPage: () =>
      cy.get(".w-16 > :nth-child(2) > a.flex > .active-sidebar"),

    
  }
}

module.exports = SideBars