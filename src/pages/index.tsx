import { GetServerSideProps } from "next"
import { PokemonCard } from '../components/PokemonCard/PokemonCard'
import { Header } from '../components/Header/Header'
import styles from './styles/index.module.css'
import Link from 'next/link'
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <section className={styles['pokemon-list']}>
        {pokemons.results.map((pokemon, i) => {
          const pokemonId = i + 1
          return (
            <Link href={`/pokemon/${pokemonId}`} key={pokemon?.id}>
              <a rel="noopener">
                <PokemonCard pokemonId={pokemonId} pokemonName={pokemon?.name} pokemonImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}></PokemonCard>
              </a>
            </Link>
          )
        })}
      </section>
      {showButton && (
        <ScrollToTop />
      )}
    </motion.div>
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