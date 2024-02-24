'use client'

import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { ITransactionProps, ITransactionContextData } from '../interfaces'
import { formatLastDate } from '@/utils/format-date'

export const TransactionContext = createContext({} as ITransactionContextData)

export const TransactionContextProvider = ({ children }: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([])

  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransactionProps[]
  >([])

  const [currentPage, setCurrentPage] = useState<number>(1)

  const [disabledNextPage, setDisabledNextPage] = useState<boolean>(false)

  const [disabledPreviousPage, setDisabledPreviousPage] =
    useState<boolean>(true)

  const [loading, setLoading] = useState(true)

  const saveTransactionsToLocalStorage = (
    transactions: ITransactionProps[],
  ) => {
    localStorage.setItem('DT Money: transactions', JSON.stringify(transactions))
  }

  const loadTransactionsFromLocalStorage = () => {
    const storedTransactions = localStorage.getItem('DT Money: transactions')
    return storedTransactions ? JSON.parse(storedTransactions) : []
  }

  useEffect(() => {
    setLoading(true)

    const storedTransactions = loadTransactionsFromLocalStorage()
    setTransactions(storedTransactions)
    setFilteredTransactions(storedTransactions)

    setLoading(false)
  }, [])

  const addTransaction = (transaction: ITransactionProps) => {
    const updatedTransactions = [transaction, ...transactions]
    setTransactions(updatedTransactions)
    setFilteredTransactions(updatedTransactions)
    saveTransactionsToLocalStorage(updatedTransactions)
  }

  const transactionsPerPage = 10
  const startIndex = (currentPage - 1) * transactionsPerPage
  const endIndex = startIndex + transactionsPerPage
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (!disabledNextPage) {
      setCurrentPage(currentPage + 1)
      window.scroll({ top: 0 })
    }
  }

  const handlePreviousPage = () => {
    if (!disabledPreviousPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  const calculateTotal = (option: string) => {
    return filteredTransactions
      .filter((transaction) => transaction.option === option)
      .reduce((total, transaction) => total + +transaction.price, 0)
  }

  const totalIncome = calculateTotal('Income')
  const totalExpenses = calculateTotal('Expenses')

  const handleSearchTransactions = (description: string) => {
    setFilteredTransactions(
      transactions.filter((transaction: ITransactionProps) =>
        transaction.description
          .toLowerCase()
          .includes(description.toLowerCase()),
      ),
    )
  }

  const handleLastTransaction = (option: string) => {
    let filteredTransactions = []

    if (option === 'Total') {
      filteredTransactions = transactions
    } else {
      filteredTransactions = transactions.filter(
        (transaction: ITransactionProps) => transaction.option === option,
      )
    }

    const lastTransaction = filteredTransactions.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )

    return lastTransaction[0]?.created_at
  }

  const handleMessage = (titleLower: string, titleUpper: string) => {
    const message =
      `Last ${titleLower} in ` +
      formatLastDate(String(handleLastTransaction(titleUpper)))

    return handleLastTransaction(titleUpper) ? message : ''
  }

  const transactionContextData: ITransactionContextData = {
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
    total: totalIncome - totalExpenses,
    totalIncome,
    totalExpenses,
    handleSearchTransactions,
    filteredTransactions,
    handleLastTransaction,
    loading,
    handleMessage,
  }

  return (
    <TransactionContext.Provider value={transactionContextData}>
      {children}
    </TransactionContext.Provider>
  )
}
