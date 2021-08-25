import './App.css';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import REACT_APP_GOOGLE_CLIENT_ID from './.env'
import REACT_APP_TEST from './.env'



class App extends Component {


  responseGoogle = (response) => {
    console.log(response)
  }

  render(){
  return (
    <div className="App">
      <GoogleLogin
        clientId='809855670413-r308laolsctmfsnpr3nn677h20rmmt5t.apps.googleusercontent.com'
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        // cookiePolicy={'single_host_origin'}
      />
      <button>Login With Google</button>
      
    </div>
  );
}
}

export default App;



  // handleClick = () => {
  //   console.log('test')
  //   fetch("http://localhost:3000/auth/google_oauth2/callback", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
        
  //     })
  //   })
  //   .then(result => result.json())
  //   .then(responseJSON => {
  //     debugger
  //   })
  // }