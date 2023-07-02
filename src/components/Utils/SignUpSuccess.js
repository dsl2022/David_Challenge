import React from 'react';
import { Typography, Box } from '@mui/material';

function SignUpSuccess() {
  return (
    <Box>
      <Typography variant="h2">SignUp successful!</Typography>
      <Typography variant="body1">
        Please check your email for the confirmation code.
      </Typography>
    </Box>
  );
}

export default SignUpSuccess;
