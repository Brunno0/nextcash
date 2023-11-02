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

INSERT INTO transactions  (id, debitedAccountId, creditedAccountId, value)
VALUES
('T003', 'nxc-e6c4f4bd', 'nxc-3491feb2',10); 


-- SELECT ************
SELECT * FROM users;

SELECT * FROM transactions;

SELECT * FROM accounts;


SELECT * FROM transactions
WHERE debitedAccountId = 'nxc-3491feb2'
   OR creditedAccountId = 'nxc-3491feb2';



-- DROPS---------
DROP TABLE accounts;

DROP TABLE users;

-- Cria a tabela "accounts" 
CREATE TABLE accounts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    balance FLOAT NOT NULL,
    userId TEXT,
    FOREIGN KEY (userId) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
