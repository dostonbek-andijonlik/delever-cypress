class Catalog {
  elements = {
    //Catalog
    catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

    // Add
    add: () => cy.get(".button"),

    // ru title
    ruTitle: () => cy.get("#title_ru"),

    // ru desc
    ruDesc: () => cy.get("#description_ru"),

    // englishPage
    openEnglishPage: () => cy.get('.p-4 > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),

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
    main: () => cy.contains("Главный"),

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
    characteristics: () =>cy.get('#property_ids\\[0\\]\\.value > .select__control > .select__value-container'),
      
    saveProduct: () => cy.get(':nth-child(2) > .button'),

    
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
    this.elements.engTitle().type(engName)
    this.elements.engDesc().type(engDesc)
    this.elements.openUzbPage().click({force: true})
    this.elements.uzTitle().type(uzbName, {force: true})
    this.elements.uzDesc().type(uzbDesc)
    this.elements.saveProduct().click({force : true})
  }

  createGeneralProducts(ruName, ruDesc, orderNum) {
    this.elements.catalog().click();
    this.elements.add().click({multiple: true});
    this.elements.ruTitle().type(ruName);
    this.elements.ruDesc().type(ruDesc);
    this.elements.orderNumber().type(orderNum);
    this.elements.typeProduct().click({ force: true });
    this.elements.main().click({force: true})
  }


}

module.exports = new Catalog();
