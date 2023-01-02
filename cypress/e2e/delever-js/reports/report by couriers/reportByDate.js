class reportByDate {
  elements = {
    openCourierReport: () => cy.get(":nth-child(6) > a > .sidebarItem > span"),

    openReportByDate: () => cy.get("#full-width-tab-1"),

    reportByDate: () => cy.get(".gap-4 > .bg-white > .text-sm"),

    fromDate: () => cy.get('[title="1 января 2023 г."] > .rc-calendar-date'),

    toDate: () => cy.get('[title="6 января 2023 г."] > .rc-calendar-date'),

    downloadReport: () => cy.get(".button > .items-center"),

    selectCourier: () => cy.contains(""),
  };
}

module.exports = new reportByDate();
