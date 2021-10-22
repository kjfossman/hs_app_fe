import React from 'react';
import useExerciseForm from './CustomHooks';
import axios from 'axios';

function ExerciseForm(props) {

    const addExercise = () => {
        let exercise = {
            name: inputs.name,
            target: inputs.target,
            equipment: inputs.equipment
        }
        axios.post('/exercises', {exercise})
    }
    

    const {inputs, handleInputChange, handleSubmit} = useExerciseForm(addExercise)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Exercise Name</label>
                <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required/>

                <label>Target Muscles</label>
                <input type="text" name="target" onChange={handleInputChange} value={inputs.target} required/>

                <label>Equipment Needed</label>
                <input type="text" name="equipment" onChange={handleInputChange} value={inputs.equipment} required/>
            </div>
            <button type="submit">Add Exercise</button>
        </form>
        
    );
}

export default ExerciseForm;