import './App.css';
import React, { Component } from 'react';
import OauthGoogle from './components/OauthGoogle.js';




class App extends Component {




  render(){
  return (
    <div className="App">
      <OauthGoogle />
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