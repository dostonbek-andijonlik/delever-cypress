class Popups {
  elements = {
    popupPage: () => cy.get(":nth-child(4) > a > .sidebarItem"),
    search: () => cy.get("input"),
    itemsLimit: () => cy.get(".ml-2"),
    thirtyLimit: () => cy.get('.MuiPaper-root > :nth-child(2)'),
    nextPage: () => cy.get(".MuiPagination-ul > :nth-child(3)"),
    previousPage: () => cy.get(".MuiPagination-ul > :nth-child(1)"),
    actions: () =>
    cy.get(':nth-child(1) > :nth-child(6) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label'),
    actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
    actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
    // add Popup
    addPopup: () => cy.get(".button"),
    popupPeriod: () =>cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(3) > .mr-4'), // ru
    dayOne: () => cy.get('.rc-calendar-selected-end-date > .rc-calendar-date'),
    dayTwo: () => cy.get('[title="6 января 2023 г."] > .rc-calendar-date'),
    fromTime: () =>
    cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(3) > .ml-4'),
    toTime: () =>
    cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(3) > :nth-child(3)'),
    link: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(4) > :nth-child(2) > :nth-child(1) > .alisa-input > .focus-within:ring-2 > .bg-white > .flex > #url"
      ),
    status: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(6) > .w-1\/3 > .w-3\/4'),
    priority: () =>cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-10 > :nth-child(6) > :nth-child(2)'),
    addPhoto: () =>
      cy.get(
        "#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-2 > .h-full > .Gallery > .mt-2"
      ),
    saveButton: () => cy.get(":nth-child(2) > .button"),
    cancelButton: () => cy.get(":nth-child(1) > .button"),

    // ru
    nameRU: () => cy.get("#title_ru"),
    descriptionRU: () => cy.get("#about_ru"),
    buttonTextRU: () => cy.get("#button_ru"),

    // uz
    nameUZ: () =>
      cy
        .get("#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#title_uz"),
    descriptionUZ: () =>
      cy
        .get("#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#about_uz"),
    buttonTextUZ: () =>
      cy
        .get("#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#button_uz"),

    // en
    nameEN: () =>
      cy
        .get("#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#title_en"),
    descriptionEN: () =>
      cy
        .get("#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#about_en"),
    buttonTextEN: () =>
      cy
        .get("#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1")
        .click()
        .get("#button_en"),
  };

  openPage() {
    this.elements.popupPage().click();
  }

  itemLimit(){
    this.elements.itemsLimit().click()
    this.elements.thirtyLimit().click({force: true})
  }

  updatePopup(ruName, ruDesc, time1, time2, engName, engDesc, uzName, uzDesc, number){
    this.elements.actions().click()
    this.elements.actionsEdit().click()
    this.elements.nameRU().clear().type(ruName)
    this.elements.descriptionRU().clear().type(ruDesc)
    this.elements.fromTime().clear().type(time1)
    this.elements.toTime().clear().type(time2)
    this.elements.nameEN().clear().type(engName)
    this.elements.descriptionEN().clear().type(engDesc)
    this.elements.nameUZ().clear().type(uzName)
    this.elements.descriptionUZ().clear().type(uzDesc)
    this.elements.priority().find('input').clear().type(number)
    this.elements.saveButton().click()
  }


}

module.exports = new Popups();
