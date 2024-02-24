import { PropsWithChildren } from 'react'

const ModalBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full flex-row items-center justify-center bg-shadow px-5">
      {children}
    </div>
  )
}

export default ModalBackground
