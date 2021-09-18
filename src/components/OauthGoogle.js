import GoogleLogin from 'react-google-login'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'


function OauthGoogle(props){

    const loginStatus = useSelector(state => state.login)

    const dispatch = useDispatch()
    const test = () => {
        dispatch({type: 'ADD_USER'})
    }
    
    
    const responseGoogle = (response) => {
        addUser(response.profileObj)
        test()
      }

    const addUser = (data) => {
        let user = {
            name: data.name,
            email: data.email,
        }
        axios.post('/login', {user}, {
            withCredentials: true }
            )
    //     .then(result => console.log(result))
    //     .then(responseJSON => {
    //         dispatch({type: 'ADD_USER', res: responseJSON})
    //         dispatch({type: 'LOGIN_USER', res: responseJSON})
    // })
    }

   

      
     
        if(true){
        return (
            <div>
               
                 <GoogleLogin
                    clientId={props.Google_id}
                    buttonText="Login or Signup with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                 />
            </div>
        
        );
    }else{
        return (
            <div>
              
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