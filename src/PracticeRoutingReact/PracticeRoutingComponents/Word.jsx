import React from 'react';

const Word = props => {

    const pStyle = {
        background: props.bcolor,
        color: props.wcolor
    };

    return (
        <div>
            <p style={pStyle}>
                {props.x}
            </p>
        </div>
    )
}

export default Word;