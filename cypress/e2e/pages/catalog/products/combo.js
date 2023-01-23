class Combo {
    elements = {
        addButton: () => cy.get('.button'),
        search: () => cy.get('.focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        actions: () => cy.get(':nth-child(1) > :nth-child(10) > .flex > .ActionMenu > .MuiButtonBase-root'),
        editButton: () => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        deleteButton: () => cy.get('.MuiList-root > [tabindex="-1"]'),

        enField: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .flex > .px-1'),
        uzField: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .flex > .px-1'),
        ruTitle: () => cy.get('#title_ru'),
        enTitle: () => cy.get('#title_en'),
        uzTitle: () => cy.get('#title_uz'),
        ruDescription: () => cy.get('#description_ru'),
        enDescription: () => cy.get('#description_en'),
        uzDescription: () => cy.get('#description_uz'),
        statusButton: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1)> justi'),
        ruField: () => cy.get('#full-width-tab-0 > .MuiTab-wrapper > .flex > .px-1'),
        selectMenuList: () =>cy.get('.select__menu-list'),
        tableBody: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4 > .MuiTableContainer-root'),
        productsTable: () => cy.get('.m-4 > .p-4'),
        // linked products page
        linkedProducts: () => cy.get('.flex > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),
        addProduct: () => cy.get('.jss28 > .MuiButtonBase-root > .MuiButton-label'),
        chooseProductToLink: () => cy.get('.css-1hwfws3'),
        confirmButton: () => cy.get('.grid > :nth-child(2) > .button'),
        cancelButton: () => cy.get('.grid > :nth-child(1) > .button'),
        deleteLinkedProduct: () => cy.get(':nth-child(5) > .flex > .cursor-pointer'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        comboLinkedProductTable : () =>cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4'),
        //--------------------------
        
        // Combo Type 
        comboLinkedPage: () => cy.get('.m-4 > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),
        comboLinkedTable: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4 > .MuiTableContainer-root'),
        comboAddButtonField: () => cy.get('.jss42'),
        comboLinkedTypeButton: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4').contains('Добавить'),
        chooseComboLinkedType: () => cy.get('.w-2\\/6 > .text-body > .basic-single > .select__control'),
        comboLinkedQuantity: () => cy.get('.w-1\\/6 > .alisa-input > .focus-within\\:ring-2 > .bg-white'),
        comboLinkedNameRU: () => cy.get('.w-full.justify-between > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex'),
        comboLinkedNameEN: () => cy.get('.w-full.justify-between > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex'),
        comboLinkedNameUZ: () => cy.get(':nth-child(3) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex'),
        chooseComboLinkedProduct:() => cy.get('.css-1hwfws3'),
        comboLinkedOptionsList: () => cy.get('.css-11unzgr'),
        saveComboLinked: () => cy.get('.grid > :nth-child(2) > .button'),
        comboLinkedTypeList: () =>cy.get('.select__menu-list'),
        comboLinkedActions: () => cy.get(':nth-child(1) > :nth-child(5) > .flex'),
        comboLinkedActionsEdit: () =>cy.get('.MuiList-root > [tabindex="0"]'),
        comboLinkedActionsDelete: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        // -------



        // link products to Variation
        linktoVariationButton: () => cy.get('.MuiButtonBase-root').contains("Связать товары"),
        searchFieldLinkToVariation: () => cy.get('.font-semibold > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > .flex-1'),
        firstSelecBox: () => cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1)'),
        saveLinkVariationProductButton: () => cy.get('.grid > :nth-child(2) > .button'),
        //---------------------------
        // variation
        variationButton: () => cy.get('.m-4 > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1'),
        addVariationButton: () => cy.get('.ml-auto > .button'),
        chooseVariationOption: () => cy.get('.css-1hwfws3'),
        continueButton: () => cy.get('.grid > :nth-child(2) > .button'),
        generateArtikulVariation: () => cy.get(':nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .bg-lightgray-5 > .text-midgray-2 > button'),
        inPriceVariation: () =>cy.get('#combinations\\.0\\.in_price'),
        outPriceVariation: () => cy.get('#combinations\\.0\\.out_price'),
        addPhotoVariation: () => cy.get('.MuiTypography-root > .grid > .col-span-12 > .h-full > .Gallery > .mr-2 > .add-block'),
        saveVariationButton: () => cy.get('.grid-cols-2 > :nth-child(2) > .button'),
        variationsTable: () => cy.get('.m-4 > :nth-child(1) > [style="overflow-x: hidden;"] > .react-swipeable-view-container > [aria-hidden="false"] > #full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .rounded-lg > .p-4'),
        variationDeleteButton: (index) => cy.get(`:nth-child(${index}) > :nth-child(8) > .flex > .cursor-pointer`),
        //




        sequenceNumber: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex'),
        // artikulGenButton: () => cy.get('#full-width-tabpancy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex')el-1 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .justify-between > .w-4\/5 > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #order'),
        artikulField: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(5) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .w-auto > #code'),
        addPhoto: () => cy.get('.add-block'),
        productType: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > :nth-child(6) > .text-body > #type > .select__control'),
        categoryType: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(1) > :nth-child(1) > #category_ids > .css-8pw2m5-control'),
        brand: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(2) > :nth-child(2) > .text-body > #brand > .select__control'),
        isDivisible: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(3) > :nth-child(2) > .text-body > #is_divisible > .select__control'),
        tagField: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(4) > :nth-child(2) > .text-body > #tag_ids > .select__control'),
        measurementUnit: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(5) > :nth-child(1) > .text-body > #unit > .select__control'),
        currency: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(6) > :nth-child(2) > .text-body > #currency > .select__control > .select__value-container'),
        IKPU: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(7) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #ikpu'),
        codePack: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(8) > :nth-child(2) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #package_code'),
        incomePrice: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(9) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #in_price'),
        outputPrice: () => cy.get('#full-width-tabpanel-0 > .MuiBox-root > .MuiTypography-root > .grid-cols-12 > :nth-child(1) > .col-span-12 > .grid > :nth-child(10) > :nth-child(1) > .alisa-input > .focus-within\\:ring-2 > .bg-white > .flex > #out_price'),
        characteristics: () => cy.get('.mt-6 > .p-4 > div'),
        createButton: () => cy.get(':nth-child(2) > .button')
    };


};


module.exports = new GetAllProducts();

