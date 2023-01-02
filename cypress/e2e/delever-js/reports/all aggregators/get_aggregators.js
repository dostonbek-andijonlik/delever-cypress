class allAggegators{
  elements = {
    
    allAggregators: () => cy.get(':nth-child(2) > a > .sidebarItem > span'),

    branches: () => cy.get('.gap-4 > .h-9'),

    selectBranch: () => cy.contains('ayko'),
    
    download: () => cy.contains('Скачать'),

    allTransition: () => cy.get('.transition-all'),

    idOrder: () => cy.get(':nth-child(2) > .w-full > .rc-switch')
  }
}

module.exports = new allAggegators;