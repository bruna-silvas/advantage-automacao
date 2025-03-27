import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../pages/login_pages'
import produtoPage from '../pages/produto_pages'


Given('que estou logado na interface', () => {
    loginPage.openLogin()
    loginPage.menuUsuario()
    loginPage.preencherUsuario()
    loginPage.prencherSenha()
    loginPage.clicarBotaoEntrar()
})

When('realizo a busca de um produto', () => {
    produtoPage.pesquisarProduto()
    produtoPage.validarProdutoPesquisa()
})

When('seleciono o produto exibido nos resultados', () => {
    produtoPage.selecionarProduto()
})

When('adiciono o produto ao carrinho', () => {
    produtoPage.incluirProdutoCarrinho()
})

Then('o produto deve ser exibido na tela de pagamento', () => {
    produtoPage.validarProdutoPagamento()
    produtoPage.removerProdutoCarrinho()
})