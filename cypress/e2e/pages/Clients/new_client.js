class AddClient {
  elements = {
    // Add button
    addButton: () => cy.get(".button"),

    // FirstName
    firstName: () => cy.get("#first_name"),

    // LastName
    lastName: () => cy.get("#last_name"),

    // Phone Number
    phoneNumber: () => cy.get("#phone"),

    // Type Client's
    clientTypes: () => cy.get(".select__value-container"),

    // Type Client's
    b2c: () => cy.get("#react-select-3-option-0"),

    //add photo
    addPhoto: () => cy.get('.Gallery > .mt-2'), 
    
    // Save Button
    saveButton: () => cy.get(":nth-child(2) > .button"),
  };

  add(){
    this.elements.addButton().click()
  }

  fillIn(fname, lname, phone){
    this.elements.firstName().type(fname)
    this.elements.lastName().type(lname)
    this.elements.phoneNumber().type(phone)
    this.elements.clientTypes().click()
    this.elements.b2c().click()
    this.elements.saveButton().click()
  }
}

module.exports = new AddClient();
