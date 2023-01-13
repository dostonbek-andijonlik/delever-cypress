class GetAllProducts {
  elements = {
    // General product details SMY35
    addGenButton: () => cy.get('.button'),
    search: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    actions: () => cy.get(':nth-child(1) > :nth-child(10) > .flex > .ActionMenu > .MuiButtonBase-root'),
    editButton: () => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
    deleteButton: () => cy.get('.MuiList-root > [tabindex="-1"]'),

    enField: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1'),
    uzField: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1'),
    ruTitle: () => cy.get('#title_ru'),
    enTitle: () => cy.get('#title_en'),
    uzTitle: () => cy.get('#title_uz'),
    ruDescription: () => cy.get('#description_ru'),
    enDescription: () => cy.get('#description_en'),
    uzDescription: () => cy.get('#description_uz'),
    statusButton: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1)> justi'),
    ruField: () => cy.get('#full-width-tab-0 > .MuiTab-wrapper > .flex > .px-1'),
    selectMenuList: () =>cy.get('.select__menu-list'),
    tableBody: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4 > .MuiTableContainer-root'),
    productsTable: () => cy.get('.m-4 > .p-4'),
    // linked products page
    linkedProducts: () => cy.get('.flex > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),
    addProduct: () => cy.get('.jss28 > .MuiButtonBase-root > .MuiButton-label'),
    chooseProductToLink: () => cy.get('.css-1hwfws3'),
    confirmButton: () => cy.get('.grid > :nth-child(2) > .button'),
    cancelButton: () => cy.get('.grid > :nth-child(1) > .button'),
    deleteLinkedProduct: () => cy.get(':nth-child(5) > .flex > .cursor-pointer'),
    saveButton: () => cy.get(':nth-child(2) > .button'),
    //--------------------------
    

    // link products to Variation
    linktoVariationButton: () => cy.get('.MuiButtonBase-root').contains("Связать товары"),
    searchFieldLinkToVariation: () => cy.get('.font-semibold > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    firstSelecBox: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1)'),
    saveLinkVariationProductButton: () => cy.get('.grid > :nth-child(2) > .button'),
    //---------------------------
    // variation
    variationButton: () => cy.get('.m-4 > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),
    addVariationButton: () => cy.get('.ml-auto > .button'),
    chooseVariationOption: () => cy.get('.css-1hwfws3'),
    continueButton: () => cy.get('.grid > :nth-child(2) > .button'),
    generateArtikulVariation: () => cy.get(':nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .bg-lightgray-5 > .text-midgray-2 > button'),
    inPriceVariation: () =>cy.get('#combinations\\.0\\.in_price'),
    outPriceVariation: () => cy.get('#combinations\\.0\\.out_price'),
    addPhotoVariation: () => cy.get('.MuiTypography-root > .grid > .col-span-12 > .h-full > .Gallery > .mr-2 > .add-block'),
    saveVariationButton: () => cy.get('.grid-cols-2 > :nth-child(2) > .button'),
    variationsTable: () => cy.get('.m-4 > :nth-child(1) > [style="overflow-x: hidden;"] > .react-swipeable-view-container > [aria-hidden="false"] > #full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4'),
    variationDeleteButton: (index) => cy.get(`:nth-child(${index}) > :nth-child(8) > .flex > .cursor-pointer`),
    //

    sequenceNumber: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex'),
    // artikulGenButton: () => cy.get('#full-width-tabpancy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex')el-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #order'),
    artikulField: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(5) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .w-auto > #code'),
    addPhoto: () => cy.get('.add-block'),
    productType: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control'),
    categoryType: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(1) > :nth-child(1) > #category_ids > .css-8pw2m5-control'),
    brand: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(2) > :nth-child(2) > .text-body > #brand > .select__control'),
    isDivisible: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(3) > :nth-child(2) > .text-body > #is_divisible > .select__control'),
    tagField: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(4) > :nth-child(2) > .text-body > #tag_ids > .select__control'),
    measurementUnit: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(5) > :nth-child(1) > .text-body > #unit > .select__control'),
    currency: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(6) > :nth-child(2) > .text-body > #currency > .select__control > .select__value-container'),
    IKPU: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(7) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #ikpu'),
    codePack: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(8) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #package_code'),
    incomePrice: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(9) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #in_price'),
    outputPrice: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(10) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #out_price'),
    characteristics: () => cy.get('.mt-6 > .p-4 > div'),
    createButton: () => cy.get(':nth-child(2) > .button'),


    //





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

  // SMY35 For general product
  linkProductToVariation(
    genProdName,
    prodName
  ){
      this.elements.search().click().type(genProdName).type('{enter}')
      cy.wait(1000)
      this.elements.actions().click()
      this.elements.editButton().click()
      this.elements.linkedProducts().click()
      this.elements.variationButton().click()
      cy.wait(1000)
      this.elements.linktoVariationButton().click()
      this.elements.searchFieldLinkToVariation().click().type(prodName).type('{enter}')
      cy.wait(3000)
      this.elements.firstSelecBox().click()
      this.elements.saveLinkVariationProductButton().click()
      this.elements.variationsTable().should('contain', prodName)
  }

  addVariation(
      genProduct,
      characteristicsOptionName,
      inPrice,
      outPrice,
      imagePath
  ){
      this.elements.search().click().type(genProduct).type('{enter}')
      cy.wait(1000)
      this.elements.actions().click()
      this.elements.editButton().click()
      this.elements.linkedProducts().click()
      this.elements.variationButton().click()
      this.elements.addVariationButton().click()
      this.elements.chooseVariationOption().click()
      cy.get('.css-1jtftj7').contains(characteristicsOptionName).click()
      this.elements.continueButton().click({force:true})
      this.elements.generateArtikulVariation().click()
      this.elements.inPriceVariation().click().type(inPrice)
      this.elements.outPriceVariation().click().type(outPrice)
      this.elements.addPhotoVariation().find('input').selectFile(imagePath, {force:true})
      this.elements.saveVariationButton().click()
      this.elements.variationsTable().should('contain', genProduct + " "+characteristicsOptionName)
  }


  deleteVariation(
      genProdName,
      variationName
  ){
      this.elements.search().click().type(genProdName).type('{enter}')
      cy.wait(1000)
      this.elements.actions().click()
      this.elements.editButton().click()
      this.elements.linkedProducts().click()
      this.elements.variationButton().click()
      cy.request(
      {
          url: "https://test.shipper-user.api.delever.uz/v2/product/759e05ec-215c-4f07-8c95-da1abf10eda8",
          method: "GET",
          headers: {
              authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzQ1MzgzNzAsImlhdCI6MTY3MzI0MjM3MCwiaXNzIjoidXNlciIsInNoaXBwZXJfaWQiOiJkNGIxNjU4Zi0zMjcxLTQ5NzMtODU5MS05OGE4MjkzOWE2NjQiLCJzdWIiOiIyMjVlYWE3OC02ZmRkLTRiZDUtYmY1Yi00MWVkNDI5MzBlMmQiLCJ1c2VyX3JvbGVfaWQiOiI0MTlmMzFkZS0yYTA3LTQ1ZjYtYThiZC1hOWNiYTIxZTcxM2QiLCJ1c2VyX3R5cGVfaWQiOiIyYTFlZmQ0YS1kNTI3LTRjYzItYWRmYS1hNzU0NjAyMWYwZjYifQ.zuzQNk17ZywuJZMYEqASzndcgoJ5yBkLxYjH1e5qgWc"
          }
      }).then((response) => {
          const variations = response.body.variant_products
          let ind;
          for(let i=0; i<variations.length;i++){
              if(variations[i].title.ru == (variationName)){
                  ind = i+1;
                  break;
              }
          }

          this.elements.variationDeleteButton(ind).click()
          cy.contains("Да").click()
          this.elements.variationsTable().should('not.have.value', variationName)            
      })
  }

  addGenProd(
      ruName,
      ruDesc,
      enName,
      enDesc,
      uzName,
      uzDesc,
      status,
      seqNumber,
      typeName,
      categoryName,
      brand,
      isDiv,
      tag,
      measurUnit,
      currencyVal,
      ikpu,
      packCode,
      inPrice,
      outPrice,
      imagePath
  ){
      this.elements.addGenButton().click()
      cy.wait(1000)

      // this.elements.characteristics()

      cy.wait(1000)

      this.elements.ruTitle().click().type(ruName)
      this.elements.ruDescription().click().type(ruDesc)
      this.elements.addPhoto().find('input').selectFile(imagePath, {force:true})
      this.elements.enField().click()
      this.elements.enTitle().click().type(enName)
      this.elements.enDescription().click().type(enDesc)
      this.elements.uzField().click()
      this.elements.uzTitle().click().type(uzName)
      this.elements.uzDescription().click().type(uzDesc)

          // if(status){
          //     this.elements.statusButton().find('button').click()
          // }
      cy.wait(1000)
      this.elements.ruField().click()
      this.elements.sequenceNumber().click().type(seqNumber)
      // this.elements.artikulGenButton().click()
      cy.wait(1000)
      //this.elements.productType().click()
      cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click()
      this.elements.selectMenuList().contains(typeName).click()


      cy.wait(1000)
      this.elements.categoryType().click({force:true})
      cy.wait(1000)
      cy.contains(categoryName).click()
      this.elements.brand().click()
      cy.wait(1000)
      cy.contains(brand).click()

      this.elements.isDivisible().click()
      cy.wait(1000)
      cy.contains(isDiv).click()
      this.elements.tagField().click()
      cy.wait(1000)
      cy.contains(tag).click()
      this.elements.measurementUnit().click()
      cy.wait(1000)
      cy.contains(measurUnit).click()
      this.elements.IKPU().click().type(ikpu)
      this.elements.codePack().click().type(packCode)
      this.elements.incomePrice().click().type(inPrice)
      this.elements.outputPrice().click().type(outPrice)

      cy.get('#property_ids\\[0\\]\\.value > .select__control').click()
      cy.wait(4000)
      cy.contains('salad').click()
      this.elements.createButton().click()
      cy.wait(1000)
      this.elements.productsTable().should('contain', ruName)

  }

  ediGenProd(
      productToEdit,
      ruName,
      ruDesc,
      enName,
      enDesc,
      uzName,
      uzDesc,
      status,
      seqNumber,
      ikpu,
      packCode,
      inPrice,
      outPrice

  ){
      this.elements.search().click().type(productToEdit).type('{enter}')
      this.elements.actions().click()
      this.elements.editButton().click()

      this.elements.ruTitle().click().clear().type(ruName)
      this.elements.ruDescription().click().clear().type(ruDesc)
      this.elements.enField().click()
      this.elements.enTitle().clear().click().type(enName)
      this.elements.enDescription().clear().click().type(enDesc)
      this.elements.uzField().click()
      this.elements.uzTitle().click().clear().type(uzName)
      this.elements.uzDescription().click().clear().type(uzDesc)

          // if(status){
          //     this.elements.statusButton().find('button').click()
          // }
      cy.wait(1000)
      this.elements.ruField().click()
      this.elements.sequenceNumber().click().type(seqNumber)
      // this.elements.artikulGenButton().click()
      cy.wait(1000)
      //this.elements.productType().click()



      this.elements.IKPU().click().clear().type(ikpu)
      this.elements.codePack().click().clear().type(packCode)
      this.elements.incomePrice().click().clear().type(inPrice)
      this.elements.outputPrice().click().clear().type(outPrice)


      this.elements.createButton().click()
  }

  deleteGenProd(
      name
  ){
      this.elements.search().click().type(name).type('{enter}')
      cy.wait(2000)
      this.elements.actions().click()
      this.elements.deleteButton().click()
      cy.get(':nth-child(2) > .button').click()
      this.elements.tableBody().should('not.have.value', name)
  }


  linkProducts(
      genProductName,
      products
  ){
      this.elements.search().click().type(genProductName).type('{enter}')
      this.elements.actions().click()
      this.elements.editButton().click()
      this.elements.linkedProducts().click()
      this.elements.addProduct().click()
      this.elements.chooseProductToLink().click()
      cy.contains(products).click()
      cy.wait(2000)
      this.elements.confirmButton().click()
      this.elements.tableBody().should('contain', products)
      cy.wait(1000)
      this.elements.saveButton().click()
  }

  deleteLinkedProduct(
      genProductName,
      deleteLinkedProductName
  ){
      this.elements.search().click().type(genProductName).type('{enter}')
      this.elements.actions().click()
      this.elements.editButton().click()
      this.elements.linkedProducts().click()
      this.elements.deleteLinkedProduct().click()
      cy.contains("Да").click()
      this.elements.tableBody().should('not.have.value', deleteLinkedProductName)
      cy.wait(1000)
      this.elements.saveButton().click()
  }


  

}

module.exports = new GetAllProducts();
