import React from 'react';
import { useSelector } from 'react-redux';

function LoggedIn() {
    const [login, users] = useSelector((state) => [
        state.login,
        state.users
    ])
    debugger
    return (
        <div>
            {login ? `Welcome ${login.user.name}` : "Please Log in to View Page"}
        </div>
    );
}

export default LoggedIn;

