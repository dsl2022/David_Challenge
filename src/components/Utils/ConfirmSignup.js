import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { confirmSignUp } from '../../auth';

export default function ConfirmSignUp() {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await confirmSignUp(username, code);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (success) {
    return (
      <Box>
        <Typography variant="h2">Confirmation successful!</Typography>
        <Typography variant="body1">
          You can now log in with your credentials. Go rock that app!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h2">Confirm Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          label="Confirmation code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth>
          Confirm
        </Button>
      </form>
      {error && <Typography variant="body1">{error}</Typography>}
    </Box>
  );
}
