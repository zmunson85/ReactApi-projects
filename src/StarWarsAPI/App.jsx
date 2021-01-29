/* eslint-disable no-lone-blocks */
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, navigate, } from '@reach/router';
import SearchBar from './components/SearchBar';



function App() {
    const categories = ['', 'Planets', 'People', 'Films', 'Starships', 'Vehicles'];
    const [options, setOptions] = useState(categories[0]);
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        {
            (options === '' || isNaN(input) || input === false) ? navigate(`/error/error`) :
            navigate(`/${options}/${input}`)
        }
    }
    
    return (
        <div className="App">
            {/* select an option from the form drpdn */}
            <div className="heading">
                <h1>To browse the SWAPI data you need to select an option and type a number.</h1>
                <p> If you get lost there is a go home button on each entry, if you make an error with your entry Obi Wan will greet you!  </p>
            </div>
            <form className="aform" onSubmit={handleSubmit}>
                <label className='Pick'>Pick An Option: </label>
                <select className="dpn" value={options} onChange={e => setOptions(e.target.value)}>
                    {
                        categories.map((cat, i) => {
                            return (
                                <option className="cat" key={i} value={cat.toLowerCase()}>{cat === '' ? "Options" : cat}</option>
                            )
                        })
                    }
                </select>
                <div className="inputLable">
                    <label>ID: </label>
                    <input className="click" placeholder="Type A Number" type="text" value={input} onChange={e => { setInput(e.target.value) }} />
                </div>
                <div>    
                    <button className="go" type="submit" >View Selection</button>
                </div>    
            </form>
            <Router>
                <SearchBar path="/:options/:input" />
            </Router>
                <img src=" images/background.jpg" alt=""/>
                {/* need to figure how to get the image to display in the background */}
        </div>
    );
}

export default App;