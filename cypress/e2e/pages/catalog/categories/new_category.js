// const cypress = require("cypress");

const { deleteCategory } = require("./get_categories")


class NewCategory{
  elements = {
    categoryOpenPage: () => cy.get(':nth-child(2) > a > .sidebarItem'),
    searchForCategory: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label'),
    addButton: () => cy.get('.button'),
    editCategory: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),
    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),
    addPhoto: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-3 > .h-full > .Gallery > .add-block'),

    categoryList: () => cy.get('.css-11unzgr'),

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
    deleteCategory: () => cy.get('.MuiList-root > [tabindex="-1"]'),
     
     categorySelect: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(3)'),


     statusButton: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(5)'),

     orderNum: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(4)'),

     saveButton: () => cy.get(':nth-child(2) > .button'),

     cancelButton: () => cy.get(':nth-child(1) > .button'),
  }

  addCategory(ruName, enName, uzName, number){
    this.elements.categoryOpenPage().click()
    cy.wait(2000)
    this.elements.addButton().click()
    cy.wait(2000)
    this.elements.ruTitle().type(ruName, {force: true})
    cy.wait(2000)
    this.elements.enTitle().type(enName, {force: true})
    cy.wait(2000)
    this.elements.uzTitle().type(uzName, {force: true})
    cy.wait(2000)
    this.elements.orderNum().find('input').type(number)
    this.elements.statusButton().find('button').click({force: true})
    cy.wait(2000)
    this.elements.saveButton().click()
    cy.wait(3000)
  }



  // SMY35 ------------------------------------
  addSubcategory(
    ruName,
    rudesc,
    enName,
    enDesc,
    uzName,
    uzDesc,
    number,
    parentCategory,
    imagePath
  ){
    this.elements.categoryOpenPage().click()
    cy.wait(2000)
    this.elements.addButton().click()
    this.elements.categorySelect().find('input').click({force: true}).type(parentCategory).click()
    cy.wait(5000)
    this.elements.categoryList().contains(parentCategory).click()
    this.elements.addPhoto().find('input').selectFile(imagePath, {force: true})
    this.elements.ruTitle().type(ruName, {force: true})
    this.elements.ruDesc().type(rudesc)
    this.elements.enTitle().type(enName, {force: true})
    this.elements.enDesc().type(enDesc, {force:true})
    this.elements.uzTitle().type(uzName, {force: true})
    this.elements.uzDesc().type(uzDesc, {force:true})
    
    this.elements.orderNum().find('input').type(number)
    this.elements.statusButton().find('button').click()
    this.elements.saveButton().click()
    cy.wait(2000)
    this.elements.categoryOpenPage().click()
    cy.wait(2000)    
    this.elements.searchForCategory().click().type(parentCategory)
    cy.wait(1000)
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
    parentCategoryName,
    categoryName
  ){
    this.elements.categoryOpenPage().click()
    cy.wait(2000)
    this.elements.searchForCategory().click().type(categoryName)
    cy.wait(2000)
    this.elements.actions().click({force:true})
    this.elements.reductirovate().click()
    this.elements.ruTitle().clear().type(newRuName, {force: true})
    this.elements.ruDesc().clear().type(newRuDesc)
    this.elements.enTitle().type(newEnName, {force: true})
    this.elements.enDesc().type(newEnDesc, {force:true})
    this.elements.uzTitle().type(newUzName, {force: true})
    this.elements.uzDesc().type(newUzDesc, {force:true})
    
    this.elements.orderNum().find('input').clear().type(newNumber)
    this.elements.statusButton().find('button').click({force: true}, {multiple: true})
    this.elements.saveButton().click()
    cy.wait(2000)
    this.elements.tableBody().contains(parentCategoryName).click()
    cy.contains(newRuName)
    
  }


  deleteSubcategory(
    categoryName
  ){
    this.elements.categoryOpenPage().click()
    cy.wait(2000)
    this.elements.searchForCategory().type(categoryName)
    cy.wait(2000)
    this.elements.actions().click()
    this.elements.deleteCategory().click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .button').click()
    cy.wait(2000)
    this.elements.searchForCategory().click().clear().type(categoryName).type('{enter}')
    cy.wait(2000)
    this.elements.tableBody().should('not.have.value', categoryName)
    
  }

  // --------------------------------------
}

module.exports = new NewCategory();