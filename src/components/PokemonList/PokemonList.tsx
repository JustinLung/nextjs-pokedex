interface Props {
    pokemonId?: number
    pokemonName?: string
    pokemonImage?: string
}

export function PokemonList({ pokemonId, pokemonName, pokemonImage }: Props) {
    return (
        <>
            <section className="pokemon">
                <p className="pokemon__number">N° {pokemonId}</p>
                <h2 className="pokemon__name">{pokemonName}</h2>
                <img src={pokemonImage} alt={pokemonName} className="pokemon__image" loading="lazy" />
            </section>
        </>
    )
}

export default PokemonList