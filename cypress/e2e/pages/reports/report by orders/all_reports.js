class allReportsByOrder {
  elements = {
    openPage: () => cy.get(".is-active > .sidebarItem"),

    reportByDate: () => cy.get(".gap-4 > .bg-white > .text-sm"),

    fromDate: () => cy.get('[title="1 января 2023 г."] > .rc-calendar-date'),

    toDate: () => cy.get('[title="6 января 2023 г."] > .rc-calendar-date'),

    downloadReport: () => cy.get(".button > .items-center"),

    paginateCounts: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .bg-white > .py-3 > .w-full > .py-1.5"
      ),

    toThirty: () => cy.get(".MuiPaper-root > :nth-child(2)"),
  };
}

module.exports = new allReportsByOrder();
