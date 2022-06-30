import Link from 'next/link'
import styles from './Header.module.css'
import { SearchPokemon } from '../SearchPokemon/SearchPokemon'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a rel="noopener" className={styles['header__link']}>Pokedex</a>
        </Link>
      </header>
      <SearchPokemon />
    </>
  )
}