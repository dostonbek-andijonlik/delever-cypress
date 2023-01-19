class CreateOrder {
  newOrder = {
    CreateBtn: () => cy.get(":nth-child(4) > :nth-child(1) > .button"),

    aggregatorInput: () =>
      cy.get("#aggregator-select > .css-8pw2m5-control > .css-19ppke0"),

    selectOneAggregator: () => cy.contains("agregat"),

    typeClientNumber: () =>
      cy.get(
        ":nth-child(1) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .w-auto > .flex-1"
      ),

    clientId: () => cy.get("#client_id"),

    selectPlaceFromMap: () => cy.get(".ymaps-2-1-79-events-pane"),

    // selectProduct: () =>
    //   cy.get(".box-border > :nth-child(2) > .p-4").find("input").eq(0),

    // selectProd: () => cy.get('#name > .css-8pw2m5-control > .css-19ppke0')//.cy.contains('ayko tovar')

    // selectProd: () => cy.contains('ayko tovar (20000 сум)')

    deleteOneProd: () => cy.get(".MuiSvgIcon-root"),

    addProduct: () => cy.get("#name > .css-8pw2m5-control > .css-19ppke0"),

    pickProd: () => cy.get("#name > .css-8pw2m5-control > .css-19ppke0"),

    one: () => cy.contains("iiko"),

    extraProd: () => cy.get(":nth-child(3) > .text-midgray-2 > .text-primary"),
  };

  //Create new order with agregator
  createNewOrderWithAggreg(phNumber, clientName) {
    this.newOrder.CreateBtn().click();
    cy.wait(2121);
    // this.newOrder.aggregatorInput().click();
    cy.wait(2121);
    // this.newOrder.selectOneAggregator().click({ force: true });
    this.newOrder.typeClientNumber().type(phNumber);
    this.newOrder.clientId().type(clientName, { force: true });
    cy.wait(3232);
    this.newOrder.selectPlaceFromMap().click();
    cy.wait(3232);
    this.newOrder.pickProd().click({ force: true });
    this.newOrder.one().click({ force: true });
    this.newOrder.extraProd().click();
    // cy.wait(1221);
    // this.newOrder.deleteOneProd().click({force: true})
  }
}

module.exports = new CreateOrder();
