import { GetServerSideProps } from "next"
import { PokemonList } from '../components/PokemonList/PokemonCard'
import { Header } from '../components/Header/Header'
import styles from './styles/index.module.css'
import Link from 'next/link'
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop"
import { useEffect, useState } from "react";

type Pokemons = {
  pokemons: any
}

function Home({ pokemons }: Pokemons) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (

    <>
      <Header />
      <section className={styles['pokemon-list']}>
        {pokemons.results.map((pokemon, i) => {
          const pokemonId = i + 1
          return (
            <Link href={`/pokemon/${pokemonId}`} key={pokemon?.id}>
              <a rel="noopener">
                <PokemonList pokemonId={pokemonId} pokemonName={pokemon?.name} pokemonImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}></PokemonList>
              </a>
            </Link>
          )
        })}
      </section>
      {showButton && (
        <ScrollToTop />
      )}
    </>
  )
}

export async function getServerSideProps(context: GetServerSideProps) {
  const baseURL = 'https://pokeapi.co/api/v2'
  const pokemonListEndpoint = 'pokemon/?limit=898'

  const res = await fetch(`${baseURL}/${pokemonListEndpoint}`)
  const data = await res.json()
  return {
    props: {
      pokemons: data
    }
  }
}

export default Home