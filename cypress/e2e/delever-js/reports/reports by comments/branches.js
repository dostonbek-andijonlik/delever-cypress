class branches{
  elements = {
    
    branchReport: () => cy.get(':nth-child(9) > a > .sidebarItem > span'),

    otziv: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .px-1'),

    otziv: () => cy.get('#full-width-tab-2 > .MuiTab-wrapper > .px-1'),

  }
}

module.exports = new branches()