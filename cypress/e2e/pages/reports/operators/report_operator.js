class operatorReport {
  elements = {
    operatorPage: () => cy.get(":nth-child(3) > a > .sidebarItem > span"),

    newOperatorReport: () => cy.get("#full-width-tab-1"),

    downloads: () => cy.get(".button > .items-center > .text-sm"),
  };
}

module.exports = new operatorReport();
