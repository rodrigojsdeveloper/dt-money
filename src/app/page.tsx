import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/Header'
import { Search } from '@/components/Search'
import List from '@/components/List'

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
