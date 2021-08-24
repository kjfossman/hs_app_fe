import './App.css';
import React, { Component } from 'react';




class App extends Component {

  handleClick = () => {
    console.log('test')
  }

  render(){
  return (
    <div className="App">
      <button onClick={this.handleClick}>Login With Google</button>
    </div>
  );
}
}

export default App;
