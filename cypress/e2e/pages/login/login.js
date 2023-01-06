class loginPage {
  elements = {
    usernameInput: () => cy.get("#login"),
    passwordInput: () => cy.get("#password"),
    showPassword: () => cy.get(".cursor-pointer > .MuiSvgIcon-root > path"),
    submitButton: () => cy.get(".button"),
  };

  login() {    
    this.elements.usernameInput().type("oybek3")
    this.elements.passwordInput().type("oybek1024")
    this.elements.submitButton().click()
  }


}

module.exports = new loginPage();
