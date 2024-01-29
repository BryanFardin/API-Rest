# API REST de Cadastro de Login e Registro de Pessoas com Fotos de Perfil

Esta é uma API REST desenvolvida em Node.js utilizando as seguintes tecnologias: Express, bcrypt, Sequelize, Docker, Multer e MySQL. A autenticação é baseada em tokens JWT (JSON Web Tokens). Essa API permite o cadastro de usuários, login, registro de informações pessoais e o upload de fotos de perfil.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- Docker
- MySQL

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/BryanFardin/API-Rest
   ```

2. Instale as dependências:

   ```bash
   cd nome-do-repositorio
   npm install
   ```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

   ```env
   DATABASE=nome-do-seu-database
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_USERNAME=seu-usuario
   DATABASE_PASSWORD=sua-senha


   TOKEN_SECRET=sua-chave-token
   TOKEN_EXPIRATION=7d

   APP_URL=sua-url
   APP_PORT=3001
   ```

   Substitua os valores de acordo com a configuração do seu ambiente.

4. Execute as migrations para criar as tabelas no banco de dados:

   ```bash
   npm run migrate
   ```

5. Inicie a aplicação:

   ```bash
   npm start
   ```

A API estará disponível em `http://localhost:3001`.

## Rotas Usuarios
- **POST /api/users/:** Cria/Realiza o login de usuário. Requer um corpo JSON com as seguintes informações: nome, email, senha.
  
- **PUT /api/users/:** Atualiza as informações do perfil do usuário autenticado. Requer um corpo JSON com as informações a serem atualizadas
  
- **DELETE /api/users/:id:** Deleta as informações do perfil do usuário autenticado. Requer o ID do usuario para ser deletado

## Rotas Pessoas
- **POST /api/alunos/:** Cria um novo usuário. Requer um corpo JSON com as seguintes informações: nome, sobrenome, email, idade, peso, altura.

- **GET /api/alunos/:** Obtém as informações de todos alunos registrados.

- **GET /api/alunos/:id:** Obtém as informações do perfil do usuário autenticado.

- **PUT /api/alunos/:id:** Atualiza as informações do perfil do usuário autenticado. Requer um corpo JSON com as informações a serem atualizadas
 
- **DELETE /api/alunos/:id:** Deleta as informações do perfil do usuário autenticado. Requer o ID do usuario para ser deletado

- **POST /api/imagens/:** Faz o upload da foto de perfil do usuário autenticado. Requer uma imagem no formato multipart/form-data e um campo aluno_id.
## Rotas Token

- **POST /api/tokens/:** Cria um novo token. Requer um corpo JSON com as seguintes informações: email, senha.

## Docker

Se preferir, você pode executar a aplicação utilizando Docker. Certifique-se de ter o Docker instalado e execute o seguinte comando na raiz do projeto:

```bash
docker-compose up
```

Isso iniciará a aplicação em um contêiner Docker.

Lembre-se de adaptar as instruções conforme necessário e fornecer informações específicas do seu ambiente, como credenciais do banco de dados, chave secreta JWT, etc.
