import React, { useEffect, useState } from 'react';
//npm install axios
import axios from 'axios';
import { navigate } from "@reach/router";


const Planets = (props) => {

    const [planets, setPlanets] = useState(null);
    //runs once when component first loads with empty bracket as argument
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + props.id + "/")
            .then(response => {
                setPlanets(response.data);
            })
            .catch(() => navigate("/error"));
    }, [props.id]);
    // just for user experience
    if (planets == null) {
        return "loading";
    }
    return (
        <div>
            <h1>{planets.name}</h1>
            <h3>Climate: {planets.climate}</h3>
            <h3>Terrain: {planets.terrain}</h3>
            <h3>Surface Water: {planets.surface_water}</h3>
            <h3>Population: {planets.population}</h3>
        </div>
    )

}

export default Planets;