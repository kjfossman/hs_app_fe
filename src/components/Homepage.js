import React from 'react';
import { useSelector } from 'react-redux';
import LoggedIn from './LoggedIn';

function Homepage() {

    const user = useSelector(state => state.login)
     
    debugger
    return (
        <div>
            
            {user ? `${user.user.name} is a ${user.profile.theme}` : ""}
            <LoggedIn/>
        </div>
    );
}

export default Homepage;