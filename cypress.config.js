const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k5ox2o',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false
  },
  defaultCommandTimeout: 10000,
  viewportWidth: 1200,
  viewportHeight: 660
});
