import React from 'react';

function Exercise(props) {

    return (
        <div>
            {`Exercise: ${props.exercise.name}`}
            {` Target: ${props.exercise.target}`}
            {` Equipment: ${props.exercise.equipment}`}
        </div>
    );
}

export default Exercise;