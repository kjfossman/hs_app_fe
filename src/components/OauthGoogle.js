import GoogleLogin from 'react-google-login'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import Logout from './Logout';


function OauthGoogle(props){

    const loginStatus = useSelector(state => state.login)

    const dispatch = useDispatch()
  
    const addUser = (data) => {
        let user = {
            name: data.name,
            email: data.email,
        }
        axios.post('/login', {user}, {
            withCredentials: true }
            )
        .then(responseJSON => {
            dispatch({type: 'ADD_USER', res: responseJSON})
            dispatch({type: 'LOGIN_USER', res: responseJSON})
        })
    }

    const responseGoogle = (response) => {
        addUser(response.profileObj)
      }

        if(loginStatus.name === undefined){
           
        return (
            <div>
                 <GoogleLogin
                    clientId={props.Google_id}
                    buttonText="Login or Signup with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                 />
            </div>
        
        );
    }else{
        return (
            <div>
              <Logout clientId={props.Google_id}/>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addUser: (data) => {
//             dispatch(addUser(data))
//         }
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         loginStatus: state.login
//     }
         
// }

// export default connect(mapStateToProps, mapDispatchToProps)(OauthGoogle);

export default OauthGoogle