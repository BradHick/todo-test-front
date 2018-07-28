import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add, changeDescription, search, clear } from './todoActions';


class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }


  componentWillMount(){
    this.props.search();
  }

  keyHandler(e){
    const { add, search, description, clear } = this.props;
    if(e.key === 'Enter'){
      e.shiftKey ? search() : add(description);
    }else if(e.key === 'Escape') {
      clear();
    };
  };


  render() {
    const { add, search, description, clear } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={9} md={10}>
          <TextField id="description" label="Name" fullWidth placeholder='Nome da tarefa'
          value={this.props.description} onChange={this.props.changeDescription}
          onKeyUp={ this.keyHandler }/>
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
          <Button variant="contained" color="primary" onClick={ () => add(description) }>
            Add
          </Button>    
          <Button variant="contained" color="primary" onClick={ search }>
            Search
          </Button>    
          <Button variant="contained" color="primary" onClick={ () => clear() }>
            Clear
          </Button>    
        </Grid>
      </Grid>
    )
  };
};

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);