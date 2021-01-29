import React from 'react';

const Num = props => {
    return (

        <div>
            {
                isNaN(props.x) ?
                        /* So if i use a conditional rendering statement here we can achieve both concepts at once and render them on one page */
                    <p>Say>>> {props.x}</p> : <p>Number= {props.x}</p>
                    /* I did realize that the path needed a word entry and a number entry, the word entry will display or the number dependin on the input */
                    /* I also noticed it does take a specific path IE: if I start the server the rendering is blank, NO ROOT ROUTE, so thats here I plug in /home after the local host in the url */
                    
            }
        </div>

    )
}

export default Num;