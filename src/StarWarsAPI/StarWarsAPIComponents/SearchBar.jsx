/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

const SearchBar = props => {
    //deconstruct props
    console.log(props)
    const { options, input } = props;
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${options}/${input}`)
            .then(res => {
                let person = res.data;
                if (options === 'people') {
                    Axios.get(person.homeworld)
                        .then(res => {
                            person.showhomeworld = res.data.name;
                            const planetId = person.homeworld.slice(29);
                            /* console.log(JSON.stringify(homeworld)) */
                            /* console.log(JSON.stringify(person)) */
                            person.homeworldID = planetId;
                            setApiData(person);
                        })
                        .catch(err => showError())
                }
                else {
                    setApiData(person)
                }
            })
            .catch(err => showError())
    }, [props])


    /* I needed to create a way to connect the api data with what the user is selecting, also I didn't know where the data would be printing.
    to solve the way the user interacts with the state variables I will use apidata as the template info,  */
    const showPeople = () => {
        console.log(showPeople);
        return (
            <>
                <p className="gohome"><Link to={`/`} > Go Home </Link></p>
            <div className="people">
                <div className="content">
                    <h1>{apiData.name}</h1>
                    <h3>Height: {apiData.height} cm</h3>
                    <h3>Mass: {apiData.mass} kg</h3>
                    <h3>Hair Color: {apiData.hair_color}</h3>
                    <h3>Skin Color: {apiData.skin_color}</h3>
                    <h3>Homeworld: {apiData.showhomeworld}</h3>
                        <p className="ShowPersonHomeWorld"><Link to={`/planets/${apiData.homeworldID}`} > Show {apiData.showhomeworld} </Link></p><br>
                    </br>
                </div>
            </div>

            </>)
    }

    const showPlanets = () => {
        return (
            <>
                <p className="gohome"><Link to={`/`} > Go Home </Link></p>
            <div className="planets">
                <div>
                    <h1>{apiData.name}</h1>
                    <h3>Climate: {apiData.climate}</h3>
                    <h3>Terrain: {apiData.terrain}</h3>
                    <h3>Surface Water: {apiData.surface_water}</h3>
                    <h3>Population: {apiData.population}</h3>
                        
                </div>
            </div>
            </>

        )
    }

    const showFilms = () => {
        return (
            <>
                <p className="gohome"><Link to={`/`} > Go Home </Link></p>
            <div className="films">
                <div>
                    <h1>{apiData.title}</h1>
                    <h3>Episode: {apiData.episode_id}</h3>
                    <h3>Director: {apiData.director}</h3>
                    <h3>Release Date: {apiData.release_date}</h3>
                    <h3>Opening Crawl: {apiData.opening_crawl}</h3>
                        
                </div>
            </div>
            </>

        )
    }

    const showStarships = () => {
        return (
            <>
                <p className="gohome"><Link to={`/`} > Go Home </Link></p>
            <div className="starships">
                <div>    
                    <h1>{apiData.name}</h1>
                    <h3>Consumables: {apiData.consumables}</h3>
                    <h3>Crew: {apiData.crew}</h3>
                    <h3>Manufacturer: {apiData.manufacturer}</h3>
                    <h3>Model: {apiData.model}</h3>
                        
                </div>
            </div>    
            </>

        )
    }

    const showVehicles = () => {
        return (
            <>
                <p className="gohome"><Link to={`/`} > Go Home </Link></p>
            <div className="vehicles">
                <div>
                    <h1>{apiData.name}</h1>
                    <h3>Consumables: {apiData.consumables}</h3>
                    <h3>Crew: {apiData.crew}</h3>
                    <h3>Model: {apiData.model}</h3>
                    <h3>Vehicle Class: {apiData.vehicle_class}</h3>
                </div>
            </div>
            </>

        )
    }

    //if there is no match for the serach result I must include an error msg.
    const showError = () => {
        return (
            <>
                <h3 className="errormsg">These aren't the droids you're looking for</h3>
                <img className='obiwan' src="https://i.pinimg.com/236x/b9/d0/ce/b9d0ce75826b8ba13b26bfe308650859.jpg" alt="Obi Wan Kenobi" />
                    <p className="gohome"><Link to={`/`} > Go Home </Link></p>

            </>
        )
    }


    return (
        <>
            {/*  this is shorthand for a series of statements, Options is our State Variable that has all the 
            apidata,if options is slected and the option selected is people- show people or--- 
            else another option all the way to errors or errors, the statements doent run consistant, only when the user makes a selection. 
            If the page is submited without any data selected it will error  
            When the user selects an option but inputs */}
            {options === 'people' ?         
                showPeople() :
                options === 'planets'
                    ? showPlanets()
                    : options === 'films'
                        ? showFilms()
                        : options === 'starships' 
                            ? showStarships()
                            : options === 'vehicles'
                                ? showVehicles()
                                : showError()
            }

        </>
    );
}

export default SearchBar;