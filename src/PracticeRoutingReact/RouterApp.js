import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import Word from './components/Word';
import Number from './components/Number';


function App() {



    return (
        <div className="App">
            <Router>
                <Home path="/home" />
                <Word path="/:x/:wcolor/:bcolor" />
                <Number path="/:x" />
            </Router>
        </div>
    );
}

export default App;