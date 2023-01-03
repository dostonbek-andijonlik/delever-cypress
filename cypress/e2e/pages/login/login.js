class loginPage {
  elements = {
    usernameInput: () => cy.get("#login"),
    passwordInput: () => cy.get("#password"),
    showPassword: () => cy.get(".cursor-pointer > .MuiSvgIcon-root > path"),
    submitButton: () => cy.get(".button"),
  };


}

module.exports = new loginPage();
