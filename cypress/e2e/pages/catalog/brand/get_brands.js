class Brand {
  elements = {
    brandOpenPage: () => cy.get(':nth-child(5) > a > .sidebarItem'),
    searchForBrands: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex'),
    firstRowNameColumn: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(3)'),
    pagination: () => cy.get('.py-1\.5 > .text-black-1'),
    tableBody: () => cy.get('.MuiTableBody-root'),

    pageNumber: () => cy.get(':nth-child(2) > .MuiButtonBase-root'),

    editBrand: () => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
    actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root'),
    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    deleteBrand: () => cy.get('[tabindex="-1"] > .ml-2'),
    addButton: () => cy.get('.button'),
    brandName: () => cy.get(':nth-child(1) > .col-span-1 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    brandNumber: () => cy.get(':nth-child(2) > .col-span-1 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    addPhoto: () => cy.get('.add-block'),
    saveButton: () => cy.get(':nth-child(2) > .button'),
    cancelButton: () => cy.get(':nth-child(1) > .button')
  }

  searchBrand(
    brandName
  ){
    cy.wait(1000)
    this.elements.searchForBrands().click().type(brandName).type('{enter}')
    this.elements.tableBody().should('contain', brandName)
    
  }

  addBrand(
    name,
    sequenceNumber,
    imagesPath
  ){
    this.elements.addButton().click()
    this.elements.brandName().click().type(name)
    this.elements.brandNumber().click().type(sequenceNumber)
    this.elements.addPhoto().find('input').selectFile(imagesPath, {force:true})
    cy.wait(1000)
    this.elements.saveButton().click()
    cy.wait(1000)

    this.searchBrand(name)
  }

    editBrand(
      brandToEdit,
      newName,
      newSequene,
      newImagesPath
    ){
      this.elements.searchForBrands().click().type(brandToEdit).type('{enter}')
      this.elements.actions().click()
      this.elements.editBrand().click()
      this.elements.brandName().click().clear().type(newName)
      this.elements.brandNumber().click().clear().type(newSequene)
      this.elements.addPhoto().find('input').selectFile(newImagesPath, {force:true})
      cy.wait(1000)
      this.elements.saveButton().click()
      cy.wait(1000)
  
      this.searchBrand(newName)
    }

    deleteBrand(
      brandName
    ){
      this.elements.searchForBrands().click().type(brandName).type('{enter}')
      this.elements.actions().click()
      this.elements.deleteBrand().click()
      cy.contains("Да").click()
      this.elements.tableBody().should('not.have.value', brandName)
    }

}

module.exports = new Brand();