import React from 'react';
import { Container, Typography } from '@mui/material';
const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your dashboard! This is where you can manage your tasks, view
        analytics, and perform other actions specific to your application.
      </Typography>
      {/* Add your dashboard content and components here */}
    </Container>
  );
};

export default Dashboard;
