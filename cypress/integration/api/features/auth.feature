Feature: Realizar login e obter token

  Scenario: Login bem-sucedido
    Given que estou na API de login
    When eu faço uma requisição com as credenciais válidas
    Then eu recebo um token de autenticação

