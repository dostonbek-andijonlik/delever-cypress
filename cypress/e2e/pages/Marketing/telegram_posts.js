class TelegramPost {
  elements = {
    telegramPostsPage: () => cy.get(":nth-child(6) > a > .sidebarItem"),
    itemsLimit: () => cy.get(".ml-2"),
    nextPage: () => cy.get(".MuiPagination-ul > :nth-child(3)"),
    previousPage: () => cy.get(".MuiPagination-ul > :nth-child(1)"),
    search: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
    chooseContentType: () => cy.get(".select__indicator"),
    firstTableItem: () => cy.get(".bg-lightgray-5 > :nth-child(2) > div"),
    tableBody: () => cy.get(".MuiTableBody-root"),

    // add telegram post
    addTelegeramPost: () => cy.get(".button"),
    messageField: () => cy.get(".p-4 > .w-full"),
    addPhoto: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .my-4 > .Gallery > .add-block"
      ),
    addVideo: () =>
      cy
        .get(".MuiTabs-flexContainer")
        .eq(1)
        .click()
        .get(
          "#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .my-4 > .Gallery > .add-block"
        ),
    addGIF: () =>
      cy
        .get(".Mui-selected > .MuiTab-wrapper > .px-1")
        .click()
        .get(
          "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .my-4 > .Gallery > .add-block"
        ),
    addButton: () => cy.get(".button"),
  };

  searchPost(postName) {
    cy.wait(1000)
    this.elements.search().click().type(postName);
    cy.wait(2000);
    this.elements.tableBody().should("contain", postName);
    this.elements.search().clear();
  }

  selectContentType(contentTypeName) {
    cy.wait(1000)
    this.elements.chooseContentType().click();
    cy.contains(contentTypeName).click();
  }

  addPost(message, photoPath, videoPath, gifPath) {
    cy.wait(1000)
    this.elements.addButton().click();
    this.elements.messageField().click().type(message);
    if (photoPath != undefined) {
      this.elements
        .addPhoto()
        .find("input")
        .selectFile(photoPath, { force: true });
    }

    if (videoPath != undefined) {
      this.elements
        .addVideo()
        .find("input")
        .selectFile(videoPath, { force: true });
    }

    if (gifPath != undefined) {
      this.elements.addGIF().find("input").selectFile(gifPath, { force: true });
    }
    cy.wait(3000);
    this.elements.addButton().click();

    cy.wait(3000);
    this.elements.tableBody().should("contain", message);
  }
}

module.exports = new TelegramPost();
