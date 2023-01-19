Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import loginPage from "../pages/login/login";

import SideBar from "../pages/sidebar";

import Order from "../pages/order/order"

import OrderStatuses from "../pages/order/order_statuses"

import CreateOrder from "../pages/order/create_order"
describe("Order", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
    loginPage.login();
    SideBar.orders();
  });

  it("Pre-order actions", () => {
    Order.openPage()
    OrderStatuses.openPreOPage()
  })

  it("Create a new order with aggregator", () => {
    CreateOrder.createNewOrderWithAggreg(+998987787878, "Sarvar", "cucumber")
  })

  it("")
})