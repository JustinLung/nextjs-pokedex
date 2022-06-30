import styles from './SearchPokemon.module.css'

export function SearchPokemon() {
  function submitSearch(e) {
    e.preventDefault()
    
  }

  return (
    <form className={styles.search} onSubmit={submitSearch}>
      <input type="text" name="search_pokemon"
        className={styles['search__input']}
        placeholder="✨ Search Pokemon..."
        autoComplete="off" />
      <button className={styles['search__button']}><img src="assets/icons/search.svg" alt="Search Icon" /></button>
    </form>
  )
}