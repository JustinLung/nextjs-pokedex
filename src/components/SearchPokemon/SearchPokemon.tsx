import styles from "./SearchPokemon.module.css";
import React, { useRef } from "react";

export function SearchPokemon() {
  const searchInput = useRef(null);

  function submitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // @ts-ignore
    history.pushState({}, "", `/pokemon/${searchInput.current?.value}`);
    location.reload();
  }

  return (
    <form className={styles.search} onSubmit={submitSearch}>
      <input
        type="text"
        name="search_pokemon"
        className={styles["search__input"]}
        placeholder="✨ Search Pokemon..."
        autoComplete="off"
        ref={searchInput}
      />
      <button className={styles["search__button"]}>
        <img src="assets/icons/search.svg" alt="Search Icon" />
      </button>
    </form>
  );
}
