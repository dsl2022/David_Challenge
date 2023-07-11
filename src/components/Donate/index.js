import React from 'react';
import Donorbox from '../Donorbox';
import { Grid, Typography, Button, Paper, Container } from '@mui/material';
const Donate = () => {
  return (
    <Container>
      
      <Grid align="center">
      <Typography variant='h3' align='center'>Donate</Typography>
      <Donorbox/>
      </Grid>
      
    </Container>
  );
};

export default Donate;
