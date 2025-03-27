const el = require('../elements/produto_elements').produtoElements
import dados from '../../../fixtures/data.json'


class produtoPage {

    pesquisarProduto() {
        cy.get(el.btnPesquisa).click()
        cy.get(el.cmpProduto).type(dados.produto + '{enter}').should('be.visible')
        cy.get(el.fecharPopUp).click()

    }

    validarProdutoPesquisa() {
        cy.get(el.validarPesquisa, { timeout: 3000 }).contains('Search result: "Mouse"')
    }

    selecionarProduto() {
        cy.get(el.selecionarProduto).last().click()
    }

    incluirProdutoCarrinho() {
        cy.get(el.addCarrinho).click()
        cy.get(el.iconeCarrinho).click()
        cy.get(el.validarTitulo).contains('SHOPPING CART')
        cy.get(el.ValidarTabelaProduto).within(() => {
            cy.contains('PRODUCT NAME').should('be.visible')
            cy.contains('COLOR').should('be.visible')
            cy.contains('QUANTITY').should('be.visible')
            cy.contains('PRICE').should('be.visible')
            cy.contains('CHECKOUT').should('be.visible')
        })
    }

    validarProdutoPagamento() {
        cy.get(el.btnCheckout).click()
        cy.get(el.validarTitulo).should('have.text', 'ORDER PAYMENT')
        cy.get(el.btnNext).click()
        cy.get(el.formaPgto).should('have.text', 'Choose payment method below ')
    }

    removerProdutoCarrinho() {
        cy.get('[translate="SHOPPING_CART"]').click()
        cy.get(el.btnRemover).click()
        cy.get(el.ValidarMsg).should('have.text', 'Your shopping cart is empty')
    }

}

export default new produtoPage()




