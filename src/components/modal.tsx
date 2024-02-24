'use client'

import { useContext, useState } from 'react'
import { TransactionContext } from '@/contexts/transaction.context'
import { transactionSchema } from '@/schemas/transaction.schema'
import { Button } from './button'
import { Input } from './input'
import * as zod from 'zod'
import { cn } from '@/utils/cn'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

type FormData = zod.infer<typeof transactionSchema>

export const Modal = () => {
  const { addTransaction } = useContext(TransactionContext)

  const [option, setOption] = useState<string>('')
  const [prohibited, setProhibited] = useState<boolean>(false)
  const [exit, setExit] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    id: '',
    description: '',
    price: '',
    category: '',
    option: 'Income',
    created_at: new Date(),
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmitFunction = () => {
    const data: FormData = {
      ...formData,
      id: crypto.randomUUID(),
      created_at: new Date(),
      option: option === 'Income' ? 'Income' : 'Expenses',
    }

    addTransaction(data)

    setFormData({
      id: '',
      description: '',
      price: '',
      category: '',
      option: 'Income',
      created_at: new Date(),
    })
    setOption('')
    setProhibited(false)
    setExit(false)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          className="h-[2.375rem] max-w-[8.125rem] bg-colorPrimary-1 p-0 text-white hover:border-colorPrimary-2 hover:bg-colorPrimary-2 sm:h-[3.125rem] sm:max-w-[9.188rem]"
          text="New transaction"
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-shadow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-30 flex w-[95%] max-w-[33.438rem] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-def bg-grey-2 px-5 py-7 shadow-default duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:px-12 sm:py-10">
          <Dialog.Close className="m-auto flex w-full max-w-[27.438rem] justify-end">
            <X className="size-6 cursor-pointer text-[#7C7C8A]" />
          </Dialog.Close>

          <form
            className="relative m-auto w-full max-w-[27.438rem]"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmitFunction()
            }}
          >
            <h2 className="mb-5 text-2xl font-bold text-grey-8 sm:mb-8">
              New transaction
            </h2>

            <div className="flex h-[11.625rem] w-full flex-col justify-between sm:h-[12.125rem]">
              <Input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <Input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                type="number"
              />
              <Input
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Category"
              />
            </div>

            <div className="mb-10 mt-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
              <button
                type="button"
                className={cn(
                  'flex h-[3.625rem] w-full items-center justify-center gap-2 rounded-def sm:max-w-[13.219rem]',
                  prohibited
                    ? 'bg-colorPrimary-4'
                    : 'bg-grey-3 hover:bg-grey-4',
                )}
                onClick={() => {
                  setOption('Income')
                  setProhibited(true)
                  setExit(false)
                }}
              >
                <ArrowUpCircle className="size-6 text-[#00B37E]" />
                Income
              </button>

              <button
                type="button"
                className={cn(
                  'flex h-[3.625rem] w-full items-center justify-center gap-2 rounded-def sm:max-w-[13.219rem]',
                  exit ? 'bg-red-2' : 'bg-grey-3 hover:bg-grey-4',
                )}
                onClick={() => {
                  setOption('Expenses')
                  setProhibited(false)
                  setExit(true)
                }}
              >
                <ArrowDownCircle className="size-6 text-[#F75A68]" />
                Expenses
              </button>
            </div>

            <Button
              type="submit"
              text="Register"
              className="h-[3.125rem] max-w-[27.438rem] bg-colorPrimary-1 text-white hover:border-colorPrimary-2 hover:bg-colorPrimary-2"
            />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
