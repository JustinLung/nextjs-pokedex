import styles from './DetailPokemonImage.module.css'

interface Props {
    pokemonName?: string
    pokemonImageId?: number
}

export function DetailPokemonImage({ pokemonImageId }: Props) {
    return (
        <>
            <div className={styles["detail-image-container"]}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonImageId}.png`} alt="" />
            </div>
        </>
    )
}