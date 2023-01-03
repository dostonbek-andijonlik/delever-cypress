class branches{
  elements = {
    
    branchReport: () => cy.get(':nth-child(9) > a > .sidebarItem > span'),

  }
}

module.exports = new branches()