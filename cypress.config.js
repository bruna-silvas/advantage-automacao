const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.advantageonlineshopping.com",
    specPattern: "cypress/integration/**/*.feature",
    viewportWidth: 1366,
    viewportHeight: 768,
    usuario: "admin_teste", 
    senha: "C6&+Z*sP0dru", 
    email: "qan1@teste.com.br", 

    setupNodeEvents,
  },
});