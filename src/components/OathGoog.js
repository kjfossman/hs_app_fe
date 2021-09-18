import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';

class OathGoog extends Component {

    // responseGoogle = (response) => {
    //     addUser(response.profileObj)
    //   }

    render() {
        return (
            <div>
                   <GoogleLogin
                    clientId={props.Google_id}
                    buttonText="Login or Signup with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                 />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (data) => {
            dispatch(addUser(data))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.login
    }
         
}

export default connect(mapStateToProps, mapDispatchToProps)(OauthGoog);










    


