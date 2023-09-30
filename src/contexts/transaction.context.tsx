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
      title: "Desenvolvedor",
      category: "Alimentação",
      value: 1000,
      created_at: new Date(),
    },
    {
      id: "2",
      title: "Desenvolvedor de sites",
      category: "Venda",
      value: 10000,
      created_at: new Date(),
    },
  ]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
