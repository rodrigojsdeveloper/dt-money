'use client'

import { useContext } from 'react'
import { TransactionContext } from '@/contexts/transaction.context'
import { Card } from './Card'
import { ArrowDownCircle, ArrowUpCircle, CircleDollarSign } from 'lucide-react'

export const Navigation = () => {
  const { total, totalIncome, totalExpenses, handleMessage } =
    useContext(TransactionContext)

  return (
    <div className="scrollbar-hide mx-auto -mt-24 flex w-full max-w-[69.988rem] flex-row items-center justify-between gap-x-4 overflow-auto px-6 sm:-mt-20">
      <Card
        title="Income"
        value={totalIncome}
        message={handleMessage('income', 'Income')}
      >
        <ArrowUpCircle className="size-8 text-[#00B37E]" />
      </Card>
      <Card
        title="Expenses"
        value={totalExpenses}
        message={handleMessage('expenses', 'Expenses')}
      >
        <ArrowDownCircle className="size-8 text-[#F75A68]" />
      </Card>
      <Card
        title="Total"
        background="bg-colorPrimary-2"
        value={total}
        message={handleMessage('transaction', 'Total')}
      >
        <CircleDollarSign className="size-8" />
      </Card>
    </div>
  )
}
