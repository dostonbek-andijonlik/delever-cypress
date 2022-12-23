class loginPage {
  elements = {
    usernameInput: () => cy.get("#login"),
    passwordInput: () => cy.get("#password"),
  };

  typeUsername(username){
    this.elements.usernameInput().type(username);
  }
  typePassword(password){
    this.elements.passwordInput().type(password);
  }
}

module.exports = new loginPage();
