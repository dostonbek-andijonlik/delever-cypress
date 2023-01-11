// const cypress = require("cypress");


class NewCategory{
  elements = {
    categoryOpenPage: () => cy.get(':nth-child(2) > a > .sidebarItem'),
    searchForCategory: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label'),
    addButton: () => cy.get('.button'),//cy.contains('+ Добавит'),
    editCategory: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),
    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

     // ru title
     ruTitle: () => cy.get("#title_ru"),

     // ru desc
     ruDesc: () => cy.get("#description_ru"),
     tableBody: () => cy.get('.MuiTableBody-root'),

     // en title
     enTitle: () => cy.get("#title_en"),

     // en desc
     enDesc: () => cy.get("#description_en"),

     // uz title
     uzTitle: () => cy.get("#title_uz"),

     // uz desc
     uzDesc: () => cy.get("#description_uz"),

     order_no: () => cy.get('#order_no'),

     categorySelect: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(3)'),


     statusButton: () =>cy.get('.p-4 > [style="overflow-x: hidden;"] > .react-swipeable-view-container > [aria-hidden="false"]'),

     orderNum: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(4)'),

     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  }

  addCategory(ruName, enName, uzName, number){
    this.elements.categoryOpenPage().click()
    this.elements.addButton().click()
    this.elements.ruTitle().type(ruName, {force: true})
    this.elements.enTitle().type(enName, {force: true})
    this.elements.uzTitle().type(uzName, {force: true})
    this.elements.orderNum().find('input').type(number)
    this.elements.statusButton().find('button').click({force: true}, {multiple: true})
    this.elements.saveButton().click()
  }


  addSubcategory(
    ruName,
    rudesc,
    enName,
    enDesc,
    uzName,
    uzDesc,
    number,
    parentCategory,
  ){
    this.elements.categoryOpenPage().click()
    this.elements.addButton().click()
    this.elements.categorySelect().find('input').click({force: true})
    cy.contains(parentCategory).click()
    this.elements.ruTitle().type(ruName, {force: true})
    this.elements.ruDesc().type(rudesc)
    this.elements.enTitle().type(enName, {force: true})
    this.elements.enDesc().type(enDesc, {force:true})
    this.elements.uzTitle().type(uzName, {force: true})
    this.elements.uzDesc().type(uzDesc, {force:true})
    
    this.elements.orderNum().find('input').type(number)
    this.elements.statusButton().find('button').click({force: true}, {multiple: true})
    this.elements.saveButton().click()
    this.elements.tableBody().contains(parentCategory).click()
    cy.contains(ruName)

    
    

  }


  editSubcategory(
    newRuName,
    newRuDesc,
    newEnName,
    newEnDesc,
    newUzName,
    newUzDesc,
    newNumber,
    newParentCategory,
    categoryName
  ){
    this.elements.categoryOpenPage().click()
    this.elements.searchForCategory().type(categoryName)
    cy.wait(1000)
    this.elements.actions().click({force:true})
    this.elements.reductirovate().click()
    this.elements.categorySelect().find('input').click({force: true})
    cy.contains(newParentCategory).click({force:true})
    this.elements.ruTitle().clear().type(newRuName, {force: true})
    this.elements.ruDesc().clear().type(newRuDesc)
    this.elements.enTitle().type(newEnName, {force: true})
    this.elements.enDesc().type(newEnDesc, {force:true})
    this.elements.uzTitle().type(newUzName, {force: true})
    this.elements.uzDesc().type(newUzDesc, {force:true})
    
    this.elements.orderNum().find('input').clear().type(newNumber)
    this.elements.statusButton().find('button').click({force: true}, {multiple: true})
    this.elements.saveButton().click()
    this.elements.tableBody().contains(newParentCategory).click()
    cy.contains(newRuName)
    
  }
}

module.exports = new NewCategory();