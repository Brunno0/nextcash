import { useState } from "react"
import { GlobalContext } from "./GlobalContext";
import { useEffect } from "react";
import { getAccountById, getAccountByUserId, getAccounts, getTransactionsById, getUserById, getUsers } from "../pages/api/api-client/api-client";


export const GlobalState = (props) => {


  const [account, setAccount] = useState({})
  const [accounts, setAccounts] = useState([])

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

  const [transactions, setTransactions] = useState([])
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  
  // Função para redefinir o estado quando um novo usuário faz login
  const resetState = () => {
    setAccount({});
    setAccounts([]);
    setUser({});
    setUsers([]);
    setTransactions([]);
    setSelectedTransaction(null);
    setSearchTerm('');
  };

  useEffect(() => {
       fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        resetState(); // Redefina o estado ao carregar novos dados

        const accountsListApiResponse = await getAccounts(token);
        setAccounts(accountsListApiResponse.accounts);

        const userApiResponse = await getUserById(token);
        setUser(userApiResponse.user);

        const accountApiResponse = await getAccountByUserId(token, userApiResponse.user.id);
        setAccount(accountApiResponse.account);

        const getUsersApiResponse = await getUsers(token);
        setUsers(getUsersApiResponse.users);

        const transactionsApiResponse = await getTransactionsById(token, accountApiResponse.account.id);
        setTransactions(transactionsApiResponse.transactions);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const formatCurrency = (value) => {
    if (value) {
      const formattedValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      return formattedValue;
    }
    return '';
  };

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  const debitedTransactions = transactions.filter(
    (transaction) => transaction.debitedAccountId === account.id
  );

  const creditedTransactions = transactions.filter(
    (transaction) => transaction.creditedAccountId === account.id
  );

  const filterAccountsByUserId = (id) => {
    const [accountFilter] = accounts && accounts.filter((account) => id === account.userId)
    return accountFilter
  }

  const getNameUserByAccount = (accountId) => {
    // Verifica se a lista de contas e a lista de usuários estão disponíveis
    if (accounts && users) {
      // Encontra a conta com o ID correspondente
      const account = accounts.find((acc) => acc.id === accountId);

      // Se a conta for encontrada, encontre o usuário correspondente
      if (account) {
        const user = users.find((usr) => usr.id === account.userId);


        if (user) {
          return user.name;
        }
      }
    }
    return 'Usuário não encontrado'; // Retorna uma mensagem padrão se não encontrar o usuário
  };

  function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDateTime = `${day}-${month}-${year} às ${hours}:${minutes}`;

    return formattedDateTime;
  }

    const context = {
    account, setAccount,
    accounts, setAccounts,
    user, setUser,
    users, setUsers,
    transactions, setTransactions,
    selectedTransaction, setSelectedTransaction,
    searchTerm, setSearchTerm,


    // funções
    formatCurrency,
    handleTransactionClick,
    closeModal,
    debitedTransactions,
    creditedTransactions,
    filterAccountsByUserId,
    getNameUserByAccount,
    formatDateTime,
    fetchData,
    resetState

  }

  return (
    <GlobalContext.Provider value={context} >
      {props.children}
    </GlobalContext.Provider>
  )
}