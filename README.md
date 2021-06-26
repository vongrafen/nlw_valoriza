# NLW Valoriza
## Regras

- Cadastro de Usuário 
  
  [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail.

  [x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [x] Não é permitido cadastrar mais de uma TAG com o mesmo nome

  [x] Não é permitido gravar TAG sem nome

  [x] Não é permitido o cadastro por usuário que não sejam administradores

- Cadastro de Elogios

  [x] Não é permitido um usuário cadastrar um elógio para si.

  [x] Não é permitido cadastrar elogio para usuários inválidos.

  [x] O usuário precisa estar autenticado na aplicação.

  # REGRA DE NEGÓCIO

  - Server -> Controller -> Service -> Repositories -> Banco de Dados
  - Server -> Routes -> Controller -> Service (throw error)