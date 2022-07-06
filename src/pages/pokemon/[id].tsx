import { DetailHeader } from '../../components/DetailHeader/DetailHeader'
import { DetailPokemonImage } from '../../components/DetailPokemonImage/DetailPokemonImage'
import { DetailStatCard } from '../../components/DetailStatCard/DetailStatCard'
import { DetailStats } from '../../components/DetailStats/DetailStats'
import { DetailType } from '../../components/DetailType/DetailType'
import { DetailTypeSection } from '../../components/DetailTypeSection/DetailTypeSection'
import { DetailDescription } from '../../components/DetailDescription/DetailDescription'
import { DetailWeightAndHeight } from '../../components/DetailWeightAndHeight/DetailWeightAndHeight'
import { motion } from 'framer-motion'

type Pokemon = {
    pokemon: any
    pokemonSpecies: any
    query: any
}

function pokemonDetail({ pokemon, pokemonSpecies }: Pokemon) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DetailHeader pokemonName={pokemon.name} pokemonId={pokemon.id} />
            <DetailPokemonImage pokemonImageId={pokemon.id} pokemonName={pokemon.name} />
            <DetailDescription pokemonDescription={pokemonSpecies.flavor_text_entries[0].flavor_text.replace('', ' ')} />
            <DetailWeightAndHeight pokemonHeight={pokemon.height} pokemonWeight={pokemon.weight} />
            <DetailStats>
                {pokemon.stats.map((pokemon) => {
                    return (
                        <DetailStatCard statName={pokemon.stat.name} stat={pokemon.base_stat} key={pokemon.id}/>
                    )
                })}
            </DetailStats>
            <DetailTypeSection>
                {pokemon.types.map((pokemon) => {
                    return (
                        <DetailType type={pokemon.type.name} key={pokemon.id}/>
                    )
                })}
            </DetailTypeSection>
        </motion.div>
    )
}

export async function getServerSideProps({ query }: Pokemon) {
    const baseURL = 'https://pokeapi.co/api/v2'
    const pokemonEndpoint = 'pokemon'
    const pokemonSpeciesEndpoint = 'pokemon-species'
    const id = query.id

    const [pokemonRes, pokemonSpeciesRes] = await Promise.all([
        fetch(`${baseURL}/${pokemonEndpoint}/${id}`),
        fetch(`${baseURL}/${pokemonSpeciesEndpoint}/${id}`),
        fetch(`${baseURL}/${pokemonSpeciesEndpoint}/${id}`),
    ])

    const [pokemon, pokemonSpecies] = await Promise.all([
        pokemonRes.json(),
        pokemonSpeciesRes.json()
    ])

    return {
        props: {
            pokemon, pokemonSpecies
        }
    }
}

export default pokemonDetail