class allReports {
  elements = {
    // reportsPage: () => cy.get(':nth-child(7) > a.flex > .active-sidebar'),

    getAllReport: () => cy.get(":nth-child(1) > a > .sidebarItem"),

    periodRange: () => cy.get(".border > .text-sm"),

    selectDay: () => cy.get('[title="5 января 2023 г."] > .rc-calendar-date'),

    selectDay2: () => cy.get('[title="1 января 2023 г."] > .rc-calendar-date'),

    downloadReport: () => cy.get(".button > .items-center"),

    transitionAll: () => cy.get(".transition-all"),

    close_openColumns: () => cy.get(".cursor-pointer > .rc-switch"),
  };
}

module.exports = new allReports();
