class GetAllProducts {
  elements = {
    //Catalog
    catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

    //edit button
    edit: () =>
      cy.get(
        ":nth-child(1) > :nth-child(10) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label"
      ),

    //redaktirovat
    redactivate: () => cy.get('[tabindex="0"] > .ml-2'),

    titleRu: () => cy.get("#title_ru"),
    openEnglish: () =>
      cy.get("#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1"),
    titleEng: () => cy.get("#title_en"),
    openUzb: () => cy.get("#full-width-tab-2 > .MuiTab-wrapper > .flex"),
    titleUz: () => cy.get("#title_uz"),

    typeProduct: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container"
      ),

    simpleType: () => cy.contains("Простой"),

    category: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(1) > :nth-child(1) > #category_ids > .css-8pw2m5-control > .css-19ppke0"
      ),

    categoryType: () => cy.contains("простой товар"),

    deleteType: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(1) > :nth-child(1) > #category_ids > .css-8pw2m5-control > .css-19ppke0 > :nth-child(1) > .css-xb97g8"
      ),

    priceIn: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(9) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #in_price"
      ),

    priceOut: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(10) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #out_price"
      ),

    //delete product
    deleteProduct: () => cy.get('[tabindex="-1"] > .ml-2'),

    //column filter
    columnFilter: () =>
      cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(10)"),

    //paginationCounts
    paginationCount: () => cy.get(".py-1\\.5"),
    thirtyItms: () => cy.get(".MuiPaper-root > :nth-child(2)"),

    //pageNumber
    nextPage: () => cy.get(":nth-child(9) > .MuiButtonBase-root"),

    saveButton: () => cy.get(":nth-child(2) > .button"),
  };

  open() {
    this.elements.catalog().click();
  }

  editProduct(ruName, engName, uzName, price1, price2) {
    this.elements.edit().click({ force: true });
    this.elements.redactivate().click();
    this.elements.titleRu().clear().type(ruName);
    this.elements.openEnglish().click();
    this.elements.titleEng().click({ force: true }).clear().type(engName);
    this.elements.openUzb().click({ force: true });
    this.elements.titleUz().clear().type(uzName);
    this.elements.typeProduct().click();
    this.elements.simpleType().click({ force: true });
    this.elements.category().click({ force: true });
    this.elements.categoryType().click({force:true});
    this.elements.priceIn().clear({ force: true }).type(price1);
    this.elements.priceOut().clear({ force: true }).type(price2);
    this.elements.saveButton().click();
  }

  nextPage1() {
    this.elements.nextPage().click({ force: true });
    this.elements.nextPage().click({ force: true });
    this.elements.nextPage().click({ force: true });
  }

  itemLimit() {
    this.elements.paginationCount().click({ force: true });
    this.elements.thirtyItms().click({ force: true });
  }
}

module.exports = new GetAllProducts();
