import './App.css';
import React, { Component } from 'react';
import OauthGoogle from './components/OauthGoogle.js';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import dotenv from 'dotenv'
import { fetchUsers } from './actions/userActions';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import usersContainer from './containers/UsersContainer';

dotenv.config()


function App() {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(result => setUsers(result))
      .then(console.log(users))
  },[])

  useEffect(() => {
    dispatch({type: "SHOW_USERS", users: users})
  }, [users])

  // componentDidMount() {
  //   this.props.fetchUsers()
  // }

  // render(){
    const Google_id = process.env.REACT_APP_GOOGLE_CLIENT_ID
  return (
    
    
  <Router>
    <div className="App">
      <OauthGoogle Google_id={Google_id}/>
      <div>
        <Navbar/>
        <Route exact path="/users" component={usersContainer} />
      </div>
    </div>
    </Router>
  );
}


// const mapStateToProps = state => {
  
//   return {
//     users: state.users
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//   fetchUsers: () => dispatch(fetchUsers()),
//   }
// }

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);



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