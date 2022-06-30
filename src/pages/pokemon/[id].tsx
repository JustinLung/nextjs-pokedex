import styles from '../pokemon/[id].module.css'

type Pokemon = {
    pokemon: any
    query: any
}

function pokemonDetail({ pokemon }: Pokemon) {
    return (
        <>
            <div className="header">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt="Pokemon - {pokemon.name}"
                />
            </div>
            <section>
                <h1>{pokemon.name}</h1>
                <div className="types-container">
                    <p>{pokemon.types[0].type?.name}</p>
                </div>
                <div className="weight-height-container">
                    <section>
                        <h2>Height</h2>
                        <p>{pokemon.height / 10} M</p>
                    </section>
                    <section>
                        <h2>Weight</h2>
                        <p>{pokemon.weight / 10} KG</p>
                    </section>
                </div>
                <section className="abilities-container">
                    <h2>Abilities</h2>
                    <div>
                        <p>{pokemon.abilities[0].ability.name}</p>
                        <p>{pokemon.abilities[1].ability.name}</p>
                    </div>
                </section>
            </section>
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