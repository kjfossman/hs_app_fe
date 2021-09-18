import React from 'react';
import { useDispatch} from 'react-redux';
import axios from 'axios'

function Logout() {

    const dispatch = useDispatch()

    const signOut = () => {
        console.log('logout?')
        dispatch({type: "LOGOUT"})
    } 
    return (
        <div>
            <button onClick={signOut}>Logout</button>
        </div>
    );
}

export default Logout;