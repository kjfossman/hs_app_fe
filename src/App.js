import './App.css';
import React, { Component } from 'react';
import OauthGoogle from './components/OauthGoogle.js';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

import { fetchUsers } from './actions/userActions';
import Navbar from './components/Navbar';

import usersContainer from './containers/usersContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  

  render(){
    
  return (
  <Router>
    <div className="App">
      <OauthGoogle />
      <div>
        <Navbar/>
        <Route exact path="/users" component={usersContainer} />
      </div>
    </div>
    </Router>
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