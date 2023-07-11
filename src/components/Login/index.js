import React, { useState, useContext } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
// import { signIn } from '../../auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, signIn } = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signIn(username, password);
      navigate('/dashboard')
      // Redirect to the app's main page or dashboard
    } catch (err) {
      if(err.code==="UserNotConfirmedException")navigate('/confirmSignup');
      setError(err.message);
    }
  };

  return (
    <Box>
      <Typography variant="h2">Login</Typography>
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
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
      {error && <Typography variant="body1">{error}</Typography>}
    </Box>
  );
}
