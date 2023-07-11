import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signUp } from "../../auth"
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try {
        await signUp(name, email, password)
        navigate('/signupSuccess');
      } catch (err) {
        setError(err.message)
      }
  };

  return (
    <Box
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   // height: '100vh',
      // }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,      
          borderRadius: 4,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          type="text"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
      {error && <p>{error}</p>}
    </Box>
    
  );
};

export default SignupForm;
