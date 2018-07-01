import React, { Component } from 'react';

import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component { 

  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  };

  render() { 
    return ( 
      <div>
        <TodoForm />
        <TodoList />
      </div> 
    ); 
  }
}