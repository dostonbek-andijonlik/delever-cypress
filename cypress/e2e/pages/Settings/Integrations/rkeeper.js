class RKeeper{
    elements = {
        rkeeperField: () => cy.get(':nth-child(7) > a > .sidebarItem > span'),
        nameField: () => cy.get(':nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        passwordField: () => cy.get(':nth-child(4) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        chooseBranchCrednetial: () => cy.get('.css-tpaeio-indicatorContainer > .css-8mmkcg'),
        saveCredentials: () => cy.get(':nth-child(7) > .button'),
        // Branches
        branchesPage: () => cy.get(':nth-child(7) > .button'),
        searchBranch: () => cy.get('.p-4 > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        addBranch: () => cy.get('.p-4 > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        branchesLimit: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .py-1\.5 > .ml-2'),
        previousPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        nextPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(3)'),
        chooseAdminBranch: () => cy.get('.css-tpaeio-indicatorContainer'),
        RKeeperBranchURL: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex'), 
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
        // Products:
        productsPage: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .px-1'),
        searchProduct: () => cy.get('.gap-5 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        refreshButton: () => cy.get('.gap-5 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        addButton: () => cy.get('.gap-5 > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        allProducts: () => cy.get('.py-3.border-b > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-0 > .MuiTab-wrapper > .px-1'),
        comboProducts: () => cy.get('.py-3.border-b > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        productsLimit: () => cy.get('.jss26 > :nth-child(1) > .m-4 > .border-t > .w-full > .py-1\.5 > .ml-2'),
        previousProductsPage: () => cy.get('.jss26 > :nth-child(1) > .m-4 > .border-t > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        nextProductsPage: () => cy.get(':nth-child(9) > .MuiButtonBase-root'),
        deleteComboButton: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(7) > .focus\:outline-none'),
        chooseProduct: () => cy.get(':nth-child(1) > .css-2b097c-container > .css-74hnm8-control > .css-19ppke0'),
        chooseRKeeper: () => cy.get(':nth-child(2) > .css-2b097c-container > .css-74hnm8-control > .css-19ppke0'),
    }
}

module.exports = new RKeeper()
