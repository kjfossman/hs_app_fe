import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import { addUser } from '../actions/userActions';
import { connect } from 'react-redux';


class OauthGoogle extends Component {

    responseGoogle = (response) => {
        this.props.submitUser(response.profileObj)
      }

    render() {
        return (
            <div>
                 <GoogleLogin
                    clientId={this.props.Google_id}
                    buttonText="Login"
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
        submitUser: (data) => {
            dispatch(addUser(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(OauthGoogle);