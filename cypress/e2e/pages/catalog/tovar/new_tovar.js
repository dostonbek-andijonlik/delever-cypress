
class Catalog {
  elements = {
    
    
    //Catalog
    catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

     //edit button
     edit: () =>
     cy.get(
       ":nth-child(2) > :nth-child(10) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label"
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

    // Add
    add: () => cy.get(".button"),

    // ru title
    ruTitle: () => cy.get("#title_ru"),

    // ru desc
    ruDesc: () => cy.get("#description_ru"),

    // englishPage
    openEnglishPage: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1'),

    // ru title
    engTitle: () => cy.get("#title_en"),

    // ru desc
    engDesc: () => cy.get("#description_en"),

    // uzbPage
    openUzbPage: () => cy.get('#full-width-tab-2'),

    // ru title
    uzTitle: () => cy.get("#title_uz"),

    // ru desc
    uzDesc: () => cy.get("#description_uz"),

    // order number
    orderNumber: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #order"
      ),

    //Click product type
    typeProduct: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control"
      ),

    //Variativniy
    variants: () => cy.contains("Вариативный"),
   
    // Glavniy
    main: () => cy.get('#react-select-2-option-0'),//cy.contains("Главный"),

    // Modificator
    modificator: () => cy.contains("Модификатор"),

    // Prostoy
    simple: () => cy.contains("Простой"),

    // Kombo
    combo: () => cy.contains("Комбо"),

