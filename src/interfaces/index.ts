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
  disabledNextPage: boolean;
  disabledPreviousPage: boolean;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  setDisabledNextPage: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabledPreviousPage: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  transactionsPerPage: number;
  paginatedTransactions: Array<ITransactionProps>;
  total: number;
  totalEntries: number;
  totalExits: number;
  handleSearchTransactions: (description: string) => void;
  filteredTransactions: Array<ITransactionProps>;
  handleLastTransaction: (option: string) => Date;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICardProps {
  title: "Entradas" | "Saídas" | "Total";
  children: React.ReactNode;
  value: number;
  background?: "bg-color-primary-2";
  margin?: "mx-2.5";
  message: string;
}
