///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('empty spec', () => {
  it('passes', () => {

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

    //Orders page
    cy.get('.w-16 > :nth-child(2) > a.flex > .active-sidebar').click()  
    // cy.wait(3000)

    //Pre-Order status
    // cy.get('#full-width-tab-0').click()   
    // cy.wait(3000)

    
    //New status
    // cy.get('#full-width-tab-1').click();  
    // cy.wait(3000)

    //Operator Accepted status
    // cy.get('#full-width-tab-2').click()  
    // cy.wait(3000);

    //Заготовка status
    // cy.get('#full-width-tab-3').click()  
    // cy.wait(3000)

    //Courier on the way status
    // cy.get('#full-width-tab-4').click()  
    // cy.wait(3000);

    //Finished status
    // cy.get('#full-width-tab-5').click()  
    // cy.wait(3000);

    //Open filters
    // cy.get(':nth-child(2) > .button').click()  
    // cy.wait(3000)

    // Search for by phone number
    // cy.get('#customer > .css-8pw2m5-control').click()  
    // cy.wait(3000);

    // // There is some task to select from dropdown here

    // All orders
    // cy.get('#full-width-tab-6').click() 
    // cy.wait(3000)

    //Update token
    // cy.get(':nth-child(1) > :nth-child(1) > .button > .flex > .text-sm').click() 
    // cy.wait(3000);

    // Vystavyt shyot
    // cy.get(':nth-child(2) > :nth-child(1) > .button > .items-center > .text-sm').click()  
    // cy.wait(3000);

    //type number into Vistavyt shot
    // cy.get('#phone_number').type('999999999')  
    // cy.wait(3000)

    //type order ID
    // cy.get('#order_id').type('315127');  
    // cy.wait(3000)

    // cy.get('.select__control').click()
    // cy.get('react-select-2-input').click()
    // cy.get('.select__single-value css-1uccc91-singleValue').contains('Apelsin').click();

    //Order page 
    // cy.go('back')  

    //Show on the map page
    // cy.get(':nth-child(3) > :nth-child(1) > .button').click()  
    // cy.get('.rc-switch').click() //online courier's counts
  //   cy.get('span.rc-switch-inner')
  // .eq(1)
  // .find('input')
  // .click();
  // cy.go('back')

  //Create Order Page
  // cy.get(':nth-child(4) > :nth-child(1) > .button > .items-center').click()  
  // cy.get(':nth-child(1) > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto > .flex-1').click({force:true})
  // cy.get(':nth-child(1) > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto > .flex-1').type('699999999{enter}')
  
  // existed client's phone number
  // cy.xpath('//*[@id="full-width-tabpanel-0"]/div/p/div/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div/div/div/div[2]/input').click({force:true}).type('699999999')
  // cy.get('.p-4 > .px-4').click()  

  //catalog choice
  // cy.xpath('//*[@id="name"]/div/div[1]').click({force: true}) 
  // cy.get('#name > .css-8pw2m5-control > .css-19ppke0').click({force: true})
  // cy.get('#react-select-8-option-3').click({force: true}) 
  // cy.get('#react-select-9-option-2').click({force: true})
  // cy.get('#react-select-8-option-2').click({force: true})

  //Add Product
  // cy.get(':nth-child(2) > .p-4 > :nth-child(3) > .button').click({force: true})  

  //Select product
  // cy.get(':nth-child(3) > .w-4\/12 > #name > .css-8pw2m5-control > .css-19ppke0').click({force: true})

  //Add quantity to ur product
  // cy.get(':nth-child(3) > .amount_wrap > .alisa-input > .focus-within\:ring-2 > .bg-white > :nth-child(3)').click()

  //Catalog Page
  // cy.get(':nth-child(5) > a.flex > .active-sidebar').click()

  // Select on the map to select branch
  // cy.get('.ymaps-2-1-79-events-pane').click({force: true})

  // delete product
  // cy.get('//*[@id="full-width-tabpanel-0"]/div/p/div/div[2]/div[2]/div[1]/div[9]').click({force: true})
  // cy.get(':nth-child(2) > .p-4 > :nth-child(1) > .focus\:outline-none').click({force: true})

  // Not Call to client
  // cy.go('back')

  //Create New Order Page
  // cy.get(':nth-child(4) > :nth-child(1) > .button > .items-center').click({force: true})
  
  // Select on the map to select branch
  // cy.get('.ymaps-2-1-79-events-pane').click({force: true})

  // Not to call
  // cy.get(':nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > .border-bordercolor > .MuiFormControlLabel-root > .MuiTypography-root').click({force: true})

  // Home Number
  // cy.get('#accommodation').type('56')

  // Apartment
  // cy.get('#apartment').type('5')

  // Floor
  // cy.get('#floor').type('3')

  // Entrance
  // cy.get('#building').type('3')

  //Save order
    // cy.get(':nth-child(2) > .button').click()

    //report
    cy.get(':nth-child(7) > a.flex > .active-sidebar').click()
    // cy.get(':nth-child(2) > a > .sidebarItem').click()
    // cy.get(':nth-child(1) > a > .sidebarItem').click()
    // cy.get('.border > .text-sm').click()
    // cy.get('[title="5 января 2023 г."] > .rc-calendar-date').click()
    // cy.get('[title="1 января 2023 г."] > .rc-calendar-date').click()
    // cy.get('.button > .items-center').click()
    // cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(16)').click()
    // cy.get('.transition-all').click()
    // cy.get('.cursor-pointer > .rc-switch').click()
    // cy.get('.fill-current > .MuiSvgIcon-root').click()
    // cy.get('.cursor-pointer > .rc-switch').click()
    // cy.get(':nth-child(2) > a > .sidebarItem > span').click()
    // cy.get('.gap-4 > .bg-white > .text-sm').click()
    // cy.get('[title="3 января 2023 г."] > .rc-calendar-date').click()
    // cy.get('[title="1 января 2023 г."] > .rc-calendar-date').click()
    // cy.get('.gap-4 > .h-9').click()
    // cy.get('.MuiPaper-root > .rounded-lg > .p-4 > :nth-child(4)')
    // cy.contains('ayko').click()
    // cy.contains('Скачать').click()
    // cy.get('.transition-all').click()
    // cy.get(':nth-child(2) > .w-full > .rc-switch').click()
    // cy.get('.transition-all').click()
    // cy.get(':nth-child(2) > .w-full > .rc-switch').click()

    // cy.get('.cursor-pointer > .rc-switch').click()
    // cy.get(':nth-child(3) > a > .sidebarItem > span').click()
    // cy.get('.button > .items-center > .text-sm').click()
    // cy.get(':nth-child(5) > a > .sidebarItem > span').click()
    // cy.get('.gap-4 > .bg-white > .text-sm').click()
    // cy.get('[title="1 января 2023 г."] > .rc-calendar-date').click()
    // cy.get('[title="6 января 2023 г."] > .rc-calendar-date').click()
    // cy.get(':nth-child(2) > .rc-time-picker-input').click()
    // cy.get(':nth-child(1) > ul > .rc-time-picker-panel-select-option-selected').click()
    // cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1').click()

    // cy.get(':nth-child(6) > a > .sidebarItem > span').click()
    // cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1').click()
    // cy.get(':nth-child(7) > a > .sidebarItem > span').click()
    // cy.get(':nth-child(9) > a > .sidebarItem > span').click()
    // cy.get('.py-3 > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1').click()
    // cy.get('.py-3 > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1').click()

    cy.get(':nth-child(8) > a > .sidebarItem > span').click()
    // cy.get('#full-width-tab-1').click()
    cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1').click()
    // cy.get('[style="border-bottom: none;"] > .w-full > :nth-child(1) > .gap-4 > :nth-child(4)').click({force: true})
    // cy.contains("Источник").click()
    // cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(2)').click()

    // cy.contains('Тип доставки').click()
    // cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(1)').click()

    // cy.contains('Курьеры').click()
    // cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(2)').click()
    // cy.contains('Способ оплаты').click()
    // cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded-lg > .p-4 > :nth-child(3)').click()
    // cy.get('#full-width-tab-3').click()
    cy.get(':nth-child(14) > a > .sidebarItem').click()
  })
  })