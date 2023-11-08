# NextCash 💰 - Estudo de Desenvolvimento Full Stack com Next.js

Bem-vindo ao projeto NextCash! 🚀

## Sobre o Projeto

O NextCash é um projeto dedicado ao estudo do desenvolvimento Full Stack com base em um teste da NG.CASH. Nosso objetivo é explorar o Next.js, cobrindo tanto o desenvolvimento do lado do cliente (frontend) quanto o do servidor (backend). Apesar de suas raízes no processo seletivo da NG.CASH, o NextCash incorporou algumas alterações para atender às necessidades deste projeto. 📖

## Tecnologias Utilizadas

Neste projeto, utilizamos as seguintes tecnologias de ponta:

- **Next.js:** Um framework React de código aberto que simplifica a criação de aplicativos web modernos, proporcionando uma experiência de desenvolvimento ágil.

- **Node.js:** Um ambiente de tempo de execução JavaScript que permite a construção de aplicativos de servidor altamente escaláveis.

- **Banco de Dados:** Estamos atualmente em processo de implementação de um banco de dados para armazenar e gerenciar os dados do aplicativo. 🛢️

## Estrutura de Dados

Para entender a estrutura de dados do projeto, aqui estão as definições das entidades principais:

### Usuários (Users) 👤

Cada usuário é representado por uma instância da classe `User` com as seguintes propriedades:

- `id` (chave primária)
- `name`
- `email`
- `password`
- `role`
- `createdAt`

### Tabelas no Banco de Dados 📊

O banco de dados é composto por três tabelas principais:

- Tabela **Users**:
  - `id` (chave primária)
  - `name`
  - `email`
  - `password`
  - `role`
  - `createdAt`

- Tabela **Accounts**:
  - `id` (chave primária)
  - `balance`
  - `user_id`

- Tabela **Transactions**:
  - `id` (chave primária)
  - `debited_accountId` 
  - `credited_accountId` 
  - `value`
  - `created_at`

## Como Usar 🚀

Para começar a trabalhar com o projeto NextCash, siga estas etapas:

1. Clone este repositório em sua máquina local.

2. Instale as dependências do projeto.

3. Inicie o servidor de desenvolvimento.

Agora você pode acessar o aplicativo em `http://localhost:3000` e começar a explorar e desenvolver com o NextCash.

## Contribuições 🤝

Aceitamos contribuições! Se deseja colaborar com o projeto, sinta-se à vontade para abrir issues, enviar pull requests ou entrar em contato com a equipe de desenvolvimento. 🙌

Convites para contribuições serão lançados em breve! 😊

## Backend 🖥️

O backend do projeto NextCash segue a seguinte estrutura:

- **Controller (Controlador):** O controlador lida com as solicitações dos usuários, coordena a lógica da aplicação e direciona as ações apropriadas para a camada de negócios (business).

- **Camada de Negócios (Business):** Nesta camada, a lógica de negócios é implementada. Serviços de hash de senhas, geração de token e outras operações de negócios são executados aqui. Além disso, implementamos um serviço de geração de IDs exclusivos.

- **Banco de Dados (Database):** Utilizamos um banco de dados MySQL ou SQLite para armazenar e gerenciar os dados da aplicação. As tabelas de usuários, contas e transações são criadas e manipuladas conforme necessário. 📦

No processo de autenticação, utilizamos um serviço de geração de token JWT para fornecer tokens de acesso com validade de 24 horas a usuários autenticados. Isso permite que os usuários acessem funcionalidades protegidas da aplicação. 🗝️

Novidades a caminho! 😊
