'use client'

import { useContext, useState } from 'react'
import { TransactionContext } from '@/contexts/transaction.context'
import { Button } from './button'
import { Input } from './input'

export const Search = () => {
  const { filteredTransactions, handleSearchTransactions } =
    useContext(TransactionContext)

  const [transaction, setTransaction] = useState<string>('')

  const transactionsLength = filteredTransactions.length

  return (
    <div className="mx-auto mb-3 mt-4 flex w-full max-w-[69.988rem] flex-col sm:mb-6 sm:mt-16">
      {transactionsLength > 0 ? (
        <div className="mb-3 flex w-full flex-row items-center justify-between px-6 sm:hidden">
          <p className="text-lg font-normal text-grey-7">Transactions</p>

          <span className="text-base font-normal text-grey-5">
            {transactionsLength > 1
              ? `${transactionsLength} items`
              : `${transactionsLength} item`}
          </span>
        </div>
      ) : null}

      <div className="flex w-full flex-row items-center justify-between gap-x-2 px-6">
        <Input
          name="search"
          margin="mr-2.5 max-sm:mr-0"
          placeholder="Search for a transaction"
          onChange={(e) => setTransaction(e.target.value)}
        />
        <Button
          text="Search"
          className="h-[3.375rem] max-w-[3.375rem] bg-grey-2 text-colorPrimary-1 hover:bg-colorPrimary-3 sm:max-w-[9.188rem]"
          isSearch
          ariaLabel="search"
          onClick={() => handleSearchTransactions(transaction)}
        />
      </div>
    </div>
  )
}
