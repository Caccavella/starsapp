import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><a href={process.env.REACT_APP_LOGIN}>Login</a></div>
      </div>
    );
  }
}

export default App;
