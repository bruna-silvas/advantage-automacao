import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na API de login", () => {
  cy.log("Iniciando teste de login");
});

When("eu faço uma requisição com as credenciais válidas", () => {
  cy.request({
    method: "POST",
    url: "/accountservice/accountrest/api/v1/login",
    body: {
      email: Cypress.config("email"),
      loginPassword: Cypress.config("senha"),
      loginUser: Cypress.config("usuario"),
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("token", response.body.token);
  });
});

Then("eu recebo um token de autenticação", () => {
  cy.log(Cypress.env("token"));
  expect(Cypress.env("token")).to.not.be.null;
});
