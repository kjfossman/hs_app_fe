import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import LoggedIn from './LoggedIn';
import ProfileForm from './ProfileForm';

function Homepage() {

    const user = useSelector(state => state.login)

    const [edit, setEdit] = useState(false)

    const editProf = () => {
        setEdit(!edit)
    } 

    console.log(user)
    return (
        
        <div style={{backgroundColor: user ? `${user.profile.color}` : 'white'}}>
            <LoggedIn/>
            {/* <div>- "{user.profile.quote}"</div> */}


            {user && 
                <button onClick={editProf}>{edit ? "Hide Editor" : "Edit My Profile"}</button>
            }
            {edit && 
                <ProfileForm user={user}/>
            }

        </div>
    );
}

export default Homepage;