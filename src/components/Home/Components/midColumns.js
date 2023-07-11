import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import placeholder from '../../../assets/images/placeholder.png';
function MidColumnComponent({ title, text }) {
  return (
    <Paper>
      <Grid sx={{m:1}} align="center">
        <img src={placeholder} />
      </Grid>
      
      <Typography variant="h5" align="center">
        {title}
      </Typography>
      <Grid sx={{m:5}} align="center">
      <Typography align='justify'>{text} </Typography>
      </Grid>
    </Paper>
  );
}

export default MidColumnComponent;
