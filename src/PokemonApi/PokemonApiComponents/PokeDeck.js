import React, { useState } from 'react';


const FetchPoke = (props) => {
    //destructure props and initialize to nothing
    const [state, setState] = useState([]);

    //function to process the button event of calling the API
    const getPoke = () => {
        // use this next function to fetch the API
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=807')
            //if it is correct json should have data in dev tool...
            .then(response =>
                response.json()
            )
            
            .then(response => {
                setState(
                    response.results
                    )
                })
                
                
                //error case
                .catch(err => console.log(err))
    }

    return (
        <>
            <button className="poke" type="submit" onClick={getPoke}>Open Poke Deck</button>

            {/* This map is going to get all pokemon in PokeDeck*/}
            {
                // .then(allpokemon => console.log(allpokemon))
                state.map((getAll, i) => {
                    return <div className=""><ul><li className="pokemon" key={i}>{getAll.name}</li></ul></div>
                })
            }
        </>
    );
}

export default FetchPoke;