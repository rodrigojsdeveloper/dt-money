import React from "react";

export interface ITransactionProps {
  id: string;
  title: string;
  value: number;
  category: string;
  created_at: Date;
}

export interface ITransaction {
  transaction: ITransactionProps;
}

export interface ITransactionContextData {
  transactions: Array<ITransactionProps>;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
