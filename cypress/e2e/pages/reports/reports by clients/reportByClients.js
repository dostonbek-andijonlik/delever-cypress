class reportClients {
  elements = {
    openPage: () => cy.get(".is-active > .sidebarItem > span"),

    reportByDate: () => cy.get(".gap-4 > .bg-white > .text-sm"),

    fromDate: () => cy.get('[title="1 января 2023 г."] > .rc-calendar-date'),

    toDate: () => cy.get('[title="6 января 2023 г."] > .rc-calendar-date'),

    enterTime: () => cy.get(":nth-child(2) > .rc-time-picker-input"),

    downloadReport: () => cy.get(".button > .items-center"),

    selectBranch: () => cy.contains("ayko"),

    byTime: () => cy.get("#full-width-tab-1 > .MuiTab-wrapper > .px-1"),
  };
}
