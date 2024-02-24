import { formatDate } from '@/utils/format-date'
import { ITransaction } from '@/interfaces'
import { cn } from '@/utils/cn'

const Transaction = ({ transaction }: ITransaction) => {
  return (
    <div className="mb-2 flex h-[4.125rem] w-full max-w-[69.988rem] flex-row items-center justify-between rounded-def bg-grey-3 px-8 py-5 max-sm:mb-3 max-sm:h-[8.75rem] max-sm:flex-col max-sm:px-5">
      <div className="flex w-full max-sm:flex-col max-sm:gap-y-1.5">
        <h2 className="flex w-full min-w-[12.5rem] max-w-[31.25rem] items-center text-base font-normal text-grey-7">
          {transaction.description}
        </h2>
        <p
          className={cn(
            'flex w-full min-w-[6.25rem] max-w-[12.5rem] items-center text-base font-normal max-sm:text-xl max-sm:font-bold',
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

      <div className="flex w-full max-w-[20.75rem] flex-row items-center justify-between max-sm:max-w-none">
        <p className="max-w-60 flex w-full items-center text-base font-normal text-grey-5 max-sm:gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="sm:hidden"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7294 2.99999C11.8957 2.99891 12.0596 3.0396 12.2061 3.11833C12.3524 3.19691 12.4766 3.31086 12.5674 3.44976L15.416 7.72264C15.528 7.89059 15.528 8.10939 15.416 8.27734L12.5674 12.5502C12.4766 12.6891 12.3524 12.8031 12.2061 12.8816C12.0596 12.9604 11.8957 13.0011 11.7293 13H2.5C2.23478 13 1.98043 12.8946 1.79289 12.7071C1.60536 12.5196 1.5 12.2652 1.5 12V3.99999C1.5 3.73477 1.60536 3.48042 1.79289 3.29288C1.98043 3.10535 2.23478 2.99999 2.5 2.99999H11.7294ZM12.15 12.275L11.734 11.9976L14.3991 7.99999L11.7324 4L11.7312 4.00001L2.5 3.99999L2.5 12H11.7358C11.7351 12 11.7343 12.0001 11.7336 12.0004C11.7333 12.0005 11.7331 12.0006 11.7328 12.0008C11.7322 12.0011 11.7317 12.0015 11.7312 12.002C11.731 12.0022 11.7308 12.0025 11.7305 12.0029L12.15 12.275Z"
              fill="#7C7C8A"
            />
          </svg>
          {transaction.category}
        </p>
        <p className="flex w-full max-w-[5.75rem] items-center justify-end text-base font-normal text-grey-5 max-sm:max-w-[6.875rem] max-sm:gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="sm:hidden"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM13 3H3V13H13V3Z"
              fill="#7C7C8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 1C11.2761 1 11.5 1.22386 11.5 1.5V3.5C11.5 3.77614 11.2761 4 11 4C10.7239 4 10.5 3.77614 10.5 3.5V1.5C10.5 1.22386 10.7239 1 11 1Z"
              fill="#7C7C8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 1C5.27614 1 5.5 1.22386 5.5 1.5V3.5C5.5 3.77614 5.27614 4 5 4C4.72386 4 4.5 3.77614 4.5 3.5V1.5C4.5 1.22386 4.72386 1 5 1Z"
              fill="#7C7C8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 5.5C2 5.22386 2.22386 5 2.5 5H13.5C13.7761 5 14 5.22386 14 5.5C14 5.77614 13.7761 6 13.5 6H2.5C2.22386 6 2 5.77614 2 5.5Z"
              fill="#7C7C8A"
            />
          </svg>
          {formatDate(transaction.created_at)}
        </p>
      </div>
    </div>
  )
}

export default Transaction
