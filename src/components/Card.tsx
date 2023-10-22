'use client'
import { ICardProps } from '@/interfaces'
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
      className={`h-137 w-full min-w-280 max-w-352 ${
        background || 'bg-grey-4'
      } rounded-def px-8 py-6 max-sm:h-150`}
    >
      <div className="mb-3 flex w-full flex-row justify-between">
        <p className="text-base font-normal text-grey-7">{title}</p>

        {children}
      </div>

      <p className="text-32 font-bold text-grey-8 max-sm:mb-1 max-sm:text-2xl">
        R$ {value.toLocaleString('pt-BR')}
      </p>
      <p className="text-sm font-normal text-grey-6 sm:hidden">{message}</p>
    </div>
  )
}

export default Card
