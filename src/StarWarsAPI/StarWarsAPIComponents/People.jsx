import React, { useEffect, useState } from 'react';
//npm install axios
import axios from 'axios';
import { navigate } from "@reach/router";


const People = (props) => {

    const [people, setPeople] = useState(null);
    //runs once when component first loads with empty bracket as argument
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + props.id + "/")
            .then(response => {
                setPeople(response.data);
            })
            .catch(() => navigate("/error"));
    }, [props.id]);
    // just for user experience
    if (people == null) {
        return "loading";
    }
    return (
        <div>
            <h1>{people.name}</h1>
            <h3>Height: {people.height} cm</h3>
            <h3>Mass: {people.mass} kg</h3>
            <h3>Hair Color: {people.hair_color}</h3>
            <h3>Skin Color: {people.skin_color}</h3>
        </div>
    )

}

export default People;
