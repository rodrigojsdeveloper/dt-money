import React from 'react'

export interface IButtonProps {
  isSearch?: boolean
  text: string
  type?: 'button' | 'submit' | 'reset'
  maxWidth?: 'max-w-[9.188rem]' | 'max-w-[27.438rem]'
  height?: 'h-[3.375rem]'
  background?: 'bg-grey-2'
  color?: 'text-colorPrimary-1'
  hoverBackground?: 'hover:bg-colorPrimary-3'
  hoverBorder?: 'hover:border-colorPrimary-2'
  active?: 'active:bg-colorPrimary-4'
  media?: 'max-sm:h-[2.375rem] max-sm:p-0 max-sm:max-w-[8.125rem]'
  mediaGrey?: 'max-sm:max-w-[3.375rem] max-sm:p-0'
  isGrey?: boolean
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

export interface ITransactionProps {
  id: string
  description: string
  price: string
  category: string
  option?: 'Income' | 'Expenses'
  created_at: Date
}

export interface ITransaction {
  transaction: ITransactionProps
}

export interface ITransactionContextData {
  transactions: ITransactionProps[]
  addTransaction: (transaction: ITransactionProps) => void
  disabledNextPage: boolean
  disabledPreviousPage: boolean
  handleNextPage: () => void
  handlePreviousPage: () => void
  setDisabledNextPage: React.Dispatch<React.SetStateAction<boolean>>
  setDisabledPreviousPage: React.Dispatch<React.SetStateAction<boolean>>
  currentPage: number
  transactionsPerPage: number
  paginatedTransactions: ITransactionProps[]
  total: number
  totalIncome: number
  totalExpenses: number
  handleSearchTransactions: (description: string) => void
  filteredTransactions: ITransactionProps[]
  handleLastTransaction: (option: string) => Date
  loading: boolean
}

export interface IsLoadingProps {
  isLoading?: string
}

export interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICardProps {
  title: 'Income' | 'Expenses' | 'Total'
  value: number
  background?: 'bg-colorPrimary-2'
  message: string
}
