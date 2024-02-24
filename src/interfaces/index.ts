import React from 'react'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  text: string
  className?: string
  isSearch?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  ariaLabel?: string
}

export interface InputProps {
  placeholder: string
  margin?: 'mr-2.5 max-sm:mr-0'
  type?: React.HTMLInputTypeAttribute
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number | readonly string[]
}

export interface TransactionProps {
  id: string
  description: string
  price: string
  category: string
  option?: 'Income' | 'Expenses'
  created_at: Date
}

export interface ITransaction {
  transaction: TransactionProps
}

export interface TransactionContextData {
  transactions: TransactionProps[]
  addTransaction: (transaction: TransactionProps) => void
  disabledNextPage: boolean
  disabledPreviousPage: boolean
  handleNextPage: () => void
  handlePreviousPage: () => void
  setDisabledNextPage: React.Dispatch<React.SetStateAction<boolean>>
  setDisabledPreviousPage: React.Dispatch<React.SetStateAction<boolean>>
  currentPage: number
  transactionsPerPage: number
  paginatedTransactions: TransactionProps[]
  total: number
  totalIncome: number
  totalExpenses: number
  handleSearchTransactions: (description: string) => void
  filteredTransactions: TransactionProps[]
  handleLastTransaction: (option: string) => Date
  loading: boolean
  handleMessage: (titleLower: string, titleUpper: string) => string
}

export interface CardProps {
  title: 'Income' | 'Expenses' | 'Total'
  value: number
  background?: 'bg-colorPrimary-2'
  message: string
}
