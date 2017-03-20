import React, { Component } from 'react';
import Child from './Child';
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
        <p className="App-intro"></p>
        <Child name="给子组件传递数据" />
      </div>
    );
  }
}

export default App;
