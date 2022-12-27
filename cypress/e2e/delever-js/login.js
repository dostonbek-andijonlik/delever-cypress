class loginPage {
  elements = {
    usernameInput: () => cy.get("#login"),
    passwordInput: () => cy.get("#password"),
    showPassword: () => cy.get(".cursor-pointer > .MuiSvgIcon-root > path"),
    submitButton: () => cy.get(".button").click(),
  };

  // typeUsername(username){
  //   this.elements.usernameInput().type(username);
  // }
  // typePassword(password){
  //   this.elements.passwordInput().type(password);
  // }
}

module.exports = new loginPage();
