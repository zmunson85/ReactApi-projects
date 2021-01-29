import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                console.log("res", res)
                setPokemon(res.data.results)
            })
    }, [])

    return (
        <>
            <ul>

                {
                    pokemon ? pokemon.map((p, i) =>
                            <li key={i}>{p.name}</li>
                        ) : ""
                }
            </ul>
        </>
    )
}

export default Pokemon;