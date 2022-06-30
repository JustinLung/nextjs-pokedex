import styles from './PokemonList.module.css'

interface Props {
    pokemonId?: number
    pokemonName?: string
    pokemonImage?: string
}

export function PokemonList({ pokemonId, pokemonName, pokemonImage }: Props) {
    return (
        <>
            <section className={styles.pokemon}>
                <p className={styles['pokemon__number']}>N° {pokemonId}</p>
                <h2 className={styles['pokemon__name']}>{pokemonName}</h2>
                <img src={pokemonImage} alt={pokemonName} className={styles['pokemon__image']} loading="lazy" />
            </section>
        </>
    )
}

export default PokemonList