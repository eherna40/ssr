import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter : 0
  }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.counter}</h2>
          <button onClick={ 
            () => this.setState({counter: this.state.counter + 1})
            }>
            Increment
            </button>
      </div>
    );
  }
}

export default App;
