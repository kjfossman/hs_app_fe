import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ProfileForm(props) {

    const [values, setValues] = useState({
        theme: props.user.profile.theme,
        quote: props.user.profile.quote,
        color: props.user.profile.color
    })

    const dispatch = useDispatch()

    const changeInput = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted")
        axios.patch(`/profiles/${props.user.profile.id}`, values )
        .then(responseJSON => {
            dispatch({type: 'UPDATE_PROFILE', profile: responseJSON.data})
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Theme: 
                    <input onChange={changeInput} type="text" value={values.theme} name="theme"/>
                </label>
                <br></br>
                <label>Quote: 
                    <input onChange={changeInput} type="text" value={values.quote || ""} name="quote"/>
                </label>
                <br></br>
                <label>Color: 
                    <input onChange={changeInput} type="text" value={values.color} name="color"/>
                </label>
                <br></br>
                <input type="submit" value="Update"/>

            </form>
        </div>
    );
}

export default ProfileForm;