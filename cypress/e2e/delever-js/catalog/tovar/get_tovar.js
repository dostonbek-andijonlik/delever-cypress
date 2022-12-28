class GetAllProducts{
  elements = {
      //Catalog
      catalog: () => cy.get(":nth-child(5) > a.flex > .active-sidebar"),

      //edit button
      edit: () => cy.get(':nth-child(1) > :nth-child(10) > .flex > .ActionMenu > .MuiButtonBase-root'),

      //redaktirovat
      redactivate: () => cy.get('[tabindex="0"] > .ml-2'),

    //delete product
    deleteProduct: () => cy.get('[tabindex="-1"] > .ml-2'),

    //column filter
    columnFilter: () => cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(10)'),

    //paginationCounts
    paginate: () => cy.get('.py-1\.5'),

    //pageNumber
    pageNumber: () => cy.get(':nth-child(4) > .MuiButtonBase-root'),

    //

  }
}


module.exports = {GetAllProducts}