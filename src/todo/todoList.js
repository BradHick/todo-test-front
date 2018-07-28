import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';


import { markAsDone, markAsPending, remove } from './todoActions';


const TodoList =  props => {
  const renderRows = () => {
    const list = props.list || [];
    return(
      list.map(todo => (
        <tr key={ todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>{ todo.description }</td>
          <td>
            <Button variant="contained" color="primary" onClick={ () => props.markAsDone(todo) }>Done</Button>
            <Button variant="contained" color="primary" onClick={ () => props.markAsPending(todo) }>Pend</Button>
            <Button variant="contained" color="primary" onClick={ () => props.remove(todo) }>Del</Button>
          </td>
        </tr>
      ))
    );
  }

  return(
    <Table className='table'>
      <thead>
        <tr>
          <th>Descição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);