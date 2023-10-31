-- Cria a tabela "users"
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

-- Insere um usuário na tabela "users"
INSERT INTO users (id, name, email, password, role)
VALUES
('u001', 'NextCashAdmin', 'nextcash@email.com', 'senhasemhash', 'ADMIN');

-- Seleciona todos os registros da tabela "accounts"
SELECT * FROM accounts;

-- Cria a tabela "transactions" com chaves estrangeiras referenciando a tabela "accounts"
CREATE TABLE transactions (
   id TEXT PRIMARY KEY UNIQUE NOT NULL,
   debitedAccountId TEXT NOT NULL,
   creditedAccountId TEXT NOT NULL,
   value FLOAT NOT NULL,
   created_at TEXT DEFAULT (DATETIME()) NOT NULL,
   FOREIGN KEY (debitedAccountId) REFERENCES accounts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
   FOREIGN KEY (creditedAccountId) REFERENCES accounts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Remove a tabela "accounts"
DROP TABLE accounts;

DROP TABLE users;

-- Cria a tabela "accounts" com a propriedade "userId" fazendo referência à tabela "users"
CREATE TABLE accounts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    balance FLOAT NOT NULL,
    userId TEXT,
    FOREIGN KEY (userId) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
