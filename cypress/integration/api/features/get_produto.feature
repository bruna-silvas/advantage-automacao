Feature: Buscar produtos

  Scenario: Buscar todos os produtos da categoria pelo nome
    Given que eu faço uma requisição GET para buscar o produto "mouse" com a quantidade por categoria "-1"
    When a requisição for processada
    Then o status code deve ser "200"
    And a lista de produtos deve conter todos os produtos "mouse"

  Scenario: Buscar um único produto
    Given que eu faço uma requisição GET para buscar o produto "mouse" com a quantidade por categoria "1"
    When a requisição for processada
    Then o status code deve ser "200"
    And a lista de produtos deve conter apenas um item "mouse"

  Scenario: Buscar produto com parâmetro inválido
    Given que eu faço uma requisição GET para buscar o produto "mouse" com a quantidade por categoria "-2"
    When a requisição for processada
    Then o status code deve ser "500"