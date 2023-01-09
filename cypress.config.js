const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k5ox2o',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    viewportWidth: 1500,
    viewportHeight: 750,
  },
  defaultCommandTimeout: 10000,
});
