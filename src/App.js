import './App.css';
import React, { Component } from 'react';
import OauthGoogle from './components/OauthGoogle.js';
import { connect } from 'react-redux';

import { fetchUsers } from './actions/userActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  

  render(){
    let users = this.props.users.map(e => <div>{e.email}</div>)
  return (
  
    <div className="App">
      <OauthGoogle />
      <div>
        {users}
      </div>
    </div>
  );
}
}

const mapStateToProps = state => {
  
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



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