const { searchItem } = require("./operators")

class CouriersType{
    elements = {
        courierTypesPage: () => cy.get(':nth-child(3) > a > .sidebarItem'),
        searchType: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        addType: () => cy.get('.button'),
        itemsLimit: () => cy.get('.ml-2'),
        nextPage: () => cy.get('.MuiPagination-ul > :nth-child(3)'),
        previousPage: () => cy.get('.MuiPagination-ul > :nth-child(1)'),
        actions: () => cy.get(':nth-child(1) > :nth-child(5) > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsEdit: () => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        actionsDelete: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        modifyTable: () => cy.get('.transition-all > .fill-current > .MuiSvgIcon-root'),
        firstTableItem: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)'),
        tableBody: () => cy.get('.MuiTableBody-root'),
        // for new courier type
        nameField: () => cy.get('#name'),
        fromDistance: () => cy.get('#distance_from'),
        toDistance: () => cy.get('#distance_to'),
        hourField: () => cy.get('.rc-time-picker-panel-combobox > :nth-child(1)'),
        tenHour: () => cy.get(':nth-child(1) > ul > :nth-child(11)'),
        oneMinute: () => cy.get('.rc-time-picker-panel-combobox > :nth-child(2) > ul > :nth-child(2)'),
        twnetyThreeHour: () => cy.get(':nth-child(1) > ul > :nth-child(23)'),

        minuteField: () => cy.get('.rc-time-picker-panel-combobox > :nth-child(2)'),
        FromTime: (n) => cy.get(`:nth-child(${n}) > :nth-child(2) > div > .rc-time-picker > .rc-time-picker-input`),
        ToTime: (n) => cy.get(`:nth-child(${n}) > :nth-child(3) > div > .rc-time-picker > .rc-time-picker-input`),
        Status: (n) => cy.get(`:nth-child(${n}) > :nth-child(4) > .rc-switch`),
             
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button')
    }

    searchCourierType(typeName){
        this.elements.searchType().type(typeName)
        this.elements.firstTableItem().should('contain', typeName)
        this.elements.searchType().clear()
    };

    changeitemsLimit(pageLimit){
        this.elements.itemsLimit().click()
        //should be uncommented after issue is fixed

        //cy.contains(pageLimit).click()
        //this.elements.tableBody().its('length').should('be.lte', 3)
        
    }

    addCourierType(
        name, 
        distance_from,
        distance_to
    ){       
        this.elements.addType().click({force: true})
        this.elements.nameField().click().type(name)
        this.elements.fromDistance().click().type(distance_from)
        this.elements.toDistance().click().type(distance_to)
        // const n = this.elements.worktime.length
        for(let i=0; i<5; i++){

            this.elements.Status(i+1).click({force: true})
            this.elements.FromTime(i+1).click({force:true})
            this.elements.tenHour().click({force:true})
            this.elements.oneMinute().click({force:true})
            this.elements.ToTime(i+1).click({force:true})
            this.elements.twnetyThreeHour().click({force:true})
            this.elements.oneMinute().click({force:true})


        }         

        this.elements.saveButton().click()
        this.elements.tableBody().should('contain', name)
    }

    deleteCourierType(courierName){
        this.elements.searchType().click().type(courierName)
        cy.wait(1000)
        this.elements.actions().click()
        this.elements.actionsDelete().click()
        cy.contains("Да").click()
        this.elements.tableBody().should('not.have.value', courierName)
    }

    editCourierType(
        name,
        distance_from,
        distance_to
    ){
        this.elements.searchType().click().type("cypress")
        cy.wait(1000)
        this.elements.actions().click()
        this.elements.actionsEdit().click()
        this.elements.nameField().click().clear().type(name)
        this.elements.fromDistance().click().clear().type(distance_from)
        this.elements.toDistance().click().clear().type(distance_to)
        this.elements.saveButton().click()
        this.elements.tableBody().should('contain', name)

    };

};

module.exports = new CouriersType()