class JOWI{
    elements = {
        jowiPage: () => cy.get(':nth-child(2) > .spanITem > .undefined > .w-full > :nth-child(1)').click().get('.flex-col > :nth-child(3) > a > .sidebarItem'),
        dispatcherID: () => cy.get('.col-span-1 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        // Branches 
        branchesSubpage: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        searchBranch: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        branchesLimit: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .py-1\.5 > .ml-2'),
        nextBranchPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(3)'),
        previousBranchPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        addButton: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .pr-4 > .pl-4 > :nth-child(1) > .button'),
        chooseAdminBranch: () => cy.get('.css-tlfecz-indicatorContainer'),
        choosenJOWIBranch: () => cy.get('.Input > input'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
        // Product
        productsPage: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .px-1'),
        searchProduct: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        refreshProductButton: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .pr-4 > :nth-child(1) > :nth-child(1) > .button'),
        productsLimit: cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .py-1\.5 > .ml-2'),
        nextProductPage: () => cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiSvgIcon-root'),
        previousProductPage: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        addProductButton: () => cy.get(':nth-child(2) > :nth-child(1) > .button'),
        chooseAdminProduct: () => cy.get(':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-8mmkcg'),
        chooseJOWIProduct: () => cy.get(':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-8mmkcg'),
        
    }

}

module.exports = new JOWI()
