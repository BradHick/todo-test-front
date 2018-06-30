import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default props => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={9} md={10}>
      <TextField id="name" label="Name" fullWidth placeholder='Nome da tarefa'/>
    </Grid>

    <Grid item xs={12} sm={3} md={2}>
      <Button variant="contained" color="primary">
        Add
      </Button>    
    </Grid>
  </Grid>


);