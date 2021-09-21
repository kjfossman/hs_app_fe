import React from 'react';
import { useSelector } from 'react-redux';
import LoggedIn from './LoggedIn';

function Homepage() {

    return (
        <div>
            <LoggedIn/>
        </div>
    );
}

export default Homepage;