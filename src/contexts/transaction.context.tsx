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
  ]);

  const addTransaction = (transaction: ITransactionProps) =>
    setTransactions([transaction, ...transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
