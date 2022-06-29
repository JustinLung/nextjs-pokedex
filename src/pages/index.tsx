import { GetServerSideProps } from "next"
import { PokemonList } from '../components/PokemonList/PokemonList'
import Link from 'next/link'

type Pokemons = {
  pokemons: any
}

function Home({ pokemons }: Pokemons) {
  return (
    <>
      <h1>pokemons</h1>

      {pokemons.results.map((pokemon, i) => {
        const pokemonId = i + 1
        return (
          <div className="pokemon-list" key={pokemon.id}>
            <Link href={`/pokemon/${pokemonId}`}>
              <a rel="noopener">
                <PokemonList pokemonId={pokemonId} pokemonName={pokemon.name} pokemonImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}></PokemonList>
              </a>
            </Link>
          </div>
        )
      })}
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