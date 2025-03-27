const el = require('../elements/login_elements').loginElements

const usuario = Cypress.config("usuario");
const senha = Cypress.config("senha");

class loginPage {

    openLogin() {
        cy.visit("/")
    };

    menuUsuario() {
        cy.get(el.menuUsuario).click();
    }

    preencherUsuario() {
        cy.get(el.cmpUsuario).clear().type(usuario).should('be.visible');
    }

    prencherSenha() {
        cy.get(el.cmpSenha).type(senha);
    }

    clicarBotaoEntrar() {
        cy.get(el.btnEntrar).click();
    };

    validarLogin() {
        cy.get(el.menuLogin).should("contain", usuario);
    }
}
export default new loginPage()