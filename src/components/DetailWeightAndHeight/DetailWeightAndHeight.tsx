interface Props {
    pokemonWeight: number
    pokemonHeight: number
}

export function DetailWeightAndHeight({ pokemonWeight, pokemonHeight }: Props) {
    return (
        <section style={{ display: "flex", flexDirection: "row", gap: ".5rem", marginTop: "1rem" }}>
            <span><span style={{ fontWeight: "bold" }}>Weight:</span> {pokemonWeight / 10} KG</span>
            <span><span style={{ fontWeight: "bold" }}>Height:</span> {pokemonHeight / 10} M</span>
        </section>
    )
}