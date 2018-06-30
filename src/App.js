import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './todo/todo';
import Bar from './template/bar';

class App extends Component {
  render() {
    return (
      <div style={{flexGrow: 1, margin: '0 10px', transform: 'scale(0.8)'}} >
        <Bar />
        <Todo />
      </div>
    );
  }
}

export default App;
