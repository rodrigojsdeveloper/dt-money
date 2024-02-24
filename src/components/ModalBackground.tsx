import { IsLoadingProps } from '@/interfaces'
import { cn } from '@/utils/cn'
import { PropsWithChildren } from 'react'

const ModalBackground = ({
  children,
  isLoading,
}: PropsWithChildren<IsLoadingProps>) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex h-screen w-full flex-row items-center justify-center bg-shadow px-5',
        isLoading,
      )}
    >
      {children}
    </div>
  )
}

export default ModalBackground
