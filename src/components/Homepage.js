import React from 'react';
import { useSelector } from 'react-redux';

function Homepage() {
    const [login, users] = useSelector((state) => [
        state.login,
        state.users
    ])

    let currentUser = users.find(user => user.id === login[0])
    
    
    return (
        <div>
            {currentUser ? `Welcome ${currentUser.name}` : "Loading"}
        </div>
    );
}

export default Homepage;