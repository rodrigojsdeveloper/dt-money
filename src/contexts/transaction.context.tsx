"use client";
import { createContext, useState } from "react";
import {
  IChildren,
  ITransactionProps,
  ITransactionContextData,
} from "../interfaces";

export const TransactionContext = createContext({} as ITransactionContextData);

export const TransactionContextProvider = ({ children }: IChildren) => {
  const [transactions, setTransactions] = useState<Array<ITransactionProps>>([
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "1",
      description: "Desenvolvedor",
      category: "Alimentação",
      price: "1000",
      created_at: new Date(),
      option: "Entradas",
    },
    {
      id: "2",
      description: "Desenvolvedor de sites",
      category: "Venda",
      price: "10000",
      created_at: new Date(),
      option: "Entradas",
    },
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false);

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true);

  const addTransaction = (transaction: ITransactionProps) =>
    setTransactions([transaction, ...transactions]);

  const transactionsPerPage = 10;

  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;

  const paginatedTransactions = transactions.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (!disabledNextPage) {
      setCurrentPage(currentPage + 1);
    }

    window.scroll({ top: 0 });
  };

  const handlePreviousPage = () => {
    if (!disabledPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const total = transactions.reduce(
    (total, transaction) => total + +transaction.price,
    0
  );

  const totalEntries = transactions
    .filter((transaction) => transaction.option === "Entradas")
    .reduce((total, transaction) => total + +transaction.price, 0);

  const totalExits = transactions
    .filter((transaction) => transaction.option === "Saídas")
    .reduce((total, transaction) => total + +transaction.price, 0);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        disabledNextPage,
        disabledPreviousPage,
        handleNextPage,
        handlePreviousPage,
        setDisabledNextPage,
        setDisabledPreviousPage,
        currentPage,
        transactionsPerPage,
        paginatedTransactions,
        total,
        totalEntries,
        totalExits,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
