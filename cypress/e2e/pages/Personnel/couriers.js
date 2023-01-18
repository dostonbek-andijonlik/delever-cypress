class Couriers {
  elements = {
    couriersPage: () => cy.get(":nth-child(2) > a > .sidebarItem"),
    searchCourier: () => cy.get(".focus-within\\:ring-2 > .bg-white > .flex > .flex-1"),
    addCourier: () => cy.get(".button"),
    itemsLimit: () => cy.get(".ml-2"),
    nextPage: () => cy.get(".MuiPagination-ul > :nth-child(3)"),
    previousPage: () => cy.get(".MuiPagination-ul > :nth-child(1)"),
    actions: () =>
      cy.get(
        ":nth-child(1) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root"
      ),
    actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
    actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
    firstTableItem: () =>
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(2) > div"),
    tableBody: () => cy.get(".MuiTableBody-root"),
    modifyTable: () =>
      cy.get(".transition-all > .fill-current > .MuiSvgIcon-root > path"),
    // for add operator page
    firstNameField: () => cy.get("#first_name"),
    lastNameField: () => cy.get("#last_name"),
    phoneNumberField: () => cy.get("#phone"),
    chooseCourierType: () => cy.get(".select__indicator"),
    maxOrderCountField: () => cy.get("#max_orders_count"),
    status: () => cy.get(":nth-child(6) > :nth-child(1)"),
    is_wokring: () => cy.get(":nth-child(6) > :nth-child(2)"),
    saveButton: () => cy.get(":nth-child(2) > .button"),
    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };

  searchCouriers(courierName) {
    this.elements.searchCourier().type(courierName);
    cy.wait(2000)
    this.elements.tableBody().should("contain", courierName);
    this.elements.searchCourier().click({force:true}).clear();
  }

  changeitemsLimit(pageLimit) {
    this.elements.itemsLimit().click();
    cy.contains(pageLimit).click();
    cy.wait(2000)
    this.elements.tableBody().its("length").should("be.lte", pageLimit);
  }

  addCourier(
    firstName,
    lastName,
    phoneNumber,
    courierType,
    maxOrderQuantity,
    status,
    is_wokring
  ) {
    this.elements.addCourier().click();
    this.elements.firstNameField().click().type(firstName);
    this.elements.lastNameField().click().type(lastName);

    this.elements.phoneNumberField().click().type(phoneNumber);
    this.elements.chooseCourierType().click();
    cy.contains(courierType).click();
    this.elements.maxOrderCountField().click().type(maxOrderQuantity);

    if (status) {
      this.elements.status().find("button").click();
    }

    if (is_wokring) {
      this.elements.is_wokring().find("button").click();
    }

    this.elements.saveButton().click();
    const fullName = firstName + " " + lastName;
    this.elements.tableBody().should("contain", fullName);
  }

  deleteCourier(courierName) {
    cy.wait(3000);
    this.elements.actions().click();
    this.elements.actionsDelete().click();
    cy.contains("Да").click();
    this.elements.tableBody().should("not.have.value", courierName);
  }

  editCourier(newFirstName, newLastName, newPhoneNumber, newMaxOrderQuantity) {
    cy.wait(3000);
    this.elements.actions().click();
    this.elements.actionsEdit().click();
    this.elements.firstNameField().click().clear().type(newFirstName);
    this.elements.lastNameField().click().clear().type(newLastName);
    this.elements.phoneNumberField().click().clear().type(newPhoneNumber);
    this.elements
      .maxOrderCountField()
      .click()
      .clear()
      .type(newMaxOrderQuantity);
    this.elements.saveButton().click();
    const fullName = newFirstName + " " + newLastName;
    this.elements.tableBody().should("contain", fullName);
  }
}

module.exports = new Couriers();
