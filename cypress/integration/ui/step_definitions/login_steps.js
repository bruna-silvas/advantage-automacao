/* global Given, Then, When */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import samplePage from '../pages/login_pages'


Given("que acesso a pagina inicial", () => {
    samplePage.openLogin()
});

When("clico no menu de usuario", () => {
    samplePage.menuUsuario()
});

When("insiro credenciais validas", () => {
    samplePage.preencherUsuario()
    samplePage.prencherSenha()
});

When("cliclo no botao entrar", () => {
    samplePage.clicarBotaoEntrar()
});

Then("o login e realizado com sucesso", () => {
    samplePage.validarLogin()
});