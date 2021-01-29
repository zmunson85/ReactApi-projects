
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';//needed to use Axios instead of fetch

function App() {
    //destructure props and initialize to nothing
    const [state, setState] = useState([]);

    //function to process the button event of calling the API
    const getPokemon = () => {
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {
                setState(res.data.results);
            })
            .catch(err => console.log(err))

        //since we are now using AXIOS, we can delete all the fetch code below
        // //fetch the API
        // fetch(' https://pokeapi.co/api/v2/pokemon?limit=807')
        //   //if API returns successfully, first return the API data as JSON data
        //   .then(response =>
        //     response.json()
        //   )
        //   // also do this, send all of the JSON data to our state
        //   .then(response => {
        //     setState(
        //       response.results
        //     )
        //   })

        //   //error case
        //   .catch(err => console.log(err))
    }

    return (
        <div className="App">
            <button type="submit" onClick={getPokemon}>Fetch Pokemon</button>

            {/* map and plot all names */}
            {
                state.map((getAll, i) => {
                    return <ul><li key={i}>{getAll.name}</li></ul>
                })
            }

        </div>
    );
}

export default App;