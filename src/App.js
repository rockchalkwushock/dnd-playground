import React, { Component } from 'react';
import { HomePage } from './components';
import CustomizeHandlesAndPreviews from './handles-with-previews';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HomePage />
        <CustomizeHandlesAndPreviews />
      </div>
    );
  }
}

export default App;
