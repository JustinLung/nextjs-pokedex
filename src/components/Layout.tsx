import { ReactElement } from 'react'
import { Header} from '../components/Header/Header'

export function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}