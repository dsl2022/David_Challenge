import React from 'react';
import placeholder from '../../../assets/images/placeholder.png';
import { Grid, Typography, Button, Paper, Container } from '@mui/material';
function TopColumn() {
  return (
    <Container>
      <Grid sx={{ mt: 1 }} align="center">
        <img src={placeholder} />
      </Grid>
      <Grid sx={{ mt: 5 }} align="center">
        <Typography align="center" variant="h4">
          LIBERIA MEDICAL MISSION
        </Typography>
        <Typography align="center" variant="h6">
          Together, we work for a better Liberia
        </Typography>
      </Grid>
      <Grid sx={{ mt: 10 }} align="center">
        <Typography align="center" variant="h4">
          WHO ARE WE
        </Typography>
        <Typography align="center" variant="h6">
          Liberia Medical Mission is a team of professionals based around the
          world, supporting Liberia and West African countries with medical
          supplies, education, and aid.
        </Typography>
      </Grid>
      <Grid sx={{ mt: 10 }} align="center">
        <Typography align="center" variant="h6">
          The top cause of death in Liberia is Diarrheal Diseases. In response
          to the Ebola crisis in 2014, The US's CDC (Centers for Disease Control
          and Prevention) has sent 30 Public health professionals and partnered
          with Liberia's Ministry of Health in training more than 120
          individuals as part of Liberia's Field Epidemiology Training Program.
        </Typography>
      </Grid>
      <Grid sx={{ mt: 10, mb:10}} align="center">
        <Typography align="center" variant="h4">
          WHAT WE DO
        </Typography>
        <Typography align="center" variant="h6">
          LMM provides a number of services, aimed at tackling 3 core areas:
        </Typography>
      </Grid>
    </Container>
  );
}

export default TopColumn;
