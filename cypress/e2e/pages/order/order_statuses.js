class OrderStatuses{
  preOrder = {
    openPreOrder: () => cy.get('#full-width-tab-0 > .MuiTab-wrapper > .flex > .px-1'),

    actionMenu: () => cy.get('.ActionMenu > .MuiButtonBase-root'),




  }

  //PreOrder Actions and Methods
  openPreOPage(){
    this.preOrder.openPreOrder().click()

  }

  newOrder = {

  }

  operatorAccepted = {

  }

  preparing = {

  }

  courierOnTheWay = {

  }

  finished = {

  }

  allOrders = {

  }
}

module.exports = new OrderStatuses();