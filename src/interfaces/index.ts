import React from "react";

export interface IButtonProps {
  isSearch?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
  maxWidth?: "max-w-147" | "max-w-152" | "max-w-439";
  height?: "h-54";
  background?: "bg-grey-2";
  color?: "text-color-primary-1";
  hoverBackground?: "hover:bg-color-primary-3";
  hoverBorder?: "hover:border-color-primary-2";
  active?: "active:bg-color-primary-4";
  media?: "max-sm:h-38 max-sm:p-0 max-sm:max-w-130";
  mediaGrey?: "max-sm:max-w-54 max-sm:p-0";
  absolute?: "absolute";
  isGrey?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface InputProps {
  placeholder: string;
  margin?: "mr-2.5 max-sm:mr-0";
  type?: React.HTMLInputTypeAttribute;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
}

export interface ITransactionProps {
  id: string;
  description: string;
  price: string;
  category: string;
  option?: "Income" | "Expenses";
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
  totalIncome: number;
  totalExpenses: number;
  handleSearchTransactions: (description: string) => void;
  filteredTransactions: Array<ITransactionProps>;
  handleLastTransaction: (option: string) => Date;
  loading: boolean;
}

export interface IChildren {
  children: React.ReactNode;
  isLoading?: string;
}

export interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICardProps {
  title: "Income" | "Expenses" | "Total";
  children: React.ReactNode;
  value: number;
  background?: "bg-color-primary-2";
  message: string;
}
