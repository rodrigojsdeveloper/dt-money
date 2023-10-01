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
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState<
    Array<ITransactionProps>
  >([
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false);

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true);

  const addTransaction = (transaction: ITransactionProps) =>
    setFilteredTransactions([transaction, ...filteredTransactions]);

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
      .filter((transaction) => transaction.option === "Entradas")
      .reduce((total, transaction) => total + +transaction.price, 0) -
    filteredTransactions
      .filter((transaction) => transaction.option === "Saídas")
      .reduce((total, transaction) => total + +transaction.price, 0);

  const totalEntries = filteredTransactions
    .filter((transaction) => transaction.option === "Entradas")
    .reduce((total, transaction) => total + +transaction.price, 0);

  const totalExits = filteredTransactions
    .filter((transaction) => transaction.option === "Saídas")
    .reduce((total, transaction) => total + +transaction.price, 0);

  const handleSearchTransactions = (description: string) => {
    setFilteredTransactions(
      transactions.filter((transaction) =>
        transaction.description
          .toLowerCase()
          .includes(description.toLowerCase())
      )
    );
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
        totalEntries,
        totalExits,
        handleSearchTransactions,
        filteredTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
