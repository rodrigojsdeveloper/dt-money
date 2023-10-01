"use client";
import { createContext, useEffect, useState } from "react";
import {
  IChildren,
  ITransactionProps,
  ITransactionContextData,
} from "../interfaces";

export const TransactionContext = createContext({} as ITransactionContextData);

export const TransactionContextProvider = ({ children }: IChildren) => {
  const [transactions, setTransactions] = useState<Array<ITransactionProps>>(
    []
  );

  const [filteredTransactions, setFilteredTransactions] = useState<
    Array<ITransactionProps>
  >([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false);

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true);

  const [loading, setLoading] = useState(true);

  const saveTransactionsToLocalStorage = (
    transactions: Array<ITransactionProps>
  ) => {
    localStorage.setItem(
      "DT Money: transactions",
      JSON.stringify(transactions)
    );
  };

  const loadTransactionsFromLocalStorage = () => {
    const storedTransactions = localStorage.getItem("DT Money: transactions");
    if (storedTransactions) {
      return JSON.parse(storedTransactions);
    }
    return [];
  };

  useEffect(() => {
    setLoading(true);

    const storedTransactions = loadTransactionsFromLocalStorage();
    setTransactions(storedTransactions);
    setFilteredTransactions(storedTransactions);

    setLoading(false);
  }, []);

  const addTransaction = (transaction: ITransactionProps) => {
    const updatedTransactions = [transaction, ...transactions];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
    saveTransactionsToLocalStorage(updatedTransactions);
  };

  const transactionsPerPage = 10;

  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;

  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    endIndex
  );

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

  const total =
    filteredTransactions
      .filter(
        (transaction: ITransactionProps) => transaction.option === "Income"
      )
      .reduce(
        (total: number, transaction: ITransactionProps) =>
          total + +transaction.price,
        0
      ) -
    filteredTransactions
      .filter(
        (transaction: ITransactionProps) => transaction.option === "Expenses"
      )
      .reduce(
        (total: number, transaction: ITransactionProps) =>
          total + +transaction.price,
        0
      );

  const totalIncome = filteredTransactions
    .filter(
      (transaction: ITransactionProps) => transaction.option === "Expenses"
    )
    .reduce(
      (total: number, transaction: ITransactionProps) =>
        total + +transaction.price,
      0
    );

  const totalExpenses = filteredTransactions
    .filter(
      (transaction: ITransactionProps) => transaction.option === "Expenses"
    )
    .reduce(
      (total: number, transaction: ITransactionProps) =>
        total + +transaction.price,
      0
    );

  const handleSearchTransactions = (description: string) => {
    setFilteredTransactions(
      transactions.filter((transaction: ITransactionProps) =>
        transaction.description
          .toLowerCase()
          .includes(description.toLowerCase())
      )
    );
  };

  const handleLastTransaction = (option: string) => {
    let filteredTransactions = [];

    if (option === "Total") {
      filteredTransactions = transactions;
    } else {
      filteredTransactions = transactions.filter(
        (transaction: ITransactionProps) => transaction.option === option
      );
    }

    const lastTransaction = filteredTransactions.sort(
      (a: ITransactionProps, b: ITransactionProps) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);

        return +dateB - +dateA;
      }
    );

    return lastTransaction[0]?.created_at;
  };

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
        totalIncome,
        totalExpenses,
        handleSearchTransactions,
        filteredTransactions,
        handleLastTransaction,
        loading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
