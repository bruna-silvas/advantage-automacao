Feature: Validar fluxo de busca, adição e verificação de produto

  Scenario: Fluxo de gerenciamento de produto
    Given que estou logado na interface
    When realizo a busca de um produto
    And seleciono o produto exibido nos resultados
    And adiciono o produto ao carrinho
    Then o produto deve ser exibido na tela de pagamento