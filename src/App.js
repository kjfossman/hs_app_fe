import './App.css';
import OauthGoogle from './components/OauthGoogle.js';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import dotenv from 'dotenv'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Homepage from './components/Homepage';

import usersContainer from './containers/UsersContainer';

dotenv.config()

function App() {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(result => setUsers(result))
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
        <Route path="/home" component={Homepage}/>
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