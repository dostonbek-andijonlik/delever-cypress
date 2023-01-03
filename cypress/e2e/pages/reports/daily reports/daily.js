class daily {
  elements = {

    openPage: () => cy.get(':nth-child(14) > a > .sidebarItem'),

    reportByDate: () => cy.get(".gap-4 > .bg-white > .text-sm"),

    fromDate: () => cy.get('[title="1 января 2023 г."] > .rc-calendar-date'),

    toDate: () => cy.get('[title="6 января 2023 г."] > .rc-calendar-date'),

    downloadReport: () => cy.get(".button > .items-center"),
  
  };
}

module.exports = new daily();
