class SideBars {
  elements = {
    //personal
    personnelPage: () => cy.get(':nth-child(4) > a.flex > .active-sidebar'),

    //Orders
    ordersPage: () =>
      cy.get(".w-16 > :nth-child(2) > a.flex > .active-sidebar"),

    //Catalog
    catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

    // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    //Reports Page
    reportsPage: () => cy.get(":nth-child(7) > a.flex > .active-sidebar"),

    //Marketing
    marketingPage: () => cy.get(":nth-child(6) > a.flex > .active-sidebar"),
  };
  orders(){
    this.elements.ordersPage().click();
  }

  clients() {
    this.elements.clientsPage().click();
  }

  marketing() {
    this.elements.marketingPage().click();
  }

  catalog() {
    this.elements.catalog().click();
  }
}

module.exports = new SideBars();
