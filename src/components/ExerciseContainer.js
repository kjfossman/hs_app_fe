import React from 'react';
import { useState, useEffect } from 'react';
import Exercise from './Exercise.js'

function ExerciseContainer(props) {

    const [exercises, setExercises] = useState([])
    // const dispatch = useDispatch()
  
    useEffect(() => {
      fetch("/exercises")
        .then(res => res.json())
        .then(result => setExercises(result))
    },[])

    
    let exes = exercises.map(e => <Exercise key={e.id} exercise={e}/>)
    return (
        <div>
            {exes}
        </div>
    );
}

export default ExerciseContainer;