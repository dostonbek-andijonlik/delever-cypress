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

    confirmDeleteButton: () => cy.get(":nth-child(2) > .button > .flex"),

    linkedProdPage: () =>
      cy.get(
        ".flex > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1"
      ),

    // addLinkProd: () => cy.contains('Добавить'),
    addLinkProd: () => cy.get("button").contains("Добавить"),

    addProd: () => cy.get('.css-1hwfws3'),

    nameProd: () => cy.contains('Американский бургер'),
    
    nameProd2: () => cy.contains('pizza iiko modificator'),

    confirmButton: () => cy.get('.grid > :nth-child(2) > .button'),

    selecProd: () => cy.get(".css-1hwfws3"),

    saveRecomended: () => cy.get(':nth-child(2) > .button'),

    openModificatorPage: () => cy.get('.m-4 > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),

    addModificButton: () => cy.get("button").contains("Добавить товары"),

    addMinAmount: () => cy.get('#min_amount'),

    addMaxAmount: () => cy.get('#max_amount'),

    selectModifName: () => cy.get('.css-1hwfws3'),

    modifName: () => cy.get('#react-select-25-option-1'),

    addButton: () => cy.get('.grid > :nth-child(2) > .button > .flex'),

    saveProd: () => cy.get(':nth-child(2) > .button > .items-center'),

    deleteLinkedProd: () => cy.get(':nth-child(5) > .flex > .cursor-pointer'),

    confirmDeletion: () => cy.get('.grid > :nth-child(2) > .button > .flex'),

    saveChanges: () => cy.get(':nth-child(2) > .button'),

    editModif: () => cy.get(':nth-child(1) > :nth-child(8) > .flex > .ActionMenu > .MuiButtonBase-root'),

    deleteModifButton: () => cy.get('.MuiList-root > [tabindex="-1"]'),

    editModifButton: () => cy.get('.MuiList-root > [tabindex="0"]'),


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
    this.elements.categoryType().click({ force: true });
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

  deleteSimpleProduct() {
    this.elements.edit().click({ force: true });
    this.elements.deleteProduct().click();
    this.elements.confirmDeleteButton().click({ force: true });
  }

  addRecommendedProd() {
    this.elements.edit().click({ force: true });
    this.elements.redactivate().click();
    this.elements.linkedProdPage().click({ force: true });
    cy.wait(3000);
    this.elements.addLinkProd().click({ force: true });
    this.elements.addProd().click({force: true})
    this.elements.nameProd().click({force: true})
    this.elements.confirmButton().click({force: true})
    this.elements.saveRecomended().click( {multiple: true}, {force: true})
  }

  addModifier(minAmount, maxAmount, modifName){
    this.elements.edit().click({ force: true });
    this.elements.redactivate().click();
    this.elements.linkedProdPage().click({ force: true });
    cy.wait(3000);
    this.elements.openModificatorPage().click({force: true})
    cy.wait(3000);
    this.elements.addModificButton().click({force: true})
    this.elements.addMinAmount().type(minAmount)
    this.elements.addMaxAmount().type(maxAmount)
    this.elements.selectModifName().type(modifName)
    cy.wait(3000)
    this.elements.modifName().click({force: true})
    this.elements.addButton().click({force :true})
    this.elements.saveProd().click({multiple: true}, {force: true})
  }
  
  deleteLinkedProduct(){
    this.elements.edit().click({ force: true });
    this.elements.redactivate().click();
    this.elements.linkedProdPage().click({ force: true });
    cy.wait(3000);
    this.elements.deleteLinkedProd().click({force: true})
    this.elements.confirmDeletion().click({force: true})
    this.elements.saveChanges().click({force: true})
  }

  //bu comment branchdan kelgan 

  editModifier(minAmount, maxAmount, modifName){
    this.elements.edit().click({ force: true });
    this.elements.redactivate().click();
    this.elements.linkedProdPage().click({ force: true });
    cy.wait(3000);
    this.elements.openModificatorPage().click({force:true})
    this.elements.editModif().click({force: true})
    this.elements.editModifButton().click({force: true})
    this.elements.addMinAmount().clear().type(minAmount)
    this.elements.addMaxAmount().clear().type(maxAmount)
    this.elements.selectModifName().type(modifName)
    cy.wait(3000)
    this.elements.modifName().click({force: true})
    this.elements.addButton().click({force: true})
  }

  deleteModifier(){
    this.elements.edit().click({ force: true });
    this.elements.redactivate().click();
    this.elements.linkedProdPage().click({ force: true });
    cy.wait(3000);
    this.elements.openModificatorPage().click({force:true})
    this.elements.editModif().click({force: true})
    this.elements.deleteModifButton().click({force: true})
    this.elements.confirmDeletion().click({force: true})

  }
}

module.exports = new GetAllProducts();
