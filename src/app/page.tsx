import { Navigation } from '@/components/navigation'
import { Header } from '@/components/header'
import { Search } from '@/components/search'
import List from '@/components/list'

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Search />
      <List />
    </>
  )
}
