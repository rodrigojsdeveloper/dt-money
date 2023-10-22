import { TransactionContextProvider } from './transaction.context'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return <TransactionContextProvider>{children}</TransactionContextProvider>
}

export default Providers
