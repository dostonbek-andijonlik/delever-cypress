class Order {
  elements = {
    //Orders
    ordersPage: () =>
      cy.get(".w-16 > :nth-child(2) > a.flex > .active-sidebar"),
    // cy.wait(3000)

    //Pre-Order
    preOrderPage: () => cy.get("#full-width-tab-0"),
    // cy.wait(3000)

    //New
    newOrders: () => cy.get("#full-width-tab-1"),
    // cy.wait(3000)
    operatorAccepted: () => cy.get("#full-width-tab-2"), //Operator Accepted
    // cy.wait(3000);
    preparation: () => cy.get("#full-width-tab-3"), //Заготовка
    // cy.wait(3000)
    courierOnTheWay: () => cy.get("#full-width-tab-4"), //Courier on the way
    // cy.wait(3000);
    finished: () => cy.get("#full-width-tab-5"), //Finished
    // cy.wait(3000);
    openFilters: () => cy.get(":nth-child(2) > .button"), //Open filters
    // cy.wait(3000)
    searchNumber: () => cy.get("#customer > .css-8pw2m5-control"), // Search for by phone number
    // cy.wait(3000);
    // There is some task to select from dropdown here
    allOrders: () => cy.get("#full-width-tab-6"), // All orders
    // cy.wait(3000)
    updateToken: () =>
      cy
        .get(":nth-child(1) > :nth-child(1) > .button > .flex > .text-sm"),
        //Update token
    // cy.wait(3000);
    bill: () =>
      cy
        .get(
          ":nth-child(2) > :nth-child(1) > .button > .items-center > .text-sm"
        ),
        // Vystavyt shyot
    // cy.wait(3000);

    //type number into Vistavyt shot
    typeNumber: () => cy.get("#phone_number"),
    // cy.wait(3000)

    //type order ID
    typeOrderID: () => cy.get("#order_id"),
    // cy.wait(3000)
    dropdown: () => cy.get(".select__control"),
    // apelsin: () =>
    //   cy
    //     .get(".select__single-value css-1uccc91-singleValue")
    //     .contains("Apelsin")
    //     .click(),
    showOnTheMap: () =>
      cy.get(":nth-child(3) > :nth-child(1) > .button"), //Show on the map,

    // client phone number
    clientNum: () =>
      cy.xpath(
        '//*[@id="full-width-tabpanel-0"]/div/p/div/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div/div/div/div[2]/input'
      ),
    selectCatalog: () => cy.get("#name > .css-8pw2m5-control > .css-19ppke0"),

    //Select on the map to select branch
    selectBranch: () => cy.get(".ymaps-2-1-79-events-pane"),

    // Not to call
    notCall: () =>
      cy.get(
        ":nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > .border-bordercolor > .MuiFormControlLabel-root > .MuiTypography-root"
      ),

    // Home Number
    homeNumber: () => cy.get("#accommodation"),

    // Apartment
    apartmentNum: () => cy.get("#apartment"),

    // Floor
    floorNum: () => cy.get("#floor"),

    // Entrance
    entrance: () => cy.get("#building"),

    //Save order
    saveorder: () => cy.get(":nth-child(2) > .button"),
  };
}


module.exports = {Order}