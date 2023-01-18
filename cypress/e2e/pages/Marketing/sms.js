class SMS {
  elements = {
    smsPage: () => cy.get(":nth-child(2) > a > .sidebarItem"),
    search: () =>
      cy.get(
        ":nth-child(1) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1"
      ),
    itemsLimit: () => cy.get(".ml-2"),
    nextPage: () => cy.get(".MuiPagination-ul > :nth-child(3)"),
    previousPage: () => cy.get(".MuiPagination-ul > :nth-child(1)"),
    firstTableItem: () => cy.get(".bg-lightgray-5 > :nth-child(2) > div"),
    tableBody: () => cy.get(".MuiTableBody-root"),
    firstSelectBoxClient: () =>
      cy
        .get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(1)")
        .find("input"),
    firstSelectBoxCourier: () =>
      cy
        .get(
          '#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > [style="border-top: 1px solid rgb(238, 238, 238); padding-top: 10px;"] > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(1)'
        )
        .find("input"),

    //clientPeriod
    periodField: () => cy.get(".gap-4 > .space-x-2"),
    fromDayField: () =>
      cy.get(
        '.rc-calendar-range-left > [style="outline: none;"] > .rc-calendar-header > div > .rc-calendar-my-select > .rc-calendar-month-select'
      ),
    //fromMonthField: () => cy.get('.rc-calendar-range-left > [style="outline: none;"] > .rc-calendar-header > div > .rc-calendar-my-select > .rc-calendar-month-select').click().get('.rc-calendar-month-panel-body'),
    //fromYearField: () => cy.get('.rc-calendar-range-left > [style="outline: none;"] > .rc-calendar-header > div > .rc-calendar-my-select > .rc-calendar-year-select').click().get('.rc-calendar-year-panel-body'),

    toDayField: () =>
      cy.get(
        '.rc-calendar-range-right > [style="outline: none;"] > .rc-calendar-body'
      ),
    //toMonthField: () => cy.get('.rc-calendar-range-right > [style="outline: none;"] > .rc-calendar-header > div > .rc-calendar-my-select > .rc-calendar-month-select').click().get('.rc-calendar-month-panel-body'),
    //toYearField: () => cy.get('.rc-calendar-range-right > [style="outline: none;"] > .rc-calendar-header > div > .rc-calendar-my-select > .rc-calendar-year-select').click().get('.rc-calendar-year-panel-body'),

    fromOrderQuantityClient: () =>
      cy.get(
        ":nth-child(3) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1"
      ),
    toOrderQuantityClient: () =>
      cy.get(
        ":nth-child(4) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1"
      ),
    fromOrderPriceClient: () =>
      cy.get(
        ":nth-child(5) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1"
      ),
    toOrderPriceClient: () =>
      cy.get(
        ":nth-child(6) > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1"
      ),

    // corier
    couriersSubpage: () =>
      cy.get("#full-width-tab-1 > .MuiTab-wrapper > .px-1"),

    // send message
    sendMessage: () => cy.get(".button"),
    messageField: () => cy.get(".modal-component > .bg-white > .w-full"),
    cancelButton: () => cy.get(".grid > :nth-child(1) > .button > .flex"),
    sendButton: () => cy.get(":nth-child(2) > .button > .flex"),
  };

  sendToClient(message, clientName) {
    this.elements.search().click().type(clientName);
    cy.wait(1000);
    this.elements.firstSelectBoxClient().check();

    this.elements.sendMessage().click();
    cy.wait(2000)
    this.elements.messageField().click().type(message);
    this.elements.sendButton().click();
  }

  sendToCourier(message, courierName) {
    this.elements.couriersSubpage().click();
    cy.wait(1000);
    this.elements.search().click().type(courierName);
    cy.wait(1000);
    this.elements.firstSelectBoxCourier().check();
    this.elements.sendMessage().click();
    cy.wait(1000)
    this.elements.messageField().click().type(message);
    this.elements.sendButton().click();
  }

  clientOrderPriceFilter(fromPrice, toPrice) {
    this.elements.fromOrderPriceClient().click().type(fromPrice);
    this.elements.toOrderPriceClient().click().type(toPrice);
    //TODO add asserion for order average price
  }

  clientOrderQuantityFilter(fromQuantity, toQuantity) {
    this.elements.fromOrderQuantityClient().click().type(fromQuantity);
    this.elements.toOrderQuantityClient().click().type(toQuantity);
    //TODO add asserion for items oreder quantity
  }

  clientDatePicker(startTime, endTime) {
    this.elements.periodField().click();
    cy.get(`[title="${startTime}"] > .rc-calendar-date`).click();
    cy.get(`[title="${endTime}"] > .rc-calendar-date`).click();
  }
}

module.exports = new SMS();
