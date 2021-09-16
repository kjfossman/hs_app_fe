import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import { addUser } from '../actions/userActions';
import { connect } from 'react-redux';


class OauthGoogle extends Component {

    responseGoogle = (response) => {
        this.props.submitUser(response.profileObj)
      }

    render() {
        
        if(!this.props.loginStatus[0]){
        return (
            <div>
               
                 <GoogleLogin
                    clientId={this.props.Google_id}
                    buttonText="Login or Signup with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
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
}}

const mapDispatchToProps = dispatch => {
    return {
        submitUser: (data) => {
            dispatch(addUser(data))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.login
    }
         
}

export default connect(mapStateToProps, mapDispatchToProps)(OauthGoogle);