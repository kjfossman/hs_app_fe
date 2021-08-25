import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'

class OauthGoogle extends Component {

    responseGoogle = (response) => {
        fetch('http://localhost:3000/users')
        console.log(response.profileObj)
        console.log(response.profileObj.name)
      }

    render() {
        return (
            <div>
                 <GoogleLogin
                    clientId='809855670413-r308laolsctmfsnpr3nn677h20rmmt5t.apps.googleusercontent.com'
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                 />
            </div>
        );
    }
}

export default OauthGoogle;