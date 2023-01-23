Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
  import loginPage from "./delever-cypress/cypress/e2e/pages/login/login.js"
  import SideBars from "./delever-cypress/cypress/e2e/pages/sidebar.js"
  // import  from './delever-cypress/cypress/e2e/pages/catalog/measurement_units/get_measurements'
  
  import GeneralProduct from './delever-cypress\cypress\e2e\pages\catalog\products\combo.js'
  
  const imagesPath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/pizza.jpg'
  const varImagePath = 'C:/Users/ASUS/cypress/cypress/e2e/delever-cypress/cypress/fixtures/food.jpg'
  
  
  describe('Combo Product', () => {
  
    beforeEach(() => {
      //logine
      cy.visit('https://test.admin.delever.uz')
      cy.viewport(1900, 1100)
      cy.wait(1000)
      loginPage.login()
      cy.wait(1000)      
      SideBars.elements.catalog().click()
    });
  
    it('Search Tag', () => {
      cy.wait(1000)
      Measurement.search(
        'Литр'
      )
    });
  
    it('Add Combo Product', () => {
      cy.wait(1000)
      GeneralProduct.addComboProduct(
        "КомбоСай",
        "сайпресс описание",
        "Combocypress",
        "cypress description",
        "Combocypress uz",
        "cypress desc",
        true,
        '1',
        "Комбо",
        "Хотдог",
        "suzma",
        "Делимый",
        "Нет на складе",
        "Миллилитр",
        "UZS",
        "13",
        "3049",
        "12394",
        "32100000",
        imagesPath
      )
    });
  
    it('Edit Combo Product', () => {
      cy.wait(1000)
      GeneralProduct.editComboProd(
        "КомбоСай",
        "КомбоСайпресс редак",
        "сайпресс редак описание",
        "ComboCypress edit",
        "cypress description",
        "ComboCypress uz edit",
        "cypress desc",
        true,
        '5',
        "33",
        "336",
        "123",
        "321",
        imagesPath
      )
    });
  
    
    it('Delete Combo Product', () => {
      cy.wait(1000)
      GeneralProduct.deleteComboProd("КомбоСайпресс редак")
    });
  
    it('Link Products', () => {
      cy.wait(2000)
      GeneralProduct.linkProductsToCombo(
        "КомбоСай",
        "iiko test"
      )
    });
  
    it('Delete Link Products', () => {
      cy.wait(2000)
      GeneralProduct.deleteLinkedProductInCombo(
        "КомбоСай",
        "iiko test"
      )
    });
  
  
    it.only('Add Simple Combo', () => {
      cy.wait(2000)
      GeneralProduct.addComboLinkedProduct(
        "КомбоСай",
        "iiko test",
        "Обычный комбо",
        "3",
        "СайОбКомбо",
        "CySimpleCombo",
        "CySimpleCombo"
      )
    });
  
    it.only('Edit Simple Product', () => {
      cy.wait(2000)
      GeneralProduct.editComboLinkedProduct(
        "КомбоСай",
        "СайОбКомбоRedak",
        "CySimpleComboEdit",
        "CySimpleComboEdit",
        "5"
      )
      
    });
  
  
    it.only('Delete Simple Product', () => {
      cy.wait(1000)
      GeneralProduct.deleteComboLinkedProduct(
        "КомбоСай",
        "СайОбКомбоRedak",
  
      )
    });
  
  
    it.only('Add Complex Combo', () => {
      cy.wait(2000)
      GeneralProduct.addComboLinkedProduct(
        "КомбоСай",
        ["iiko test", "test product"],
        "Сложный комбо",
        "3",
        "СайОбКомбо",
        "CySimpleCombo",
        "CySimpleCombo"
      )
    });
  
    it.only('Edit Complex Product', () => {
      cy.wait(2000)
      GeneralProduct.editComboLinkedProduct( 
        "КомбоСай",     
        "СайОбКомбоRedak",
        "CySimpleComboEdit",
        "CySimpleComboEdit",
        "5"
      )
      
    });
  
  
    it.only('Delete Complex Product', () => {
      cy.wait(1000)
      GeneralProduct.deleteComboLinkedProduct(
        "КомбоСай",
        "СайОбКомбоRedak",
      )
    });
  
  
    
  
    
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  