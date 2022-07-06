interface Props {
    pokemonDescription?: string
}

export function DetailDescription({ pokemonDescription }: Props) {
    return (
        <section style={{ marginTop: "1rem" }}>
            <h2>Pokédex Entry</h2>
            <p>{pokemonDescription}</p>
        </section>
    )
}