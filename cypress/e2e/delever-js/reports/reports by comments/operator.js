class operators {
  elements = {
    operators: () =>
      cy.get(
        ".py-3 > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #full-width-tab-1"
      ),
  };
}

module.exports = new operators()