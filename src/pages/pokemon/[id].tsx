import { DetailHeader } from '../../components/DetailHeader/DetailHeader'
import { DetailPokemonImage } from '../../components/DetailPokemonImage/DetailPokemonImage'
import { DetailStatCard } from '../../components/DetailStatCard/DetailStatCard'
import { DetailStats } from '../../components/DetailStats/DetailStats'
import { DetailType } from '../../components/DetailType/DetailType'
import { DetailTypeSection } from '../../components/DetailTypeSection/DetailTypeSection'

type Pokemon = {
    pokemon: any
    query: any
}

function pokemonDetail({ pokemon }: Pokemon) {
    return (
        <>
            <DetailHeader pokemonName={pokemon.name} pokemonId={pokemon.id} />
            <DetailPokemonImage pokemonImageId={pokemon.id} pokemonName={pokemon.name} />
            <DetailStats>
                {pokemon.stats.map((pokemon) => {
                    return (
                        <DetailStatCard statName={pokemon.stat.name} stat={pokemon.base_stat} />
                    )
                })}
            </DetailStats>
            <DetailTypeSection>
                {pokemon.types.map((pokemon) => {
                    return (
                        <DetailType type={pokemon.type.name} />
                    )
                })}
            </DetailTypeSection>
        </>
    )
}

export async function getServerSideProps({ query }: Pokemon) {
    const baseURL = 'https://pokeapi.co/api/v2'
    const pokemonEndpoint = 'pokemon'
    const id = query.id

    const res = await fetch(`${baseURL}/${pokemonEndpoint}/${id}`)
    const data = await res.json()
    return {
        props: {
            pokemon: data
        }
    }
}

export default pokemonDetail