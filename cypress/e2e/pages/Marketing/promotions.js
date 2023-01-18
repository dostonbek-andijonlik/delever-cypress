class Promotions {
  elements = {
    searchPromotions: () =>
      cy.get(".focus-within\\:ring-2 > .bg-white > .flex > .flex-1"),
    addPromotions: () => cy.get(".button"),
    itemsLimit: () => cy.get(".ml-2"),
    nextPage: () => cy.get(".MuiPagination-ul > :nth-child(3)"),
    previousPage: () => cy.get(".MuiPagination-ul > :nth-child(1)"),
    actions: () =>
      cy.get(
        ":nth-child(1) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root"
      ),
    actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
    actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
    deleteYes: () => cy.get(":nth-child(2) > .button > .flex"),
    deleteNo: () => cy.get(".grid > :nth-child(1) > .button > .flex"),
    firstTableItem: () => cy.get(".bg-lightgray-5 > :nth-child(2) > div"),
    tableBody: () => cy.get(".MuiTableBody-root"),
    // add promotion page
    addPhoto: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .mb-14 > div.col-span-3 > .flex > .Gallery > .add-block"
      ),

    startDate: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .mb-14 > .col-span-9 > .grid > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #start_date"
      ),
    endDate: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .mb-14 > .col-span-9 > .grid > :nth-child(3) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #end_date"
      ),
    // ru
    nameRU: () => cy.get("#title_ru"),
    descriptionRU: () => cy.get("#description_ru"),
    // en
    nameEN: () =>
      cy
        .get("#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#title_en"),
    descriptionEN: () =>
      cy
        .get("#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#description_en"),
    // uz
    uzField: () =>
      cy.get("#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1"),
    nameUZ: () => cy.get("#title_uz"),
    descriptionUZ: () => cy.get("#description_uz"),
    createButton: () => cy.get(":nth-child(2) > .button"),
    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };

  searchPromotion(promotionName) {
    this.elements.searchPromotions().click().type(promotionName);
    cy.wait(2000);
    this.elements.firstTableItem().should("contain", promotionName);
    this.elements.searchPromotions().clear();
  }

  addPromotion(
    nameRu,
    descriptionRu,
    nameUz,
    descriptionUz,
    nameEn,
    descriptionEn,
    imagePath
  ) {
    this.elements.addPromotions().click();

    this.elements
      .addPhoto()
      .find("input")
      .selectFile(imagePath, { force: true });
    this.elements.nameRU().click().type(nameRu);
    this.elements.descriptionRU().click().type(descriptionRu);
    this.elements.startDate().type("2024-01-14");
    this.elements.endDate().type("2024-01-16");
    this.elements.nameEN().click().type(nameEn);
    this.elements.descriptionEN().click().type(descriptionEn);

    this.elements.uzField().click({ force: true });
    this.elements.nameUZ().click({ force: true }).type(nameUz);
    this.elements.descriptionUZ().click().type(descriptionUz);
    this.elements.createButton().click();
    cy.wait(3000);
    this.elements.tableBody().should("contain", nameRu);
  }

  deletePromotion(promotionName) {
    this.elements.searchPromotions().click().type(promotionName);
    cy.wait(1000);
    this.elements.actions().click();
    this.elements.actionsDelete().click();
    cy.contains("Да").click();
    cy.wait(2000);
    this.elements.tableBody().should("not.have.value", promotionName);
  }

  changeitemsLimit(pageLimit) {
    this.elements.itemsLimit().click();

    cy.contains(pageLimit).click();
    cy.wait(2000)
    this.elements.tableBody().its("length").should("be.lte", 3);
  }

  editPromotion(
    nameRu,
    descriptionRu,
    nameUz,
    descriptionUz,
    nameEn,
    descriptionEn
  ) {
    this.elements.actions().click();
    this.elements.actionsEdit().click();
    this.elements.nameRU().click().type(nameRu);
    this.elements.descriptionRU().click().type(descriptionRu);
    this.elements.startDate().type("2024-01-14");
    this.elements.endDate().type("2024-01-16");
    this.elements.nameEN().click().type(nameEn);
    this.elements.descriptionEN().click().type(descriptionEn);

    this.elements.uzField().click({ force: true });
    this.elements.nameUZ().click({ force: true }).type(nameUz);
    this.elements.descriptionUZ().click().type(descriptionUz);
    this.elements.createButton().click();
    cy.wait(2000);
    this.elements.tableBody().should("contain", nameRu);
  }
}

module.exports = new Promotions();
