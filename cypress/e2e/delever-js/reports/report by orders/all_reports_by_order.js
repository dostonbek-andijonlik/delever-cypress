class allReports{
  elements = {
    openPage: () => cy.get(':nth-child(8) > a > .sidebarItem > span'),

    openAllReportSection: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1'),

    reportByDate: () => cy.get(".gap-4 > .bg-white > .text-sm"),

    fromDate: () => cy.get('[title="1 января 2023 г."] > .rc-calendar-date'),

    toDate: () => cy.get('[title="6 января 2023 г."] > .rc-calendar-date'),

    downloadReport: () => cy.get(".button > .items-center"),

    selectBranch: () => cy.contains("ayko"),

    allAggregators: () => cy.get(':nth-child(2) > a > .sidebarItem > span'),

    source: () => cy.contains("Источник"),

    bot: () => cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(2)'),

    deliveryType: () =>  cy.contains('Тип доставки'),

    dostavka: () => cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(1)'),

    couriers: () => cy.contains('Курьеры'),

    oneCourier: () => cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(2)'),

    paymentTypeButton: () => cy.contains('Способ оплаты'),

    onePaymentType: () => cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(3)')
   }
}