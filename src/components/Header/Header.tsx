import Link from 'next/link'
import styles from './Header.module.css'
import { SearchPokemon } from '../SearchPokemon/SearchPokemon'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a rel="noopener" className={styles['header__link']}>Pokédex</a>
        </Link>
        <p className={styles['header__description']}>Search for a Pokémon by name or using its National Pokédex number.</p>
        <SearchPokemon />
      </header>
    </>
  )
}