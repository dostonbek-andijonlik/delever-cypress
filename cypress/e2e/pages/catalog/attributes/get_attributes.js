class Attributes {
  elements = {
    attributesOpenPage: () => cy.contains("Атрибуты"), //cy.get('.h-screen > .space-y-2'),

    addAttributeBtn: () => cy.get(".button > .items-center"),

    addButton: () => cy.get(".button"),

    searchForattributes: () =>
      cy.get(".focus-within\\:ring-2 > .bg-white > .flex"),

    pagination: () => cy.get(".py-1.5 > .text-black-1"),

    pageNumber: () => cy.get(":nth-child(2) > .MuiButtonBase-root"),

    editAttributes: () =>
      cy.get(
        ":nth-child(1) > :nth-child(5) > .flex > .ActionMenu > .MuiButtonBase-root"
      ),

    reductirovate: () => cy.get('[tabindex="0"] > .ml-2'),

    rusName: () => cy.get("#title_ru"),

    ruName: () => cy.get("#full-width-tab-0"),

    engPage: () => cy.get("#full-width-tab-1"),

    enName: () => cy.get("#title_en"),

    enDesc: () => cy.get("#description_en"),

    uzPage: () => cy.get("#full-width-tab-2"),

    uzName: () => cy.get("#title_uz"),

    uzDesc: () => cy.get("#description_uz"),

    writeOpt: () =>
      cy
        .get(
          "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input"),

    addOption: () => cy.contains("Добавить"),

    // rusWriteNewOption: () => cy.get('#input'),

    writeOption: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4 > :nth-child(1) > .w-5/6 > :nth-child(2) > .alisa-input > .focus-within:ring-2 > .bg-white > .flex"
      ),

    deleteAttribute: () => cy.get('[tabindex="-1"] > .ml-2'),

    confirmButton: () => cy.get(":nth-child(2) > .button"),

    nextPage: () => cy.get(":nth-child(4) > .MuiButtonBase-root"),

    rusOptionOne: () =>
      cy
        .get(
          "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(0)
        .click(),

    descOfAttribute: () => cy.get("#description_ru"),

    rusOptionTwo: () =>
      cy
        .get(
          "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(1)
        .click(),

    engOptionOne: () =>
      cy
        .get(
          "#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(0)
        .click(),

    engOptionTwo: () =>
      cy
        .get(
          "#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(1)
        .click(),

    uzbOptionOne: () =>
      cy
        .get(
          "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(0),

    uzbOptionTwo: () =>
      cy
        .get(
          "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(1),

    statusBtnOn: () =>
      cy.get(
        "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(1) > .p-4 > .grid > :nth-child(6)"
      ),

    saveBtn: () => cy.get(":nth-child(2) > .button"),

    tableBody: () => cy.get(".m-4 > .p-4"),

    postAddedOptionRus: () =>
      cy
        .get(
          "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(2),

    postAddedOptionEng: () =>
      cy
        .get(
          "#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(2),

    postAddedOptionUzb: () =>
      cy
        .get(
          "#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid-cols-2 > :nth-child(2) > .p-4"
        )
        .find("input")
        .eq(2),
  };
  openPage() {
    this.elements.attributesOpenPage().click();
  }

  addAttribute(
    rusAttr,
    rusDesc,
    firstRusAttr,
    secondRusAttr,
    enAttrib,
    englDesc,
    firstEngAttrib,
    secondEngAttrib,
    uzbAttrib,
    uzbDesc,
    firstUzbOption,
    secondUzbOption
  ) {
    this.elements.attributesOpenPage().click({ force: true });
    cy.wait(2121);
    this.elements.addAttributeBtn().click({ force: true });
    cy.wait(2121);
    this.elements.descOfAttribute().type(rusDesc);
    this.elements.rusName().type(rusAttr);
    cy.wait(2121);
    this.elements.rusOptionOne().type(firstRusAttr);
    cy.wait(2121);
    this.elements.addOption().click({ force: true });
    cy.wait(2121);
    this.elements.rusOptionTwo().type(secondRusAttr);
    this.elements.engPage().click();
    cy.wait(2121);
    this.elements.enName().type(enAttrib);
    cy.wait(2121);
    this.elements.enDesc().type(englDesc);
    cy.wait(2121);
    this.elements.engOptionOne().type(firstEngAttrib);
    cy.wait(2121);
    this.elements.engOptionTwo().type(secondEngAttrib);
    cy.wait(1212);
    this.elements.uzPage().click();
    this.elements.uzName().type(uzbAttrib);
    cy.wait(1212);
    this.elements.uzDesc().type(uzbDesc);
    cy.wait(1212);
    this.elements.uzbOptionOne().type(firstUzbOption);
    cy.wait(1212);
    this.elements.uzbOptionTwo().type(secondUzbOption);
    cy.wait(1212);
    this.elements.statusBtnOn().find("button").click();
    cy.wait(1212);
    this.elements.saveBtn().click();
    cy.wait(1212);
    this.searchAttr(rusAttr);
  }

  searchAttr(name) {
    this.elements.attributesOpenPage().click({ force: true });
    cy.wait(2121);
    this.elements.searchForattributes(name).type(name);
    cy.wait(1212);
    this.elements.tableBody().should("contain", name);
  }

  updateAttribute(needed, ruName, postRusOption, postEngOption, postUzbOption) {
    this.elements.attributesOpenPage().click();
    this.searchAttr(needed);
    cy.wait(1212);
    this.elements.editAttributes().click();
    cy.wait(1212);
    this.elements.reductirovate().click();
    cy.wait(1212);
    this.elements.rusName().clear().type(ruName);
    this.elements.addOption().click();
    this.elements.postAddedOptionRus().type(postRusOption);
    this.elements.engPage().click();
    this.elements.postAddedOptionEng().type(postEngOption);
    this.elements.uzPage().click({ force: true });
    this.elements.postAddedOptionUzb().type(postUzbOption);
    this.elements.saveBtn().click();
    this.searchAttr(needed);
  }

  deleteAttrib(name) {
    this.searchAttr(name);
    this.elements.editAttributes().click();
    cy.wait(1212);
    this.elements.deleteAttribute().click();
    cy.wait(1212);
    this.elements.confirmButton().click();
    cy.wait(1212);
    this.elements.attributesOpenPage().click();
    this.searchAttr(name);
  }
}

module.exports = new Attributes();
