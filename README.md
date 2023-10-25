# NextCash 💰 - Estudo de Desenvolvimento Full Stack com Next.js

Bem-vindo ao projeto NextCash! 🚀

## Sobre o Projeto

O NextCash é um projeto baseado em um teste da NG.CASH e é dedicado ao estudo do desenvolvimento Full Stack utilizando a tecnologia Next.js. Este projeto tem como objetivo explorar o Next.js, abrangendo tanto o lado do cliente (frontend) quanto o lado do servidor (backend). Embora tenha suas raízes no processo seletivo da NG.CASH, o NextCash incorporou algumas alterações de tecnologias e arquitetura para atender às necessidades deste projeto específico. 📖

## Tecnologias Utilizadas

Neste projeto, estamos utilizando diversas tecnologias de ponta, incluindo:

- **Next.js:** Um framework React de código aberto que facilita a criação de aplicativos web modernos, oferecendo uma experiência de desenvolvimento ágil.

- **Node.js:** Um ambiente de tempo de execução JavaScript que permite a construção de aplicativos de servidor altamente escaláveis.

- **Banco de Dados:** Utilizamos um banco de dados [Ainda em produção] para armazenar e gerenciar os dados do aplicativo. 🛢️

## Estrutura de Dados

Para compreender a estrutura dos dados utilizados no projeto, aqui estão as definições das entidades principais:

### Usuários (Users) 👤

Cada usuário é representado por uma instância da classe `User`, com as seguintes propriedades:

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

- Tabela **Transactions**:
  - `id` (chave primária)
  - `debitedAccountId` (chave estrangeira referenciando Accounts[id])
  - `creditedAccountId` (chave estrangeira referenciando Accounts[id])
  - `value`
  - `createdAt`

## Como Usar 🚀

Para começar a trabalhar com o projeto NextCash, siga estas etapas:

1. Clone este repositório em sua máquina local.

2. Instale as dependências do projeto.

3. Inicie o servidor de desenvolvimento.

Agora você pode acessar o aplicativo em `http://localhost:3000` e começar a explorar e desenvolver com o NextCash.

## Contribuições 🤝

Aceitamos contribuições! Se você deseja contribuir para o projeto, fique à vontade para abrir issues, enviar pull requests ou entrar em contato com a equipe de desenvolvimento. 🙌
Convites de contribuições serão lançadosss heimmm! s2 

## Backend 🖥️

O backend do projeto NextCash é estruturado seguindo o padrão de arquitetura Model-View-Controller (MVC) para facilitar a organização e escalabilidade do código. A arquitetura é composta por:

- **Model (Modelo):** Representa a camada de dados da aplicação, incluindo as entidades de usuário, contas e transações. Para garantir a segurança das senhas dos usuários, implementamos um serviço de hash de senhas que criptografa e verifica as senhas armazenadas no banco de dados. 🔒

- **View (Visualização):** No contexto de uma aplicação web, a visualização é o front-end, que é construído com React ou Next.js. Ele permite que os usuários interajam com a aplicação, visualizem seus saldos, realizem transferências e filtrem as transações. 🌐

- **Controller (Controlador):** O controlador lida com as solicitações dos usuários, coordena a lógica da aplicação e direciona as ações apropriadas para o modelo e a visualização. Implementamos um serviço de geração de IDs para criar identificadores únicos para cada usuário, conta e transação.

- **Database (Banco de Dados):** Utilizamos um banco de dados MySQL ou SQLite para armazenar e gerenciar os dados da aplicação. As tabelas de usuários, contas e transações são criadas e manipuladas de acordo com as necessidades do aplicativo. 📦

- **DTOs (Data Transfer Objects):** Os objetos de transferência de dados são usados para encapsular os dados que são enviados entre o cliente e o servidor. Eles ajudam a garantir a segurança e integridade dos dados transmitidos.

Além disso, no processo de autenticação, utilizamos um serviço de geração de token JWT para fornecer tokens de acesso com validade de 24 horas a usuários autenticados. Isso permite que os usuários autenticados acessem as funcionalidades protegidas da aplicação. 🗝️

Novidades a caminho! 😊
