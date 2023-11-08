-- Active: 1689642172773@@127.0.0.1@3306
-- Cria a tabela "users"
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

-- Seleciona todos os registros da tabela "accounts"
SELECT * FROM accounts;

-- Cria a tabela "transactions" com chaves estrangeiras referenciando a tabela "accounts"
CREATE TABLE transactions (
   id TEXT PRIMARY KEY UNIQUE NOT NULL,
   debited_account_id TEXT NOT NULL,
   credited_account_id TEXT NOT NULL,
   value FLOAT NOT NULL,
   created_at TEXT DEFAULT (DATETIME()) NOT NULL,
   FOREIGN KEY (debited_account_id) REFERENCES accounts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
   FOREIGN KEY (credited_account_id) REFERENCES accounts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- SELECT ************
SELECT * FROM users;

SELECT * FROM transactions;

SELECT * FROM accounts;

SELECT * FROM transactions
WHERE debited_account_id = 'nxc-3491feb2'
   OR credited_account_id = 'nxc-3491feb2';

-- DROPS---------
DROP TABLE accounts;

DROP TABLE users;

-- Cria a tabela "accounts" 
CREATE TABLE accounts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    balance FLOAT NOT NULL,
    user_id TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS users;


ALTER TABLE accounts,
ADD COLUMN userId TEXT,
ADD CONSTRAINT FK_userId FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE;
