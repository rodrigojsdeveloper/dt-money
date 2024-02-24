import { IsLoadingProps } from '@/interfaces'
import { PropsWithChildren } from 'react'

const ModalBackground = ({
  children,
  isLoading,
}: PropsWithChildren<IsLoadingProps>) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-full flex-row items-center justify-center bg-shadow px-5 ${isLoading}`}
    >
      {children}
    </div>
  )
}

export default ModalBackground
