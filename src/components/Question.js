import React from 'react';
import './Question.css';

function Question(props) {
    return (
        <div>
            <h1>{props.question}</h1>
        </div>
    )
}

export default Question
