'use client'

import { useContext, useState } from 'react'
import { TransactionContext } from '@/contexts/transaction.context'
import { Button } from './Button'
import { Input } from './Input'

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
          height="h-[3.375rem]"
          isSearch={true}
          maxWidth="max-w-[9.188rem]"
          background="bg-grey-2"
          color="text-colorPrimary-1"
          active="active:bg-colorPrimary-4"
          hoverBackground="hover:bg-colorPrimary-3"
          mediaGrey="max-sm:max-w-[3.375rem] max-sm:p-0"
          isGrey={true}
          onClick={() => handleSearchTransactions(transaction)}
          ariaLabel="search"
        />
      </div>
    </div>
  )
}
