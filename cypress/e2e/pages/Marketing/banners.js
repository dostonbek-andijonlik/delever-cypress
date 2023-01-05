class Banners{
    elements = {
        bannersPage: () => cy.get(':nth-child(5) > a > .sidebarItem'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () =>  cy.get('.MuiPagination-ul > :nth-child(1)'),
        search: () => cy.get('input'),
        actions: () => cy.get(':nth-child(1) > :nth-child(6) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        confirmDelete: () => cy.get('.grid > :nth-child(2) > .button'),

        // add banner
        addBanner: () =>cy.contains('Добавить'),        
        nameRU: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(1) > .mr-4 > .Input > input'),
        nameEN: () =>cy.get('#full-width-tab-1').click().get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(1) > .mr-4 > .Input > input'),
        addPhoto: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-3 > :nth-child(1) > .Gallery > .mt-2'),
        link: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(2) > .mr-4 > .Input > input'),
        status: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .grid > .col-span-9 > :nth-child(3) > .w-full > .w-3\/4 > #active'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
    }

    banners() {
        this.elements.bannersPage().click()
    }

    search(banner){
        this.elements.search().type(banner)
    }

    updateBanner(ruName, engName, uzName){
        this.elements.actions().click()
        this.elements.actionsEdit().click()
        this.elements.nameRU().clear().type(ruName)
        this.elements.nameEN().clear().type(engName)
        this.elements.nameUZ2().click()
        this.elements.nameUZ().type(uzName)
        this.elements.saveButton().click({force: true})
    }

    deleteBanner(){
        this.elements.actions().click()
        this.elements.actionsDelete().click()
        this.elements.confirmDelete().click({force: true})
    }

    addBanner2(ruName, engName){
        this.elements.addBanner().click()
        this.elements.nameRU().type(ruName)
        this.elements.nameEN().type(engName)
        this.elements.status().click()
        this.elements.saveButton().click({force: true})
    }
}

module.exports = new Banners()

