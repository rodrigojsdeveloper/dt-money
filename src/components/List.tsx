"use client";
import { TransactionContext } from "@/contexts/transaction.context";
import { Transaction } from "./Transaction";
import { useContext } from "react";

const List = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <menu className="w-full max-w-1119 h-732 overflow-y-auto px-6 mx-auto">
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </menu>
  );
};

export { List };
