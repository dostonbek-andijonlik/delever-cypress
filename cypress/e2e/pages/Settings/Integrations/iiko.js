class IIKO{
    elements = {
        iikoPage: () => cy.get(':nth-child(2) > .spanITem > .undefined > .w-full > :nth-child(1)').click().get(':nth-child(2) > a > .sidebarItem'),
        // Credentials
        apiLogin: cy.get(':nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        dipatcherID: () => cy.get(':nth-child(4) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        savcredentialButton: () => cy.get(':nth-child(5) > .button'),
        // Branches
        branchesSubpage: () => cy.get(':nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        searchBranch: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        branchesLimit: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        nextBranchPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(3)'),
        previousBranchPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        refreshBranchButton: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .pr-4 > :nth-child(1) > :nth-child(1) > .button'),
        addButton: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .pr-4 > :nth-child(2) > :nth-child(1) > .button'),
        chooseAdminBranch: () => cy.get(':nth-child(1) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator > .css-8mmkcg'),
        choosenIIKOBranch: () => cy.get(':nth-child(2) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
        // Products
        productsPage: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .px-1'),
        searchProduct: () => cy.get('.gap-5 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        refreshProductButton: () => cy.get(':nth-child(2) > .button'),
        allProducts: () => cy.get('.py-3.border-b > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-0 > .MuiTab-wrapper > .px-1'),
        comboProducts: () => cy.get('.py-3.border-b > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        productsLimit: cy.get('.jss222 > :nth-child(1) > .m-4 > .border-t > .w-full > .py-1\.5 > .ml-2 > path'),
        nextProductPage: () =>     cy.get(':nth-child(9) > .MuiButtonBase-root'),
        previousProductPage: () => cy.get('.jss222 > :nth-child(1) > .m-4 > .border-t > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        deleteButton: () => cy.get(':nth-child(1) > :nth-child(7) > .focus\:outline-none'),
        addProductButton: () => cy.get(':nth-child(3) > .button'),
        chooseAdminProduct: () => cy.get(':nth-child(1) > .css-2b097c-container > .css-74hnm8-control > .css-1wbpri1 > .css-tpaeio-indicatorContainer'),
        chooseIIKOProduct: () => cy.get(':nth-child(2) > .css-2b097c-container > .css-74hnm8-control > .css-1wbpri1 > .css-tpaeio-indicatorContainer > .css-8mmkcg'),
        // Terminal 
        terminalPage: () => cy.get('#full-width-tab-3 > .MuiTab-wrapper > .px-1'),
        searchTerminal: () => cy.get('#full-width-tabpanel-3 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        refreshTerminalButton: () => cy.get('#full-width-tabpanel-3 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .pr-4 > :nth-child(1) > :nth-child(1) > .button'),
        addTerminalButton: () => cy.get('#full-width-tabpanel-3 > .MuiBox-root > .MuiTypography-root > .m-4 > :nth-child(1) > .h-14 > .pr-4 > :nth-child(2) > :nth-child(1) > .button'),
        terminalsLimit: () => cy.get('#full-width-tabpanel-3 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .py-1\.5 > .ml-2'),
        previousTerminalPage: () => cy.get('#full-width-tabpanel-3 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        nextTerminalPage: () => cy.get('#full-width-tabpanel-3 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(3)'),
        chooseAdminBranchTerminal: () =>cy.get(':nth-child(1) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator > .css-8mmkcg'),
        chooseTerminal: () => cy.get(':nth-child(2) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator'),
    }
}

module.exports = new IIKO()
