import { formatDate } from '@/utils/format-date'
import { ITransaction } from '@/interfaces'
import { cn } from '@/utils/cn'
import { Calendar, Tag } from 'lucide-react'

export const Transaction = ({ transaction }: ITransaction) => {
  return (
    <div className="mb-3 flex h-[8.75rem] w-full max-w-[69.988rem] flex-col items-center justify-between rounded-def bg-grey-3 px-5 py-5 sm:mb-2 sm:h-[4.125rem] sm:flex-row sm:px-8">
      <div className="flex w-full flex-col gap-y-1.5 sm:flex-row sm:gap-0">
        <h2 className="flex w-full min-w-[12.5rem] max-w-[31.25rem] items-center text-base font-normal text-grey-7">
          {transaction.description}
        </h2>
        <p
          className={cn(
            'flex w-full min-w-[6.25rem] max-w-[12.5rem] items-center text-xl font-bold sm:text-base sm:font-normal',
            transaction.option === 'Expenses'
              ? 'text-red-1'
              : 'text-colorPrimary-1',
          )}
        >
          {transaction.option === 'Expenses'
            ? `- R$ ${transaction.price}`
            : `R$ ${transaction.price}`}
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-between sm:max-w-[20.75rem]">
        <p className="flex w-full max-w-60 items-center gap-0 gap-x-1.5 text-base font-normal text-grey-5">
          <Tag className="size-4 sm:hidden" />
          {transaction.category}
        </p>
        <p className="flex w-full max-w-[6.875rem] items-center justify-end gap-0 gap-x-1.5 text-base font-normal text-grey-5 sm:max-w-[5.75rem]">
          <Calendar className="size-4 sm:hidden" />
          {formatDate(transaction.created_at)}
        </p>
      </div>
    </div>
  )
}
