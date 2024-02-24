'use client'
import { TransactionContext } from '@/contexts/transaction.context'
import ModalBackground from './ModalBackground'
import { useContext, useEffect } from 'react'
import MessageEmpty from './MessageEmpty'
import Transaction from './Transaction'
import Loading from './Loading'
import { cn } from '@/utils/cn'

const List = () => {
  const {
    handleNextPage,
    handlePreviousPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
    currentPage,
    transactionsPerPage,
    paginatedTransactions,
    filteredTransactions,
    loading,
  } = useContext(TransactionContext)

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1)
    setDisabledNextPage(
      currentPage * transactionsPerPage >= filteredTransactions.length,
    )
  }, [
    currentPage,
    filteredTransactions,
    setDisabledNextPage,
    setDisabledPreviousPage,
    transactionsPerPage,
  ])

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage,
  )

  const currentPageSpans = []
  for (let i = 1; i <= totalPages; i++) {
    currentPageSpans.push(i)
  }

  return (
    <div>
      <menu className="mx-auto w-full max-w-[69.988rem] px-6">
        {loading ? (
          <ModalBackground isLoading="max-sm:items-center">
            <Loading />
          </ModalBackground>
        ) : filteredTransactions.length > 0 ? (
          paginatedTransactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))
        ) : (
          <MessageEmpty />
        )}
      </menu>

      <div className="mx-auto my-10 flex w-full max-w-[22rem] flex-row items-center justify-center">
        {currentPage === 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7955 3.7045C16.2348 4.14384 16.2348 4.85616 15.7955 5.2955L9.09099 12L15.7955 18.7045C16.2348 19.1438 16.2348 19.8562 15.7955 20.2955C15.3562 20.7348 14.6438 20.7348 14.2045 20.2955L6.7045 12.7955C6.26517 12.3562 6.26517 11.6438 6.7045 11.2045L14.2045 3.7045C14.6438 3.26517 15.3562 3.26517 15.7955 3.7045Z"
              fill="#323238"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2 cursor-pointer"
            onClick={() => handlePreviousPage()}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7955 3.7045C16.2348 4.14384 16.2348 4.85616 15.7955 5.2955L9.09099 12L15.7955 18.7045C16.2348 19.1438 16.2348 19.8562 15.7955 20.2955C15.3562 20.7348 14.6438 20.7348 14.2045 20.2955L6.7045 12.7955C6.26517 12.3562 6.26517 11.6438 6.7045 11.2045L14.2045 3.7045C14.6438 3.26517 15.3562 3.26517 15.7955 3.7045Z"
              fill="#00875F"
            />
          </svg>
        )}

        {currentPageSpans.map((index) => (
          <span
            key={index}
            className={cn(
              'max-w-10 mx-1 flex h-10 w-full items-center justify-center rounded-def text-base font-bold',
              currentPage === index
                ? 'bg-colorPrimary-1 text-white'
                : 'bg-grey-4 text-grey-6',
            )}
          >
            {index}
          </span>
        ))}

        {currentPage < totalPages ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2 cursor-pointer"
            onClick={() => handleNextPage()}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2045 3.7045C8.64384 3.26517 9.35616 3.26517 9.7955 3.7045L17.2955 11.2045C17.7348 11.6438 17.7348 12.3562 17.2955 12.7955L9.7955 20.2955C9.35616 20.7348 8.64384 20.7348 8.2045 20.2955C7.76517 19.8562 7.76517 19.1438 8.2045 18.7045L14.909 12L8.2045 5.2955C7.76517 4.85616 7.76517 4.14384 8.2045 3.7045Z"
              fill="#00875F"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2045 3.7045C8.64384 3.26517 9.35616 3.26517 9.7955 3.7045L17.2955 11.2045C17.7348 11.6438 17.7348 12.3562 17.2955 12.7955L9.7955 20.2955C9.35616 20.7348 8.64384 20.7348 8.2045 20.2955C7.76517 19.8562 7.76517 19.1438 8.2045 18.7045L14.909 12L8.2045 5.2955C7.76517 4.85616 7.76517 4.14384 8.2045 3.7045Z"
              fill="#323238"
            />
          </svg>
        )}
      </div>
    </div>
  )
}

export default List
