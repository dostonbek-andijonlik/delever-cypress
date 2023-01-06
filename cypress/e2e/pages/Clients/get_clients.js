class Client {
  elements = {
    // Open Clients Page
    clientsPage: () => cy.get(":nth-child(3) > a.flex > .active-sidebar"),

    // Pagination
    nextPage: () => cy.get(":nth-child(3) > .MuiButtonBase-root"),

    //search for clients
    searchForClients: () => cy.get(".focus-within\\:ring-2 > .bg-white"),

    paginationNumber: () => cy.get(".ml-2"), // cy.get('.py-1\.5 > .text-black-1'), //cy.get('.py-1\.5'),
    paperRoot: () => cy.get(".MuiPaper-root > :nth-child(2)"),

    pageNumber: () => cy.get(":nth-child(3) > .MuiButtonBase-root"),

    transitionAll: () =>
      cy.get(".transition-all > .fill-current > .MuiSvgIcon-root > path"),

    action: () =>
      cy.get(
        ":nth-child(3) > :nth-child(6) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root > path"
      ),

    edit: () =>
      cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),

    editFirstName: () => cy.get("#first_name"),

    editLastName: () => cy.get("#last_name"),

    editPhoneNumber: () => cy.get("#phone"),

    
    selectIndicator: () => cy.get('.select__indicator'),
    
    selectMenuList: () => cy.get('#react-select-3-option-0'), //cy.contains('B2C'),
    
    saveButton: () => cy.get(':nth-child(2) > .button > .items-center'),
    // nextPage: () => cy.get(':nth-child(9) > .MuiButtonBase-root'),
    
    delete: () => cy.get('.MuiList-root > [tabindex="-1"]'),

    confirmDeleteButton: () => cy.get(':nth-child(2) > .button'), 

    previousPage: () => cy.get(".MuiPagination-ul > :nth-child(1)"),

    switchName: () =>
      cy.get(".p-4 > :nth-child(1) > :nth-child(2) > .rc-switch"),

    reSwitchName: () =>
      cy.get(".p-4 > :nth-child(1) > :nth-child(2) > .rc-switch"),

    reset: () => cy.contains("СБРОСИТЬ"), //cy.get('.jss4 > .MuiButtonBase-root > .MuiButton-label'),
  };

  getAllClients() {
    this.elements.clientsPage().click();
  }

  clientsCountOnPage() {
    this.elements.paginationNumber().click({ force: true }).scrollIntoView();
    this.elements.paperRoot().click();
  }

  transition() {
    this.elements.transitionAll().click();
    this.elements.switchName().click();
    this.elements.reSwitchName().click();
    // this.elements.reset().click({force: true})
  }
  
  updateClient(fname, lname, phone) {
    this.elements.action().click();
    this.elements.edit().click();
    this.elements.editFirstName().clear().type(fname);
    this.elements.editLastName().clear().type(lname);
    this.elements.editPhoneNumber().clear().type(phone);
    this.elements.selectIndicator().click()
    this.elements.selectMenuList().click()
    this.elements.saveButton().click()
  }

  searchClient(fname) {
    this.elements.searchForClients().click().type(fname);
  }

  deleteClient(){
    this.elements.action().click()
    this.elements.delete().click()
    this.elements.confirmDeleteButton().click()
  }
}

module.exports = new Client();
