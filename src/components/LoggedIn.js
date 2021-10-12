import React from 'react';
import { useSelector } from 'react-redux';

function LoggedIn() {
    const user = useSelector(state => state.login)
   
    return (
        <div>
            {user ? `Welcome ${user.user.name} you are a ${user.profile.theme}` : "Please Log in to View Page"}
        </div>
    );
}

export default LoggedIn;

