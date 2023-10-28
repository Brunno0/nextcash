-- Active: 1674510831231@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);
INSERT INTO users (id, name, email, password, role)
VALUES
('u001', 'NextCashAdmin', 'nextcash@email.com','senhasemhash','ADMIN')

CREATE TABLE accounts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    balance FLOAT NOT NULL
);

SELECT * FROM accounts;

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
)

