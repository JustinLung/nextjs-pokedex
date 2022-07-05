import styles from './PokemonCard.module.css'

interface Props {
  pokemonId?: number
  pokemonName?: string
  pokemonImage?: string
}

export function PokemonList({ pokemonId, pokemonName, pokemonImage }: Props) {
  return (
    <>
      <article className={styles.pokemon}>
        <img src={pokemonImage} alt={pokemonName} className={styles['pokemon__image']} loading="lazy" />
        <h2 className={styles['pokemon__name']}>{pokemonName}</h2>
        <span className={styles['pokemon__number']}>N° {pokemonId}</span>
      </article>
    </>
  )
}

export default PokemonList