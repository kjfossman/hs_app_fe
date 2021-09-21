import React from 'react';
import { useDispatch} from 'react-redux';
import { useGoogleLogout } from 'react-google-login'

function Logout(props) {

    const dispatch = useDispatch()

    const clientId = props.clientId

    const onLogoutSuccess = (res) => {
        alert('Logged out Successfully')
        (dispatch({type: 'LOGOUT'}))
    }

    const onFailure = () => {
        console.log("logout failed")
    }

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    })

    return (
        <div>
            <button onClick={signOut}>Logout</button>
        </div>
    );
}

export default Logout;