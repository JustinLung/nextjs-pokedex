import styles from '../pokemon/[id].module.css'

type Pokemon = {
    pokemon: any
    query: any
}

function pokemonDetail({ pokemon }: Pokemon) {
    return (
        <>

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