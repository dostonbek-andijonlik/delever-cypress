// /<reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://test.admin.delever.uz/#/home/dashboard");
  });

  it("catalog", () => {
       //Type username
    cy.visit('https://test.admin.delever.uz/#/home/dashboard')
    cy.get('#login').type("oybek3");
    
    //Type Password
    // cy.wait(3000)
    cy.get("#password").type("oybek1024");

    //show password 
    cy.get('.cursor-pointer > .MuiSvgIcon-root > path').click()  
    // cy.wait(3000)
    cy.get('.button').click();

    //Catalog
    cy.get(':nth-child(5) > a.flex > .active-sidebar').click()
  
    // // Add
    // cy.get('.button').click()

    // // ru title
    // cy.get('#title_ru').type('Русский Имя')

    // // ru description
    // cy.get('#description_ru').type('Русский Имя')

    // order number
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\/5 > :nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex').type('2') // to be finished

    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\/5 > :nth-child(2) > .alisa-input > .focus-within\:ring-2 > .bg-white').type('2') // to be finished

    // product type
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click({force: true})

    // cy.contains('Вариативный').click({force: true}) // Variativniy
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click({force: true})

    // cy.contains('Главный').click({force: true}) // Glavniy
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click({force: true})
    
    // cy.contains('Модификатор').click({force: true}) // Modificator
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click({force: true})
    
    // cy.contains('Простой').click({force: true}) // prostoy
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click({force: true})
    
    // cy.contains('Комбо').click({force: true}) // Kombo
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control > .select__value-container').click({force: true})


    //Category
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(1) > :nth-child(1) > #category_ids > .css-8pw2m5-control > .css-19ppke0').click()

    //Napitki
    // cy.contains('Напитки').click()

    // //Brand
    // cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(2) > :nth-child(2) > .text-body > #brand > .select__control > .select__value-container').click()
    
    //In Price
    // cy.get('#in_price').type('123',{force:true})

    // //Out Price
    // cy.get('#out_price').type('987654', {force: true})

    //characteristics
    // cy.get('#property_ids\[0\]\.value > .select__control').click({force:true})
  });
});
