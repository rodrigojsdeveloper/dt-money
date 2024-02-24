'use client'
import { ICardProps } from '@/interfaces'
import { cn } from '@/utils/cn'
import { PropsWithChildren } from 'react'

const Card = ({
  title,
  value,
  background,
  message,
  children,
}: PropsWithChildren<ICardProps>) => {
  return (
    <div
      className={cn(
        'h-[9.375rem] w-full min-w-[17.5rem] max-w-[22rem] rounded-def px-8 py-6 sm:h-[8.563rem]',
        background || 'bg-grey-4',
      )}
    >
      <div className="mb-3 flex w-full flex-row justify-between">
        <p className="text-base font-normal text-grey-7">{title}</p>

        {children}
      </div>

      <p className="mb-1 text-2xl font-bold text-grey-8 sm:mb-0 sm:text-32">
        R$ {value.toLocaleString('pt-BR')}
      </p>
      <p className="text-sm font-normal text-grey-6 sm:hidden">{message}</p>
    </div>
  )
}

export default Card