    //Category
    category: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(1) > :nth-child(1) > #category_ids > .css-8pw2m5-control > .css-19ppke0"
      ),

    //simple product
    simpleCategory: () => cy.contains("простой товар"),

    //Naptiki
    softDrinks: () => cy.contains("Напитки"),
    //Combo
    combo: () => cy.contains("Комбо"),

    hotdog: () => cy.contains('Хотдог'),

    //Lavash
    lavash: () => cy.contains("Лаваш"),

    //Cartofel
    typeCartofel: () => cy.contains("Тип Картофель Фри"),

    //Brand
    brand: () =>
      cy
        .get(
          "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(2) > :nth-child(2) > .text-body > #brand > .select__control > .select__value-container"
        )
        .click(),

    // delimiy/nedelimiy
    delimiy_nedelimiy: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(3) > :nth-child(2) > .text-body > #is_divisible > .select__control > .select__value-container"
      ),

    //delimiy
    delimiy: () => cy.contains("Делимый"),

    //nedelimiy
    nedelemiy: () => cy.contains("Не делимый"),

    //measurementUnits
    measurement: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(5) > :nth-child(1) > .text-body > #unit > .select__control > .select__value-container"
      ),

    //litre
    litre: () => cy.contains("Литр"),

    //kg
    kg: () => cy.contains("Килограмм"),

    //ml
    milliltr: () => cy.contains("Миллилитр"),

    //shtuka
    count: () => cy.contains("Штука"),

    //gram
    gram: () => cy.contains("Грамм"),

    //inPrice
    inPrice: () => cy.get("#in_price"),

    //Out Price
    outprice: () => cy.get("#out_price"),

    //Characteristics
    characteristics: () => cy.get('.mt-6').find('input').eq(0),

    firstCharec: () => cy.contains('salad'),

    saveProduct: () => cy.get(':nth-child(2) > .button'),

    linkedProduct: () => cy.get('.flex > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),

    variationProduct: () => cy.get('.m-4 > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),

    connectProduct: () => cy.get('.ml-auto > .button'),

    plus: () => cy.get(':nth-child(3) > .bg-primary'),

    addOption: () => cy.get('form > .grid > :nth-child(2) > .button'),

    dropDown: () => cy.get('.h-60').find('button').eq(1),

    connectProd: () => cy.get('.jss30 > .MuiButtonBase-root'),
    
    optionBar: () => cy.get('.css-1hwfws3'),

    continue: () => cy.get('.grid > :nth-child(2) > .button'),

  };
    
    addSimpleProduct(ruName, ruDesc, orderNum, inPrice, outPrice, engName, engDesc, uzbName, uzbDesc) {
    this.elements.add().click();
    this.elements.ruTitle().type(ruName);
    this.elements.ruDesc().type(ruDesc);
    // this.elements.characteristics().click({force: true})
    this.elements.orderNumber().type(orderNum);
    this.elements.typeProduct().click({ force: true });
    this.elements.simple().click({ force: true });
    this.elements.category().click({ force: true });
    this.elements.simpleCategory().click({ force: true });
    this.elements.measurement().click({ force: true });
    this.elements.milliltr().click({ force: true });
    this.elements.inPrice().type(inPrice, {force: true});
    this.elements.outprice().type(outPrice, {force: true});
    this.elements.openEnglishPage().click({force: true})
    this.elements.engTitle().scrollIntoView().type(engName)
    this.elements.engDesc().type(engDesc)
    this.elements.openUzbPage().click({force: true})
    this.elements.uzTitle().type(uzbName, {force: true})
    this.elements.uzDesc().type(uzbDesc)
    cy.wait(1000)

    this.elements.saveProduct().click()
  }


  addGenProd(ruName, ruDesc, orderNum, inPrice, outPrice, engName, engDesc, uzbName, uzbDesc, typeName, categoryName) {
    this.elements.add().click();
    this.elements.ruTitle().type(ruName);
    this.elements.ruDesc().type(ruDesc);
    // this.elements.characteristics().click({force: true})
    this.elements.orderNumber().type(orderNum);
    this.elements.typeProduct().click()
    this.elements.main().click()    
    this.elements.category().click();
    cy.contains(categoryName).click({force: true})
    this.elements.measurement().click({ force: true });
    this.elements.milliltr().click({ force: true });
    this.elements.inPrice().type(inPrice, {force: true});
    this.elements.outprice().type(outPrice, {force: true});
    this.elements.openEnglishPage().click({force: true})
    this.elements.engTitle().type(engName)
    this.elements.engDesc().type(engDesc)
    this.elements.openUzbPage().click({force: true})
    this.elements.uzTitle().type(uzbName, {force: true})
    this.elements.uzDesc().type(uzbDesc)
    this.elements.saveProduct().click({force : true})
  }

  createModificator(ruName, ruDesc, orderNum, inPrice, outPrice, engName, engDesc, uzbName, uzbDesc) {
    this.elements.catalog().click();
    cy.wait(2000)
    this.elements.add().click({multiple: true});
    cy.wait(3000)
    this.elements.characteristics().click({force: true})
    this.elements.firstCharec().click({force: true})
    this.elements.ruTitle().type(ruName);
    this.elements.ruDesc().type(ruDesc);
    this.elements.orderNumber().type(orderNum);
    this.elements.typeProduct().click({ force: true });
    cy.wait(2000)
    this.elements.modificator().click({force: true})
    this.elements.category().click({force: true})
    this.elements.hotdog().click({force: true})
    this.elements.measurement().click({ force: true });
    this.elements.milliltr().click({ force: true });
    this.elements.inPrice().type(inPrice, {force: true});
    this.elements.outprice().type(outPrice, {force: true});
    this.elements.openEnglishPage().click({force: true})
    this.elements.engTitle().type(engName)
    this.elements.engDesc().type(engDesc)
    this.elements.openUzbPage().click({force: true})
    this.elements.uzTitle().type(uzbName, {force: true})
    this.elements.uzDesc().type(uzbDesc)
    cy.wait(2000)
    this.elements.saveProduct().click({force : true})
  }

  editModifier(ruName, ruDesc, orderNum, inPrice, outPrice, engName, engDesc, uzbName, uzbDesc){
    this.elements.catalog().click();
    cy.wait(2000)
    this.elements.edit().click();
    this.elements.redactivate().click()
    cy.wait(3000)
    this.elements.characteristics().click({force: true})
    this.elements.firstCharec().click({force: true})
    this.elements.ruTitle().clear().type(ruName);
    this.elements.ruDesc().clear().type(ruDesc);
    this.elements.orderNumber().clear().type(orderNum);
    this.elements.typeProduct().click({ force: true });
    cy.wait(2000)
    this.elements.modificator().click({force: true})
    this.elements.category().click({force: true})
    this.elements.hotdog().click({force: true})
    this.elements.measurement().click({ force: true });
    this.elements.milliltr().click({ force: true });
    this.elements.inPrice().clear().type(inPrice, {force: true});
    this.elements.outprice().clear().type(outPrice, {force: true});
    this.elements.openEnglishPage().click({force: true})
    this.elements.engTitle().clear().type(engName)
    this.elements.engDesc().clear().type(engDesc)
    this.elements.openUzbPage().click({force: true})
    this.elements.uzTitle().clear().type(uzbName, {force: true})
    this.elements.uzDesc().clear().type(uzbDesc)
    cy.wait(2000)
    this.elements.saveProduct().click({force : true})
  }

  addLinkedProductToModif(product){
    this.elements.catalog().click();
    cy.wait(2000)
    this.elements.edit().click();
    this.elements.redactivate().click()
    cy.wait(3000)
    this.elements.linkedProduct().click({force: true})
    this.elements.variationProduct().click()
    this.elements.connectProduct().click()
    this.elements.plus().click({force: true})
    this.elements.addOption().click({force: true})
    this.elements.optionBar().type(product).click({force: true})
    this.elements.continue().click({force: true})
    // this.elements.dropDown().click({force: true})
    // this.elements.connectProd().find('button').click()
  

  }
}

module.exports = new Catalog();
