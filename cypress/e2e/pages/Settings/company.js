class Company{
    elements = {
        companyPage: cy.get(':nth-child(5) > a > .sidebarItem > span'),
        // About company ------------------------------------------
        nameField: () => cy.get('#name'),
        phoneNumber: () => cy.get('#phone'),
        telegramAddress: () => cy.get('#call_center_tg'),
        description: () => cy.get('#description'),
        addressField: () => cy.get('#address'),
        copyWebhook: () => cy.get('.w-3\/4 > :nth-child(1) > .button > .flex > .text-sm'),
        limitBranchOrders: () => cy.get('.w-1\/4 > .rc-switch'),
        noLoadRadius: () => cy.get(':nth-child(9) > :nth-child(1) > .w-1\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto'),
        pickupTakeAccount: () => cy.get('#is_pickup_load'),
        changePhoto: () => cy.get('.Gallery > .mt-2'),
        // Orders
        averageOrderTime: () => cy.get(':nth-child(2) > .p-4 > .grid > :nth-child(1) > .w-1\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto'),
        minOrderPrice: () => cy.get('#minimal_order_price'),
        maxOrderTime: ()  => cy.get(':nth-child(2) > .p-4 > .grid > :nth-child(3) > .w-1\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto'),
        lateOrderTime: () => cy.get(':nth-child(2) > .p-4 > .grid > :nth-child(4) > .w-1\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto'),
        lateOrderIndirator: () => cy.get('.w-1\/4 > :nth-child(1) > .text-body > .basic-single > .select__control > .select__indicators > .select__indicator > .css-8mmkcg'),
        orderRouteRoad: () => cy.get('.w-2\/4 > div.flex > :nth-child(1) > .cursor-pointer'),
        orderRouteRadius: () => cy.get('.w-2\/4 > div.flex > :nth-child(3) > .cursor-pointer'),
        startWorkTime: () => cy.get(':nth-child(7) > .w-1\/4 > :nth-child(1) > .rc-time-picker > .rc-time-picker-input'),
        endWorkTime: () => cy.get(':nth-child(7) > .w-1\/4 > :nth-child(1) > .rc-time-picker > .rc-time-picker-input'),
        vatValue: () => cy.get(':nth-child(9) > .w-1\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        turnOnCourierWorkTime: () => cy.get(':nth-child(1) > .rc-switch'),
        // Couriers
        orderAcceptanceTime: () => cy.get(':nth-child(1) > .p-4 > .grid > :nth-child(1) > .w-1\/4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .w-auto'),
        radiusCourierAcceptsOrder: () => cy.get('#courier_accept_radius'),
        radiusCourierCompletesOrder: () => cy.get('#courier_action_radius'),
        maxOrderQuantityOfCourier: () => cy.get('#max_courier_orders'),
        priorityOrderRadius: () => cy.get('#priority_radius'),
        // Options:
        courierTakesOrderFirst: () => cy.get('#courier_accepts_first'),
        checkCouirerActionByRadius: () => cy.get('#check_courier_action_radius'),
        shownOnlyPaidOrders: () => cy.get('#process_only_paid_orders'),
        showOrderLocationBeforeAccepting: () => cy.get('#show_location_before_accepting'),
        turnOnBillingForCouirer: () => cy.get('#is_courier_billing'),
        checkOrderStatusAfterDelivery: () => cy.get('#free_delevery_for_delayed_order'),
        // Priority
        choosePriority: () => cy.get('#group_order_priorities\[0\]\.value > .select__control > .select__indicators > .select__indicator'),
        addPriority: () => cy.get('.jss109 > .MuiButtonBase-root > .MuiButton-label'),
        saveButton: () => cy.get(':nth-child(2) > .button'),
        cancelButton: () => cy.get(':nth-child(1) > .button'),
        
        // Company Branches -----------------------------------------------------
        companyBranchesPage: () => cy.get('#full-width-tab-1 > .MuiTab-wrapper > .px-1'),
        searchBranch: cy.get(':nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        addBranch: () => cy.get(':nth-child(1) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        actions: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        branchesLimit: () => cy.get(':nth-child(1) > :nth-child(4) > .flex > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        previousPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        nextPage: () => cy.get('#full-width-tabpanel-1 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(3)'),
        actionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsDelete: () => cy.get(':nth-child(2) > .ml-2'),
        actionsAttachCourier: () => cy.get(':nth-child(3) > .ml-2'),
        actionsBranchUsers: () => cy.get(':nth-child(4) > .ml-2'),
        // add branch 
        namebranchField: () => cy.get('#name'),
        phoneNumberBranch: () => cy.get('#phone'),
        addressBranch: () => cy.get('#address'),
        orientirBranch: () => cy.get('#destination'),
        integrationBranch: () => cy.get('.select__indicator > .css-8mmkcg'),
        locationMap: () => cy.get('.ymaps-2-1-79-events-pane'),
        startBranchWorkTime: () => cy.get('#work_hour_start'),
        endBranchWorkTime: () => cy.get('#work_hour_end'),
        orderLimit: () => cy.get('#orders_limit'),
        menu: () => cy.get('#menu > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer'),
        tariff: () => cy.get('#fare_id > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer'),
        telegramChatID: () => cy.get('#tg_chat_id'),
        statusBranch: () => cy.get('.rc-switch'),
        addPhoto: () => cy.get('.Gallery > .mt-2'),

        // attach Couirer
        chooseCourierToAttach: () => cy.get('.css-1wy0on6 > .css-tlfecz-indicatorContainer'),
        deleteAttachedCourier: () => cy.get('.bg-lightgray-5 > :nth-child(7) > .focus\:outline-none'),
        attachCourierButton: () => cy.get('.grid > :nth-child(2) > .button > .flex'),
        cancelAttachmentButton: () => cy.get('.grid > :nth-child(1) > .button > .flex'),


        // branch users
        searchUser: () => cy.get('.bg-white > .flex > .flex-1'),
        addUser: () => cy.get('.bg-white > .flex > .flex-1'),

        // add branch user
        nameBranchUser: () => cy.get('#name'),
        phoneNumberUserBranch: () => cy.get('#phone'),
        chooseRoleUserBranch: () => cy.get('.css-tlfecz-indicatorContainer'),
        saveNewUserBranchButton: () => cy.get(':nth-child(2) > .button'),
        closeUserBranchAddPage:() =>  cy.get('.gap-4 > :nth-child(1) > .button'),
        
        // Region ---------------------------------------------------------

        regionsPage: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .px-1'),
        searchRegion: () => cy.get(':nth-child(2) > .h-14 > .p-4 > :nth-child(1) > .alisa-input > .focus-within\:ring-2 > .bg-white > .flex > .flex-1'),
        addRegion: () => cy.get('.pl-4 > :nth-child(1) > .button'),
        regionsLimit:() => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .py-1\.5 > .ml-2'),
        previousRegionsPage: () => cy.get('#full-width-tabpanel-2 > .MuiBox-root > .MuiTypography-root > .m-4 > .py-3 > .w-full > .MuiPagination-root > .MuiPagination-ul > :nth-child(1)'),
        nextRegionsPage:() =>  cy.get(':nth-child(4) > .MuiButtonBase-root'),
        actionsRegions: () => cy.get(':nth-child(1) > :nth-child(4) > .float-right > .ActionMenu > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root'),
        actionsRegionsEdit: () => cy.get('[tabindex="0"] > .ml-2'),
        actionsRegionsDelete: () => cy.get('[tabindex="-1"] > .ml-2'),
        regionName: () => cy.get('#search-map'),
        statusRegion: () => cy.get('.rc-switch'),
        regionsLocationMap: () => cy.get('.ymaps-2-1-79-events-pane'),

    }
}


module.exports = new Company()

