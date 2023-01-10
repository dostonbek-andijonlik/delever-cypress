class Category {
  elements = {
    categoryOpenPage: () => cy.get(':nth-child(2) > a > .sidebarItem'),

    searchForCategory: () => cy.get('.focus-within\:ring-2 > .bg-white > .flex'),

    pagination: () => cy.get('.py-1\.5 > .text-black-1'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editCategory: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(4)'),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    titleRu: () => cy.get('#title_ru'),
    titleEng: () => cy.get('#title_en'),
    titleUz: () => cy.get('#title_uz'),

    openEngTitle: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1'), 

    openUzTitle: ()=> cy.get('#full-width-tab-2'),

    selectCategory: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(3) > .w-3\/4 > :nth-child(1) > #category_id > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer'),

    orderNum: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(4) > .w-3\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > #order_no'), 

    save: () => cy.get(':nth-child(2) > .button > .items-center'),

    deleteCategory: () => cy.get('[tabindex="-1"] > .ml-2'),

    confirmButton: () => cy.get(':nth-child(2) > .button > .flex'),

    nextPageButton: () => cy.get(':nth-child(4) > .MuiButtonBase-root'),
  }

  openPage(){
    this.elements.categoryOpenPage().click()
  }

  editCategory(ruName, engName, uzName, category, number){
    this.elements.categoryOpenPage().click()
    this.elements.editCategory().click()
    this.elements.reductirovate().click({multiple: true})
    this.elements.titleRu().clear().type(ruName)
    this.elements.openEngTitle().click()
    this.elements.titleEng().clear().type(engName)
    this.elements.openUzTitle().click()
    this.elements.titleUz().clear().type(uzName)
    // this.elements.selectCategory().type(category)
    // this.elements.orderNum().type(number)
    this.elements.save().click()
  }

  deleteCategory(){
    this.elements.categoryOpenPage().click()
    this.elements.editCategory().click()
    this.elements.deleteCategory().click()
    this.elements.confirmButton().click({force: true  })
  }

  nextPage(){
    this.elements.categoryOpenPage().click()
    this.elements.editCategory().click()
    this.elements.nextPageButton().click({force: true})
  }
 
}

module.exports = new Category();