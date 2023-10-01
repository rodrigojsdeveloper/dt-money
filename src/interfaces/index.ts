import React from "react";

export interface ITransactionProps {
  id: string;
  description: string;
  price: string;
  category: string;
  option?: "Entradas" | "Saídas";
  created_at: Date;
}

export interface ITransaction {
  transaction: ITransactionProps;
}

export interface ITransactionContextData {
  transactions: Array<ITransactionProps>;
  addTransaction: (transaction: ITransactionProps) => void;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
