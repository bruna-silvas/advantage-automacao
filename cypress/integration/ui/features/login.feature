Feature: Login

  Scenario: Login Valido
    Given que acesso a pagina inicial
    And clico no menu de usuario
    And insiro credenciais validas
    When cliclo no botao entrar
    Then o login e realizado com sucesso